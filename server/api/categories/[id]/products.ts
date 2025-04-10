import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const id = Number(event.context.params?.id)
  
  if (isNaN(id)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Geçersiz kategori ID'
    })
  }
  
  const products = await prisma.products.findMany({
    where: { 
      CategoryID: id 
    }
  })
  
  return products
}) 