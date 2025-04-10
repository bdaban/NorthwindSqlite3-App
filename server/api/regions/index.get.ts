import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  try {
    const regions = await prisma.regions.findMany({
      orderBy: {
        RegionDescription: 'asc'
      },
      include: {
        _count: {
          select: {
            Territories: true
          }
        }
      }
    })
    
    return regions
  } catch (error) {
    console.error('Bölgeler getirilirken hata oluştu:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Bölgeler getirilirken bir hata oluştu.'
    })
  }
}) 