import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  
  if (!id || isNaN(Number(id))) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Geçersiz tedarikçi ID'
    })
  }

  try {
    // Önce tedarikçinin var olup olmadığını kontrol edelim
    const supplier = await prisma.suppliers.findUnique({
      where: {
        SupplierID: Number(id)
      }
    })

    if (!supplier) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Tedarikçi bulunamadı'
      })
    }

    // Tedarikçiye ait ürünleri getirelim
    const products = await prisma.products.findMany({
      where: {
        SupplierID: Number(id)
      },
      include: {
        Categories: true
      },
      orderBy: {
        ProductName: 'asc'
      }
    })

    return products
  } catch (error) {
    console.error('Tedarikçi ürünleri getirilirken hata oluştu:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Tedarikçi ürünleri getirilirken bir hata oluştu.'
    })
  }
}) 