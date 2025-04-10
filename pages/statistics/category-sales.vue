<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">Kategori Bazlı Satış Analizi</h1>
    
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
          <div class="text-blue-500 text-lg font-bold">Kategori Sayısı</div>
          <div class="text-2xl">{{ categoryStats.length }}</div>
        </div>
        
        <div class="bg-green-100 border-l-4 border-green-500 p-4 rounded shadow">
          <div class="text-green-500 text-lg font-bold">Toplam Satış</div>
          <div class="text-2xl">{{ formatCurrency(totalSales) }}</div>
        </div>
        
        <div class="bg-purple-100 border-l-4 border-purple-500 p-4 rounded shadow">
          <div class="text-purple-500 text-lg font-bold">En Yüksek Kategori</div>
          <div class="text-2xl">{{ topCategory?.categoryName || '-' }}</div>
        </div>
        
        <div class="bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded shadow">
          <div class="text-yellow-500 text-lg font-bold">Toplam Ürün</div>
          <div class="text-2xl">{{ totalProducts }}</div>
        </div>
      </div>
      
      <!-- Kategori dağılım grafiği -->
      <div class="mb-6">
        <h2 class="text-xl font-semibold mb-4">Kategori Bazlı Satış Dağılımı</h2>
        <div class="bg-white p-4 rounded shadow">
          <div v-for="category in categoryStats" :key="category.categoryId" class="mb-3">
            <div class="flex items-center mb-1">
              <div class="w-1/4 font-medium">{{ category.categoryName }}</div>
              <div class="w-3/4">
                <div class="text-sm text-gray-500">{{ formatCurrency(category.totalAmount) }} ({{ formatPercentage(category.totalAmount / totalSales) }})</div>
              </div>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2.5">
              <div 
                class="bg-blue-600 h-2.5 rounded-full" 
                :style="{ width: `${(category.totalAmount / totalSales) * 100}%` }"
              ></div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Kategori tablosu -->
      <div class="overflow-x-auto">
        <table class="min-w-full bg-white border border-gray-300">
          <thead>
            <tr class="bg-gray-100">
              <th class="py-2 px-4 border-b text-left">Kategori</th>
              <th class="py-2 px-4 border-b text-center">Ürün Sayısı</th>
              <th class="py-2 px-4 border-b text-center">Ortalama Fiyat</th>
              <th class="py-2 px-4 border-b text-center">Toplam Satış Miktarı</th>
              <th class="py-2 px-4 border-b text-center">Toplam Satış Tutarı</th>
              <th class="py-2 px-4 border-b text-center">Yüzde</th>
              <th class="py-2 px-4 border-b text-center">İşlemler</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="category in categoryStats" :key="category.categoryId" class="hover:bg-gray-50">
              <td class="py-2 px-4 border-b font-medium">{{ category.categoryName }}</td>
              <td class="py-2 px-4 border-b text-center">{{ category.productCount }}</td>
              <td class="py-2 px-4 border-b text-center">{{ formatCurrency(category.averageUnitPrice) }}</td>
              <td class="py-2 px-4 border-b text-center">{{ category.totalQuantity.toLocaleString('tr-TR') }}</td>
              <td class="py-2 px-4 border-b text-center font-bold">{{ formatCurrency(category.totalAmount) }}</td>
              <td class="py-2 px-4 border-b text-center">{{ formatPercentage(category.totalAmount / totalSales) }}</td>
              <td class="py-2 px-4 border-b text-center">
                <NuxtLink 
                  :to="`/categories/${category.categoryId}`"
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
import { computed } from 'vue'

const { data: categoryStats, pending, error } = await useFetch('/api/statistics/category-sales')

// Toplam satış
const totalSales = computed(() => {
  if (!categoryStats.value) return 0
  return categoryStats.value.reduce((sum, category) => sum + category.totalAmount, 0)
})

// Toplam ürün sayısı
const totalProducts = computed(() => {
  if (!categoryStats.value) return 0
  return categoryStats.value.reduce((sum, category) => sum + category.productCount, 0)
})

// En çok satış yapılan kategori
const topCategory = computed(() => {
  if (!categoryStats.value || categoryStats.value.length === 0) return null
  return categoryStats.value[0] // Zaten API'den satış tutarına göre sıralı geliyor
})

// Para birimi formatı
function formatCurrency(value) {
  if (value == null) return '-'
  return new Intl.NumberFormat('tr-TR', {
    style: 'currency',
    currency: 'USD'
  }).format(value)
}

// Yüzde formatı
function formatPercentage(value) {
  if (value == null) return '-'
  return new Intl.NumberFormat('tr-TR', {
    style: 'percent',
    minimumFractionDigits: 1,
    maximumFractionDigits: 1
  }).format(value)
}
</script> 