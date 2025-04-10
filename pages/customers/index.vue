<template>
  <div>
    <div class="bg-white p-6 rounded-lg shadow-md">
      <div class="flex justify-between items-center mb-6">
        <h1 class="text-2xl font-bold text-gray-800 flex items-center">
          <Icon name="mdi:account-group" class="w-7 h-7 mr-2 text-blue-600" />
          Müşteriler
        </h1>
        <div class="flex space-x-2">
          <div class="relative">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Icon name="mdi:magnify" class="w-5 h-5 text-gray-400" />
            </div>
            <input 
              v-model="searchTerm" 
              type="text" 
              placeholder="Müşteri ara..." 
              class="pl-10 pr-4 py-2 border rounded-lg"
            />
          </div>
          <NuxtLink to="/customers/new" class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center">
            <Icon name="mdi:plus" class="w-5 h-5 mr-1" />
            Yeni Müşteri
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

      <div v-else-if="customers.length === 0" class="py-8 text-center">
        <Icon name="mdi:account-off" class="w-12 h-12 text-gray-400 mx-auto mb-2" />
        <p class="text-gray-500">Müşteri bulunamadı.</p>
      </div>

      <div v-else>
        <div class="overflow-x-auto">
          <table class="min-w-full bg-white">
            <thead class="bg-gray-100">
              <tr>
                <th class="py-3 px-4 text-left">
                  <div class="flex items-center">
                    <Icon name="mdi:identifier" class="w-4 h-4 mr-1" />
                    ID
                  </div>
                </th>
                <th class="py-3 px-4 text-left">
                  <div class="flex items-center">
                    <Icon name="mdi:domain" class="w-4 h-4 mr-1" />
                    Şirket
                  </div>
                </th>
                <th class="py-3 px-4 text-left">
                  <div class="flex items-center">
                    <Icon name="mdi:account" class="w-4 h-4 mr-1" />
                    İlgili Kişi
                  </div>
                </th>
                <th class="py-3 px-4 text-left">
                  <div class="flex items-center">
                    <Icon name="mdi:city" class="w-4 h-4 mr-1" />
                    Şehir
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
              <tr v-for="customer in filteredCustomers" :key="customer.CustomerID" class="border-b hover:bg-gray-50">
                <td class="py-3 px-4">{{ customer.CustomerID }}</td>
                <td class="py-3 px-4 font-medium">{{ customer.CompanyName }}</td>
                <td class="py-3 px-4">{{ customer.ContactName }}</td>
                <td class="py-3 px-4">
                  <span v-if="customer.City" class="flex items-center">
                    <Icon name="mdi:map-marker" class="w-4 h-4 mr-1 text-gray-500" />
                    {{ customer.City }}
                  </span>
                </td>
                <td class="py-3 px-4">{{ customer.Country }}</td>
                <td class="py-3 px-4">
                  <span v-if="customer.Phone" class="flex items-center text-gray-600">
                    <Icon name="mdi:phone" class="w-4 h-4 mr-1 text-gray-500" />
                    {{ customer.Phone }}
                  </span>
                </td>
                <td class="py-3 px-4">
                  <div class="flex space-x-2">
                    <NuxtLink :to="`/customers/${customer.CustomerID}`" class="text-blue-600 hover:text-blue-800 flex items-center">
                      <Icon name="mdi:eye" class="w-5 h-5 mr-1" />
                      Detay
                    </NuxtLink>
                    <NuxtLink :to="`/customers/edit/${customer.CustomerID}`" class="text-amber-600 hover:text-amber-800 flex items-center">
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
  title: 'Müşteriler'
})

const searchTerm = ref('')

const { data: customers, pending, error } = await useFetch('/api/customers')

const filteredCustomers = computed(() => {
  if (!searchTerm.value) return customers.value

  const term = searchTerm.value.toLowerCase()
  return customers.value.filter(customer => 
    customer.CompanyName?.toLowerCase().includes(term) || 
    customer.ContactName?.toLowerCase().includes(term) ||
    customer.City?.toLowerCase().includes(term) ||
    customer.Country?.toLowerCase().includes(term)
  )
})
</script> 