<template>
  <div>
    <div class="bg-white p-6 rounded-lg shadow-md">
      <div class="mb-6">
        <NuxtLink to="/orders" class="text-blue-600 hover:underline flex items-center">
          <Icon name="mdi:arrow-left" class="mr-1" /> Siparişlere Dön
        </NuxtLink>
      </div>

      <div v-if="pending" class="flex justify-center py-8">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>

      <div v-else-if="error">
        <p class="text-red-500">{{ error.message }}</p>
      </div>

      <div v-else-if="!order" class="py-8 text-center">
        <Icon name="mdi:cart-off" class="mx-auto mb-2 text-4xl text-gray-400" />
        <p class="text-gray-500">Sipariş bulunamadı.</p>
      </div>

      <div v-else>
        <div class="flex justify-between items-center mb-6">
          <h1 class="text-2xl font-bold text-gray-800 flex items-center">
            <Icon name="mdi:cart-outline" class="mr-2 text-amber-600" /> Sipariş #{{ order.OrderID }}
          </h1>
          <NuxtLink :to="`/orders/edit/${order.OrderID}`" class="px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 flex items-center">
            <Icon name="mdi:pencil" class="mr-1" /> Siparişi Düzenle
          </NuxtLink>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <div class="bg-amber-50 p-4 rounded-lg">
              <h2 class="text-lg font-semibold text-amber-800 mb-3 flex items-center">
                <Icon name="mdi:information-outline" class="mr-2" /> Sipariş Bilgileri
              </h2>
              
              <div class="space-y-2">
                <p><span class="font-medium flex items-center"><Icon name="mdi:pound" class="mr-1" /> Sipariş ID:</span> {{ order.OrderID }}</p>
                <p v-if="order.Customers"><span class="font-medium flex items-center"><Icon name="mdi:account-outline" class="mr-1" /> Müşteri:</span> 
                  <NuxtLink :to="`/customers/${order.CustomerID}`" class="text-blue-600 hover:underline">
                    {{ order.Customers.CompanyName }}
                  </NuxtLink>
                </p>
                <p v-if="order.Employees"><span class="font-medium flex items-center"><Icon name="mdi:account-tie-outline" class="mr-1" /> Çalışan:</span> {{ order.Employees.FirstName }} {{ order.Employees.LastName }}</p>
                <p><span class="font-medium flex items-center"><Icon name="mdi:calendar" class="mr-1" /> Sipariş Tarihi:</span> {{ formatDate(order.OrderDate) }}</p>
                <p><span class="font-medium flex items-center"><Icon name="mdi:calendar-clock" class="mr-1" /> Gerekli Tarih:</span> {{ formatDate(order.RequiredDate) }}</p>
                <p><span class="font-medium flex items-center"><Icon name="mdi:calendar-check" class="mr-1" /> Gönderim Tarihi:</span> {{ formatDate(order.ShippedDate) }}</p>
                <p v-if="order.Shippers"><span class="font-medium flex items-center"><Icon name="mdi:truck-fast-outline" class="mr-1" /> Nakliyeci:</span> {{ order.Shippers.CompanyName }}</p>
                <p><span class="font-medium flex items-center"><Icon name="mdi:currency-usd" class="mr-1" /> Nakliye Ücreti:</span> {{ formatCurrency(order.Freight) }}</p>
              </div>
            </div>
          </div>

          <div>
            <div class="bg-blue-50 p-4 rounded-lg">
              <h2 class="text-lg font-semibold text-blue-800 mb-3 flex items-center">
                <Icon name="mdi:map-marker-outline" class="mr-2" /> Gönderim Bilgileri
              </h2>
              
              <div class="space-y-2">
                <p><span class="font-medium flex items-center"><Icon name="mdi:account" class="mr-1" /> Alıcı:</span> {{ order.ShipName }}</p>
                <p><span class="font-medium flex items-center"><Icon name="mdi:home-outline" class="mr-1" /> Adres:</span> {{ order.ShipAddress }}</p>
                <p><span class="font-medium flex items-center"><Icon name="mdi:city-variant-outline" class="mr-1" /> Şehir:</span> {{ order.ShipCity }}</p>
                <p v-if="order.ShipRegion"><span class="font-medium flex items-center"><Icon name="mdi:map-outline" class="mr-1" /> Bölge:</span> {{ order.ShipRegion }}</p>
                <p><span class="font-medium flex items-center"><Icon name="mdi:mailbox-outline" class="mr-1" /> Posta Kodu:</span> {{ order.ShipPostalCode }}</p>
                <p><span class="font-medium flex items-center"><Icon name="mdi:flag-outline" class="mr-1" /> Ülke:</span> {{ order.ShipCountry }}</p>
              </div>
            </div>
          </div>
        </div>

        <div v-if="orderDetails && orderDetails.length > 0">
          <h2 class="text-xl font-semibold text-gray-800 mb-4 flex items-center">
            <Icon name="mdi:package-variant-closed" class="mr-2 text-gray-700" /> Sipariş Detayları
          </h2>
          
          <div class="overflow-x-auto">
            <table class="min-w-full bg-white">
              <thead class="bg-gray-100">
                <tr>
                  <th class="py-3 px-4 text-left">Ürün</th>
                  <th class="py-3 px-4 text-left">Birim Fiyat</th>
                  <th class="py-3 px-4 text-left">Miktar</th>
                  <th class="py-3 px-4 text-left">İndirim</th>
                  <th class="py-3 px-4 text-left">Toplam</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="detail in orderDetails" :key="`${detail.OrderID}-${detail.ProductID}`" class="border-b hover:bg-gray-50">
                  <td class="py-3 px-4">
                    <NuxtLink :to="`/products/${detail.ProductID}`" class="text-blue-600 hover:underline flex items-center">
                      <Icon name="mdi:package-variant" class="mr-1 text-blue-500" />
                      {{ detail.Products.ProductName }}
                    </NuxtLink>
                  </td>
                  <td class="py-3 px-4 flex items-center">
                    <Icon name="mdi:currency-usd" class="mr-1 text-gray-500" /> {{ formatCurrency(detail.UnitPrice) }}
                  </td>
                  <td class="py-3 px-4 flex items-center">
                    <Icon name="mdi:numeric" class="mr-1 text-gray-500" /> {{ detail.Quantity }}
                  </td>
                  <td class="py-3 px-4 flex items-center">
                    <Icon name="mdi:sale" class="mr-1 text-red-500" /> {{ formatPercent(detail.Discount) }}
                  </td>
                  <td class="py-3 px-4 flex items-center">
                    <Icon name="mdi:cash" class="mr-1 text-green-500" /> {{ calculateTotal(detail.UnitPrice, detail.Quantity, detail.Discount) }}
                  </td>
                </tr>
              </tbody>
              <tfoot class="bg-gray-50 font-medium">
                <tr>
                  <td colspan="4" class="py-3 px-4 text-right">Ara Toplam:</td>
                  <td class="py-3 px-4 flex items-center">
                    <Icon name="mdi:calculator" class="mr-1 text-gray-600" /> {{ calculateSubTotal() }}
                  </td>
                </tr>
                <tr>
                  <td colspan="4" class="py-3 px-4 text-right">Nakliye Ücreti:</td>
                  <td class="py-3 px-4 flex items-center">
                    <Icon name="mdi:truck" class="mr-1 text-gray-600" /> {{ formatCurrency(order.Freight) }}
                  </td>
                </tr>
                <tr class="bg-gray-100">
                  <td colspan="4" class="py-3 px-4 text-right font-bold">Toplam:</td>
                  <td class="py-3 px-4 font-bold flex items-center">
                    <Icon name="mdi:cash-multiple" class="mr-1 text-green-600" /> {{ calculateGrandTotal() }}
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
        
        <div v-else class="py-4 text-center bg-gray-50 rounded-lg">
          <Icon name="mdi:alert-circle-outline" class="mx-auto mb-2 text-4xl text-amber-500" />
          <p class="text-gray-500">Sipariş detayları bulunamadı.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const orderId = parseInt(route.params.id)

const { data: order, pending, error } = await useFetch(`/api/orders/${orderId}`)
const { data: orderDetails } = await useFetch(`/api/orders/${orderId}/details`)

function formatDate(dateString) {
  if (!dateString) return 'Belirtilmemiş'
  
  const date = new Date(dateString)
  return new Intl.DateTimeFormat('tr-TR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  }).format(date)
}

function formatPercent(value) {
  return `${Math.round(value * 100)}%`
}

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

function calculateTotal(unitPrice, quantity, discount) {
  return formatCurrency(unitPrice * quantity * (1 - discount))
}

function calculateSubTotal() {
  if (!orderDetails.value) return formatCurrency(0)
  
  const total = orderDetails.value.reduce((total, detail) => {
    return total + (detail.UnitPrice * detail.Quantity * (1 - detail.Discount))
  }, 0)
  
  return formatCurrency(total)
}

function calculateGrandTotal() {
  if (!orderDetails.value || !order.value) return formatCurrency(0)
  
  const subTotal = orderDetails.value.reduce((total, detail) => {
    return total + (detail.UnitPrice * detail.Quantity * (1 - detail.Discount))
  }, 0)
  const freight = parseFloat(order.value.Freight || 0)
  
  return formatCurrency(subTotal + freight)
}
</script> 