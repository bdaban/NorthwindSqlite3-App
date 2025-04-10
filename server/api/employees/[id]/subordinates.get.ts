import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  
  if (!id || isNaN(Number(id))) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Geçersiz çalışan ID'
    })
  }

  try {
    // Önce çalışanın var olup olmadığını kontrol edelim
    const employee = await prisma.employees.findUnique({
      where: {
        EmployeeID: Number(id)
      }
    })

    if (!employee) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Çalışan bulunamadı'
      })
    }

    // Çalışana rapor veren çalışanları (astları) getirelim
    const subordinates = await prisma.employees.findMany({
      where: {
        ReportsTo: Number(id)
      },
      orderBy: {
        LastName: 'asc'
      }
    })

    return subordinates
  } catch (error) {
    console.error('Çalışanın astları getirilirken hata oluştu:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Çalışanın astları getirilirken bir hata oluştu.'
    })
  }
}) 