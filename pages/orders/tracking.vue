<template>
  <div>
    <div class="bg-white p-6 rounded-lg shadow-md">
      <div class="mb-6">
        <NuxtLink to="/orders" class="text-blue-600 hover:underline flex items-center">
          <Icon name="mdi:arrow-left" class="mr-1" /> Siparişlere Dön
        </NuxtLink>
      </div>

      <h1 class="text-2xl font-bold text-gray-800 mb-6 flex items-center">
        <Icon name="mdi:truck-delivery" class="mr-2 text-purple-600" /> Sipariş Durum Takibi
      </h1>
      
      <div class="mb-6">
        <div class="flex space-x-4">
          <div class="flex-grow relative">
            <input 
              v-model="searchTerm" 
              type="text" 
              placeholder="Sipariş ID, müşteri adı veya durum ile ara..." 
              class="w-full pl-10 pr-4 py-2 border rounded-lg"
            />
            <Icon name="mdi:magnify" class="absolute left-3 top-2.5 text-gray-400" />
          </div>
          <div>
            <div class="relative">
              <select v-model="statusFilter" class="pl-9 pr-4 py-2 border rounded-lg appearance-none">
                <option value="">Tüm Durumlar</option>
                <option value="Beklemede">Beklemede</option>
                <option value="İşleniyor">İşleniyor</option>
                <option value="Kargoda">Kargoda</option>
                <option value="Teslim Edildi">Teslim Edildi</option>
                <option value="İptal Edildi">İptal Edildi</option>
              </select>
              <Icon name="mdi:filter-variant" class="absolute left-3 top-2.5 text-gray-400" />
              <Icon name="mdi:chevron-down" class="absolute right-3 top-2.5 text-gray-400" />
            </div>
          </div>
          <div>
            <button 
              @click="loadOrders" 
              class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center"
            >
              <Icon name="mdi:refresh" class="mr-1" /> Yenile
            </button>
          </div>
        </div>
      </div>

      <div v-if="isLoading" class="flex justify-center py-8">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>

      <div v-else-if="error" class="py-8 text-center">
        <Icon name="mdi:alert-circle" class="mx-auto mb-2 text-4xl text-red-500" />
        <p class="text-red-500">{{ error }}</p>
      </div>

      <div v-else-if="filteredOrders.length === 0" class="py-8 text-center">
        <Icon name="mdi:truck-off" class="mx-auto mb-2 text-4xl text-gray-400" />
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
                <th class="py-3 px-4 text-left">Durum</th>
                <th class="py-3 px-4 text-left">Nakliyeci</th>
                <th class="py-3 px-4 text-left">Tahmini Teslimat</th>
                <th class="py-3 px-4 text-left">Gerçek Teslimat</th>
                <th class="py-3 px-4 text-left">İşlemler</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="order in filteredOrders" :key="order.OrderID" class="border-b hover:bg-gray-50">
                <td class="py-3 px-4"># {{ order.OrderID }}</td>
                <td class="py-3 px-4 flex items-center">
                  <Icon name="mdi:account" class="mr-1 text-gray-500" /> {{ order.CustomerName }}
                </td>
                <td class="py-3 px-4 flex items-center">
                  <Icon name="mdi:calendar" class="mr-1 text-gray-500" /> {{ formatDate(order.OrderDate) }}
                </td>
                <td class="py-3 px-4">
                  <span 
                    :class="getStatusClass(order.Status)" 
                    class="px-2 py-1 rounded-full text-xs font-medium flex items-center inline-flex"
                  >
                    <Icon :name="getStatusIcon(order.Status)" class="mr-1" />
                    {{ order.Status }}
                  </span>
                </td>
                <td class="py-3 px-4 flex items-center">
                  <Icon name="mdi:truck-fast" class="mr-1 text-gray-500" /> {{ order.ShipperName }}
                </td>
                <td class="py-3 px-4 flex items-center">
                  <Icon name="mdi:calendar-clock" class="mr-1 text-gray-500" /> {{ formatDate(order.RequiredDate) }}
                </td>
                <td class="py-3 px-4">
                  <span v-if="order.ShippedDate" class="flex items-center">
                    <Icon name="mdi:calendar-check" class="mr-1 text-green-500" /> {{ formatDate(order.ShippedDate) }}
                  </span>
                  <span v-else class="flex items-center text-amber-500">
                    <Icon name="mdi:calendar-alert" class="mr-1" /> Belirtilmemiş
                  </span>
                </td>
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

      <!-- Sipariş Durumu İstatistikleri -->
      <div class="mt-8 grid grid-cols-1 md:grid-cols-5 gap-4">
        <div class="bg-gray-50 p-4 rounded-lg border">
          <div class="text-center">
            <span class="block text-sm text-gray-500 flex items-center justify-center">
              <Icon name="mdi:clipboard-list" class="mr-1" /> Toplam Sipariş
            </span>
            <span class="block text-2xl font-bold text-gray-800">{{ orderStats.total }}</span>
          </div>
        </div>
        
        <div class="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
          <div class="text-center">
            <span class="block text-sm text-yellow-600 flex items-center justify-center">
              <Icon name="mdi:clock-outline" class="mr-1" /> Beklemede
            </span>
            <span class="block text-2xl font-bold text-yellow-800">{{ orderStats.waiting }}</span>
          </div>
        </div>
        
        <div class="bg-blue-50 p-4 rounded-lg border border-blue-200">
          <div class="text-center">
            <span class="block text-sm text-blue-600 flex items-center justify-center">
              <Icon name="mdi:cog" class="mr-1" /> İşleniyor
            </span>
            <span class="block text-2xl font-bold text-blue-800">{{ orderStats.processing }}</span>
          </div>
        </div>
        
        <div class="bg-purple-50 p-4 rounded-lg border border-purple-200">
          <div class="text-center">
            <span class="block text-sm text-purple-600 flex items-center justify-center">
              <Icon name="mdi:truck-delivery-outline" class="mr-1" /> Kargoda
            </span>
            <span class="block text-2xl font-bold text-purple-800">{{ orderStats.shipping }}</span>
          </div>
        </div>
        
        <div class="bg-green-50 p-4 rounded-lg border border-green-200">
          <div class="text-center">
            <span class="block text-sm text-green-600 flex items-center justify-center">
              <Icon name="mdi:check-circle" class="mr-1" /> Teslim Edildi
            </span>
            <span class="block text-2xl font-bold text-green-800">{{ orderStats.delivered }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

definePageMeta({
  title: 'Sipariş Durum Takibi'
})

const orders = ref([])
const isLoading = ref(true)
const error = ref(null)
const searchTerm = ref('')
const statusFilter = ref('')

// İstatistikler
const orderStats = computed(() => {
  if (!orders.value) return { total: 0, waiting: 0, processing: 0, shipping: 0, delivered: 0, cancelled: 0 }
  
  const stats = {
    total: orders.value.length,
    waiting: orders.value.filter(o => o.Status === 'Beklemede').length,
    processing: orders.value.filter(o => o.Status === 'İşleniyor').length,
    shipping: orders.value.filter(o => o.Status === 'Kargoda').length,
    delivered: orders.value.filter(o => o.Status === 'Teslim Edildi').length,
    cancelled: orders.value.filter(o => o.Status === 'İptal Edildi').length
  }
  
  return stats
})

// Filtreleme
const filteredOrders = computed(() => {
  if (!orders.value) return []
  
  let filtered = orders.value
  
  // Durum filtresi
  if (statusFilter.value) {
    filtered = filtered.filter(order => order.Status === statusFilter.value)
  }
  
  // Arama filtresi
  if (searchTerm.value) {
    const term = searchTerm.value.toLowerCase()
    filtered = filtered.filter(order => 
      order.OrderID.toString().includes(term) ||
      order.CustomerName.toLowerCase().includes(term) ||
      order.Status.toLowerCase().includes(term)
    )
  }
  
  return filtered
})

// Sipariş durumuna göre renk sınıfını belirle
function getStatusClass(status) {
  switch (status) {
    case 'Beklemede':
      return 'bg-yellow-100 text-yellow-800'
    case 'İşleniyor':
      return 'bg-blue-100 text-blue-800'
    case 'Kargoda':
      return 'bg-purple-100 text-purple-800'
    case 'Teslim Edildi':
      return 'bg-green-100 text-green-800'
    case 'İptal Edildi':
      return 'bg-red-100 text-red-800'
    default:
      return 'bg-gray-100 text-gray-800'
  }
}

// Sipariş durumuna göre ikon belirle
function getStatusIcon(status) {
  switch (status) {
    case 'Beklemede':
      return 'mdi:clock-outline'
    case 'İşleniyor':
      return 'mdi:cog'
    case 'Kargoda':
      return 'mdi:truck-delivery-outline'
    case 'Teslim Edildi':
      return 'mdi:check-circle'
    case 'İptal Edildi':
      return 'mdi:close-circle'
    default:
      return 'mdi:help-circle'
  }
}

// Siparişleri API'den yükle
async function loadOrders() {
  isLoading.value = true
  error.value = null
  
  try {
    // Siparişleri al
    const { data } = await useFetch('/api/orders')
    
    // Her sipariş için durum bilgisi ve müşteri adını ekleyelim
    const processedOrders = await Promise.all(data.value.map(async order => {
      let status = 'Beklemede'
      
      // Durum belirleme
      if (order.ShippedDate) {
        status = 'Teslim Edildi'
      } else if (order.ShipVia) {
        status = 'Kargoda'
      } else {
        status = 'İşleniyor'
      }
      
      return {
        ...order,
        Status: status,
        CustomerName: order.Customers?.CompanyName || 'Belirtilmemiş',
        ShipperName: order.Shippers?.CompanyName || 'Belirtilmemiş'
      }
    }))
    
    orders.value = processedOrders
  } catch (err) {
    console.error('Siparişler yüklenirken hata:', err)
    error.value = 'Siparişler yüklenirken bir hata oluştu.'
  } finally {
    isLoading.value = false
  }
}

function formatDate(dateString) {
  if (!dateString) return 'Belirtilmemiş'
  
  const date = new Date(dateString)
  return new Intl.DateTimeFormat('tr-TR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  }).format(date)
}

// Sayfa yüklendiğinde siparişleri getir
onMounted(() => {
  loadOrders()
})
</script> 