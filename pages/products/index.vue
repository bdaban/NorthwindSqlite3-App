<template>
  <div>
    <div class="bg-white p-6 rounded-lg shadow-md">
      <div class="flex justify-between items-center mb-6">
        <h1 class="text-2xl font-bold text-gray-800 flex items-center">
          <Icon name="mdi:package-variant" class="w-7 h-7 mr-2 text-blue-600" />
          Ürünler
        </h1>
        <div class="flex space-x-2">
          <div class="relative">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Icon name="mdi:magnify" class="w-5 h-5 text-gray-400" />
            </div>
            <input 
              v-model="searchTerm" 
              type="text" 
              placeholder="Ürün ara..." 
              class="pl-10 pr-4 py-2 border rounded-lg"
            />
          </div>
          <NuxtLink to="/products/new" class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center">
            <Icon name="mdi:plus" class="w-5 h-5 mr-1" />
            Yeni Ürün
          </NuxtLink>
        </div>
      </div>

      <div v-if="pending" class="flex justify-center py-8">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>

      <div v-else-if="error" class="py-8 text-center">
        <Icon name="mdi:alert-circle" class="w-12 h-12 text-red-500 mx-auto mb-2" />
        <p class="text-red-500">{{ error.message }}</p>
      </div>

      <div v-else-if="products.length === 0" class="py-8 text-center">
        <Icon name="mdi:package-variant-remove" class="w-12 h-12 text-gray-400 mx-auto mb-2" />
        <p class="text-gray-500">Ürün bulunamadı.</p>
      </div>

      <div v-else>
        <div class="overflow-x-auto">
          <table class="min-w-full bg-white">
            <thead class="bg-gray-100">
              <tr>
                <th class="py-3 px-4 text-left">ID</th>
                <th class="py-3 px-4 text-left">Ürün Adı</th>
                <th class="py-3 px-4 text-left">
                  <div class="flex items-center">
                    <Icon name="mdi:shape" class="w-4 h-4 mr-1" />
                    Kategori
                  </div>
                </th>
                <th class="py-3 px-4 text-left">
                  <div class="flex items-center">
                    <Icon name="mdi:currency-usd" class="w-4 h-4 mr-1" />
                    Fiyat
                  </div>
                </th>
                <th class="py-3 px-4 text-left">
                  <div class="flex items-center">
                    <Icon name="mdi:package-variant-closed" class="w-4 h-4 mr-1" />
                    Stok
                  </div>
                </th>
                <th class="py-3 px-4 text-left">İşlemler</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="product in filteredProducts" :key="product.ProductID" class="border-b hover:bg-gray-50">
                <td class="py-3 px-4">{{ product.ProductID }}</td>
                <td class="py-3 px-4 font-medium">{{ product.ProductName }}</td>
                <td class="py-3 px-4">{{ product.Categories?.CategoryName || 'Belirtilmemiş' }}</td>
                <td class="py-3 px-4">{{ product.UnitPrice }}</td>
                <td class="py-3 px-4">
                  <span :class="product.UnitsInStock > 0 ? 'text-green-600' : 'text-red-600'">
                    {{ product.UnitsInStock }}
                  </span>
                </td>
                <td class="py-3 px-4">
                  <div class="flex space-x-2">
                    <NuxtLink :to="`/products/${product.ProductID}`" class="text-blue-600 hover:text-blue-800 flex items-center">
                      <Icon name="mdi:eye" class="w-5 h-5 mr-1" />
                      Detay
                    </NuxtLink>
                    <NuxtLink :to="`/products/edit/${product.ProductID}`" class="text-amber-600 hover:text-amber-800 flex items-center">
                      <Icon name="mdi:pencil" class="w-5 h-5 mr-1" />
                      Düzenle
                    </NuxtLink>
                  </div>
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
import { ref, computed } from 'vue'

definePageMeta({
  title: 'Ürünler'
})

const searchTerm = ref('')

const { data: products, pending, error } = await useFetch('/api/products')

const filteredProducts = computed(() => {
  if (!searchTerm.value) return products.value

  const term = searchTerm.value.toLowerCase()
  return products.value.filter(product => 
    product.ProductName.toLowerCase().includes(term) || 
    product.Categories?.CategoryName?.toLowerCase().includes(term)
  )
})
</script> 