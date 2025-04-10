<template>
  <div>
    <div class="bg-white p-6 rounded-lg shadow-md">
      <div class="mb-6">
        <NuxtLink to="/orders" class="text-blue-600 hover:underline flex items-center">
          <Icon name="mdi:arrow-left" class="mr-1" /> Siparişlere Dön
        </NuxtLink>
      </div>

      <h1 class="text-2xl font-bold text-gray-800 mb-6 flex items-center">
        <Icon name="mdi:cart-plus" class="mr-2 text-blue-600" /> Yeni Sipariş Oluştur
      </h1>

      <form @submit.prevent="createOrder" class="space-y-6">
        <!-- Müşteri Seçimi -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2 flex items-center">
              <Icon name="mdi:account-group" class="mr-1 text-gray-500" /> Müşteri Seçin
            </label>
            <select v-model="orderData.CustomerID" required class="w-full p-2 border rounded-md">
              <option value="" disabled>Müşteri seçin</option>
              <option v-for="customer in customers" :key="customer.CustomerID" :value="customer.CustomerID">
                {{ customer.CompanyName }}
              </option>
            </select>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2 flex items-center">
              <Icon name="mdi:account-tie" class="mr-1 text-gray-500" /> Çalışan Seçin
            </label>
            <select v-model="orderData.EmployeeID" required class="w-full p-2 border rounded-md">
              <option value="" disabled>Çalışan seçin</option>
              <option v-for="employee in employees" :key="employee.EmployeeID" :value="employee.EmployeeID">
                {{ employee.FirstName }} {{ employee.LastName }}
              </option>
            </select>
          </div>
        </div>

        <!-- Tarih Bilgileri -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2 flex items-center">
              <Icon name="mdi:calendar" class="mr-1 text-gray-500" /> Sipariş Tarihi
            </label>
            <input 
              type="date" 
              v-model="orderData.OrderDate" 
              required 
              class="w-full p-2 border rounded-md"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2 flex items-center">
              <Icon name="mdi:calendar-clock" class="mr-1 text-gray-500" /> Gerekli Tarih
            </label>
            <input 
              type="date" 
              v-model="orderData.RequiredDate" 
              required 
              class="w-full p-2 border rounded-md"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2 flex items-center">
              <Icon name="mdi:calendar-check" class="mr-1 text-gray-500" /> Gönderim Tarihi
            </label>
            <input 
              type="date" 
              v-model="orderData.ShippedDate" 
              class="w-full p-2 border rounded-md"
            />
          </div>
        </div>

        <!-- Nakliye Bilgileri -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2 flex items-center">
              <Icon name="mdi:currency-usd" class="mr-1 text-gray-500" /> Nakliye Ücreti ($)
            </label>
            <input 
              type="number" 
              v-model="orderData.Freight" 
              step="0.01" 
              min="0" 
              class="w-full p-2 border rounded-md"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2 flex items-center">
              <Icon name="mdi:truck-fast" class="mr-1 text-gray-500" /> Nakliyeci Seçin
            </label>
            <select v-model="orderData.ShipVia" required class="w-full p-2 border rounded-md">
              <option value="" disabled>Nakliyeci seçin</option>
              <option v-for="shipper in shippers" :key="shipper.ShipperID" :value="shipper.ShipperID">
                {{ shipper.CompanyName }}
              </option>
            </select>
          </div>
        </div>

        <!-- Alıcı Bilgileri -->
        <div class="bg-blue-50 p-4 rounded-lg">
          <h2 class="text-lg font-semibold text-blue-800 mb-3 flex items-center">
            <Icon name="mdi:map-marker" class="mr-2" /> Alıcı Bilgileri
          </h2>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                <Icon name="mdi:account" class="mr-1 text-gray-500" /> Alıcı Adı
              </label>
              <input 
                type="text" 
                v-model="orderData.ShipName" 
                required 
                class="w-full p-2 border rounded-md"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                <Icon name="mdi:home" class="mr-1 text-gray-500" /> Adres
              </label>
              <input 
                type="text" 
                v-model="orderData.ShipAddress" 
                required 
                class="w-full p-2 border rounded-md"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                <Icon name="mdi:city" class="mr-1 text-gray-500" /> Şehir
              </label>
              <input 
                type="text" 
                v-model="orderData.ShipCity" 
                required 
                class="w-full p-2 border rounded-md"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                <Icon name="mdi:map" class="mr-1 text-gray-500" /> Bölge
              </label>
              <input 
                type="text" 
                v-model="orderData.ShipRegion" 
                class="w-full p-2 border rounded-md"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                <Icon name="mdi:mailbox" class="mr-1 text-gray-500" /> Posta Kodu
              </label>
              <input 
                type="text" 
                v-model="orderData.ShipPostalCode" 
                class="w-full p-2 border rounded-md"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                <Icon name="mdi:flag" class="mr-1 text-gray-500" /> Ülke
              </label>
              <input 
                type="text" 
                v-model="orderData.ShipCountry" 
                required 
                class="w-full p-2 border rounded-md"
              />
            </div>
          </div>
        </div>

        <!-- Sipariş Detayları -->
        <div class="bg-amber-50 p-4 rounded-lg">
          <div class="flex justify-between items-center mb-3">
            <h2 class="text-lg font-semibold text-amber-800 flex items-center">
              <Icon name="mdi:package-variant-closed" class="mr-2" /> Sipariş Detayları
            </h2>
            <button 
              type="button" 
              @click="addOrderDetail" 
              class="bg-amber-500 text-white px-3 py-2 rounded-md hover:bg-amber-600 transition-colors flex items-center"
            >
              <Icon name="mdi:plus" class="mr-1" /> Ürün Ekle
            </button>
          </div>

          <div v-if="orderDetails.length === 0" class="text-center py-4 text-gray-500">
            <Icon name="mdi:cart-off" class="mx-auto mb-2 text-3xl text-gray-400" />
            Henüz sipariş detayı eklenmemiş.
          </div>

          <div v-else class="space-y-4">
            <div v-for="(detail, index) in orderDetails" :key="index" class="p-3 border border-amber-200 rounded-md bg-white">
              <div class="flex justify-between items-center mb-2">
                <h3 class="font-medium flex items-center">
                  <Icon name="mdi:package-variant" class="mr-1 text-amber-600" /> Ürün #{{ index + 1 }}
                </h3>
                <button 
                  type="button" 
                  @click="removeOrderDetail(index)" 
                  class="text-red-500 hover:text-red-700 flex items-center"
                >
                  <Icon name="mdi:delete" class="mr-1" /> Kaldır
                </button>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                    <Icon name="mdi:package" class="mr-1 text-gray-500" /> Ürün
                  </label>
                  <select v-model="detail.ProductID" required class="w-full p-2 border rounded-md">
                    <option value="" disabled>Ürün seçin</option>
                    <option v-for="product in products" :key="product.ProductID" :value="product.ProductID">
                      {{ product.ProductName }} (Stok: {{ product.UnitsInStock }})
                    </option>
                  </select>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                    <Icon name="mdi:currency-usd" class="mr-1 text-gray-500" /> Birim Fiyat ($)
                  </label>
                  <input 
                    type="number" 
                    v-model="detail.UnitPrice" 
                    step="0.01" 
                    min="0" 
                    required 
                    class="w-full p-2 border rounded-md"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                    <Icon name="mdi:numeric" class="mr-1 text-gray-500" /> Miktar
                  </label>
                  <input 
                    type="number" 
                    v-model="detail.Quantity" 
                    min="1" 
                    required 
                    class="w-full p-2 border rounded-md"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                    <Icon name="mdi:sale" class="mr-1 text-gray-500" /> İndirim (%)
                  </label>
                  <input 
                    type="number" 
                    v-model="detail.DiscountPercent" 
                    min="0" 
                    max="100" 
                    class="w-full p-2 border rounded-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="flex justify-end space-x-3 pt-4">
          <button 
            type="button" 
            @click="$router.push('/orders')" 
            class="px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50 flex items-center"
          >
            <Icon name="mdi:close" class="mr-1" /> İptal
          </button>
          <button 
            type="submit" 
            :disabled="isSubmitting || orderDetails.length === 0" 
            class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
          >
            <Icon name="mdi:content-save" v-if="!isSubmitting" class="mr-1" />
            <Icon name="mdi:loading" v-else class="mr-1 animate-spin" />
            {{ isSubmitting ? 'Kaydediliyor...' : 'Siparişi Kaydet' }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

definePageMeta({
  title: 'Yeni Sipariş Oluştur'
})

// Veriler
const { data: customers } = await useFetch('/api/customers')
const { data: employees } = await useFetch('/api/employees')
const { data: products } = await useFetch('/api/products')
const { data: shippers } = await useFetch('/api/shippers')

// Form verileri
const orderData = reactive({
  CustomerID: '',
  EmployeeID: '',
  OrderDate: new Date().toISOString().substring(0, 10),
  RequiredDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().substring(0, 10), // Varsayılan olarak 1 hafta sonra
  ShippedDate: null,
  ShipVia: '',
  Freight: 0,
  ShipName: '',
  ShipAddress: '',
  ShipCity: '',
  ShipRegion: '',
  ShipPostalCode: '',
  ShipCountry: ''
})

const orderDetails = ref([])
const isSubmitting = ref(false)

// Müşteri seçildiğinde adres bilgilerini otomatik doldur
watch(() => orderData.CustomerID, async (newValue) => {
  if (!newValue) return
  
  try {
    const selectedCustomer = customers.value.find(c => c.CustomerID === newValue)
    if (selectedCustomer) {
      orderData.ShipName = selectedCustomer.CompanyName
      orderData.ShipAddress = selectedCustomer.Address
      orderData.ShipCity = selectedCustomer.City
      orderData.ShipRegion = selectedCustomer.Region
      orderData.ShipPostalCode = selectedCustomer.PostalCode
      orderData.ShipCountry = selectedCustomer.Country
    }
  } catch (error) {
    console.error('Müşteri bilgileri yüklenemedi:', error)
  }
})

// Sipariş detayı ekle
function addOrderDetail() {
  orderDetails.value.push({
    ProductID: '',
    UnitPrice: 0,
    Quantity: 1,
    DiscountPercent: 0
  })
}

// Sipariş detayı kaldır
function removeOrderDetail(index) {
  orderDetails.value.splice(index, 1)
}

// Ürün seçildiğinde fiyatını otomatik doldur
watch(() => orderDetails.value, async (newDetails) => {
  for (const detail of newDetails) {
    if (detail.ProductID && products.value) {
      const selectedProduct = products.value.find(p => p.ProductID === detail.ProductID)
      if (selectedProduct) {
        detail.UnitPrice = selectedProduct.UnitPrice
      }
    }
  }
}, { deep: true })

// Siparişi kaydet
async function createOrder() {
  if (orderDetails.value.length === 0) {
    alert('En az bir sipariş detayı eklemelisiniz.')
    return
  }

  isSubmitting.value = true

  try {
    // Sipariş detaylarını hazırla
    const preparedDetails = orderDetails.value.map(detail => ({
      ...detail,
      Discount: detail.DiscountPercent / 100
    }))

    // Tarihleri UTC'ye çevir
    const prepareDate = (dateStr) => {
      if (!dateStr) return null;
      // ISO tarih stringi (YYYY-MM-DD) -> Date nesnesine çevir -> UTC timestamp olarak al
      const [year, month, day] = dateStr.split('-').map(Number);
      return new Date(Date.UTC(year, month - 1, day)).toISOString();
    };

    // Tarih alanlarını hazırla
    const preparedOrderData = {
      ...orderData,
      OrderDate: prepareDate(orderData.OrderDate),
      RequiredDate: prepareDate(orderData.RequiredDate),
      ShippedDate: orderData.ShippedDate ? prepareDate(orderData.ShippedDate) : null
    };

    console.log("Gönderilecek tarihler:", {
      OrderDate: preparedOrderData.OrderDate,
      RequiredDate: preparedOrderData.RequiredDate,
      ShippedDate: preparedOrderData.ShippedDate
    });

    // API'ye gönder
    const response = await $fetch('/api/orders/create', {
      method: 'POST',
      body: {
        ...preparedOrderData,
        details: preparedDetails
      }
    })

    alert('Sipariş başarıyla oluşturuldu!')
    navigateTo('/orders/' + response.OrderID)
  } catch (error) {
    console.error('Sipariş oluşturulurken hata:', error)
    alert('Sipariş oluşturulurken bir hata oluştu: ' + (error.message || 'Bilinmeyen hata'))
  } finally {
    isSubmitting.value = false
  }
}
</script> 