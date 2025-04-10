import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const id = Number(event.context.params?.id)
  
  if (isNaN(id)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Geçersiz ürün ID'
    })
  }
  
  const product = await prisma.products.findUnique({
    where: { ProductID: id },
    include: {
      Categories: true,
      Suppliers: true
    }
  })
  
  if (!product) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Ürün bulunamadı'
    })
  }
  
  return product
}) 