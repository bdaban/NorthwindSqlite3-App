// server/api/orders/index.ts
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const searchTerm = query.search?.toString() || ''
  
  let whereCondition = {}
  
  // Arama terimine göre filtreleme
  if (searchTerm) {
    // Sadece sayı ise Sipariş ID'si olarak ara
    const isNumeric = /^\d+$/.test(searchTerm)
    
    if (isNumeric) {
      whereCondition = {
        OrderID: {
          equals: parseInt(searchTerm)
        }
      }
    } else {
      // Değilse müşteri adında ara
      whereCondition = {
        Customers: {
          CompanyName: {
            contains: searchTerm
          }
        }
      }
    }
  }
  
  const orders = await prisma.orders.findMany({
    where: whereCondition,
    select: {
      OrderID: true,
      CustomerID: true,
      OrderDate: true,
      ShippedDate: true,
      Freight: true,
      ShipName: true,
      Customers: {
        select: {
          CompanyName: true,
        },
      },
    },
    orderBy: {
      OrderID: 'desc', // En yeni siparişler önce gelsin
    },
    take: 100, // Sadece ilk 100 kaydı getir
  })

  return orders
})

