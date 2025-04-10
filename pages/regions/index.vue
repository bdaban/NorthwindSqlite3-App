<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">Bölgeler</h1>
    
    <div v-if="pending" class="flex justify-center items-center py-8">
      <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    </div>
    
    <div v-else-if="error" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
      <strong class="font-bold">Hata!</strong>
      <span class="block sm:inline"> Bölgeler yüklenirken bir sorun oluştu.</span>
    </div>
    
    <div v-else>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="region in regions" :key="region.RegionID" class="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
          <h2 class="text-xl font-semibold mb-3">{{ region.RegionDescription }}</h2>
          <div class="flex items-center mb-4">
            <div class="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
              {{ region._count.Territories }} Alan
            </div>
          </div>
          <div class="flex justify-end">
            <NuxtLink 
              :to="`/regions/${region.RegionID}`"
              class="inline-flex items-center text-blue-600 hover:text-blue-800"
            >
              Detayları Görüntüle
              <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { data: regions, pending, error } = await useFetch('/api/regions')
</script> 