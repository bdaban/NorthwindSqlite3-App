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
  
  const orderDetails = await prisma.order_Details.findMany({
    where: { 
      OrderID: id 
    },
    include: {
      Products: true
    }
  })
  
  return orderDetails
}) 