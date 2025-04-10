import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  try {
    const employees = await prisma.employees.findMany({
      orderBy: {
        LastName: 'asc'
      }
    })
    return employees
  } catch (error) {
    console.error('Çalışanlar getirilirken hata oluştu:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Çalışanlar getirilirken bir hata oluştu.'
    })
  }
}) 