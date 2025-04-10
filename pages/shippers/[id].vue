<template>
  <div>
    <div class="mb-4">
      <NuxtLink to="/shippers" class="text-blue-600 hover:text-blue-800">
        &lt; Nakliyecilere Dön
      </NuxtLink>
    </div>

    <div v-if="pending" class="flex justify-center items-center py-8">
      <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    </div>
    
    <div v-else-if="error" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
      <strong class="font-bold">Hata!</strong>
      <span class="block sm:inline"> Nakliyeci bilgileri yüklenirken bir sorun oluştu.</span>
    </div>
    
    <div v-else>
      <h1 class="text-2xl font-bold mb-4">{{ shipper.CompanyName }}</h1>
      
      <div class="bg-white shadow overflow-hidden rounded-lg mb-6">
        <div class="px-4 py-5 sm:px-6">
          <h2 class="text-lg leading-6 font-medium text-gray-900">Nakliyeci Bilgileri</h2>
          <p class="mt-1 max-w-2xl text-sm text-gray-500">Nakliyecinin detaylı bilgileri</p>
        </div>
        <div class="border-t border-gray-200">
          <dl>
            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">Şirket Adı</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{{ shipper.CompanyName }}</dd>
            </div>
            <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">Telefon</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{{ shipper.Phone || '-' }}</dd>
            </div>
          </dl>
        </div>
      </div>
      
      <div class="mt-6">
        <h2 class="text-xl font-semibold mb-3">Nakliyecinin Siparişleri</h2>
        <NuxtLink 
          :to="`/shippers/${shipper.ShipperID}/orders`"
          class="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Siparişleri Görüntüle
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const shipperId = route.params.id

const { data: shipper, pending, error } = await useFetch(`/api/shippers/${shipperId}`)
</script> 