import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  try {
    // Ürün ve kategori bilgilerini getirelim
    const products = await prisma.products.findMany({
      include: {
        Categories: true
      }
    })
    
    // Siparişlerdeki ürün detaylarını getirelim
    const orderDetails = await prisma.order_Details.findMany()
    
    // Kategori bazında satış verileri için işlem yapalım
    const categoryMap = new Map()
    
    orderDetails.forEach(detail => {
      const product = products.find(p => p.ProductID === detail.ProductID)
      if (!product || !product.CategoryID) return
      
      const categoryId = product.CategoryID
      const categoryName = product.Categories?.CategoryName || 'Bilinmeyen'
      const amount = detail.UnitPrice.toNumber() * detail.Quantity * (1 - detail.Discount)
      
      if (!categoryMap.has(categoryId)) {
        categoryMap.set(categoryId, {
          categoryId,
          categoryName,
          totalSales: 0,
          totalQuantity: 0,
          totalAmount: 0,
          productCount: 0,
          averageUnitPrice: 0
        })
      }
      
      const categoryData = categoryMap.get(categoryId)
      categoryData.totalSales += 1
      categoryData.totalQuantity += detail.Quantity
      categoryData.totalAmount += amount
    })
    
    // Kategori bazında ürün sayısı ekleyelim
    products.forEach(product => {
      if (!product.CategoryID) return
      
      if (categoryMap.has(product.CategoryID)) {
        const categoryData = categoryMap.get(product.CategoryID)
        categoryData.productCount += 1
      }
    })
    
    // Her kategori için ortalama birim fiyatı hesaplayalım
    categoryMap.forEach(category => {
      const categoryProducts = products.filter(p => p.CategoryID === category.categoryId)
      const totalUnitPrice = categoryProducts.reduce((sum, product) => {
        return sum + (product.UnitPrice?.toNumber() || 0)
      }, 0)
      
      category.averageUnitPrice = categoryProducts.length > 0 
        ? totalUnitPrice / categoryProducts.length 
        : 0
    })
    
    // Map'i diziye çevirip sıralayalım
    const result = Array.from(categoryMap.values())
    result.sort((a, b) => b.totalAmount - a.totalAmount)
    
    return result
  } catch (error) {
    console.error('Kategori satış istatistikleri getirilirken hata oluştu:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Kategori satış istatistikleri getirilirken bir hata oluştu.'
    })
  }
}) 