import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  try {
    // Müşteri bilgilerini getirelim
    const customers = await prisma.customers.findMany()
    
    // Siparişleri getir
    const orders = await prisma.orders.findMany({
      include: {
        Order_Details: true
      }
    })
    
    // Müşteri bazında satış verileri için işlem yapalım
    const customerStats = customers.map(customer => {
      // Müşteriye ait siparişleri bulalım
      const customerOrders = orders.filter(order => order.CustomerID === customer.CustomerID)
      
      // Toplam sipariş sayısı
      const totalOrders = customerOrders.length
      
      // Sipariş yoksa boş değerlerle döndürelim
      if (totalOrders === 0) {
        return {
          customerId: customer.CustomerID,
          companyName: customer.CompanyName,
          contactName: customer.ContactName,
          country: customer.Country,
          totalOrders: 0,
          totalOrderValue: 0,
          averageOrderValue: 0,
          totalItems: 0,
          firstOrderDate: null,
          lastOrderDate: null,
          daysSinceLastOrder: null
        }
      }
      
      // Müşterinin toplam sipariş tutarını hesaplayalım
      let totalOrderValue = 0
      let totalItems = 0
      
      customerOrders.forEach(order => {
        if (order.Order_Details) {
          order.Order_Details.forEach(detail => {
            const itemTotal = detail.UnitPrice.toNumber() * detail.Quantity * (1 - detail.Discount)
            totalOrderValue += itemTotal
            totalItems += detail.Quantity
          })
        }
      })
      
      // Ortalama sipariş değerini hesaplayalım
      const averageOrderValue = totalOrderValue / totalOrders
      
      // İlk ve son sipariş tarihlerini bulalım
      const orderDates = customerOrders
        .map(order => order.OrderDate)
        .filter(date => date !== null) as Date[]
      
      // Tarih sıralaması yapalım
      orderDates.sort((a, b) => a.getTime() - b.getTime())
      
      const firstOrderDate = orderDates.length > 0 ? orderDates[0] : null
      const lastOrderDate = orderDates.length > 0 ? orderDates[orderDates.length - 1] : null
      
      // Son siparişten bu yana geçen gün sayısını hesaplayalım
      let daysSinceLastOrder = null
      if (lastOrderDate) {
        const today = new Date()
        const diffTime = Math.abs(today.getTime() - lastOrderDate.getTime())
        daysSinceLastOrder = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
      }
      
      return {
        customerId: customer.CustomerID,
        companyName: customer.CompanyName,
        contactName: customer.ContactName,
        country: customer.Country,
        totalOrders,
        totalOrderValue,
        averageOrderValue,
        totalItems,
        firstOrderDate,
        lastOrderDate,
        daysSinceLastOrder
      }
    })
    
    // Toplam sipariş tutarına göre sıralayalım
    customerStats.sort((a, b) => b.totalOrderValue - a.totalOrderValue)
    
    return customerStats
  } catch (error) {
    console.error('Müşteri satın alma istatistikleri getirilirken hata oluştu:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Müşteri satın alma istatistikleri getirilirken bir hata oluştu.'
    })
  }
}) 