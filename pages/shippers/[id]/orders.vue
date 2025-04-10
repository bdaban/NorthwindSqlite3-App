<template>
  <div>
    <div class="mb-4">
      <NuxtLink :to="`/shippers/${shipperId}`" class="text-blue-600 hover:text-blue-800">
        &lt; Nakliyeci Detayına Dön
      </NuxtLink>
    </div>

    <div v-if="pendingShipper || pendingOrders" class="flex justify-center items-center py-8">
      <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    </div>
    
    <div v-else-if="errorShipper || errorOrders" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
      <strong class="font-bold">Hata!</strong>
      <span class="block sm:inline"> Veriler yüklenirken bir sorun oluştu.</span>
    </div>
    
    <div v-else>
      <h1 class="text-2xl font-bold mb-2">{{ shipper.CompanyName }}</h1>
      <h2 class="text-xl font-semibold mb-4">Nakliyecinin Siparişleri</h2>
      
      <div v-if="orders.length === 0" class="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded relative" role="alert">
        <span class="block sm:inline">Bu nakliyeci aracılığıyla yapılan sipariş bulunamadı.</span>
      </div>
      
      <div v-else class="overflow-x-auto">
        <table class="min-w-full bg-white border border-gray-300">
          <thead>
            <tr class="bg-gray-100">
              <th class="py-2 px-4 border-b text-left">Sipariş No</th>
              <th class="py-2 px-4 border-b text-left">Sipariş Tarihi</th>
              <th class="py-2 px-4 border-b text-left">Müşteri</th>
              <th class="py-2 px-4 border-b text-left">Çalışan</th>
              <th class="py-2 px-4 border-b text-left">Gönderi Tarihi</th>
              <th class="py-2 px-4 border-b text-left">Alıcı Adı</th>
              <th class="py-2 px-4 border-b text-left">Alıcı Ülkesi</th>
              <th class="py-2 px-4 border-b text-left">Nakliye Ücreti</th>
              <th class="py-2 px-4 border-b text-left">İşlemler</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="order in orders" :key="order.OrderID" class="hover:bg-gray-50">
              <td class="py-2 px-4 border-b">#{{ order.OrderID }}</td>
              <td class="py-2 px-4 border-b">{{ formatDate(order.OrderDate) }}</td>
              <td class="py-2 px-4 border-b">
                <NuxtLink 
                  v-if="order.Customers"
                  :to="`/customers/${order.Customers.CustomerID}`"
                  class="text-blue-600 hover:text-blue-800"
                >
                  {{ order.Customers.CompanyName }}
                </NuxtLink>
                <span v-else>-</span>
              </td>
              <td class="py-2 px-4 border-b">
                <NuxtLink 
                  v-if="order.Employees"
                  :to="`/employees/${order.Employees.EmployeeID}`"
                  class="text-blue-600 hover:text-blue-800"
                >
                  {{ order.Employees.FirstName }} {{ order.Employees.LastName }}
                </NuxtLink>
                <span v-else>-</span>
              </td>
              <td class="py-2 px-4 border-b">{{ formatDate(order.ShippedDate) }}</td>
              <td class="py-2 px-4 border-b">{{ order.ShipName || '-' }}</td>
              <td class="py-2 px-4 border-b">{{ order.ShipCountry || '-' }}</td>
              <td class="py-2 px-4 border-b">{{ formatCurrency(order.Freight) }}</td>
              <td class="py-2 px-4 border-b">
                <NuxtLink 
                  :to="`/orders/${order.OrderID}`"
                  class="text-blue-600 hover:text-blue-800"
                >
                  Detay
                </NuxtLink>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div class="mt-8">
        <div class="bg-white p-4 rounded-lg shadow">
          <h3 class="text-lg font-semibold mb-3">Sipariş İstatistikleri</h3>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <div class="text-sm text-blue-700">Toplam Sipariş Sayısı</div>
              <div class="text-2xl font-bold">{{ orders.length }}</div>
            </div>
            <div class="bg-green-50 p-4 rounded-lg border border-green-200">
              <div class="text-sm text-green-700">Toplam Nakliye Ücreti</div>
              <div class="text-2xl font-bold">{{ formatCurrency(totalFreight) }}</div>
            </div>
            <div class="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <div class="text-sm text-purple-700">Ortalama Nakliye Ücreti</div>
              <div class="text-2xl font-bold">{{ formatCurrency(averageFreight) }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const shipperId = route.params.id

const { data: shipper, pending: pendingShipper, error: errorShipper } = await useFetch(`/api/shippers/${shipperId}`)
const { data: orders, pending: pendingOrders, error: errorOrders } = await useFetch(`/api/shippers/${shipperId}/orders`)

// Hesaplanan değerler
const totalFreight = computed(() => {
  if (!orders.value || orders.value.length === 0) return 0
  return orders.value.reduce((sum, order) => sum + (order.Freight || 0), 0)
})

const averageFreight = computed(() => {
  if (!orders.value || orders.value.length === 0) return 0
  return totalFreight.value / orders.value.length
})

function formatDate(dateString) {
  if (!dateString) return '-'
  const date = new Date(dateString)
  if (isNaN(date.getTime())) return dateString
  return new Intl.DateTimeFormat('tr-TR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  }).format(date)
}

function formatCurrency(value) {
  if (value == null) return '-'
  return new Intl.NumberFormat('tr-TR', {
    style: 'currency',
    currency: 'USD'
  }).format(value)
}
</script> 