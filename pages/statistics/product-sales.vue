<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">Ürün Satış İstatistikleri</h1>
    
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
          <div class="text-blue-500 text-lg font-bold">Toplam Ürün</div>
          <div class="text-2xl">{{ productStats.length }}</div>
        </div>
        
        <div class="bg-green-100 border-l-4 border-green-500 p-4 rounded shadow">
          <div class="text-green-500 text-lg font-bold">Toplam Satış</div>
          <div class="text-2xl">{{ formatCurrency(totalSales) }}</div>
        </div>
        
        <div class="bg-purple-100 border-l-4 border-purple-500 p-4 rounded shadow">
          <div class="text-purple-500 text-lg font-bold">Ortalama Birim Fiyat</div>
          <div class="text-2xl">{{ formatCurrency(averageUnitPrice) }}</div>
        </div>
        
        <div class="bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded shadow">
          <div class="text-yellow-500 text-lg font-bold">Toplam Satılan Miktar</div>
          <div class="text-2xl">{{ totalQuantity.toLocaleString('tr-TR') }}</div>
        </div>
      </div>

      <!-- Filtreleme -->
      <div class="mb-4 flex flex-col md:flex-row gap-4">
        <div class="flex-1">
          <input 
            v-model="searchQuery" 
            type="text" 
            placeholder="Ürün ara..." 
            class="w-full p-2 border border-gray-300 rounded"
          >
        </div>
        
        <div class="flex gap-2">
          <select 
            v-model="sortOption" 
            class="p-2 border border-gray-300 rounded"
          >
            <option value="totalAmount">Satış Tutarına Göre Sırala</option>
            <option value="totalQuantity">Satış Miktarına Göre Sırala</option>
            <option value="productName">Ürün Adına Göre Sırala</option>
            <option value="unitPrice">Birim Fiyata Göre Sırala</option>
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

      <!-- Ürün tablosu -->
      <div class="overflow-x-auto mb-6">
        <table class="min-w-full bg-white border border-gray-300">
          <thead>
            <tr class="bg-gray-100">
              <th class="py-2 px-4 border-b text-left">Ürün</th>
              <th class="py-2 px-4 border-b text-left">Kategori</th>
              <th class="py-2 px-4 border-b text-right">Birim Fiyat</th>
              <th class="py-2 px-4 border-b text-right">Sipariş Sayısı</th>
              <th class="py-2 px-4 border-b text-right">Satılan Miktar</th>
              <th class="py-2 px-4 border-b text-right">Toplam Satış</th>
              <th class="py-2 px-4 border-b text-right">Stok Durumu</th>
              <th class="py-2 px-4 border-b text-center">Durum</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in sortedAndFilteredProducts" :key="product.productId" class="hover:bg-gray-50">
              <td class="py-2 px-4 border-b">
                <NuxtLink :to="`/products/${product.productId}`" class="text-blue-600 hover:text-blue-800">
                  {{ product.productName }}
                </NuxtLink>
              </td>
              <td class="py-2 px-4 border-b">
                <NuxtLink v-if="product.categoryId" :to="`/categories/${product.categoryId}`" class="text-blue-600 hover:text-blue-800">
                  {{ product.categoryName || '-' }}
                </NuxtLink>
                <span v-else>-</span>
              </td>
              <td class="py-2 px-4 border-b text-right">{{ formatCurrency(product.unitPrice) }}</td>
              <td class="py-2 px-4 border-b text-right">{{ product.totalOrders }}</td>
              <td class="py-2 px-4 border-b text-right">{{ product.totalQuantity }}</td>
              <td class="py-2 px-4 border-b text-right font-bold">{{ formatCurrency(product.totalAmount) }}</td>
              <td class="py-2 px-4 border-b text-right">{{ product.unitsInStock }}</td>
              <td class="py-2 px-4 border-b text-center">
                <span 
                  :class="{
                    'px-2 py-1 rounded text-xs font-medium': true,
                    'bg-red-100 text-red-800': product.discontinued,
                    'bg-green-100 text-green-800': !product.discontinued
                  }"
                >
                  {{ product.discontinued ? 'Üretimi Durduruldu' : 'Aktif' }}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- En çok satılan ürünler grafiği buraya eklenebilir -->
      <div class="mb-6">
        <h2 class="text-xl font-semibold mb-4">En Çok Satılan 10 Ürün</h2>
        <div class="bg-white p-4 rounded shadow">
          <div v-for="(product, index) in top10Products" :key="product.productId" class="mb-2">
            <div class="flex items-center">
              <div class="w-1/4">{{ product.productName }}</div>
              <div class="w-3/4 flex items-center">
                <div 
                  class="h-6 bg-blue-500 rounded-sm" 
                  :style="{ width: `${(product.totalAmount / top10Products[0].totalAmount) * 100}%` }"
                ></div>
                <div class="ml-2">{{ formatCurrency(product.totalAmount) }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const { data: productStats, pending, error } = await useFetch('/api/statistics/product-sales')

// Filtreleme ve sıralama için state
const searchQuery = ref('')
const sortOption = ref('totalAmount')
const sortAscending = ref(false)

// Toplam ve ortalama değerleri hesaplama
const totalSales = computed(() => {
  if (!productStats.value) return 0
  return productStats.value.reduce((sum, product) => sum + product.totalAmount, 0)
})

const averageUnitPrice = computed(() => {
  if (!productStats.value || productStats.value.length === 0) return 0
  const total = productStats.value.reduce((sum, product) => sum + Number(product.unitPrice), 0)
  return total / productStats.value.length
})

const totalQuantity = computed(() => {
  if (!productStats.value) return 0
  return productStats.value.reduce((sum, product) => sum + product.totalQuantity, 0)
})

// En çok satılan 10 ürün
const top10Products = computed(() => {
  if (!productStats.value) return []
  return [...productStats.value]
    .sort((a, b) => b.totalAmount - a.totalAmount)
    .slice(0, 10)
})

// Filtrelenmiş ve sıralanmış ürünler
const sortedAndFilteredProducts = computed(() => {
  if (!productStats.value) return []
  
  let filtered = productStats.value
  
  // Arama filtresi
  if (searchQuery.value.trim()) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(product => 
      product.productName.toLowerCase().includes(query) ||
      (product.categoryName && product.categoryName.toLowerCase().includes(query))
    )
  }
  
  // Sıralama
  const sorted = [...filtered].sort((a, b) => {
    let comparison = 0
    
    switch (sortOption.value) {
      case 'totalAmount':
        comparison = a.totalAmount - b.totalAmount
        break
      case 'totalQuantity':
        comparison = a.totalQuantity - b.totalQuantity
        break
      case 'productName':
        comparison = a.productName.localeCompare(b.productName)
        break
      case 'unitPrice':
        comparison = Number(a.unitPrice) - Number(b.unitPrice)
        break
      default:
        comparison = a.totalAmount - b.totalAmount
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
</script> 