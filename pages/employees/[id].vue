<template>
  <div>
    <div class="bg-white p-6 rounded-lg shadow-md">
      <div class="mb-6">
        <NuxtLink to="/employees" class="text-indigo-600 hover:text-indigo-800 flex items-center">
          <Icon name="mdi:arrow-left" class="w-5 h-5 mr-1" />
          Çalışanlara Dön
        </NuxtLink>
      </div>

      <div v-if="pending" class="flex justify-center py-8">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
      
      <div v-else-if="error" class="py-8 text-center">
        <Icon name="mdi:alert-circle" class="w-12 h-12 text-red-500 mx-auto mb-2" />
        <p class="text-red-500">Çalışan bilgileri yüklenirken bir sorun oluştu.</p>
      </div>
      
      <div v-else-if="!employee" class="py-8 text-center">
        <Icon name="mdi:account-off" class="w-12 h-12 text-gray-400 mx-auto mb-2" />
        <p class="text-gray-500">Çalışan bulunamadı.</p>
      </div>
      
      <div v-else>
        <div class="flex items-start mb-8">
          <div class="bg-indigo-100 rounded-full p-4 mr-4">
            <Icon name="mdi:account-tie" class="w-16 h-16 text-indigo-600" />
          </div>
          <div>
            <h1 class="text-2xl font-bold text-gray-800">{{ employee.TitleOfCourtesy }} {{ employee.FirstName }} {{ employee.LastName }}</h1>
            <h2 class="text-xl text-gray-600 flex items-center mt-1">
              <Icon name="mdi:briefcase" class="w-5 h-5 mr-1 text-indigo-500" />
              {{ employee.Title || 'Ünvan Belirtilmemiş' }}
            </h2>
          </div>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div class="bg-white shadow-md overflow-hidden rounded-lg">
            <div class="px-4 py-5 bg-indigo-50 flex items-center">
              <Icon name="mdi:account-details" class="w-6 h-6 mr-2 text-indigo-600" />
              <div>
                <h3 class="text-lg leading-6 font-medium text-indigo-900">Kişisel Bilgiler</h3>
                <p class="mt-1 max-w-2xl text-sm text-indigo-700">Çalışan detay bilgileri</p>
              </div>
            </div>
            <div class="border-t border-gray-200">
              <dl>
                <div class="bg-white px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm font-medium text-gray-500 flex items-center">
                    <Icon name="mdi:account" class="w-4 h-4 mr-1 text-gray-400" />
                    Ad
                  </dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{{ employee.FirstName }}</dd>
                </div>
                <div class="bg-gray-50 px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm font-medium text-gray-500 flex items-center">
                    <Icon name="mdi:account-details" class="w-4 h-4 mr-1 text-gray-400" />
                    Soyad
                  </dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{{ employee.LastName }}</dd>
                </div>
                <div class="bg-white px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm font-medium text-gray-500 flex items-center">
                    <Icon name="mdi:briefcase" class="w-4 h-4 mr-1 text-gray-400" />
                    Ünvan
                  </dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{{ employee.Title || '-' }}</dd>
                </div>
                <div class="bg-gray-50 px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm font-medium text-gray-500 flex items-center">
                    <Icon name="mdi:badge-account" class="w-4 h-4 mr-1 text-gray-400" />
                    Nezaket Ünvanı
                  </dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{{ employee.TitleOfCourtesy || '-' }}</dd>
                </div>
                <div class="bg-white px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm font-medium text-gray-500 flex items-center">
                    <Icon name="mdi:cake-variant" class="w-4 h-4 mr-1 text-gray-400" />
                    Doğum Tarihi
                  </dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 flex items-center">
                    <Icon name="mdi:calendar" class="w-4 h-4 mr-1 text-indigo-500" />
                    {{ formatDate(employee.BirthDate) }}
                  </dd>
                </div>
                <div class="bg-gray-50 px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm font-medium text-gray-500 flex items-center">
                    <Icon name="mdi:calendar-check" class="w-4 h-4 mr-1 text-gray-400" />
                    İşe Başlama Tarihi
                  </dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 flex items-center">
                    <Icon name="mdi:calendar" class="w-4 h-4 mr-1 text-indigo-500" />
                    {{ formatDate(employee.HireDate) }}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          
          <div class="bg-white shadow-md overflow-hidden rounded-lg">
            <div class="px-4 py-5 bg-green-50 flex items-center">
              <Icon name="mdi:contacts" class="w-6 h-6 mr-2 text-green-600" />
              <div>
                <h3 class="text-lg leading-6 font-medium text-green-900">İletişim Bilgileri</h3>
                <p class="mt-1 max-w-2xl text-sm text-green-700">Adres ve telefon bilgileri</p>
              </div>
            </div>
            <div class="border-t border-gray-200">
              <dl>
                <div class="bg-white px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm font-medium text-gray-500 flex items-center">
                    <Icon name="mdi:map-marker" class="w-4 h-4 mr-1 text-gray-400" />
                    Adres
                  </dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{{ employee.Address || '-' }}</dd>
                </div>
                <div class="bg-gray-50 px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm font-medium text-gray-500 flex items-center">
                    <Icon name="mdi:city" class="w-4 h-4 mr-1 text-gray-400" />
                    Şehir
                  </dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{{ employee.City || '-' }}</dd>
                </div>
                <div class="bg-white px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm font-medium text-gray-500 flex items-center">
                    <Icon name="mdi:map" class="w-4 h-4 mr-1 text-gray-400" />
                    Bölge
                  </dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{{ employee.Region || '-' }}</dd>
                </div>
                <div class="bg-gray-50 px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm font-medium text-gray-500 flex items-center">
                    <Icon name="mdi:mail" class="w-4 h-4 mr-1 text-gray-400" />
                    Posta Kodu
                  </dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{{ employee.PostalCode || '-' }}</dd>
                </div>
                <div class="bg-white px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm font-medium text-gray-500 flex items-center">
                    <Icon name="mdi:earth" class="w-4 h-4 mr-1 text-gray-400" />
                    Ülke
                  </dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{{ employee.Country || '-' }}</dd>
                </div>
                <div class="bg-gray-50 px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm font-medium text-gray-500 flex items-center">
                    <Icon name="mdi:phone" class="w-4 h-4 mr-1 text-gray-400" />
                    Telefon
                  </dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 flex items-center">
                    <Icon v-if="employee.HomePhone" name="mdi:phone" class="w-4 h-4 mr-1 text-green-500" />
                    {{ employee.HomePhone || '-' }}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          
          <div class="bg-white shadow-md overflow-hidden rounded-lg">
            <div class="px-4 py-5 bg-amber-50 flex items-center">
              <Icon name="mdi:office-building" class="w-6 h-6 mr-2 text-amber-600" />
              <div>
                <h3 class="text-lg leading-6 font-medium text-amber-900">İş Bilgileri</h3>
                <p class="mt-1 max-w-2xl text-sm text-amber-700">Yönetici ve diğer bilgiler</p>
              </div>
            </div>
            <div class="border-t border-gray-200">
              <dl>
                <div class="bg-white px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm font-medium text-gray-500 flex items-center">
                    <Icon name="mdi:account-supervisor" class="w-4 h-4 mr-1 text-gray-400" />
                    Yönetici
                  </dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <div v-if="employee.Employees" class="flex items-center">
                      <Icon name="mdi:account-tie" class="w-4 h-4 mr-1 text-indigo-500" />
                      <NuxtLink 
                        :to="`/employees/${employee.Employees.EmployeeID}`"
                        class="text-indigo-600 hover:text-indigo-800"
                      >
                        {{ employee.Employees.FirstName }} {{ employee.Employees.LastName }}
                      </NuxtLink>
                    </div>
                    <div v-else>-</div>
                  </dd>
                </div>
                <div class="bg-gray-50 px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm font-medium text-gray-500 flex items-center">
                    <Icon name="mdi:account-group" class="w-4 h-4 mr-1 text-gray-400" />
                    Ast Sayısı
                  </dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 flex items-center">
                    <span class="bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full font-medium">
                      {{ employee.other_Employees ? employee.other_Employees.length : 0 }}
                    </span>
                  </dd>
                </div>
                <div class="bg-white px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm font-medium text-gray-500 flex items-center">
                    <Icon name="mdi:phone-settings" class="w-4 h-4 mr-1 text-gray-400" />
                    Uzantı
                  </dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{{ employee.Extension || '-' }}</dd>
                </div>
                <div class="bg-gray-50 px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm font-medium text-gray-500 flex items-center">
                    <Icon name="mdi:note-text" class="w-4 h-4 mr-1 text-gray-400" />
                    Notlar
                  </dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <p v-if="employee.Notes" class="whitespace-pre-line">{{ employee.Notes }}</p>
                    <p v-else>-</p>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div class="bg-blue-50 p-4 rounded-lg">
            <h2 class="text-xl font-semibold text-blue-800 mb-3 flex items-center">
              <Icon name="mdi:package-variant" class="w-5 h-5 mr-2 text-blue-700" />
              Çalışanın Siparişleri
            </h2>
            <p class="mb-4 text-gray-700">Bu çalışanın sorumlu olduğu tüm siparişleri görüntüleyin.</p>
            <NuxtLink 
              :to="`/employees/${employee.EmployeeID}/orders`"
              class="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center w-fit"
            >
              <Icon name="mdi:eye" class="w-5 h-5 mr-1" />
              Siparişleri Görüntüle
            </NuxtLink>
          </div>
          
          <div v-if="employee.other_Employees && employee.other_Employees.length > 0" class="bg-green-50 p-4 rounded-lg">
            <h2 class="text-xl font-semibold text-green-800 mb-3 flex items-center">
              <Icon name="mdi:account-group" class="w-5 h-5 mr-2 text-green-700" />
              Çalışanın Astları
            </h2>
            <p class="mb-4 text-gray-700">Bu çalışanın yöneticisi olduğu diğer çalışanları görüntüleyin.</p>
            <NuxtLink 
              :to="`/employees/${employee.EmployeeID}/subordinates`"
              class="bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center w-fit"
            >
              <Icon name="mdi:eye" class="w-5 h-5 mr-1" />
              Astları Görüntüle
            </NuxtLink>
          </div>
        </div>
        
        <div class="mt-8 flex">
          <NuxtLink :to="`/employees/edit/${employee.EmployeeID}`" class="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg flex items-center mr-2">
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
const employeeId = parseInt(route.params.id)

const { data: employee, pending, error } = await useFetch(`/api/employees/${employeeId}`)

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