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
  
  const category = await prisma.categories.findUnique({
    where: { CategoryID: id }
  })
  
  if (!category) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Kategori bulunamadı'
    })
  }
  
  return category
}) 