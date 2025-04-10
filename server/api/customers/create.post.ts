import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    
    // Müşteri verileri
    const {
      CustomerID,
      CompanyName,
      ContactName,
      ContactTitle,
      Address,
      City,
      Region,
      PostalCode,
      Country,
      Phone,
      Fax
    } = body
    
    console.log("==== MÜŞTERİ OLUŞTURMA BAŞLADI ====")
    console.log("Gelen veriler:", body)
    
    // CustomerID kontrolü - tam olarak 5 karakter olmalı
    if (!CustomerID || CustomerID.length !== 5) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Müşteri ID tam olarak 5 karakter olmalıdır'
      })
    }
    
    // CompanyName kontrolü - boş olmamalı
    if (!CompanyName) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Şirket adı gereklidir'
      })
    }
    
    // Mevcut bir ID ile çakışma kontrolü
    const existingCustomer = await prisma.customers.findUnique({
      where: { CustomerID }
    })
    
    if (existingCustomer) {
      throw createError({
        statusCode: 409, // Conflict
        statusMessage: `"${CustomerID}" ID'li müşteri zaten mevcut`
      })
    }
    
    // Müşteri oluştur
    const customer = await prisma.customers.create({
      data: {
        CustomerID,
        CompanyName,
        ContactName,
        ContactTitle,
        Address,
        City,
        Region,
        PostalCode,
        Country,
        Phone,
        Fax
      }
    })
    
    console.log("Oluşturulan müşteri:", customer)
    console.log("==== MÜŞTERİ OLUŞTURMA TAMAMLANDI ====")
    
    return customer
  } catch (error: any) {
    console.error('Müşteri oluşturma hatası:', error)
    throw createError({
      statusCode: error.statusCode || 500,
      statusMessage: error.statusMessage || `Müşteri oluşturulurken bir hata oluştu: ${error.message}`
    })
  }
}) 