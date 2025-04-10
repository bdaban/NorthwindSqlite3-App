<template>
  <div>
    <div class="bg-white p-6 rounded-lg shadow-md">
      <div class="flex justify-between items-center mb-6">
        <h1 class="text-2xl font-bold text-gray-800 flex items-center">
          <Icon name="mdi:account-tie" class="w-7 h-7 mr-2 text-indigo-600" />
          Çalışanlar
        </h1>
        <div class="flex space-x-2">
          <div class="relative">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Icon name="mdi:magnify" class="w-5 h-5 text-gray-400" />
            </div>
            <input 
              v-model="searchTerm" 
              type="text" 
              placeholder="Çalışan ara..." 
              class="pl-10 pr-4 py-2 border rounded-lg"
            />
          </div>
          <NuxtLink to="/employees/new" class="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg flex items-center">
            <Icon name="mdi:plus" class="w-5 h-5 mr-1" />
            Yeni Çalışan
          </NuxtLink>
        </div>
      </div>
      
      <div v-if="pending" class="flex justify-center py-8">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
      
      <div v-else-if="error" class="py-8 text-center">
        <Icon name="mdi:alert-circle" class="w-12 h-12 text-red-500 mx-auto mb-2" />
        <p class="text-red-500">Çalışanlar yüklenirken bir sorun oluştu.</p>
      </div>
      
      <div v-else-if="filteredEmployees.length === 0" class="py-8 text-center">
        <Icon name="mdi:account-off" class="w-12 h-12 text-gray-400 mx-auto mb-2" />
        <p class="text-gray-500">Çalışan bulunamadı.</p>
      </div>
      
      <div v-else>
        <div class="overflow-x-auto">
          <table class="min-w-full bg-white">
            <thead class="bg-gray-100">
              <tr>
                <th class="py-3 px-4 text-left">
                  <div class="flex items-center">
                    <Icon name="mdi:account" class="w-4 h-4 mr-1" />
                    Ad
                  </div>
                </th>
                <th class="py-3 px-4 text-left">
                  <div class="flex items-center">
                    <Icon name="mdi:account-details" class="w-4 h-4 mr-1" />
                    Soyad
                  </div>
                </th>
                <th class="py-3 px-4 text-left">
                  <div class="flex items-center">
                    <Icon name="mdi:briefcase" class="w-4 h-4 mr-1" />
                    Ünvan
                  </div>
                </th>
                <th class="py-3 px-4 text-left">
                  <div class="flex items-center">
                    <Icon name="mdi:badge-account" class="w-4 h-4 mr-1" />
                    Nezaket Ünvanı
                  </div>
                </th>
                <th class="py-3 px-4 text-left">
                  <div class="flex items-center">
                    <Icon name="mdi:calendar-check" class="w-4 h-4 mr-1" />
                    İşe Başlama Tarihi
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
                <th class="py-3 px-4 text-left">İşlemler</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="employee in filteredEmployees" :key="employee.EmployeeID" class="border-b hover:bg-gray-50">
                <td class="py-3 px-4 font-medium">{{ employee.FirstName }}</td>
                <td class="py-3 px-4">{{ employee.LastName }}</td>
                <td class="py-3 px-4">
                  <span v-if="employee.Title" class="flex items-center">
                    <Icon name="mdi:briefcase-outline" class="w-4 h-4 mr-1 text-gray-500" />
                    {{ employee.Title }}
                  </span>
                  <span v-else>-</span>
                </td>
                <td class="py-3 px-4">{{ employee.TitleOfCourtesy || '-' }}</td>
                <td class="py-3 px-4">
                  <span class="flex items-center">
                    <Icon name="mdi:calendar" class="w-4 h-4 mr-1 text-indigo-500" />
                    {{ formatDate(employee.HireDate) }}
                  </span>
                </td>
                <td class="py-3 px-4">
                  <span v-if="employee.City" class="flex items-center">
                    <Icon name="mdi:map-marker" class="w-4 h-4 mr-1 text-gray-500" />
                    {{ employee.City }}
                  </span>
                  <span v-else>-</span>
                </td>
                <td class="py-3 px-4">
                  <span v-if="employee.Country" class="flex items-center">
                    <Icon name="mdi:flag" class="w-4 h-4 mr-1 text-gray-500" />
                    {{ employee.Country }}
                  </span>
                  <span v-else>-</span>
                </td>
                <td class="py-3 px-4">
                  <div class="flex space-x-2">
                    <NuxtLink 
                      :to="`/employees/${employee.EmployeeID}`"
                      class="text-indigo-600 hover:text-indigo-800 flex items-center"
                    >
                      <Icon name="mdi:eye" class="w-5 h-5 mr-1" />
                      Detay
                    </NuxtLink>
                    <NuxtLink 
                      :to="`/employees/edit/${employee.EmployeeID}`"
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

const { data: employees, pending, error } = await useFetch('/api/employees')

const searchTerm = ref('')

const filteredEmployees = computed(() => {
  if (!employees.value) return []
  if (!searchTerm.value) return employees.value

  const term = searchTerm.value.toLowerCase()
  return employees.value.filter(employee => 
    employee.FirstName?.toLowerCase().includes(term) || 
    employee.LastName?.toLowerCase().includes(term) ||
    employee.Title?.toLowerCase().includes(term) ||
    employee.City?.toLowerCase().includes(term) ||
    employee.Country?.toLowerCase().includes(term)
  )
})

function formatDate(dateString) {
  if (!dateString) return '-'
  const date = new Date(dateString)
  if (isNaN(date.getTime())) return dateString
  return new Intl.DateTimeFormat('tr-TR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  }).format(date)
}
</script> 