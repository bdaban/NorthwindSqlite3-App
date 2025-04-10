<template>
  <div>
    <div class="bg-white p-6 rounded-lg shadow-md">
      <div class="mb-6">
        <NuxtLink :to="`/orders/${route.params.id}`" class="text-blue-600 hover:underline flex items-center">
          <span class="mr-1">←</span> Sipariş Detayına Dön
        </NuxtLink>
      </div>

      <div v-if="isLoading" class="flex justify-center py-8">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>

      <div v-else-if="loadError" class="py-8 text-center">
        <p class="text-red-500">{{ loadError }}</p>
      </div>

      <div v-else>
        <h1 class="text-2xl font-bold text-gray-800 mb-6">Sipariş #{{ route.params.id }} Düzenle</h1>

        <form @submit.prevent="updateOrder" class="space-y-6">
          <!-- Müşteri Seçimi -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Müşteri</label>
              <select v-model="orderData.CustomerID" required class="w-full p-2 border rounded-md">
                <option value="" disabled>Müşteri seçin</option>
                <option v-for="customer in customers" :key="customer.CustomerID" :value="customer.CustomerID">
                  {{ customer.CompanyName }}
                </option>
              </select>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Çalışan</label>
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
              <label class="block text-sm font-medium text-gray-700 mb-2">Sipariş Tarihi</label>
              <input 
                type="date" 
                v-model="orderData.OrderDate" 
                required 
                class="w-full p-2 border rounded-md"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Gerekli Tarih</label>
              <input 
                type="date" 
                v-model="orderData.RequiredDate" 
                required 
                class="w-full p-2 border rounded-md"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Gönderim Tarihi</label>
              <input 
                type="date" 
                v-model="orderData.ShippedDate" 
                class="w-full p-2 border rounded-md"
              />
            </div>
          </div>

          <!-- Durum -->
          <div class="bg-green-50 p-4 rounded-lg">
            <h2 class="text-lg font-semibold text-green-800 mb-3">Durum Bilgileri</h2>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Sipariş Durumu</label>
                <select v-model="orderData.Status" class="w-full p-2 border rounded-md">
                  <option value="Beklemede">Beklemede</option>
                  <option value="İşleniyor">İşleniyor</option>
                  <option value="Kargoda">Kargoda</option>
                  <option value="Teslim Edildi">Teslim Edildi</option>
                  <option value="İptal Edildi">İptal Edildi</option>
                </select>
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Nakliyeci</label>
                <select v-model="orderData.ShipVia" required class="w-full p-2 border rounded-md">
                  <option value="" disabled>Nakliyeci seçin</option>
                  <option v-for="shipper in shippers" :key="shipper.ShipperID" :value="shipper.ShipperID">
                    {{ shipper.CompanyName }}
                  </option>
                </select>
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Nakliye Ücreti ($)</label>
                <input 
                  type="number" 
                  v-model="orderData.Freight" 
                  step="0.01" 
                  min="0" 
                  class="w-full p-2 border rounded-md"
                />
              </div>
            </div>
          </div>

          <!-- Alıcı Bilgileri -->
          <div class="bg-blue-50 p-4 rounded-lg">
            <h2 class="text-lg font-semibold text-blue-800 mb-3">Alıcı Bilgileri</h2>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Alıcı Adı</label>
                <input 
                  type="text" 
                  v-model="orderData.ShipName" 
                  required 
                  class="w-full p-2 border rounded-md"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Adres</label>
                <input 
                  type="text" 
                  v-model="orderData.ShipAddress" 
                  required 
                  class="w-full p-2 border rounded-md"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Şehir</label>
                <input 
                  type="text" 
                  v-model="orderData.ShipCity" 
                  required 
                  class="w-full p-2 border rounded-md"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Bölge</label>
                <input 
                  type="text" 
                  v-model="orderData.ShipRegion" 
                  class="w-full p-2 border rounded-md"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Posta Kodu</label>
                <input 
                  type="text" 
                  v-model="orderData.ShipPostalCode" 
                  class="w-full p-2 border rounded-md"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Ülke</label>
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
              <h2 class="text-lg font-semibold text-amber-800">Sipariş Detayları</h2>
              <button 
                type="button" 
                @click="addOrderDetail" 
                class="bg-amber-500 text-white px-3 py-2 rounded-md hover:bg-amber-600 transition-colors"
              >
                Ürün Ekle
              </button>
            </div>

            <div v-if="orderDetails.length === 0" class="text-center py-4 text-gray-500">
              Henüz sipariş detayı eklenmemiş.
            </div>

            <div v-else class="space-y-4">
              <div v-for="(detail, index) in orderDetails" :key="index" class="p-3 border border-amber-200 rounded-md bg-white">
                <div class="flex justify-between items-center mb-2">
                  <h3 class="font-medium">Ürün #{{ index + 1 }}</h3>
                  <button 
                    type="button" 
                    @click="removeOrderDetail(index)" 
                    class="text-red-500 hover:text-red-700"
                  >
                    Kaldır
                  </button>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Ürün</label>
                    <select v-model="detail.ProductID" required class="w-full p-2 border rounded-md">
                      <option value="" disabled>Ürün seçin</option>
                      <option v-for="product in products" :key="product.ProductID" :value="product.ProductID">
                        {{ product.ProductName }} (Stok: {{ product.UnitsInStock }})
                      </option>
                    </select>
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Birim Fiyat ($)</label>
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
                    <label class="block text-sm font-medium text-gray-700 mb-1">Miktar</label>
                    <input 
                      type="number" 
                      v-model="detail.Quantity" 
                      min="1" 
                      required 
                      class="w-full p-2 border rounded-md"
                    />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">İndirim (%)</label>
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
              @click="$router.push(`/orders/${route.params.id}`)" 
              class="px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50"
            >
              İptal
            </button>
            <button 
              type="submit" 
              :disabled="isSubmitting || orderDetails.length === 0" 
              class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {{ isSubmitting ? 'Kaydediliyor...' : 'Değişiklikleri Kaydet' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'

definePageMeta({
  title: 'Sipariş Düzenle'
})

const route = useRoute()
const orderId = parseInt(route.params.id)

const orderData = reactive({
  CustomerID: '',
  EmployeeID: '',
  OrderDate: '',
  RequiredDate: '',
  ShippedDate: null,
  ShipVia: '',
  Freight: 0,
  ShipName: '',
  ShipAddress: '',
  ShipCity: '',
  ShipRegion: '',
  ShipPostalCode: '',
  ShipCountry: '',
  Status: 'Beklemede' // Varsayılan durum
})

const orderDetails = ref([])
const isLoading = ref(true)
const isSubmitting = ref(false)
const loadError = ref(null)

// Gerekli verileri yükle
const { data: customers } = await useFetch('/api/customers')
const { data: employees } = await useFetch('/api/employees')
const { data: products } = await useFetch('/api/products')
const { data: shippers } = await useFetch('/api/shippers')

// Sipariş ve detaylarını yükle
onMounted(async () => {
  try {
    isLoading.value = true
    loadError.value = null
    
    // Siparişi yükle
    const orderResponse = await fetch(`/api/orders/${orderId}`)
    if (!orderResponse.ok) {
      throw new Error('Sipariş yüklenirken bir hata oluştu')
    }
    const orderData = await orderResponse.json()
    
    // Sipariş detaylarını yükle
    const detailsResponse = await fetch(`/api/orders/${orderId}/details`)
    if (!detailsResponse.ok) {
      throw new Error('Sipariş detayları yüklenirken bir hata oluştu')
    }
    const detailsData = await detailsResponse.json()
    
    // Form verilerini doldur
    Object.keys(orderData).forEach(key => {
      if (key in orderData) {
        orderData[key] = orderData[key]
      }
    })
    
    // Tarih alanlarını düzenle
    if (orderData.OrderDate) {
      orderData.OrderDate = new Date(orderData.OrderDate).toISOString().substring(0, 10)
    }
    if (orderData.RequiredDate) {
      orderData.RequiredDate = new Date(orderData.RequiredDate).toISOString().substring(0, 10)
    }
    if (orderData.ShippedDate) {
      orderData.ShippedDate = new Date(orderData.ShippedDate).toISOString().substring(0, 10)
    } else {
      orderData.ShippedDate = null
    }
    
    // Durum belirleme
    if (orderData.ShippedDate) {
      orderData.Status = 'Teslim Edildi'
    } else if (orderData.ShipVia) {
      orderData.Status = 'Kargoda'
    } else {
      orderData.Status = 'İşleniyor'
    }
    
    // Detayları doldur
    orderDetails.value = detailsData.map(detail => ({
      ...detail,
      DiscountPercent: Math.round(detail.Discount * 100)
    }))
  } catch (error) {
    console.error('Sipariş bilgileri yüklenirken hata:', error)
    loadError.value = error.message || 'Sipariş bilgileri yüklenemedi'
  } finally {
    isLoading.value = false
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
    if (detail.ProductID && !detail.UnitPrice && products.value) {
      const selectedProduct = products.value.find(p => p.ProductID === detail.ProductID)
      if (selectedProduct) {
        detail.UnitPrice = selectedProduct.UnitPrice
      }
    }
  }
}, { deep: true })

// Siparişi güncelle
async function updateOrder() {
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

    console.log("Güncellenecek tarihler:", {
      OrderDate: preparedOrderData.OrderDate,
      RequiredDate: preparedOrderData.RequiredDate,
      ShippedDate: preparedOrderData.ShippedDate
    });

    // Sipariş durumunu kontrol et
    if (preparedOrderData.Status === 'Teslim Edildi' && !preparedOrderData.ShippedDate) {
      preparedOrderData.ShippedDate = prepareDate(new Date().toISOString().substring(0, 10));
    } else if (preparedOrderData.Status === 'İptal Edildi') {
      // İptal işlemi için özel mantık eklenebilir
    }

    // API'ye gönder
    const response = await $fetch(`/api/orders/update/${orderId}`, {
      method: 'PUT',
      body: {
        ...preparedOrderData,
        details: preparedDetails
      }
    })

    alert('Sipariş başarıyla güncellendi!')
    navigateTo(`/orders/${orderId}`)
  } catch (error) {
    console.error('Sipariş güncellenirken hata:', error)
    alert('Sipariş güncellenirken bir hata oluştu: ' + (error.message || 'Bilinmeyen hata'))
  } finally {
    isSubmitting.value = false
  }
}
</script> 