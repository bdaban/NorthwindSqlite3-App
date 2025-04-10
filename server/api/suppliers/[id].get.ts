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

    return supplier
  } catch (error) {
    console.error('Tedarikçi detayları getirilirken hata oluştu:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Tedarikçi detayları getirilirken bir hata oluştu.'
    })
  }
}) 