<template>
  <div>
    <div class="bg-white p-6 rounded-lg shadow-md">
      <div class="mb-6">
        <NuxtLink to="/suppliers" class="text-blue-600 hover:text-blue-800 flex items-center">
          <Icon name="mdi:arrow-left" class="w-5 h-5 mr-1" />
          Tedarikçilere Dön
        </NuxtLink>
      </div>

      <div v-if="pending" class="flex justify-center py-8">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
      
      <div v-else-if="error" class="py-8 text-center">
        <Icon name="mdi:alert-circle" class="w-12 h-12 text-red-500 mx-auto mb-2" />
        <p class="text-red-500">Tedarikçi bilgileri yüklenirken bir sorun oluştu.</p>
      </div>
      
      <div v-else-if="!supplier" class="py-8 text-center">
        <Icon name="mdi:truck-remove" class="w-12 h-12 text-gray-400 mx-auto mb-2" />
        <p class="text-gray-500">Tedarikçi bulunamadı.</p>
      </div>
      
      <div v-else>
        <h1 class="text-2xl font-bold text-gray-800 mb-6 flex items-center">
          <Icon name="mdi:domain" class="w-7 h-7 mr-2 text-blue-600" />
          {{ supplier.CompanyName }}
        </h1>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <div class="bg-blue-50 p-4 rounded-lg">
              <h2 class="text-lg font-semibold text-blue-800 mb-3 flex items-center">
                <Icon name="mdi:information-outline" class="w-5 h-5 mr-2 text-blue-700" />
                Tedarikçi Bilgileri
              </h2>
              
              <div class="space-y-3">
                <p class="flex items-center">
                  <Icon name="mdi:pound" class="w-5 h-5 mr-2 text-blue-500" />
                  <span class="font-medium">Tedarikçi ID:</span> 
                  <span class="ml-2">{{ supplier.SupplierID }}</span>
                </p>
                <p class="flex items-center">
                  <Icon name="mdi:domain" class="w-5 h-5 mr-2 text-blue-500" />
                  <span class="font-medium">Şirket Adı:</span> 
                  <span class="ml-2">{{ supplier.CompanyName }}</span>
                </p>
                <p class="flex items-center">
                  <Icon name="mdi:account" class="w-5 h-5 mr-2 text-blue-500" />
                  <span class="font-medium">İletişim Adı:</span> 
                  <span class="ml-2">{{ supplier.ContactName }}</span>
                </p>
                <p class="flex items-center">
                  <Icon name="mdi:card-account-details" class="w-5 h-5 mr-2 text-blue-500" />
                  <span class="font-medium">İletişim Ünvanı:</span> 
                  <span class="ml-2">{{ supplier.ContactTitle }}</span>
                </p>
              </div>
            </div>
          </div>

          <div>
            <div class="bg-green-50 p-4 rounded-lg">
              <h2 class="text-lg font-semibold text-green-800 mb-3 flex items-center">
                <Icon name="mdi:contacts" class="w-5 h-5 mr-2 text-green-700" />
                İletişim Bilgileri
              </h2>
              
              <div class="space-y-3">
                <p class="flex items-start">
                  <Icon name="mdi:map-marker" class="w-5 h-5 mr-2 text-green-500 mt-0.5" />
                  <span class="font-medium">Adres:</span> 
                  <span class="ml-2">{{ supplier.Address }}</span>
                </p>
                <p class="flex items-center">
                  <Icon name="mdi:city" class="w-5 h-5 mr-2 text-green-500" />
                  <span class="font-medium">Şehir:</span> 
                  <span class="ml-2">{{ supplier.City }}</span>
                </p>
                <p v-if="supplier.Region" class="flex items-center">
                  <Icon name="mdi:map" class="w-5 h-5 mr-2 text-green-500" />
                  <span class="font-medium">Bölge:</span> 
                  <span class="ml-2">{{ supplier.Region }}</span>
                </p>
                <p class="flex items-center">
                  <Icon name="mdi:mail" class="w-5 h-5 mr-2 text-green-500" />
                  <span class="font-medium">Posta Kodu:</span> 
                  <span class="ml-2">{{ supplier.PostalCode || '-' }}</span>
                </p>
                <p class="flex items-center">
                  <Icon name="mdi:earth" class="w-5 h-5 mr-2 text-green-500" />
                  <span class="font-medium">Ülke:</span> 
                  <span class="ml-2">{{ supplier.Country }}</span>
                </p>
                <p class="flex items-center">
                  <Icon name="mdi:phone" class="w-5 h-5 mr-2 text-green-500" />
                  <span class="font-medium">Telefon:</span> 
                  <span class="ml-2">{{ supplier.Phone }}</span>
                </p>
                <p class="flex items-center">
                  <Icon name="mdi:fax" class="w-5 h-5 mr-2 text-green-500" />
                  <span class="font-medium">Faks:</span> 
                  <span class="ml-2">{{ supplier.Fax || '-' }}</span>
                </p>
                <p v-if="supplier.HomePage" class="flex items-center">
                  <Icon name="mdi:web" class="w-5 h-5 mr-2 text-green-500" />
                  <span class="font-medium">Web Sayfası:</span> 
                  <span class="ml-2">{{ supplier.HomePage }}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="bg-yellow-50 p-4 rounded-lg mb-6">
          <h2 class="text-lg font-semibold text-yellow-800 mb-3 flex items-center">
            <Icon name="mdi:package-variant" class="w-5 h-5 mr-2 text-yellow-700" />
            Tedarikçinin Ürünleri
          </h2>
          
          <div class="flex flex-col sm:flex-row sm:items-center gap-4">
            <p class="text-gray-700">Bu tedarikçinin sağladığı tüm ürünleri görüntüleyin.</p>
            <NuxtLink 
              :to="`/suppliers/${supplier.SupplierID}/products`"
              class="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg flex items-center w-fit"
            >
              <Icon name="mdi:format-list-bulleted" class="w-5 h-5 mr-1" />
              Ürünleri Görüntüle
            </NuxtLink>
          </div>
        </div>
        
        <div class="mt-8 flex">
          <NuxtLink :to="`/suppliers/edit/${supplier.SupplierID}`" class="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg flex items-center mr-2">
            <Icon name="mdi:pencil" class="w-5 h-5 mr-1" />
            Düzenle
          </NuxtLink>
          <button class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg flex items-center">
            <Icon name="mdi:delete" class="w-5 h-5 mr-1" />
            Sil
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const supplierId = parseInt(route.params.id)

const { data: supplier, pending, error } = await useFetch(`/api/suppliers/${supplierId}`)
</script> 