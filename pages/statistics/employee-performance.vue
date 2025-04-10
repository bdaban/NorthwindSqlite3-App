<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">Çalışan Performans Analizi</h1>
    
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
          <div class="text-blue-500 text-lg font-bold">Toplam Çalışan</div>
          <div class="text-2xl">{{ employeeStats.length }}</div>
        </div>
        
        <div class="bg-green-100 border-l-4 border-green-500 p-4 rounded shadow">
          <div class="text-green-500 text-lg font-bold">Toplam Satış</div>
          <div class="text-2xl">{{ formatCurrency(totalSales) }}</div>
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
      
      <!-- En Başarılı Çalışanlar -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <h2 class="text-xl font-semibold mb-4">En Yüksek Satış Yapan Çalışanlar</h2>
          <div class="bg-white p-4 rounded shadow">
            <div v-for="(employee, index) in topEmployeesBySales" :key="employee.employeeId" class="mb-3">
              <div class="flex items-center mb-1">
                <div class="w-1/3 font-medium">
                  {{ index + 1 }}. {{ employee.firstName }} {{ employee.lastName }}
                </div>
                <div class="w-2/3">
                  <div class="text-sm text-gray-500">{{ formatCurrency(employee.totalSales) }}</div>
                </div>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  class="bg-blue-600 h-2.5 rounded-full" 
                  :style="{ width: `${(employee.totalSales / topEmployeesBySales[0].totalSales) * 100}%` }"
                ></div>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h2 class="text-xl font-semibold mb-4">En Çok Sipariş Alan Çalışanlar</h2>
          <div class="bg-white p-4 rounded shadow">
            <div v-for="(employee, index) in topEmployeesByOrders" :key="employee.employeeId" class="mb-3">
              <div class="flex items-center mb-1">
                <div class="w-1/3 font-medium">
                  {{ index + 1 }}. {{ employee.firstName }} {{ employee.lastName }}
                </div>
                <div class="w-2/3">
                  <div class="text-sm text-gray-500">{{ employee.totalOrders }} sipariş</div>
                </div>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  class="bg-green-600 h-2.5 rounded-full" 
                  :style="{ width: `${(employee.totalOrders / topEmployeesByOrders[0].totalOrders) * 100}%` }"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Çalışan performans tablosu -->
      <div class="overflow-x-auto">
        <table class="min-w-full bg-white border border-gray-300">
          <thead>
            <tr class="bg-gray-100">
              <th class="py-2 px-4 border-b text-left">Çalışan</th>
              <th class="py-2 px-4 border-b text-left">Ünvan</th>
              <th class="py-2 px-4 border-b text-center">Toplam Sipariş</th>
              <th class="py-2 px-4 border-b text-center">Toplam Satış</th>
              <th class="py-2 px-4 border-b text-center">Ortalama Sipariş Tutarı</th>
              <th class="py-2 px-4 border-b text-center">Müşteri Sayısı</th>
              <th class="py-2 px-4 border-b text-center">Ürün Çeşitliliği</th>
              <th class="py-2 px-4 border-b text-center">İşlemler</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="employee in employeeStats" :key="employee.employeeId" class="hover:bg-gray-50">
              <td class="py-2 px-4 border-b font-medium">
                <NuxtLink 
                  :to="`/employees/${employee.employeeId}`" 
                  class="text-blue-600 hover:text-blue-800"
                >
                  {{ employee.firstName }} {{ employee.lastName }}
                </NuxtLink>
              </td>
              <td class="py-2 px-4 border-b">{{ employee.title || '-' }}</td>
              <td class="py-2 px-4 border-b text-center">
                <span 
                  :class="{
                    'px-2 py-1 rounded-full text-xs font-medium': true,
                    'bg-green-100 text-green-800': employee.totalOrders > 0,
                    'bg-red-100 text-red-800': employee.totalOrders === 0
                  }"
                >
                  {{ employee.totalOrders }}
                </span>
              </td>
              <td class="py-2 px-4 border-b text-right font-bold">{{ formatCurrency(employee.totalSales) }}</td>
              <td class="py-2 px-4 border-b text-right">{{ formatCurrency(employee.averageOrderValue) }}</td>
              <td class="py-2 px-4 border-b text-center">{{ employee.totalCustomers }}</td>
              <td class="py-2 px-4 border-b text-center">{{ employee.totalProducts }}</td>
              <td class="py-2 px-4 border-b text-center">
                <NuxtLink 
                  v-if="employee.totalOrders > 0"
                  :to="`/employees/${employee.employeeId}/orders`"
                  class="text-blue-600 hover:text-blue-800"
                >
                  Siparişler
                </NuxtLink>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <!-- Performans karşılaştırma grafikleri buraya eklenebilir -->
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const { data: employeeStats, pending, error } = await useFetch('/api/statistics/employee-performance')

// Toplam ve ortalama değerleri hesaplama
const totalSales = computed(() => {
  if (!employeeStats.value) return 0
  return employeeStats.value.reduce((sum, employee) => sum + employee.totalSales, 0)
})

const totalOrders = computed(() => {
  if (!employeeStats.value) return 0
  return employeeStats.value.reduce((sum, employee) => sum + employee.totalOrders, 0)
})

const averageOrderValue = computed(() => {
  if (!employeeStats.value || !totalOrders.value) return 0
  return totalSales.value / totalOrders.value
})

// En yüksek satış yapan çalışanlar (ilk 5)
const topEmployeesBySales = computed(() => {
  if (!employeeStats.value) return []
  return [...employeeStats.value]
    .sort((a, b) => b.totalSales - a.totalSales)
    .slice(0, 5)
})

// En çok sipariş alan çalışanlar (ilk 5)
const topEmployeesByOrders = computed(() => {
  if (!employeeStats.value) return []
  return [...employeeStats.value]
    .sort((a, b) => b.totalOrders - a.totalOrders)
    .slice(0, 5)
})

// Para birimi formatı
function formatCurrency(value) {
  if (value == null) return '-'
  return new Intl.NumberFormat('tr-TR', {
    style: 'currency',
    currency: 'USD'
  }).format(value)
}
</script> 