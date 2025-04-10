import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const id = Number(event.context.params?.id)
  
  if (isNaN(id)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Geçersiz sipariş ID'
    })
  }
  
  const order = await prisma.orders.findUnique({
    where: { OrderID: id },
    include: {
      Customers: true,
      Employees: true,
      Shippers: true
    }
  })
  
  if (!order) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Sipariş bulunamadı'
    })
  }
  
  return order
}) 