import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    
    // Tedarikçi verileri
    const {
      CompanyName,
      ContactName,
      ContactTitle,
      Address,
      City,
      Region,
      PostalCode,
      Country,
      Phone,
      Fax,
      HomePage
    } = body
    
    console.log("==== TEDARİKÇİ OLUŞTURMA BAŞLADI ====")
    console.log("Gelen veriler:", body)
    
    // CompanyName kontrolü - boş olmamalı
    if (!CompanyName) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Şirket adı gereklidir'
      })
    }
    
    // Tedarikçi oluştur
    const supplier = await prisma.suppliers.create({
      data: {
        CompanyName,
        ContactName,
        ContactTitle,
        Address,
        City,
        Region,
        PostalCode,
        Country,
        Phone,
        Fax,
        HomePage
      }
    })
    
    console.log("Oluşturulan tedarikçi:", supplier)
    console.log("==== TEDARİKÇİ OLUŞTURMA TAMAMLANDI ====")
    
    return supplier
  } catch (error: any) {
    console.error('Tedarikçi oluşturma hatası:', error)
    throw createError({
      statusCode: error.statusCode || 500,
      statusMessage: error.statusMessage || `Tedarikçi oluşturulurken bir hata oluştu: ${error.message}`
    })
  }
}) 