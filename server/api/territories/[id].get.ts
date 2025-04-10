import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  
  if (!id) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Geçersiz alan ID'
    })
  }

  try {
    const territory = await prisma.territories.findUnique({
      where: {
        TerritoryID: id
      },
      include: {
        Regions: true
      }
    })

    if (!territory) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Alan bulunamadı'
      })
    }

    return territory
  } catch (error) {
    console.error('Alan detayları getirilirken hata oluştu:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Alan detayları getirilirken bir hata oluştu.'
    })
  }
}) 