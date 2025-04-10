<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">Müşteri Satın Alma İstatistikleri</h1>
    
    <div v-if="pending" class="flex justify-center items-center py-8">
      <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    </div>
    
    <div v-else-if="error" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
      <strong class="font-bold">Hata!</strong>
      <span class="block sm:inline"> Veriler yüklenirken bir sorun oluştu.</span>
    </div>
    
    <div v-else>
      <!-- Özet kartları -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div class="bg-blue-100 border-l-4 border-blue-500 p-4 rounded shadow">
          <div class="text-blue-500 text-lg font-bold">Toplam Müşteri</div>
          <div class="text-2xl">{{ customerStats.length }}</div>
        </div>
        
        <div class="bg-green-100 border-l-4 border-green-500 p-4 rounded shadow">
          <div class="text-green-500 text-lg font-bold">Aktif Müşteri</div>
          <div class="text-2xl">{{ activeCustomerCount }}</div>
        </div>
        
        <div class="bg-purple-100 border-l-4 border-purple-500 p-4 rounded shadow">
          <div class="text-purple-500 text-lg font-bold">Toplam Sipariş</div>
          <div class="text-2xl">{{ totalOrders }}</div>
        </div>
        
        <div class="bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded shadow">
          <div class="text-yellow-500 text-lg font-bold">Ortalama Sipariş Tutarı</div>
          <div class="text-2xl">{{ formatCurrency(averageOrderValue) }}</div>
        </div>
      </div>

      <!-- Filtreleme -->
      <div class="mb-4 flex flex-col md:flex-row gap-4">
        <div class="flex-1">
          <input 
            v-model="searchQuery" 
            type="text" 
            placeholder="Müşteri ara..." 
            class="w-full p-2 border border-gray-300 rounded"
          >
        </div>
        
        <div class="flex gap-2">
          <select 
            v-model="sortOption" 
            class="p-2 border border-gray-300 rounded"
          >
            <option value="totalOrderValue">Satış Tutarına Göre Sırala</option>
            <option value="totalOrders">Sipariş Sayısına Göre Sırala</option>
            <option value="companyName">Şirket Adına Göre Sırala</option>
            <option value="averageOrderValue">Ortalama Sipariş Tutarına Göre Sırala</option>
          </select>
          
          <button 
            @click="sortAscending = !sortAscending" 
            class="p-2 bg-gray-200 hover:bg-gray-300 rounded"
          >
            <span v-if="sortAscending">▲</span>
            <span v-else>▼</span>
          </button>
        </div>
      </div>

      <!-- Müşteri tablosu -->
      <div class="overflow-x-auto mb-6">
        <table class="min-w-full bg-white border border-gray-300">
          <thead>
            <tr class="bg-gray-100">
              <th class="py-2 px-4 border-b text-left">Şirket Adı</th>
              <th class="py-2 px-4 border-b text-left">İletişim Adı</th>
              <th class="py-2 px-4 border-b text-left">Ülke</th>
              <th class="py-2 px-4 border-b text-center">Sipariş Sayısı</th>
              <th class="py-2 px-4 border-b text-center">Toplam Tutar</th>
              <th class="py-2 px-4 border-b text-center">Ortalama Sipariş</th>
              <th class="py-2 px-4 border-b text-center">İlk Sipariş</th>
              <th class="py-2 px-4 border-b text-center">Son Sipariş</th>
              <th class="py-2 px-4 border-b text-center">İşlemler</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="customer in sortedAndFilteredCustomers" :key="customer.customerId" class="hover:bg-gray-50">
              <td class="py-2 px-4 border-b font-medium">
                <NuxtLink 
                  :to="`/customers/${customer.customerId}`" 
                  class="text-blue-600 hover:text-blue-800"
                >
                  {{ customer.companyName }}
                </NuxtLink>
              </td>
              <td class="py-2 px-4 border-b">{{ customer.contactName }}</td>
              <td class="py-2 px-4 border-b">{{ customer.country || '-' }}</td>
              <td class="py-2 px-4 border-b text-center">
                <span 
                  :class="{
                    'px-2 py-1 rounded-full text-xs font-medium': true,
                    'bg-green-100 text-green-800': customer.totalOrders > 0,
                    'bg-red-100 text-red-800': customer.totalOrders === 0
                  }"
                >
                  {{ customer.totalOrders }}
                </span>
              </td>
              <td class="py-2 px-4 border-b text-right font-bold">{{ formatCurrency(customer.totalOrderValue) }}</td>
              <td class="py-2 px-4 border-b text-right">{{ formatCurrency(customer.averageOrderValue) }}</td>
              <td class="py-2 px-4 border-b text-center">{{ formatDate(customer.firstOrderDate) }}</td>
              <td class="py-2 px-4 border-b text-center">
                <span 
                  :class="{
                    'text-xs': true,
                    'text-yellow-600': isOldCustomer(customer),
                    'text-green-600': !isOldCustomer(customer) && customer.lastOrderDate
                  }"
                >
                  {{ formatDate(customer.lastOrderDate) }}
                  <span v-if="customer.daysSinceLastOrder" class="block text-xs mt-1">
                    ({{ customer.daysSinceLastOrder }} gün önce)
                  </span>
                </span>
              </td>
              <td class="py-2 px-4 border-b text-center">
                <NuxtLink 
                  v-if="customer.totalOrders > 0"
                  :to="`/customers/${customer.customerId}/orders`"
                  class="text-blue-600 hover:text-blue-800 mr-2"
                >
                  Siparişler
                </NuxtLink>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <!-- En çok sipariş veren müşteriler -->
      <div class="mb-6">
        <h2 class="text-xl font-semibold mb-4">En Çok Sipariş Veren 10 Müşteri</h2>
        <div class="bg-white p-4 rounded shadow">
          <div v-for="customer in topCustomers" :key="customer.customerId" class="mb-3">
            <div class="flex items-center mb-1">
              <div class="w-1/3 font-medium truncate">{{ customer.companyName }}</div>
              <div class="w-2/3">
                <div class="text-sm text-gray-500">{{ formatCurrency(customer.totalOrderValue) }}</div>
              </div>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2.5">
              <div 
                class="bg-blue-600 h-2.5 rounded-full" 
                :style="{ width: `${(customer.totalOrderValue / topCustomers[0].totalOrderValue) * 100}%` }"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const { data: customerStats, pending, error } = await useFetch('/api/statistics/customer-purchases')

// Filtreleme ve sıralama için state
const searchQuery = ref('')
const sortOption = ref('totalOrderValue')
const sortAscending = ref(false)

// Toplam ve ortalama değerleri hesaplama
const totalOrders = computed(() => {
  if (!customerStats.value) return 0
  return customerStats.value.reduce((sum, customer) => sum + customer.totalOrders, 0)
})

const averageOrderValue = computed(() => {
  if (!customerStats.value || !totalOrders.value) return 0
  const totalValue = customerStats.value.reduce((sum, customer) => sum + customer.totalOrderValue, 0)
  return totalValue / totalOrders.value
})

// Aktif müşteri sayısı (en az 1 siparişi olan)
const activeCustomerCount = computed(() => {
  if (!customerStats.value) return 0
  return customerStats.value.filter(customer => customer.totalOrders > 0).length
})

// En çok sipariş veren 10 müşteri
const topCustomers = computed(() => {
  if (!customerStats.value) return []
  return [...customerStats.value]
    .filter(customer => customer.totalOrders > 0)
    .sort((a, b) => b.totalOrderValue - a.totalOrderValue)
    .slice(0, 10)
})

// Müşteri son siparişi 3 aydan eski mi?
function isOldCustomer(customer) {
  if (!customer.lastOrderDate || !customer.daysSinceLastOrder) return false
  return customer.daysSinceLastOrder > 90
}

// Filtrelenmiş ve sıralanmış müşteriler
const sortedAndFilteredCustomers = computed(() => {
  if (!customerStats.value) return []
  
  let filtered = customerStats.value
  
  // Arama filtresi
  if (searchQuery.value.trim()) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(customer => 
      customer.companyName.toLowerCase().includes(query) ||
      (customer.contactName && customer.contactName.toLowerCase().includes(query)) ||
      (customer.country && customer.country.toLowerCase().includes(query))
    )
  }
  
  // Sıralama
  const sorted = [...filtered].sort((a, b) => {
    let comparison = 0
    
    switch (sortOption.value) {
      case 'totalOrderValue':
        comparison = a.totalOrderValue - b.totalOrderValue
        break
      case 'totalOrders':
        comparison = a.totalOrders - b.totalOrders
        break
      case 'companyName':
        comparison = a.companyName.localeCompare(b.companyName)
        break
      case 'averageOrderValue':
        comparison = a.averageOrderValue - b.averageOrderValue
        break
      default:
        comparison = a.totalOrderValue - b.totalOrderValue
    }
    
    return sortAscending.value ? comparison : -comparison
  })
  
  return sorted
})

// Para birimi formatı
function formatCurrency(value) {
  if (value == null) return '-'
  return new Intl.NumberFormat('tr-TR', {
    style: 'currency',
    currency: 'USD'
  }).format(value)
}

// Tarih formatı
function formatDate(date) {
  if (!date) return '-'
  return new Intl.DateTimeFormat('tr-TR', { 
    day: '2-digit', 
    month: '2-digit', 
    year: 'numeric' 
  }).format(new Date(date))
}
</script> 