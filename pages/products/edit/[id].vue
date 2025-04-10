<template>
  <div>
    <div class="bg-white p-6 rounded-lg shadow-md">
      <div class="mb-6">
        <NuxtLink to="/products" class="text-blue-600 hover:text-blue-800 flex items-center">
          <Icon name="mdi:arrow-left" class="w-5 h-5 mr-1" />
          Ürünlere Dön
        </NuxtLink>
      </div>

      <div v-if="pending" class="flex justify-center py-8">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>

      <div v-else-if="error" class="py-8 text-center">
        <Icon name="mdi:alert-circle" class="w-12 h-12 text-red-500 mx-auto mb-2" />
        <p class="text-red-500">{{ error.message }}</p>
      </div>

      <div v-else-if="!product" class="py-8 text-center">
        <Icon name="mdi:package-variant-remove" class="w-12 h-12 text-gray-400 mx-auto mb-2" />
        <p class="text-gray-500">Ürün bulunamadı.</p>
      </div>

      <div v-else>
        <h1 class="text-2xl font-bold text-gray-800 mb-6 flex items-center">
          <Icon name="mdi:pencil-box" class="w-7 h-7 mr-2 text-amber-600" />
          Ürün Düzenle: {{ product.ProductName }}
        </h1>

        <form @submit.prevent="saveProduct" class="space-y-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="space-y-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">
                  <Icon name="mdi:tag" class="w-4 h-4 inline mr-1" />
                  Ürün Adı
                </label>
                <input 
                  v-model="form.ProductName" 
                  type="text" 
                  required
                  class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">
                  <Icon name="mdi:shape" class="w-4 h-4 inline mr-1" />
                  Kategori
                </label>
                <select 
                  v-model="form.CategoryID" 
                  class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option :value="null">Kategori seçin</option>
                  <option v-for="category in categories" :key="category.CategoryID" :value="category.CategoryID">
                    {{ category.CategoryName }}
                  </option>
                </select>
              </div>
              
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">
                  <Icon name="mdi:truck-delivery" class="w-4 h-4 inline mr-1" />
                  Tedarikçi
                </label>
                <select 
                  v-model="form.SupplierID" 
                  class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option :value="null">Tedarikçi seçin</option>
                  <option v-for="supplier in suppliers" :key="supplier.SupplierID" :value="supplier.SupplierID">
                    {{ supplier.CompanyName }}
                  </option>
                </select>
              </div>
              
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">
                  <Icon name="mdi:currency-usd" class="w-4 h-4 inline mr-1" />
                  Birim Fiyat
                </label>
                <input 
                  v-model="form.UnitPrice" 
                  type="number" 
                  step="0.01"
                  min="0"
                  class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
            
            <div class="space-y-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">
                  <Icon name="mdi:scale-balance" class="w-4 h-4 inline mr-1" />
                  Birim Başına Miktar
                </label>
                <input 
                  v-model="form.QuantityPerUnit" 
                  type="text"
                  class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">
                  <Icon name="mdi:package-variant-closed" class="w-4 h-4 inline mr-1" />
                  Stok Miktarı
                </label>
                <input 
                  v-model="form.UnitsInStock" 
                  type="number"
                  min="0"
                  class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">
                  <Icon name="mdi:cart" class="w-4 h-4 inline mr-1" />
                  Sipariş Bekleyen
                </label>
                <input 
                  v-model="form.UnitsOnOrder" 
                  type="number"
                  min="0"
                  class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">
                  <Icon name="mdi:alert" class="w-4 h-4 inline mr-1" />
                  Yeniden Sipariş Seviyesi
                </label>
                <input 
                  v-model="form.ReorderLevel" 
                  type="number"
                  min="0"
                  class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              
              <div class="flex items-center space-x-2 mt-2">
                <label class="inline-flex items-center">
                  <input 
                    type="checkbox" 
                    v-model="form.isDiscontinued" 
                    class="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
                  />
                  <span class="ml-2 text-sm text-gray-700 flex items-center">
                    <Icon 
                      :name="form.isDiscontinued ? 'mdi:close-circle' : 'mdi:check-circle'" 
                      class="w-4 h-4 mr-1" 
                      :class="form.isDiscontinued ? 'text-red-600' : 'text-green-600'"
                    />
                    Üretimi Durduruldu
                  </span>
                </label>
              </div>
            </div>
          </div>
          
          <div class="flex space-x-2 mt-8">
            <button 
              type="submit" 
              class="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg flex items-center"
              :disabled="saving"
            >
              <Icon name="mdi:content-save" class="w-5 h-5 mr-2" />
              {{ saving ? 'Kaydediliyor...' : 'Kaydet' }}
            </button>
            
            <NuxtLink 
              :to="`/products/${productId}`" 
              class="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-lg flex items-center"
            >
              <Icon name="mdi:cancel" class="w-5 h-5 mr-2" />
              İptal
            </NuxtLink>
          </div>
          
          <div v-if="saveError" class="text-red-600 mt-4 p-4 bg-red-50 rounded-lg flex items-start">
            <Icon name="mdi:alert-circle" class="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
            <span>{{ saveError }}</span>
          </div>
          
          <div v-if="saveSuccess" class="text-green-600 mt-4 p-4 bg-green-50 rounded-lg flex items-start">
            <Icon name="mdi:check-circle" class="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
            <span>Ürün başarıyla güncellendi.</span>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'

const route = useRoute()
const router = useRouter()
const productId = parseInt(route.params.id)

// Ürün verilerini al
const { data: product, pending, error } = await useFetch(`/api/products/${productId}`)

// Kategori ve tedarikçi listelerini al
const { data: categories } = await useFetch('/api/categories')
const { data: suppliers } = await useFetch('/api/suppliers')

// Form verilerini hazırla
const form = reactive({
  ProductName: '',
  CategoryID: null,
  SupplierID: null,
  QuantityPerUnit: '',
  UnitPrice: 0,
  UnitsInStock: 0,
  UnitsOnOrder: 0,
  ReorderLevel: 0,
  isDiscontinued: false
})

// Ürün verileri geldiğinde formu doldur
watch(product, (newProduct) => {
  if (newProduct) {
    form.ProductName = newProduct.ProductName
    form.CategoryID = newProduct.CategoryID
    form.SupplierID = newProduct.SupplierID
    form.QuantityPerUnit = newProduct.QuantityPerUnit || ''
    form.UnitPrice = newProduct.UnitPrice || 0
    form.UnitsInStock = newProduct.UnitsInStock || 0
    form.UnitsOnOrder = newProduct.UnitsOnOrder || 0
    form.ReorderLevel = newProduct.ReorderLevel || 0
    form.isDiscontinued = newProduct.Discontinued === '1'
  }
}, { immediate: true })

// Durum değişkenleri
const saving = ref(false)
const saveError = ref(null)
const saveSuccess = ref(false)

// Ürünü kaydet
async function saveProduct() {
  saving.value = true
  saveError.value = null
  saveSuccess.value = false
  
  try {
    // Form verilerini API formatına dönüştür
    const productData = {
      ProductName: form.ProductName,
      CategoryID: form.CategoryID,
      SupplierID: form.SupplierID,
      QuantityPerUnit: form.QuantityPerUnit,
      UnitPrice: form.UnitPrice,
      UnitsInStock: parseInt(form.UnitsInStock),
      UnitsOnOrder: parseInt(form.UnitsOnOrder),
      ReorderLevel: parseInt(form.ReorderLevel),
      Discontinued: form.isDiscontinued ? '1' : '0'
    }
    
    // API'ye gönder
    const { data, error } = await useFetch(`/api/products/update/${productId}`, {
      method: 'PUT',
      body: productData
    })
    
    if (error.value) throw new Error(error.value.message || 'Ürün güncellenirken bir hata oluştu')
    
    saveSuccess.value = true
    setTimeout(() => {
      router.push(`/products/${productId}`)
    }, 1500)
  } catch (err) {
    saveError.value = err.message || 'Ürün güncellenirken beklenmeyen bir hata oluştu'
  } finally {
    saving.value = false
  }
}
</script> 