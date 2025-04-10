import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  try {
    // Order Details tablosundan ürün bazında toplam satış miktarı ve tutarını hesaplayalım
    const productSales = await prisma.order_Details.groupBy({
      by: ['ProductID'],
      _sum: {
        Quantity: true,
        UnitPrice: true
      },
      _count: {
        OrderID: true
      }
    })

    // Ürün bilgilerini getirelim
    const products = await prisma.products.findMany({
      include: {
        Categories: true
      }
    })

    // Verileri birleştirelim
    const result = productSales.map(sale => {
      const product = products.find(p => p.ProductID === sale.ProductID)
      
      if (!product) return null
      
      const totalAmount = (sale._sum.Quantity || 0) * Number(product.UnitPrice)
      
      return {
        productId: product.ProductID,
        productName: product.ProductName,
        categoryId: product.CategoryID,
        categoryName: product.Categories?.CategoryName || null,
        unitPrice: product.UnitPrice,
        totalOrders: sale._count.OrderID,
        totalQuantity: sale._sum.Quantity || 0,
        totalAmount: totalAmount,
        unitsInStock: product.UnitsInStock,
        discontinued: product.Discontinued === "1"
      }
    }).filter(item => item !== null)

    // Satış tutarına göre sıralayalım
    result.sort((a, b) => b.totalAmount - a.totalAmount)

    return result
  } catch (error) {
    console.error('Ürün satış istatistikleri getirilirken hata oluştu:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Ürün satış istatistikleri getirilirken bir hata oluştu.'
    })
  }
}) 