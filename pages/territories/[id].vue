<template>
  <div>
    <div class="mb-4 flex justify-between">
      <NuxtLink to="/territories" class="text-blue-600 hover:text-blue-800">
        &lt; Alanlara Dön
      </NuxtLink>
      <NuxtLink :to="`/regions/${territory?.RegionID}`" class="text-blue-600 hover:text-blue-800" v-if="territory?.RegionID">
        Bölge Detayına Git &gt;
      </NuxtLink>
    </div>

    <div v-if="pendingTerritory || pendingEmployees" class="flex justify-center items-center py-8">
      <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    </div>
    
    <div v-else-if="errorTerritory || errorEmployees" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
      <strong class="font-bold">Hata!</strong>
      <span class="block sm:inline"> Veriler yüklenirken bir sorun oluştu.</span>
    </div>
    
    <div v-else>
      <h1 class="text-2xl font-bold mb-4">{{ territory.TerritoryDescription }}</h1>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div class="bg-white shadow overflow-hidden rounded-lg">
          <div class="px-4 py-5 sm:px-6 bg-gray-50">
            <h2 class="text-lg leading-6 font-medium text-gray-900">Alan Bilgileri</h2>
            <p class="mt-1 max-w-2xl text-sm text-gray-500">Alan detay bilgileri</p>
          </div>
          <div class="border-t border-gray-200">
            <dl>
              <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">Alan ID</dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{{ territory.TerritoryID }}</dd>
              </div>
              <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">Alan Adı</dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{{ territory.TerritoryDescription }}</dd>
              </div>
            </dl>
          </div>
        </div>

        <div class="bg-white shadow overflow-hidden rounded-lg">
          <div class="px-4 py-5 sm:px-6 bg-gray-50">
            <h2 class="text-lg leading-6 font-medium text-gray-900">Bölge Bilgileri</h2>
            <p class="mt-1 max-w-2xl text-sm text-gray-500">Bağlı olduğu bölge bilgileri</p>
          </div>
          <div class="border-t border-gray-200">
            <dl>
              <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">Bölge ID</dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{{ territory.Regions?.RegionID || '-' }}</dd>
              </div>
              <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">Bölge Adı</dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <NuxtLink 
                    v-if="territory.Regions"
                    :to="`/regions/${territory.Regions.RegionID}`"
                    class="text-blue-600 hover:text-blue-800"
                  >
                    {{ territory.Regions.RegionDescription }}
                  </NuxtLink>
                  <span v-else>-</span>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
      
      <div>
        <h2 class="text-xl font-semibold mb-4">Alana Atanmış Çalışanlar</h2>
        
        <div v-if="employees.length === 0" class="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded relative" role="alert">
          <span class="block sm:inline">Bu alana atanmış çalışan bulunamadı.</span>
        </div>
        
        <div v-else class="overflow-x-auto">
          <table class="min-w-full bg-white border border-gray-300">
            <thead>
              <tr class="bg-gray-100">
                <th class="py-2 px-4 border-b text-left">Çalışan ID</th>
                <th class="py-2 px-4 border-b text-left">Ad</th>
                <th class="py-2 px-4 border-b text-left">Soyad</th>
                <th class="py-2 px-4 border-b text-left">Ünvan</th>
                <th class="py-2 px-4 border-b text-left">İşlemler</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="employee in employees" :key="employee.EmployeeID" class="hover:bg-gray-50">
                <td class="py-2 px-4 border-b">{{ employee.EmployeeID }}</td>
                <td class="py-2 px-4 border-b">{{ employee.FirstName }}</td>
                <td class="py-2 px-4 border-b">{{ employee.LastName }}</td>
                <td class="py-2 px-4 border-b">{{ employee.Title || '-' }}</td>
                <td class="py-2 px-4 border-b">
                  <NuxtLink 
                    :to="`/employees/${employee.EmployeeID}`"
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
const territoryId = route.params.id

const { data: territory, pending: pendingTerritory, error: errorTerritory } = await useFetch(`/api/territories/${territoryId}`)
const { data: employees, pending: pendingEmployees, error: errorEmployees } = await useFetch(`/api/territories/${territoryId}/employees`)
</script> 