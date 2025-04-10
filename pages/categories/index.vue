<template>
  <div>
    <div class="bg-white p-6 rounded-lg shadow-md">
      <div class="flex justify-between items-center mb-6">
        <h1 class="text-2xl font-bold text-gray-800">Kategoriler</h1>
        <div class="flex space-x-2">
          <input 
            v-model="searchTerm" 
            type="text" 
            placeholder="Kategori ara..." 
            class="px-4 py-2 border rounded-lg"
          />
        </div>
      </div>

      <div v-if="pending" class="flex justify-center py-8">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>

      <div v-else-if="error">
        <p class="text-red-500">{{ error.message }}</p>
      </div>

      <div v-else-if="categories.length === 0" class="py-8 text-center">
        <p class="text-gray-500">Kategori bulunamadı.</p>
      </div>

      <div v-else>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div 
            v-for="category in filteredCategories" 
            :key="category.CategoryID" 
            class="p-4 bg-green-50 rounded-lg border border-green-200 hover:border-green-300 hover:shadow-md transition-all"
          >
            <h2 class="text-xl font-semibold text-green-800 mb-2">{{ category.CategoryName }}</h2>
            <p v-if="category.Description" class="text-green-700 mb-4 line-clamp-2">{{ category.Description }}</p>
            <p v-else class="text-gray-500 mb-4 italic">Açıklama bulunmuyor</p>
            <div class="mt-4">
              <NuxtLink :to="`/categories/${category.CategoryID}`" class="text-blue-600 hover:underline">
                Detay
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

definePageMeta({
  title: 'Kategoriler'
})

const searchTerm = ref('')

const { data: categories, pending, error } = await useFetch('/api/categories')

const filteredCategories = computed(() => {
  if (!searchTerm.value) return categories.value

  const term = searchTerm.value.toLowerCase()
  return categories.value.filter(category => 
    category.CategoryName.toLowerCase().includes(term) || 
    (category.Description && category.Description.toLowerCase().includes(term))
  )
})
</script> 