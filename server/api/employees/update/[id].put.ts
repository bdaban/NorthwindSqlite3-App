import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  try {
    const id = Number(event.context.params?.id)
    
    if (isNaN(id)) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Geçersiz çalışan ID'
      })
    }
    
    const body = await readBody(event)
    
    // Çalışan verileri
    const {
      FirstName,
      LastName,
      Title,
      TitleOfCourtesy,
      BirthDate,
      HireDate,
      Address,
      City,
      Region,
      PostalCode,
      Country,
      HomePhone,
      Extension,
      ReportsTo,
      Notes
    } = body
    
    console.log("==== ÇALIŞAN GÜNCELLEME BAŞLADI ====")
    console.log("Gelen veriler:", body)
    
    // Önce çalışanın var olup olmadığını kontrol edelim
    const existingEmployee = await prisma.employees.findUnique({
      where: { EmployeeID: id }
    })
    
    if (!existingEmployee) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Çalışan bulunamadı'
      })
    }
    
    // Tarih değerleri için işlem
    const birthDate = BirthDate ? new Date(BirthDate) : null
    const hireDate = HireDate ? new Date(HireDate) : null
    
    // Çalışanı güncelle
    const employee = await prisma.employees.update({
      where: { EmployeeID: id },
      data: {
        FirstName,
        LastName,
        Title,
        TitleOfCourtesy,
        BirthDate: birthDate ? birthDate.toISOString() : undefined,
        HireDate: hireDate ? hireDate.toISOString() : undefined,
        Address,
        City,
        Region,
        PostalCode,
        Country,
        HomePhone,
        Extension,
        ReportsTo: ReportsTo ? parseInt(ReportsTo) : null,
        Notes
      },
      include: {
        Employees: true, // Yönetici bilgilerini getir
        other_Employees: true // Astları getir
      }
    })
    
    console.log("Güncellenen çalışan:", employee)
    console.log("==== ÇALIŞAN GÜNCELLEME TAMAMLANDI ====")
    
    return employee
  } catch (error: any) {
    console.error('Çalışan güncelleme hatası:', error)
    throw createError({
      statusCode: error.statusCode || 500,
      statusMessage: error.statusMessage || `Çalışan güncellenirken bir hata oluştu: ${error.message}`
    })
  }
}) 