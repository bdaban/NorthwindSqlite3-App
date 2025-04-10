import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  try {
    const shippers = await prisma.shippers.findMany({
      orderBy: {
        CompanyName: 'asc'
      }
    })
    return shippers
  } catch (error) {
    console.error('Nakliyeciler getirilirken hata oluştu:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Nakliyeciler getirilirken bir hata oluştu.'
    })
  }
}) 