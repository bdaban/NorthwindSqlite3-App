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
    const employee = await prisma.employees.findUnique({
      where: {
        EmployeeID: Number(id)
      },
      include: {
        other_Employees: true,
        Employees: true
      }
    })

    if (!employee) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Çalışan bulunamadı'
      })
    }

    return employee
  } catch (error) {
    console.error('Çalışan detayları getirilirken hata oluştu:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Çalışan detayları getirilirken bir hata oluştu.'
    })
  }
}) 