# Çalışan API'ler

## Products API
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

## Product Detail API
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

## Categories API
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

## Category Detail API
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

## Category Products API
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

## Customers API
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

## Customer Detail API
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

## Customer Orders API
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

## Orders API
`server/api/orders/index.ts`:

```typescript
// server/api/orders/index.ts
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async () => {
  const orders = await prisma.orders.findMany({
    include: {
      Customers: true,
      Employees: true
    },
    orderBy: {
      OrderDate: 'desc'
    }
  })
  
  return orders
})
```

Bu API tüm siparişleri müşteri ve çalışan bilgileriyle birlikte tarih sırasına göre getirmektedir.

## Order Detail API
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

## Order Details API
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