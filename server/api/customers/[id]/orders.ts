import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const id = event.context.params?.id
  
  if (!id) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Geçersiz müşteri ID'
    })
  }
  
  const orders = await prisma.orders.findMany({
    where: { 
      CustomerID: id 
    },
    orderBy: {
      OrderID: 'desc'
    }
  })
  
  return orders
}) 