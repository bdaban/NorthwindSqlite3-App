import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  try {
    // Çalışan bilgilerini getirelim
    const employees = await prisma.employees.findMany()
    
    // Siparişleri getirelim
    const orders = await prisma.orders.findMany({
      include: {
        Order_Details: true
      }
    })
    
    // Çalışan bazında performans verilerini hesaplayalım
    const employeeStats = employees.map(employee => {
      // Çalışana ait siparişleri bulalım
      const employeeOrders = orders.filter(order => order.EmployeeID === employee.EmployeeID)
      
      // Toplam sipariş sayısı
      const totalOrders = employeeOrders.length
      
      // Hiç sipariş yoksa boş değerlerle döndürelim
      if (totalOrders === 0) {
        return {
          employeeId: employee.EmployeeID,
          firstName: employee.FirstName,
          lastName: employee.LastName,
          title: employee.Title,
          totalOrders: 0,
          totalSales: 0,
          averageOrderValue: 0,
          totalCustomers: new Set().size,
          totalProducts: new Set().size
        }
      }
      
      // Toplam ve ortalama sipariş tutarını hesaplayalım
      let totalSales = 0
      const productSet = new Set()
      
      employeeOrders.forEach(order => {
        if (order.Order_Details) {
          order.Order_Details.forEach(detail => {
            const itemTotal = detail.UnitPrice.toNumber() * detail.Quantity * (1 - detail.Discount)
            totalSales += itemTotal
            productSet.add(detail.ProductID)
          })
        }
      })
      
      // Ortalama sipariş değerini hesaplayalım
      const averageOrderValue = totalSales / totalOrders
      
      // Eşsiz müşteri sayısını hesaplayalım
      const customerSet = new Set(employeeOrders.map(order => order.CustomerID))
      
      return {
        employeeId: employee.EmployeeID,
        firstName: employee.FirstName,
        lastName: employee.LastName,
        title: employee.Title,
        totalOrders,
        totalSales,
        averageOrderValue,
        totalCustomers: customerSet.size,
        totalProducts: productSet.size
      }
    })
    
    // Toplam satış tutarına göre sıralayalım
    employeeStats.sort((a, b) => b.totalSales - a.totalSales)
    
    return employeeStats
  } catch (error) {
    console.error('Çalışan performans istatistikleri getirilirken hata oluştu:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Çalışan performans istatistikleri getirilirken bir hata oluştu.'
    })
  }
}) 