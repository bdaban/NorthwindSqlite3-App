<template>
  <div>
    <div class="bg-white p-6 rounded-lg shadow-md">
      <div class="flex justify-between items-center mb-6">
        <h1 class="text-2xl font-bold text-gray-800 flex items-center">
          <Icon name="mdi:truck-delivery" class="w-7 h-7 mr-2 text-blue-600" />
          Tedarikçiler
        </h1>
        <div class="flex space-x-2">
          <div class="relative">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Icon name="mdi:magnify" class="w-5 h-5 text-gray-400" />
            </div>
            <input 
              v-model="searchTerm" 
              type="text" 
              placeholder="Tedarikçi ara..." 
              class="pl-10 pr-4 py-2 border rounded-lg"
            />
          </div>
          <NuxtLink to="/suppliers/new" class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center">
            <Icon name="mdi:plus" class="w-5 h-5 mr-1" />
            Yeni Tedarikçi
          </NuxtLink>
        </div>
      </div>
      
      <div v-if="pending" class="flex justify-center py-8">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
      
      <div v-else-if="error" class="py-8 text-center">
        <Icon name="mdi:alert-circle" class="w-12 h-12 text-red-500 mx-auto mb-2" />
        <p class="text-red-500">Tedarikçiler yüklenirken bir sorun oluştu.</p>
      </div>
      
      <div v-else-if="filteredSuppliers.length === 0" class="py-8 text-center">
        <Icon name="mdi:truck-remove" class="w-12 h-12 text-gray-400 mx-auto mb-2" />
        <p class="text-gray-500">Tedarikçi bulunamadı.</p>
      </div>
      
      <div v-else>
        <div class="overflow-x-auto">
          <table class="min-w-full bg-white">
            <thead class="bg-gray-100">
              <tr>
                <th class="py-3 px-4 text-left">
                  <div class="flex items-center">
                    <Icon name="mdi:domain" class="w-4 h-4 mr-1" />
                    Şirket Adı
                  </div>
                </th>
                <th class="py-3 px-4 text-left">
                  <div class="flex items-center">
                    <Icon name="mdi:account" class="w-4 h-4 mr-1" />
                    İletişim Adı
                  </div>
                </th>
                <th class="py-3 px-4 text-left">
                  <div class="flex items-center">
                    <Icon name="mdi:card-account-details" class="w-4 h-4 mr-1" />
                    İletişim Ünvanı
                  </div>
                </th>
                <th class="py-3 px-4 text-left">
                  <div class="flex items-center">
                    <Icon name="mdi:earth" class="w-4 h-4 mr-1" />
                    Ülke
                  </div>
                </th>
                <th class="py-3 px-4 text-left">
                  <div class="flex items-center">
                    <Icon name="mdi:phone" class="w-4 h-4 mr-1" />
                    Telefon
                  </div>
                </th>
                <th class="py-3 px-4 text-left">İşlemler</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="supplier in filteredSuppliers" :key="supplier.SupplierID" class="border-b hover:bg-gray-50">
                <td class="py-3 px-4 font-medium">{{ supplier.CompanyName }}</td>
                <td class="py-3 px-4">{{ supplier.ContactName }}</td>
                <td class="py-3 px-4">{{ supplier.ContactTitle }}</td>
                <td class="py-3 px-4">
                  <span v-if="supplier.Country" class="flex items-center">
                    <Icon name="mdi:flag" class="w-4 h-4 mr-1 text-gray-500" />
                    {{ supplier.Country }}
                  </span>
                </td>
                <td class="py-3 px-4">
                  <span v-if="supplier.Phone" class="flex items-center text-gray-600">
                    <Icon name="mdi:phone" class="w-4 h-4 mr-1 text-gray-500" />
                    {{ supplier.Phone }}
                  </span>
                </td>
                <td class="py-3 px-4">
                  <div class="flex space-x-2">
                    <NuxtLink 
                      :to="`/suppliers/${supplier.SupplierID}`"
                      class="text-blue-600 hover:text-blue-800 flex items-center"
                    >
                      <Icon name="mdi:eye" class="w-5 h-5 mr-1" />
                      Detay
                    </NuxtLink>
                    <NuxtLink 
                      :to="`/suppliers/edit/${supplier.SupplierID}`"
                      class="text-amber-600 hover:text-amber-800 flex items-center"
                    >
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

const { data: suppliers, pending, error } = await useFetch('/api/suppliers')

const searchTerm = ref('')

const filteredSuppliers = computed(() => {
  if (!suppliers.value) return []
  if (!searchTerm.value) return suppliers.value

  const term = searchTerm.value.toLowerCase()
  return suppliers.value.filter(supplier => 
    supplier.CompanyName?.toLowerCase().includes(term) || 
    supplier.ContactName?.toLowerCase().includes(term) ||
    supplier.Country?.toLowerCase().includes(term)
  )
})
</script> 