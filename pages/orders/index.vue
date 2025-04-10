<template>
  <div>
    <div class="bg-white p-6 rounded-lg shadow-md">
      <div class="flex justify-between items-center mb-6">
        <h1 class="text-2xl font-bold text-gray-800 flex items-center">
          <Icon name="mdi:cart" class="mr-2 text-amber-600 text-3xl" /> Siparişler
        </h1>
        <div class="flex space-x-2">
          <div class="relative">
            <input 
              v-model="searchTerm" 
              type="text" 
              placeholder="Sipariş ara..." 
              class="pl-9 pr-4 py-2 border rounded-lg"
              @input="debouncedSearch"
            />
            <Icon name="mdi:magnify" class="absolute left-3 top-2.5 text-gray-400" />
          </div>
          <NuxtLink to="/orders/tracking" class="px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 flex items-center">
            <Icon name="mdi:truck-delivery-outline" class="mr-1" /> Durum Takibi
          </NuxtLink>
          <NuxtLink to="/orders/create" class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center">
            <Icon name="mdi:plus" class="mr-1" /> Yeni Sipariş
          </NuxtLink>
        </div>
      </div>

      <div v-if="pending" class="flex justify-center py-8">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>

      <div v-else-if="error">
        <p class="text-red-500">{{ error.message }}</p>
      </div>

      <div v-else-if="orders.length === 0" class="py-8 text-center">
        <Icon name="mdi:cart-off" class="mx-auto mb-2 text-4xl text-gray-400" />
        <p class="text-gray-500">Sipariş bulunamadı.</p>
      </div>

      <div v-else>
        <div class="overflow-x-auto">
          <table class="min-w-full bg-white">
            <thead class="bg-gray-100">
              <tr>
                <th class="py-3 px-4 text-left">Sipariş ID</th>
                <th class="py-3 px-4 text-left">Müşteri</th>
                <th class="py-3 px-4 text-left">Sipariş Tarihi</th>
                <th class="py-3 px-4 text-left">Gönderim Tarihi</th>
                <th class="py-3 px-4 text-left">Nakliye Ücreti</th>
                <th class="py-3 px-4 text-left">İşlemler</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="order in orders" :key="order.OrderID" class="border-b hover:bg-gray-50">
                <td class="py-3 px-4"># {{ order.OrderID }}</td>
                <td class="py-3 px-4">{{ order.Customers?.CompanyName || 'Belirtilmemiş' }}</td>
                <td class="py-3 px-4 flex items-center">
                  <Icon name="mdi:calendar" class="mr-1 text-gray-500" /> {{ formatDate(order.OrderDate) }}
                </td>
                <td class="py-3 px-4">
                  <span v-if="order.ShippedDate" class="flex items-center">
                    <Icon name="mdi:truck-check" class="mr-1 text-green-500" /> {{ formatDate(order.ShippedDate) }}
                  </span>
                  <span v-else class="flex items-center">
                    <Icon name="mdi:truck-clock" class="mr-1 text-amber-500" /> Belirtilmemiş
                  </span>
                </td>
                <td class="py-3 px-4">{{ order.Freight }}</td>
                <td class="py-3 px-4 space-x-2">
                  <NuxtLink :to="`/orders/${order.OrderID}`" class="text-blue-600 hover:underline inline-flex items-center">
                    <Icon name="mdi:eye" class="mr-1" /> Detay
                  </NuxtLink>
                  <NuxtLink :to="`/orders/edit/${order.OrderID}`" class="text-amber-600 hover:underline inline-flex items-center">
                    <Icon name="mdi:pencil" class="mr-1" /> Düzenle
                  </NuxtLink>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watchEffect } from 'vue'

definePageMeta({
  title: 'Siparişler'
})

const searchTerm = ref('')
let searchTimeout = null

// Debounce fonksiyonu - kullanıcı yazmayı bitirince aramayı tetikler
function debouncedSearch() {
  clearTimeout(searchTimeout)
  searchTimeout = setTimeout(() => {
    refresh()
  }, 300)
}

const { data: orders, pending, error, refresh } = useFetch('/api/orders', {
  query: computed(() => ({ 
    search: searchTerm.value
  }))
})

function formatDate(dateString) {
  if (!dateString) return 'Belirtilmemiş'
  
  const date = new Date(dateString)
  return new Intl.DateTimeFormat('tr-TR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  }).format(date)
}
</script> 