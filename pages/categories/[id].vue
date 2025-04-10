<template>
  <div>
    <div class="bg-white p-6 rounded-lg shadow-md">
      <div class="mb-6">
        <NuxtLink to="/categories" class="text-blue-600 hover:underline flex items-center">
          <span class="mr-1">←</span> Kategorilere Dön
        </NuxtLink>
      </div>

      <div v-if="pending" class="flex justify-center py-8">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>

      <div v-else-if="error">
        <p class="text-red-500">{{ error.message }}</p>
      </div>

      <div v-else-if="!category" class="py-8 text-center">
        <p class="text-gray-500">Kategori bulunamadı.</p>
      </div>

      <div v-else>
        <h1 class="text-2xl font-bold text-gray-800 mb-4">{{ category.CategoryName }}</h1>
        
        <div class="mb-8">
          <div class="bg-green-50 p-4 rounded-lg mb-6">
            <h2 class="text-lg font-semibold text-green-800 mb-2">Kategori Bilgileri</h2>
            <p v-if="category.Description" class="text-green-700">{{ category.Description }}</p>
            <p v-else class="text-gray-500 italic">Açıklama bulunmuyor</p>
          </div>
        </div>

        <div v-if="products && products.length > 0">
          <h2 class="text-xl font-semibold text-gray-800 mb-4">Bu Kategorideki Ürünler</h2>
          
          <div class="overflow-x-auto">
            <table class="min-w-full bg-white">
              <thead class="bg-gray-100">
                <tr>
                  <th class="py-3 px-4 text-left">ID</th>
                  <th class="py-3 px-4 text-left">Ürün Adı</th>
                  <th class="py-3 px-4 text-left">Fiyat</th>
                  <th class="py-3 px-4 text-left">Stok</th>
                  <th class="py-3 px-4 text-left">İşlemler</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="product in products" :key="product.ProductID" class="border-b hover:bg-gray-50">
                  <td class="py-3 px-4">{{ product.ProductID }}</td>
                  <td class="py-3 px-4">{{ product.ProductName }}</td>
                  <td class="py-3 px-4">{{ product.UnitPrice }}</td>
                  <td class="py-3 px-4">{{ product.UnitsInStock }}</td>
                  <td class="py-3 px-4">
                    <NuxtLink :to="`/products/${product.ProductID}`" class="text-blue-600 hover:underline">
                      Detay
                    </NuxtLink>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div v-else class="py-4 text-center bg-gray-50 rounded-lg">
          <p class="text-gray-500">Bu kategoride ürün bulunmamaktadır.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const categoryId = parseInt(route.params.id)

const { data: category, pending, error } = await useFetch(`/api/categories/${categoryId}`)
const { data: products } = await useFetch(`/api/categories/${categoryId}/products`)
</script> 