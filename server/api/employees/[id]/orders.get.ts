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

    // Çalışana ait siparişleri getirelim
    const orders = await prisma.orders.findMany({
      where: {
        EmployeeID: Number(id)
      },
      include: {
        Customers: true
      },
      orderBy: {
        OrderDate: 'desc'
      }
    })

    return orders
  } catch (error) {
    console.error('Çalışan siparişleri getirilirken hata oluştu:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Çalışan siparişleri getirilirken bir hata oluştu.'
    })
  }
}) 