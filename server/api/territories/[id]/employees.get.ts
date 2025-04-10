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
    // Önce alanın var olup olmadığını kontrol edelim
    const territory = await prisma.territories.findUnique({
      where: {
        TerritoryID: id
      }
    })

    if (!territory) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Alan bulunamadı'
      })
    }

    // Alan çalışan ilişkilerini getirelim
    const employeeTerritories = await prisma.employeeTerritories.findMany({
      where: {
        TerritoryID: id
      },
      include: {
        Employees: true
      }
    })

    // Sadece çalışan bilgilerini döndürelim
    const employees = employeeTerritories.map(et => et.Employees)
    
    return employees
  } catch (error) {
    console.error('Alan çalışanları getirilirken hata oluştu:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Alan çalışanları getirilirken bir hata oluştu.'
    })
  }
}) 