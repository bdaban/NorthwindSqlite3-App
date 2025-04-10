// server/api/products/index.ts
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async () => {
  const products = await prisma.products.findMany({
    include: {
      Categories: true,
      Suppliers: true,
    },
  })

  return products
})
