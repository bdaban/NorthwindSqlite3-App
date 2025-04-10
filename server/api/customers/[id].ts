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
  
  const customer = await prisma.customers.findUnique({
    where: { CustomerID: id }
  })
  
  if (!customer) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Müşteri bulunamadı'
    })
  }
  
  return customer
}) 