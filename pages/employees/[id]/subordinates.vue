<template>
  <div>
    <div class="mb-4">
      <NuxtLink :to="`/employees/${employeeId}`" class="text-blue-600 hover:text-blue-800">
        &lt; Çalışan Detayına Dön
      </NuxtLink>
    </div>

    <div v-if="pendingEmployee || pendingSubordinates" class="flex justify-center items-center py-8">
      <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    </div>
    
    <div v-else-if="errorEmployee || errorSubordinates" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
      <strong class="font-bold">Hata!</strong>
      <span class="block sm:inline"> Veriler yüklenirken bir sorun oluştu.</span>
    </div>
    
    <div v-else>
      <h1 class="text-2xl font-bold mb-2">{{ employee.FirstName }} {{ employee.LastName }}</h1>
      <h2 class="text-xl font-semibold mb-4">Çalışanın Astları</h2>
      
      <div v-if="subordinates.length === 0" class="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded relative" role="alert">
        <span class="block sm:inline">Bu çalışana ait ast çalışanlar bulunamadı.</span>
      </div>
      
      <div v-else class="overflow-x-auto">
        <table class="min-w-full bg-white border border-gray-300">
          <thead>
            <tr class="bg-gray-100">
              <th class="py-2 px-4 border-b text-left">Ad</th>
              <th class="py-2 px-4 border-b text-left">Soyad</th>
              <th class="py-2 px-4 border-b text-left">Ünvan</th>
              <th class="py-2 px-4 border-b text-left">Nezaket Ünvanı</th>
              <th class="py-2 px-4 border-b text-left">İşe Başlama Tarihi</th>
              <th class="py-2 px-4 border-b text-left">Şehir</th>
              <th class="py-2 px-4 border-b text-left">Ülke</th>
              <th class="py-2 px-4 border-b text-left">İşlemler</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="subordinate in subordinates" :key="subordinate.EmployeeID" class="hover:bg-gray-50">
              <td class="py-2 px-4 border-b">{{ subordinate.FirstName }}</td>
              <td class="py-2 px-4 border-b">{{ subordinate.LastName }}</td>
              <td class="py-2 px-4 border-b">{{ subordinate.Title || '-' }}</td>
              <td class="py-2 px-4 border-b">{{ subordinate.TitleOfCourtesy || '-' }}</td>
              <td class="py-2 px-4 border-b">{{ formatDate(subordinate.HireDate) }}</td>
              <td class="py-2 px-4 border-b">{{ subordinate.City || '-' }}</td>
              <td class="py-2 px-4 border-b">{{ subordinate.Country || '-' }}</td>
              <td class="py-2 px-4 border-b">
                <NuxtLink 
                  :to="`/employees/${subordinate.EmployeeID}`"
                  class="text-blue-600 hover:text-blue-800"
                >
                  Detay
                </NuxtLink>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div class="mt-8">
        <h3 class="text-lg font-semibold mb-3">Organizasyon Yapısı</h3>
        <div class="bg-white p-4 rounded-lg shadow">
          <div class="flex flex-col items-center">
            <div class="mb-6 p-3 bg-blue-100 border-2 border-blue-500 rounded-lg text-center">
              <div class="font-semibold">{{ employee.TitleOfCourtesy }} {{ employee.FirstName }} {{ employee.LastName }}</div>
              <div class="text-sm text-gray-600">{{ employee.Title }}</div>
            </div>
            
            <div v-if="subordinates.length > 0" class="w-0.5 h-8 bg-gray-400"></div>
            
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
              <div v-for="subordinate in subordinates" :key="subordinate.EmployeeID" class="flex flex-col items-center">
                <div class="p-3 bg-green-100 border border-green-500 rounded-lg text-center">
                  <div class="font-semibold">
                    <NuxtLink 
                      :to="`/employees/${subordinate.EmployeeID}`"
                      class="text-blue-600 hover:text-blue-800"
                    >
                      {{ subordinate.TitleOfCourtesy }} {{ subordinate.FirstName }} {{ subordinate.LastName }}
                    </NuxtLink>
                  </div>
                  <div class="text-sm text-gray-600">{{ subordinate.Title }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const employeeId = route.params.id

const { data: employee, pending: pendingEmployee, error: errorEmployee } = await useFetch(`/api/employees/${employeeId}`)
const { data: subordinates, pending: pendingSubordinates, error: errorSubordinates } = await useFetch(`/api/employees/${employeeId}/subordinates`)

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