# Tamamlanan İşler

## API Geliştirmeleri

### Products API
`server/api/products/index.ts`:

```typescript
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
```

Bu API sorunsuz çalışmaktadır ve ürünleri kategorileri ve tedarikçileri ile birlikte getirmektedir.

### Product Detail API
`server/api/products/[id].ts`:

```typescript
// server/api/products/[id].ts
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const id = Number(event.context.params?.id)
  
  if (isNaN(id)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Geçersiz ürün ID'
    })
  }
  
  const product = await prisma.products.findUnique({
    where: { ProductID: id },
    include: {
      Categories: true,
      Suppliers: true
    }
  })
  
  if (!product) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Ürün bulunamadı'
    })
  }
  
  return product
})
```

Bu API belirli bir ürünün detayını ID'ye göre kategori ve tedarikçi bilgileriyle birlikte getirmektedir.

### Categories API
`server/api/categories/index.ts`:

```typescript
// server/api/categories/index.ts
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async () => {
  const categories = await prisma.categories.findMany()
  
  return categories
})
```

Bu API tüm kategorileri getirmektedir.

### Category Detail API
`server/api/categories/[id].ts`:

```typescript
// server/api/categories/[id].ts
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
```

Bu API belirli bir kategori detayını ID'ye göre getirmektedir.

### Category Products API
`server/api/categories/[id]/products.ts`:

```typescript
// server/api/categories/[id]/products.ts
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
  
  const products = await prisma.products.findMany({
    where: { 
      CategoryID: id 
    }
  })
  
  return products
})
```

Bu API belirli bir kategoriye ait ürünleri getirmektedir.

### Customers API
`server/api/customers/index.ts`:

```typescript
// server/api/customers/index.ts
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async () => {
  const customers = await prisma.customers.findMany()
  
  return customers
})
```

Bu API tüm müşterileri getirmektedir.

### Customer Detail API
`server/api/customers/[id].ts`:

```typescript
// server/api/customers/[id].ts
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const id = event.context.params?.id
  
  if (!id) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Geçersiz müşteri ID'
    })
  }
  
  const customer = await prisma.customers.findUnique({
    where: { CustomerID: id }
  })
  
  if (!customer) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Müşteri bulunamadı'
    })
  }
  
  return customer
})
```

Bu API belirli bir müşterinin detayını ID'ye göre getirmektedir.

### Customer Orders API
`server/api/customers/[id]/orders.ts`:

```typescript
// server/api/customers/[id]/orders.ts
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const id = event.context.params?.id
  
  if (!id) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Geçersiz müşteri ID'
    })
  }
  
  const orders = await prisma.orders.findMany({
    where: { 
      CustomerID: id 
    },
    orderBy: {
      OrderDate: 'desc'
    }
  })
  
  return orders
})
```

Bu API belirli bir müşteriye ait siparişleri tarih sırasına göre getirmektedir.

### Orders API
`server/api/orders/index.ts`:

```typescript
// server/api/orders/index.ts
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async () => {
  const orders = await prisma.orders.findMany({
    orderBy: {
      OrderDate: 'desc'
    }
  })
  
  return orders
})
```

Bu API tüm siparişleri tarih sırasına göre getirmektedir.

### Order Detail API
`server/api/orders/[id].ts`:

```typescript
// server/api/orders/[id].ts
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const id = Number(event.context.params?.id)
  
  if (isNaN(id)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Geçersiz sipariş ID'
    })
  }
  
  const order = await prisma.orders.findUnique({
    where: { OrderID: id },
    include: {
      Customers: true,
      Employees: true,
      Shippers: true
    }
  })
  
  if (!order) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Sipariş bulunamadı'
    })
  }
  
  return order
})
```

Bu API belirli bir siparişi ID'ye göre müşteri, çalışan ve nakliyeci bilgileriyle birlikte getirmektedir.

### Order Details API
`server/api/orders/[id]/details.ts`:

```typescript
// server/api/orders/[id]/details.ts
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const id = Number(event.context.params?.id)
  
  if (isNaN(id)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Geçersiz sipariş ID'
    })
  }
  
  const orderDetails = await prisma.order_Details.findMany({
    where: { 
      OrderID: id 
    },
    include: {
      Products: true
    }
  })
  
  return orderDetails
})
```

Bu API belirli bir siparişin detaylarını (sipariş kalemleri) ürün bilgileriyle birlikte getirmektedir.

### Suppliers API
`server/api/suppliers/index.get.ts`:

```typescript
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  try {
    const suppliers = await prisma.suppliers.findMany({
      orderBy: {
        CompanyName: 'asc'
      }
    })
    return suppliers
  } catch (error) {
    console.error('Tedarikçiler getirilirken hata oluştu:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Tedarikçiler getirilirken bir hata oluştu.'
    })
  }
})
```

Bu API tüm tedarikçileri şirket adına göre sıralayarak getirmektedir.

### Supplier Detail API
`server/api/suppliers/[id].get.ts`:

```typescript
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  
  if (!id || isNaN(Number(id))) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Geçersiz tedarikçi ID'
    })
  }

  try {
    const supplier = await prisma.suppliers.findUnique({
      where: {
        SupplierID: Number(id)
      }
    })

    if (!supplier) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Tedarikçi bulunamadı'
      })
    }

    return supplier
  } catch (error) {
    console.error('Tedarikçi detayları getirilirken hata oluştu:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Tedarikçi detayları getirilirken bir hata oluştu.'
    })
  }
})
```

Bu API belirli bir tedarikçiyi ID'ye göre getirmektedir.

### Supplier Products API
`server/api/suppliers/[id]/products.get.ts`:

```typescript
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  
  if (!id || isNaN(Number(id))) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Geçersiz tedarikçi ID'
    })
  }

  try {
    // Önce tedarikçinin var olup olmadığını kontrol edelim
    const supplier = await prisma.suppliers.findUnique({
      where: {
        SupplierID: Number(id)
      }
    })

    if (!supplier) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Tedarikçi bulunamadı'
      })
    }

    // Tedarikçiye ait ürünleri getirelim
    const products = await prisma.products.findMany({
      where: {
        SupplierID: Number(id)
      },
      include: {
        Categories: true
      },
      orderBy: {
        ProductName: 'asc'
      }
    })

    return products
  } catch (error) {
    console.error('Tedarikçi ürünleri getirilirken hata oluştu:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Tedarikçi ürünleri getirilirken bir hata oluştu.'
    })
  }
})
```

Bu API belirli bir tedarikçiye ait ürünleri kategorileriyle birlikte getirmektedir.

### Employees API
`server/api/employees/index.get.ts`:

```typescript
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  try {
    const employees = await prisma.employees.findMany({
      orderBy: {
        LastName: 'asc'
      }
    })
    return employees
  } catch (error) {
    console.error('Çalışanlar getirilirken hata oluştu:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Çalışanlar getirilirken bir hata oluştu.'
    })
  }
})
```

Bu API tüm çalışanları soyad sırasına göre getirmektedir.

### Employee Detail API
`server/api/employees/[id].get.ts`:

```typescript
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  
  if (!id || isNaN(Number(id))) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Geçersiz çalışan ID'
    })
  }

  try {
    const employee = await prisma.employees.findUnique({
      where: {
        EmployeeID: Number(id)
      },
      include: {
        other_Employees: true,
        Employees: true
      }
    })

    if (!employee) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Çalışan bulunamadı'
      })
    }

    return employee
  } catch (error) {
    console.error('Çalışan detayları getirilirken hata oluştu:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Çalışan detayları getirilirken bir hata oluştu.'
    })
  }
})
```

Bu API belirli bir çalışanı ID'ye göre yöneticisi ve astları bilgileriyle birlikte getirmektedir.

### Employee Orders API
`server/api/employees/[id]/orders.get.ts`:

```typescript
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  
  if (!id || isNaN(Number(id))) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Geçersiz çalışan ID'
    })
  }

  try {
    // Önce çalışanın var olup olmadığını kontrol edelim
    const employee = await prisma.employees.findUnique({
      where: {
        EmployeeID: Number(id)
      }
    })

    if (!employee) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Çalışan bulunamadı'
      })
    }

    // Çalışana ait siparişleri getirelim
    const orders = await prisma.orders.findMany({
      where: {
        EmployeeID: Number(id)
      },
      include: {
        Customers: true
      },
      orderBy: {
        OrderDate: 'desc'
      }
    })

    return orders
  } catch (error) {
    console.error('Çalışan siparişleri getirilirken hata oluştu:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Çalışan siparişleri getirilirken bir hata oluştu.'
    })
  }
})
```

Bu API belirli bir çalışana ait siparişleri müşteri bilgileriyle birlikte getirmektedir.

### Employee Subordinates API
`server/api/employees/[id]/subordinates.get.ts`:

```typescript
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  
  if (!id || isNaN(Number(id))) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Geçersiz çalışan ID'
    })
  }

  try {
    // Önce çalışanın var olup olmadığını kontrol edelim
    const employee = await prisma.employees.findUnique({
      where: {
        EmployeeID: Number(id)
      }
    })

    if (!employee) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Çalışan bulunamadı'
      })
    }

    // Çalışana rapor veren çalışanları (astları) getirelim
    const subordinates = await prisma.employees.findMany({
      where: {
        ReportsTo: Number(id)
      },
      orderBy: {
        LastName: 'asc'
      }
    })

    return subordinates
  } catch (error) {
    console.error('Çalışanın astları getirilirken hata oluştu:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Çalışanın astları getirilirken bir hata oluştu.'
    })
  }
})
```

Bu API belirli bir çalışana rapor veren astlarını getirmektedir.

### Shippers API
`server/api/shippers/index.get.ts`:

```typescript
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  try {
    const shippers = await prisma.shippers.findMany({
      orderBy: {
        CompanyName: 'asc'
      }
    })
    return shippers
  } catch (error) {
    console.error('Nakliyeciler getirilirken hata oluştu:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Nakliyeciler getirilirken bir hata oluştu.'
    })
  }
})
```

Bu API tüm nakliyecileri şirket adına göre sıralayarak getirmektedir.

### Shipper Detail API
`server/api/shippers/[id].get.ts`:

```typescript
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  
  if (!id || isNaN(Number(id))) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Geçersiz nakliyeci ID'
    })
  }

  try {
    const shipper = await prisma.shippers.findUnique({
      where: {
        ShipperID: Number(id)
      }
    })

    if (!shipper) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Nakliyeci bulunamadı'
      })
    }

    return shipper
  } catch (error) {
    console.error('Nakliyeci detayları getirilirken hata oluştu:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Nakliyeci detayları getirilirken bir hata oluştu.'
    })
  }
})
```

Bu API belirli bir nakliyeciyi ID'ye göre getirmektedir.

### Shipper Orders API
`server/api/shippers/[id]/orders.get.ts`:

```typescript
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  
  if (!id || isNaN(Number(id))) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Geçersiz nakliyeci ID'
    })
  }

  try {
    // Önce nakliyecinin var olup olmadığını kontrol edelim
    const shipper = await prisma.shippers.findUnique({
      where: {
        ShipperID: Number(id)
      }
    })

    if (!shipper) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Nakliyeci bulunamadı'
      })
    }

    // Nakliyeciye ait siparişleri getirelim
    const orders = await prisma.orders.findMany({
      where: {
        ShipVia: Number(id)
      },
      include: {
        Customers: true,
        Employees: true
      },
      orderBy: {
        OrderDate: 'desc'
      }
    })

    return orders
  } catch (error) {
    console.error('Nakliyeci siparişleri getirilirken hata oluştu:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Nakliyeci siparişleri getirilirken bir hata oluştu.'
    })
  }
})
```

Bu API belirli bir nakliyeciye ait siparişleri müşteri ve çalışan bilgileriyle birlikte getirmektedir.

### Regions API
`server/api/regions/index.get.ts`:

```typescript
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  try {
    const regions = await prisma.regions.findMany({
      orderBy: {
        RegionDescription: 'asc'
      },
      include: {
        _count: {
          select: {
            Territories: true
          }
        }
      }
    })
    
    return regions
  } catch (error) {
    console.error('Bölgeler getirilirken hata oluştu:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Bölgeler getirilirken bir hata oluştu.'
    })
  }
})
```

Bu API tüm bölgeleri alan sayısı bilgisiyle birlikte getirmektedir.

### Region Detail API
`server/api/regions/[id].get.ts`:

```typescript
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  
  if (!id || isNaN(Number(id))) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Geçersiz bölge ID'
    })
  }

  try {
    const region = await prisma.regions.findUnique({
      where: {
        RegionID: Number(id)
      }
    })

    if (!region) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Bölge bulunamadı'
      })
    }

    return region
  } catch (error) {
    console.error('Bölge detayları getirilirken hata oluştu:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Bölge detayları getirilirken bir hata oluştu.'
    })
  }
})
```

Bu API belirli bir bölgeyi ID'ye göre getirmektedir.

### Region Territories API
`server/api/regions/[id]/territories.get.ts`:

```typescript
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  
  if (!id || isNaN(Number(id))) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Geçersiz bölge ID'
    })
  }

  try {
    // Önce bölgenin var olup olmadığını kontrol edelim
    const region = await prisma.regions.findUnique({
      where: {
        RegionID: Number(id)
      }
    })

    if (!region) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Bölge bulunamadı'
      })
    }

    // Bölgeye ait alanları getirelim
    const territories = await prisma.territories.findMany({
      where: {
        RegionID: Number(id)
      },
      orderBy: {
        TerritoryDescription: 'asc'
      }
    })

    return territories
  } catch (error) {
    console.error('Bölge alanları getirilirken hata oluştu:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Bölge alanları getirilirken bir hata oluştu.'
    })
  }
})
```

Bu API belirli bir bölgeye ait alanları getirmektedir.

### Territories API
`server/api/territories/index.get.ts`:

```typescript
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  try {
    const territories = await prisma.territories.findMany({
      include: {
        Regions: true
      },
      orderBy: {
        TerritoryDescription: 'asc'
      }
    })
    
    return territories
  } catch (error) {
    console.error('Alanlar getirilirken hata oluştu:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Alanlar getirilirken bir hata oluştu.'
    })
  }
})
```

Bu API tüm alanları bölge bilgileriyle birlikte getirmektedir.

### Territory Detail API
`server/api/territories/[id].get.ts`:

```typescript
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  
  if (!id) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Geçersiz alan ID'
    })
  }

  try {
    const territory = await prisma.territories.findUnique({
      where: {
        TerritoryID: id
      },
      include: {
        Regions: true
      }
    })

    if (!territory) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Alan bulunamadı'
      })
    }

    return territory
  } catch (error) {
    console.error('Alan detayları getirilirken hata oluştu:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Alan detayları getirilirken bir hata oluştu.'
    })
  }
})
```

Bu API belirli bir alanı ID'ye göre bölge bilgisiyle birlikte getirmektedir.

### Territory Employees API
`server/api/territories/[id]/employees.get.ts`:

```typescript
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  
  if (!id) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Geçersiz alan ID'
    })
  }

  try {
    // Önce alanın var olup olmadığını kontrol edelim
    const territory = await prisma.territories.findUnique({
      where: {
        TerritoryID: id
      }
    })

    if (!territory) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Alan bulunamadı'
      })
    }

    // Alan çalışan ilişkilerini getirelim
    const employeeTerritories = await prisma.employeeTerritories.findMany({
      where: {
        TerritoryID: id
      },
      include: {
        Employees: true
      }
    })

    // Sadece çalışan bilgilerini döndürelim
    const employees = employeeTerritories.map(et => et.Employees)
    
    return employees
  } catch (error) {
    console.error('Alan çalışanları getirilirken hata oluştu:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Alan çalışanları getirilirken bir hata oluştu.'
    })
  }
})
```

Bu API belirli bir alana atanmış çalışanları getirmektedir.

## Sayfalar

### Sipariş Detay Sayfası
`pages/orders/[id].vue` sayfası geliştirildi ve şu özelliklere sahip:

1. Sipariş temel bilgileri
2. Gönderim bilgileri
3. Sipariş detayları (kalemler) tablosu
4. Para birimi formatlaması ($ sembolü, binlik ayıraçlar, ondalık virgülü)
5. Yüzde formatlaması
6. Toplam hesaplamaları

Bu sayfada kullanılan para birimi formatı fonksiyonu:

```javascript
function formatCurrency(amount) {
  if (amount === null || amount === undefined) return '$0,00'
  
  // Önce sayıyı string'e çevir
  const numStr = Number(amount).toFixed(2)
  
  // Noktayı virgül ile değiştir ("." -> ",")
  let formattedAmount = numStr.replace('.', ',')
  
  // Eğer sayı 1000'den büyükse, bin ayıracı ekle
  if (Math.abs(Number(amount)) >= 1000) {
    // Virgülden önceki kısmı al
    const parts = formattedAmount.split(',')
    const wholePart = parts[0]
    
    // Sayının tamamını 3'er grupla formatla (sondan başlayarak)
    let formattedWholePart = ''
    for (let i = wholePart.length - 1, count = 0; i >= 0; i--, count++) {
      if (count > 0 && count % 3 === 0) {
        formattedWholePart = '.' + formattedWholePart
      }
      formattedWholePart = wholePart[i] + formattedWholePart
    }
    
    // Formatlanmış sayıyı birleştir
    formattedAmount = formattedWholePart + ',' + parts[1]
  }
  
  return '$' + formattedAmount
}
```

### Tedarikçiler Sayfaları

#### Tedarikçiler Listesi Sayfası
`pages/suppliers/index.vue` sayfası geliştirildi ve şu özelliklere sahip:

1. Tüm tedarikçilerin listelendiği tablo
2. Şirket adı, iletişim kişisi, iletişim ünvanı, ülke ve telefon bilgilerinin görüntülenmesi
3. Her tedarikçi için detay sayfasına yönlendiren link

#### Tedarikçi Detay Sayfası
`pages/suppliers/[id].vue` sayfası geliştirildi ve şu özelliklere sahip:

1. Tedarikçi detay bilgileri (şirket adı, iletişim bilgileri, adres, telefon, faks, web sayfası)
2. Tedarikçi ürünleri sayfasına yönlendiren buton

#### Tedarikçi Ürünleri Sayfası
`pages/suppliers/[id]/products.vue` sayfası geliştirildi ve şu özelliklere sahip:

1. Tedarikçiye ait ürünlerin listelendiği tablo
2. Ürün adı, kategori, birim fiyat, stok miktarı, sipariş edilmiş miktarı ve birim başına miktar bilgilerinin görüntülenmesi
3. Her ürün için ürün detay sayfasına yönlendiren link
4. Para birimi formatlaması (Türkçe formatında gösterim) 

### Çalışanlar Sayfaları

#### Çalışanlar Listesi Sayfası
`pages/employees/index.vue` sayfası geliştirildi ve şu özelliklere sahip:

1. Tüm çalışanların listelendiği tablo
2. Ad, soyad, ünvan, nezaket ünvanı, işe giriş tarihi, şehir ve ülke bilgilerinin görüntülenmesi
3. Her çalışan için detay sayfasına yönlendiren link
4. Tarih formatlaması (Türkçe formatında gösterim)

#### Çalışan Detay Sayfası
`pages/employees/[id].vue` sayfası geliştirildi ve şu özelliklere sahip:

1. Çalışanın detaylı bilgilerini içeren üç bölüm:
   - Kişisel bilgiler (ad, soyad, ünvan, nezaket ünvanı, doğum tarihi, işe başlama tarihi)
   - İletişim bilgileri (adres, şehir, bölge, posta kodu, ülke, telefon)
   - İş bilgileri (yönetici, ast sayısı, uzantı, notlar)
2. Çalışanın siparişleri sayfasına yönlendiren buton
3. Çalışanın astları sayfasına yönlendiren buton (eğer astları varsa)
4. Yönetici çalışanın detay sayfasına link
5. Tarih formatlaması (Türkçe formatında gösterim)

#### Çalışan Siparişleri Sayfası
`pages/employees/[id]/orders.vue` sayfası geliştirildi ve şu özelliklere sahip:

1. Çalışana ait siparişlerin listelendiği tablo
2. Sipariş no, sipariş tarihi, müşteri, gönderi tarihi, alıcı adı, alıcı ülkesi ve nakliye ücreti bilgilerinin görüntülenmesi
3. Her sipariş için sipariş detay sayfasına yönlendiren link
4. Her müşteri için müşteri detay sayfasına yönlendiren link
5. Tarih formatlaması (Türkçe formatında gösterim)
6. Para birimi formatlaması (Türkçe formatında gösterim)

#### Çalışan Astları Sayfası
`pages/employees/[id]/subordinates.vue` sayfası geliştirildi ve şu özelliklere sahip:

1. Çalışana rapor veren astların listelendiği tablo
2. Ad, soyad, ünvan, nezaket ünvanı, işe giriş tarihi, şehir ve ülke bilgilerinin görüntülenmesi
3. Her ast çalışan için detay sayfasına yönlendiren link
4. Tarih formatlaması (Türkçe formatında gösterim)
5. Organizasyon yapısını görsel olarak gösteren hiyerarşi şeması

### Nakliyeciler Sayfaları

#### Nakliyeciler Listesi Sayfası
`pages/shippers/index.vue` sayfası geliştirildi ve şu özelliklere sahip:

1. Tüm nakliyecilerin listelendiği tablo
2. Şirket adı ve telefon bilgilerinin görüntülenmesi
3. Her nakliyeci için detay sayfasına yönlendiren link

#### Nakliyeci Detay Sayfası
`pages/shippers/[id].vue` sayfası geliştirildi ve şu özelliklere sahip:

1. Nakliyeci detay bilgileri (şirket adı, telefon)
2. Nakliyeci siparişleri sayfasına yönlendiren buton

#### Nakliyeci Siparişleri Sayfası
`pages/shippers/[id]/orders.vue` sayfası geliştirildi ve şu özelliklere sahip:

1. Nakliyeciye ait siparişlerin listelendiği tablo
2. Sipariş no, sipariş tarihi, müşteri, çalışan, gönderi tarihi, alıcı adı, alıcı ülkesi ve nakliye ücreti bilgilerinin görüntülenmesi
3. Her sipariş için sipariş detay sayfasına yönlendiren link
4. Her müşteri ve çalışan için ilgili detay sayfalarına yönlendiren link
5. Tarih formatlaması (Türkçe formatında gösterim)
6. Para birimi formatlaması (Türkçe formatında gösterim)
7. Sipariş istatistikleri (toplam sipariş sayısı, toplam nakliye ücreti, ortalama nakliye ücreti)

### Bölgeler ve Alanlar Sayfaları

#### Bölgeler Listesi Sayfası
`pages/regions/index.vue` sayfası geliştirildi ve şu özelliklere sahip:

1. Tüm bölgelerin listelendiği kart görünümü
2. Her bölge için alan sayısı bilgisi
3. Her bölge için detay sayfasına yönlendiren link

#### Bölge Detay Sayfası
`pages/regions/[id].vue` sayfası geliştirildi ve şu özelliklere sahip:

1. Bölge detay bilgileri (ID, ad)
2. Bölgeye ait alanların listelendiği tablo
3. Her alan için detay sayfasına yönlendiren link

#### Alanlar Listesi Sayfası
`pages/territories/index.vue` sayfası geliştirildi ve şu özelliklere sahip:

1. Tüm alanların listelendiği tablo görünümü
2. Arama kutusu ile alan adı, ID veya bölge adına göre filtreleme
3. Her alan için ait olduğu bölge bilgisi ve bölgeye yönlendiren link
4. Her alan için detay sayfasına yönlendiren link
5. Bölgeler sayfasına yönlendiren buton

#### Alan Detay Sayfası
`pages/territories/[id].vue` sayfası geliştirildi ve şu özelliklere sahip:

1. Alan detay bilgileri (ID, ad)
2. Bağlı olduğu bölgenin bilgileri ve bölge detay sayfasına yönlendiren link
3. Alana atanmış çalışanların listelendiği tablo
4. Her çalışan için detay sayfasına yönlendiren link