<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">Nakliyeciler</h1>
    
    <div v-if="pending" class="flex justify-center items-center py-8">
      <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    </div>
    
    <div v-else-if="error" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
      <strong class="font-bold">Hata!</strong>
      <span class="block sm:inline"> Nakliyeciler yüklenirken bir sorun oluştu.</span>
    </div>
    
    <div v-else>
      <div class="overflow-x-auto">
        <table class="min-w-full bg-white border border-gray-300">
          <thead>
            <tr class="bg-gray-100">
              <th class="py-2 px-4 border-b text-left">Şirket Adı</th>
              <th class="py-2 px-4 border-b text-left">Telefon</th>
              <th class="py-2 px-4 border-b text-left">İşlemler</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="shipper in shippers" :key="shipper.ShipperID" class="hover:bg-gray-50">
              <td class="py-2 px-4 border-b">{{ shipper.CompanyName }}</td>
              <td class="py-2 px-4 border-b">{{ shipper.Phone || '-' }}</td>
              <td class="py-2 px-4 border-b">
                <NuxtLink 
                  :to="`/shippers/${shipper.ShipperID}`"
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
const { data: shippers, pending, error } = await useFetch('/api/shippers')
</script> 