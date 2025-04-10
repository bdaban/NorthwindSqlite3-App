import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async () => {
  const customers = await prisma.customers.findMany()
  
  return customers
})





