<template>
  <div>
    <div class="mb-4">
      <NuxtLink :to="`/employees/${employeeId}`" class="text-blue-600 hover:text-blue-800">
        &lt; Çalışan Detayına Dön
      </NuxtLink>
    </div>

    <div v-if="pendingEmployee || pendingOrders" class="flex justify-center items-center py-8">
      <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    </div>
    
    <div v-else-if="errorEmployee || errorOrders" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
      <strong class="font-bold">Hata!</strong>
      <span class="block sm:inline"> Veriler yüklenirken bir sorun oluştu.</span>
    </div>
    
    <div v-else>
      <h1 class="text-2xl font-bold mb-2">{{ employee.FirstName }} {{ employee.LastName }}</h1>
      <h2 class="text-xl font-semibold mb-4">Çalışanın Siparişleri</h2>
      
      <div v-if="orders.length === 0" class="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded relative" role="alert">
        <span class="block sm:inline">Bu çalışana ait sipariş bulunamadı.</span>
      </div>
      
      <div v-else class="overflow-x-auto">
        <table class="min-w-full bg-white border border-gray-300">
          <thead>
            <tr class="bg-gray-100">
              <th class="py-2 px-4 border-b text-left">Sipariş No</th>
              <th class="py-2 px-4 border-b text-left">Sipariş Tarihi</th>
              <th class="py-2 px-4 border-b text-left">Müşteri</th>
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
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const employeeId = route.params.id

const { data: employee, pending: pendingEmployee, error: errorEmployee } = await useFetch(`/api/employees/${employeeId}`)
const { data: orders, pending: pendingOrders, error: errorOrders } = await useFetch(`/api/employees/${employeeId}/orders`)

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