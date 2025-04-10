<template>
  <div>
    <div class="mb-4">
      <NuxtLink to="/regions" class="text-blue-600 hover:text-blue-800">
        &lt; Bölgelere Dön
      </NuxtLink>
    </div>

    <div v-if="pendingRegion || pendingTerritories" class="flex justify-center items-center py-8">
      <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    </div>
    
    <div v-else-if="errorRegion || errorTerritories" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
      <strong class="font-bold">Hata!</strong>
      <span class="block sm:inline"> Veriler yüklenirken bir sorun oluştu.</span>
    </div>
    
    <div v-else>
      <div class="mb-8">
        <h1 class="text-2xl font-bold mb-4">{{ region.RegionDescription }}</h1>
        <div class="bg-white shadow overflow-hidden rounded-lg mb-6">
          <div class="px-4 py-5 sm:px-6 bg-gray-50">
            <h2 class="text-lg leading-6 font-medium text-gray-900">Bölge Bilgileri</h2>
            <p class="mt-1 max-w-2xl text-sm text-gray-500">Bölge detay bilgileri</p>
          </div>
          <div class="border-t border-gray-200">
            <dl>
              <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">Bölge ID</dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{{ region.RegionID }}</dd>
              </div>
              <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">Bölge Adı</dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{{ region.RegionDescription }}</dd>
              </div>
              <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">Alan Sayısı</dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{{ territories.length }}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
      
      <div>
        <h2 class="text-xl font-semibold mb-4">Bölgeye Ait Alanlar</h2>
        
        <div v-if="territories.length === 0" class="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded relative" role="alert">
          <span class="block sm:inline">Bu bölgeye ait alan bulunamadı.</span>
        </div>
        
        <div v-else class="overflow-x-auto">
          <table class="min-w-full bg-white border border-gray-300">
            <thead>
              <tr class="bg-gray-100">
                <th class="py-2 px-4 border-b text-left">Alan ID</th>
                <th class="py-2 px-4 border-b text-left">Alan Adı</th>
                <th class="py-2 px-4 border-b text-left">İşlemler</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="territory in territories" :key="territory.TerritoryID" class="hover:bg-gray-50">
                <td class="py-2 px-4 border-b">{{ territory.TerritoryID }}</td>
                <td class="py-2 px-4 border-b">{{ territory.TerritoryDescription }}</td>
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
  </div>
</template>

<script setup>
const route = useRoute()
const regionId = route.params.id

const { data: region, pending: pendingRegion, error: errorRegion } = await useFetch(`/api/regions/${regionId}`)
const { data: territories, pending: pendingTerritories, error: errorTerritories } = await useFetch(`/api/regions/${regionId}/territories`)
</script> 