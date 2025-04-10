import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  
  if (!id || isNaN(Number(id))) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Geçersiz bölge ID'
    })
  }

  try {
    const region = await prisma.regions.findUnique({
      where: {
        RegionID: Number(id)
      }
    })

    if (!region) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Bölge bulunamadı'
      })
    }

    return region
  } catch (error) {
    console.error('Bölge detayları getirilirken hata oluştu:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Bölge detayları getirilirken bir hata oluştu.'
    })
  }
}) 