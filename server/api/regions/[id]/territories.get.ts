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
    // Önce bölgenin var olup olmadığını kontrol edelim
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

    // Bölgeye ait alanları getirelim
    const territories = await prisma.territories.findMany({
      where: {
        RegionID: Number(id)
      },
      orderBy: {
        TerritoryDescription: 'asc'
      }
    })

    return territories
  } catch (error) {
    console.error('Bölge alanları getirilirken hata oluştu:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Bölge alanları getirilirken bir hata oluştu.'
    })
  }
}) 