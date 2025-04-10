<template>
  <div>
    <div class="bg-white p-6 rounded-lg shadow-md">
      <div class="mb-6">
        <NuxtLink to="/customers" class="text-blue-600 hover:text-blue-800 flex items-center">
          <Icon name="mdi:arrow-left" class="w-5 h-5 mr-1" />
          Müşterilere Dön
        </NuxtLink>
      </div>

      <div v-if="pending" class="flex justify-center py-8">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>

      <div v-else-if="error" class="py-8 text-center">
        <Icon name="mdi:alert-circle" class="w-12 h-12 text-red-500 mx-auto mb-2" />
        <p class="text-red-500">{{ error.message }}</p>
      </div>

      <div v-else-if="!customer" class="py-8 text-center">
        <Icon name="mdi:account-off" class="w-12 h-12 text-gray-400 mx-auto mb-2" />
        <p class="text-gray-500">Müşteri bulunamadı.</p>
      </div>

      <div v-else>
        <h1 class="text-2xl font-bold text-gray-800 mb-6 flex items-center">
          <Icon name="mdi:domain" class="w-7 h-7 mr-2 text-purple-600" />
          {{ customer.CompanyName }}
        </h1>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <div class="bg-purple-50 p-4 rounded-lg">
              <h2 class="text-lg font-semibold text-purple-800 mb-3 flex items-center">
                <Icon name="mdi:information-outline" class="w-5 h-5 mr-2 text-purple-700" />
                Müşteri Bilgileri
              </h2>
              
              <div class="space-y-3">
                <p class="flex items-center">
                  <Icon name="mdi:identifier" class="w-5 h-5 mr-2 text-purple-500" />
                  <span class="font-medium">Müşteri ID:</span> 
                  <span class="ml-2">{{ customer.CustomerID }}</span>
                </p>
                <p class="flex items-center">
                  <Icon name="mdi:domain" class="w-5 h-5 mr-2 text-purple-500" />
                  <span class="font-medium">Şirket Adı:</span> 
                  <span class="ml-2">{{ customer.CompanyName }}</span>
                </p>
                <p class="flex items-center">
                  <Icon name="mdi:account" class="w-5 h-5 mr-2 text-purple-500" />
                  <span class="font-medium">İlgili Kişi:</span> 
                  <span class="ml-2">{{ customer.ContactName }}</span>
                </p>
                <p class="flex items-center">
                  <Icon name="mdi:card-account-details" class="w-5 h-5 mr-2 text-purple-500" />
                  <span class="font-medium">Ünvan:</span> 
                  <span class="ml-2">{{ customer.ContactTitle }}</span>
                </p>
              </div>
            </div>
          </div>

          <div>
            <div class="bg-blue-50 p-4 rounded-lg">
              <h2 class="text-lg font-semibold text-blue-800 mb-3 flex items-center">
                <Icon name="mdi:contacts" class="w-5 h-5 mr-2 text-blue-700" />
                İletişim Bilgileri
              </h2>
              
              <div class="space-y-3">
                <p class="flex items-start">
                  <Icon name="mdi:map-marker" class="w-5 h-5 mr-2 text-blue-500 mt-0.5" />
                  <span class="font-medium">Adres:</span> 
                  <span class="ml-2">{{ customer.Address }}</span>
                </p>
                <p class="flex items-center">
                  <Icon name="mdi:city" class="w-5 h-5 mr-2 text-blue-500" />
                  <span class="font-medium">Şehir:</span> 
                  <span class="ml-2">{{ customer.City }}</span>
                </p>
                <p v-if="customer.Region" class="flex items-center">
                  <Icon name="mdi:map" class="w-5 h-5 mr-2 text-blue-500" />
                  <span class="font-medium">Bölge:</span> 
                  <span class="ml-2">{{ customer.Region }}</span>
                </p>
                <p class="flex items-center">
                  <Icon name="mdi:mail" class="w-5 h-5 mr-2 text-blue-500" />
                  <span class="font-medium">Posta Kodu:</span> 
                  <span class="ml-2">{{ customer.PostalCode }}</span>
                </p>
                <p class="flex items-center">
                  <Icon name="mdi:earth" class="w-5 h-5 mr-2 text-blue-500" />
                  <span class="font-medium">Ülke:</span> 
                  <span class="ml-2">{{ customer.Country }}</span>
                </p>
                <p class="flex items-center">
                  <Icon name="mdi:phone" class="w-5 h-5 mr-2 text-blue-500" />
                  <span class="font-medium">Telefon:</span> 
                  <span class="ml-2">{{ customer.Phone }}</span>
                </p>
                <p v-if="customer.Fax" class="flex items-center">
                  <Icon name="mdi:fax" class="w-5 h-5 mr-2 text-blue-500" />
                  <span class="font-medium">Fax:</span> 
                  <span class="ml-2">{{ customer.Fax }}</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-8">
          <div class="flex justify-between items-center mb-4">
            <h2 class="text-xl font-semibold text-gray-800 flex items-center">
              <Icon name="mdi:package-variant" class="w-6 h-6 mr-2 text-blue-600" />
              Siparişler
            </h2>
            <NuxtLink :to="`/orders/new?customer=${customer.CustomerID}`" class="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center">
              <Icon name="mdi:cart-plus" class="w-5 h-5 mr-1" />
              Yeni Sipariş
            </NuxtLink>
          </div>
          
          <div v-if="orders && orders.length > 0">
            <div class="overflow-x-auto">
              <table class="min-w-full bg-white">
                <thead class="bg-gray-100">
                  <tr>
                    <th class="py-3 px-4 text-left">
                      <div class="flex items-center">
                        <Icon name="mdi:pound" class="w-4 h-4 mr-1" />
                        Sipariş ID
                      </div>
                    </th>
                    <th class="py-3 px-4 text-left">
                      <div class="flex items-center">
                        <Icon name="mdi:calendar" class="w-4 h-4 mr-1" />
                        Sipariş Tarihi
                      </div>
                    </th>
                    <th class="py-3 px-4 text-left">
                      <div class="flex items-center">
                        <Icon name="mdi:calendar-clock" class="w-4 h-4 mr-1" />
                        Gerekli Tarih
                      </div>
                    </th>
                    <th class="py-3 px-4 text-left">
                      <div class="flex items-center">
                        <Icon name="mdi:truck-delivery" class="w-4 h-4 mr-1" />
                        Gönderim Tarihi
                      </div>
                    </th>
                    <th class="py-3 px-4 text-left">İşlemler</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="order in orders" :key="order.OrderID" class="border-b hover:bg-gray-50">
                    <td class="py-3 px-4 font-medium">{{ order.OrderID }}</td>
                    <td class="py-3 px-4">
                      <span class="flex items-center">
                        <Icon name="mdi:calendar-check" class="w-4 h-4 mr-1 text-green-600" />
                        {{ formatDate(order.OrderDate) }}
                      </span>
                    </td>
                    <td class="py-3 px-4">
                      <span class="flex items-center">
                        <Icon name="mdi:calendar-alert" class="w-4 h-4 mr-1 text-amber-600" />
                        {{ formatDate(order.RequiredDate) }}
                      </span>
                    </td>
                    <td class="py-3 px-4">
                      <span v-if="order.ShippedDate" class="flex items-center text-green-600">
                        <Icon name="mdi:truck-check" class="w-4 h-4 mr-1" />
                        {{ formatDate(order.ShippedDate) }}
                      </span>
                      <span v-else class="flex items-center text-red-600">
                        <Icon name="mdi:truck-remove" class="w-4 h-4 mr-1" />
                        Gönderilmedi
                      </span>
                    </td>
                    <td class="py-3 px-4">
                      <div class="flex space-x-2">
                        <NuxtLink :to="`/orders/${order.OrderID}`" class="text-blue-600 hover:text-blue-800 flex items-center">
                          <Icon name="mdi:eye" class="w-5 h-5 mr-1" />
                          Detay
                        </NuxtLink>
                        <NuxtLink :to="`/orders/edit/${order.OrderID}`" class="text-amber-600 hover:text-amber-800 flex items-center">
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
          
          <div v-else class="py-6 text-center bg-gray-50 rounded-lg flex flex-col items-center">
            <Icon name="mdi:package-variant-remove" class="w-12 h-12 text-gray-400 mb-2" />
            <p class="text-gray-500">Bu müşteriye ait sipariş bulunmamaktadır.</p>
            <NuxtLink :to="`/orders/new?customer=${customer.CustomerID}`" class="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center">
              <Icon name="mdi:cart-plus" class="w-5 h-5 mr-1" />
              İlk Siparişi Oluştur
            </NuxtLink>
          </div>
        </div>
        
        <div class="mt-8 flex">
          <NuxtLink :to="`/customers/edit/${customer.CustomerID}`" class="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg flex items-center mr-2">
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
const customerId = route.params.id

const { data: customer, pending, error } = await useFetch(`/api/customers/${customerId}`)
const { data: orders } = await useFetch(`/api/customers/${customerId}/orders`)

function formatDate(dateString) {
  if (!dateString) return 'Belirtilmemiş'
  
  const date = new Date(dateString)
  return new Intl.DateTimeFormat('tr-TR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  }).format(date)
}
</script> 