import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  
  if (!id || isNaN(Number(id))) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Geçersiz nakliyeci ID'
    })
  }

  try {
    const shipper = await prisma.shippers.findUnique({
      where: {
        ShipperID: Number(id)
      }
    })

    if (!shipper) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Nakliyeci bulunamadı'
      })
    }

    return shipper
  } catch (error) {
    console.error('Nakliyeci detayları getirilirken hata oluştu:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Nakliyeci detayları getirilirken bir hata oluştu.'
    })
  }
}) 