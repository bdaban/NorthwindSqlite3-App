import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  try {
    const id = Number(event.context.params?.id)
    
    if (isNaN(id)) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Geçersiz ürün ID'
      })
    }
    
    const body = await readBody(event)
    
    // Ürün verileri
    const {
      ProductName,
      CategoryID,
      SupplierID,
      QuantityPerUnit,
      UnitPrice,
      UnitsInStock,
      UnitsOnOrder,
      ReorderLevel,
      Discontinued
    } = body
    
    console.log("==== ÜRÜN GÜNCELLEME BAŞLADI ====")
    console.log("Gelen veriler:", body)
    
    // Önce ürünün var olup olmadığını kontrol edelim
    const existingProduct = await prisma.products.findUnique({
      where: { ProductID: id }
    })
    
    if (!existingProduct) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Ürün bulunamadı'
      })
    }
    
    // Ürünü güncelle
    const product = await prisma.products.update({
      where: { ProductID: id },
      data: {
        ProductName,
        CategoryID: CategoryID ? parseInt(CategoryID) : null,
        SupplierID: SupplierID ? parseInt(SupplierID) : null,
        QuantityPerUnit,
        UnitPrice: UnitPrice !== undefined ? parseFloat(UnitPrice) : undefined,
        UnitsInStock: UnitsInStock !== undefined ? parseInt(UnitsInStock) : undefined,
        UnitsOnOrder: UnitsOnOrder !== undefined ? parseInt(UnitsOnOrder) : undefined,
        ReorderLevel: ReorderLevel !== undefined ? parseInt(ReorderLevel) : undefined,
        Discontinued: Discontinued || '0'
      },
      include: {
        Categories: true,
        Suppliers: true
      }
    })
    
    console.log("Güncellenen ürün:", product)
    console.log("==== ÜRÜN GÜNCELLEME TAMAMLANDI ====")
    
    return product
  } catch (error: any) {
    console.error('Ürün güncelleme hatası:', error)
    throw createError({
      statusCode: error.statusCode || 500,
      statusMessage: error.statusMessage || `Ürün güncellenirken bir hata oluştu: ${error.message}`
    })
  }
}) 