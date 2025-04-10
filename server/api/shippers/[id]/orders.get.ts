import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  
  if (!id || isNaN(Number(id))) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Geçersiz nakliyeci ID'
    })
  }

  try {
    // Önce nakliyecinin var olup olmadığını kontrol edelim
    const shipper = await prisma.shippers.findUnique({
      where: {
        ShipperID: Number(id)
      }
    })

    if (!shipper) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Nakliyeci bulunamadı'
      })
    }

    // Nakliyeciye ait siparişleri getirelim
    const orders = await prisma.orders.findMany({
      where: {
        ShipVia: Number(id)
      },
      include: {
        Customers: true,
        Employees: true
      },
      orderBy: {
        OrderDate: 'desc'
      }
    })

    return orders
  } catch (error) {
    console.error('Nakliyeci siparişleri getirilirken hata oluştu:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Nakliyeci siparişleri getirilirken bir hata oluştu.'
    })
  }
}) 