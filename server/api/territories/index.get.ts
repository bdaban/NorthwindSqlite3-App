import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  try {
    const territories = await prisma.territories.findMany({
      include: {
        Regions: true
      },
      orderBy: {
        TerritoryDescription: 'asc'
      }
    })
    
    return territories
  } catch (error) {
    console.error('Alanlar getirilirken hata oluştu:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Alanlar getirilirken bir hata oluştu.'
    })
  }
}) 