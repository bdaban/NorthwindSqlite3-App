import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

interface OrderDetail {
  OrderID?: string | number;
  ProductID: string | number;
  UnitPrice: string | number;
  Quantity: string | number;
  Discount: string | number;
}

// Daha güvenli tarih formatı işleme
function formatDate(dateValue: any): Date | null {
  if (!dateValue) return null;
  
  console.log("formatDate fonksiyonu çağrıldı, gelen değer:", JSON.stringify(dateValue), "tipi:", typeof dateValue);
  
  try {
    // Eğer bir ISO tarih string'i ise (YYYY-MM-DD)
    if (typeof dateValue === 'string') {
      // ISO formatındaki tarih string'i doğru şekilde işle
      if (dateValue.match(/^\d{4}-\d{2}-\d{2}$/)) {
        // Tarih saat olmadan geldiyse, günün başlangıcı olarak ayarla (UTC)
        const [year, month, day] = dateValue.split('-').map(Number);
        const result = new Date(Date.UTC(year, month - 1, day));
        console.log(`ISO string (${dateValue}) dönüştürüldü: ${result.toISOString()}`);
        return result;
      }
      
      // Diğer string formatlarını dene
      const date = new Date(dateValue);
      const isValid = !isNaN(date.getTime());
      console.log(`String (${dateValue}) dönüştürüldü: ${isValid ? date.toISOString() : 'HATALI'}`);
      return isValid ? date : null;
    }
    
    // Eğer milisaniye cinsinden timestamp ise
    if (typeof dateValue === 'number' || !isNaN(Number(dateValue))) {
      const numericValue = Number(dateValue);
      const result = new Date(numericValue);
      console.log(`Sayı/timestamp (${numericValue}) dönüştürüldü: ${result.toISOString()}`);
      return result;
    }
    
    console.log("Desteklenmeyen tarih formatı:", typeof dateValue);
    return null;
  } catch (error) {
    console.error('Tarih dönüştürme hatası:', error);
    return null;
  }
}

export default defineEventHandler(async (event) => {
  try {
    const id = Number(event.context.params?.id)
    
    if (isNaN(id)) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Geçersiz sipariş ID'
      })
    }
    
    const body = await readBody(event)
    
    // Sipariş verileri
    const {
      CustomerID,
      EmployeeID,
      OrderDate,
      RequiredDate,
      ShippedDate,
      ShipVia,
      Freight,
      ShipName,
      ShipAddress,
      ShipCity,
      ShipRegion,
      ShipPostalCode,
      ShipCountry,
      details
    } = body
    
    console.log("==== SIPARIŞ GÜNCELLEME BAŞLADI ====");
    console.log("Güncelleme - Gelen tarih değerleri:", { 
      OrderDate, 
      RequiredDate, 
      ShippedDate,
      OrderDate_type: typeof OrderDate,
      RequiredDate_type: typeof RequiredDate,
      ShippedDate_type: typeof ShippedDate
    });
    
    // Önce mevcut sipariş detaylarını alalım
    const existingDetails = await prisma.order_Details.findMany({
      where: { OrderID: id }
    })
    
    // Zamanları işle
    const processedOrderDate = formatDate(OrderDate);
    const processedRequiredDate = formatDate(RequiredDate);
    const processedShippedDate = ShippedDate ? formatDate(ShippedDate) : null;
    
    console.log("Güncelleme - İşlenen tarih değerleri (nesne):", { 
      processedOrderDate, 
      processedRequiredDate, 
      processedShippedDate 
    });
    
    console.log("Güncelleme - İşlenen tarih değerleri (string):", { 
      processedOrderDate: processedOrderDate ? processedOrderDate.toISOString() : null, 
      processedRequiredDate: processedRequiredDate ? processedRequiredDate.toISOString() : null, 
      processedShippedDate: processedShippedDate ? processedShippedDate.toISOString() : null 
    });
    
    // Veritabanından güncellemeden önce mevcut veriyi alalım
    const currentOrder = await prisma.orders.findUnique({
      where: { OrderID: id }
    });
    
    console.log("Güncelleme - Güncellemeden önceki mevcut değerler:", { 
      OrderID: currentOrder?.OrderID,
      OrderDate: currentOrder?.OrderDate, 
      OrderDate_ISO: currentOrder?.OrderDate ? new Date(currentOrder.OrderDate).toISOString() : null,
      RequiredDate: currentOrder?.RequiredDate,
      RequiredDate_ISO: currentOrder?.RequiredDate ? new Date(currentOrder.RequiredDate).toISOString() : null,
      ShippedDate: currentOrder?.ShippedDate,
      ShippedDate_ISO: currentOrder?.ShippedDate ? new Date(currentOrder.ShippedDate).toISOString() : null
    });
    
    // Siparişi güncelle
    const order = await prisma.orders.update({
      where: { OrderID: id },
      data: {
        CustomerID,
        EmployeeID: parseInt(EmployeeID),
        OrderDate: processedOrderDate ? processedOrderDate.toISOString() : null,
        RequiredDate: processedRequiredDate ? processedRequiredDate.toISOString() : null,
        ShippedDate: processedShippedDate ? processedShippedDate.toISOString() : null,
        ShipVia: parseInt(ShipVia),
        Freight: parseFloat(Freight),
        ShipName,
        ShipAddress,
        ShipCity,
        ShipRegion,
        ShipPostalCode,
        ShipCountry
      },
    })
    
    console.log("Güncelleme - Kaydedilen sipariş tarihleri:", {
      OrderID: order.OrderID,
      OrderDate: order.OrderDate,
      OrderDate_ISO: order.OrderDate ? new Date(order.OrderDate).toISOString() : null,
      RequiredDate: order.RequiredDate,
      RequiredDate_ISO: order.RequiredDate ? new Date(order.RequiredDate).toISOString() : null,
      ShippedDate: order.ShippedDate,
      ShippedDate_ISO: order.ShippedDate ? new Date(order.ShippedDate).toISOString() : null
    });
    console.log("==== SIPARIŞ GÜNCELLEME TAMAMLANDI ====");
    
    // Mevcut sipariş detaylarını silelim ve yenilerini ekleyelim
    if (existingDetails.length > 0) {
      await prisma.order_Details.deleteMany({
        where: { OrderID: id }
      })
    }
    
    // Yeni sipariş detaylarını oluştur
    if (details && details.length > 0) {
      const detailPromises = details.map((detail: OrderDetail) => 
        prisma.order_Details.create({
          data: {
            OrderID: id,
            ProductID: parseInt(detail.ProductID as string),
            UnitPrice: parseFloat(detail.UnitPrice as string),
            Quantity: parseInt(detail.Quantity as string),
            Discount: parseFloat(detail.Discount as string)
          }
        })
      )
      
      await Promise.all(detailPromises)
    }
    
    return order
  } catch (error: any) {
    console.error('Sipariş güncelleme hatası:', error)
    throw createError({
      statusCode: 500,
      statusMessage: `Sipariş güncellenirken bir hata oluştu: ${error.message}`
    })
  }
}) 