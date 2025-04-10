import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  try {
    const suppliers = await prisma.suppliers.findMany({
      orderBy: {
        CompanyName: 'asc'
      }
    })
    return suppliers
  } catch (error) {
    console.error('Tedarikçiler getirilirken hata oluştu:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Tedarikçiler getirilirken bir hata oluştu.'
    })
  }
}) 