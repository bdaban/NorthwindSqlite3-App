<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">Alanlar</h1>
    
    <div v-if="pending" class="flex justify-center items-center py-8">
      <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    </div>
    
    <div v-else-if="error" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
      <strong class="font-bold">Hata!</strong>
      <span class="block sm:inline"> Alanlar yüklenirken bir sorun oluştu.</span>
    </div>
    
    <div v-else>
      <div class="mb-4 flex justify-between items-center">
        <div class="flex">
          <div class="relative">
            <input 
              v-model="searchQuery" 
              type="text" 
              placeholder="Alan ara..." 
              class="border border-gray-300 rounded-md pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
            <div class="absolute left-3 top-2.5">
              <svg class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>
        <div>
          <NuxtLink to="/regions" class="text-blue-600 hover:text-blue-800 flex items-center">
            <svg class="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
            </svg>
            Bölgelere Git
          </NuxtLink>
        </div>
      </div>
      
      <div class="overflow-x-auto">
        <table class="min-w-full bg-white border border-gray-300">
          <thead>
            <tr class="bg-gray-100">
              <th class="py-2 px-4 border-b text-left">Alan ID</th>
              <th class="py-2 px-4 border-b text-left">Alan Adı</th>
              <th class="py-2 px-4 border-b text-left">Bölge</th>
              <th class="py-2 px-4 border-b text-left">İşlemler</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="territory in filteredTerritories" :key="territory.TerritoryID" class="hover:bg-gray-50">
              <td class="py-2 px-4 border-b">{{ territory.TerritoryID }}</td>
              <td class="py-2 px-4 border-b">{{ territory.TerritoryDescription }}</td>
              <td class="py-2 px-4 border-b">
                <NuxtLink :to="`/regions/${territory.RegionID}`" class="text-blue-600 hover:text-blue-800">
                  {{ territory.Regions?.RegionDescription || '-' }}
                </NuxtLink>
              </td>
              <td class="py-2 px-4 border-b">
                <NuxtLink 
                  :to="`/territories/${territory.TerritoryID}`"
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
import { ref, computed } from 'vue'

const { data: territories, pending, error } = await useFetch('/api/territories')

const searchQuery = ref('')

const filteredTerritories = computed(() => {
  if (!territories.value) return []
  
  if (!searchQuery.value) return territories.value
  
  const query = searchQuery.value.toLowerCase()
  return territories.value.filter(territory => 
    territory.TerritoryDescription.toLowerCase().includes(query) ||
    territory.TerritoryID.toLowerCase().includes(query) ||
    territory.Regions?.RegionDescription.toLowerCase().includes(query)
  )
})
</script>