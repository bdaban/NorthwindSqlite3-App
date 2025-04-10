<template>
  <div>
    <div class="bg-white p-6 rounded-lg shadow-md">
      <div class="mb-6">
        <NuxtLink to="/suppliers" class="text-blue-600 hover:text-blue-800 flex items-center">
          <Icon name="mdi:arrow-left" class="w-5 h-5 mr-1" />
          Tedarikçilere Dön
        </NuxtLink>
      </div>

      <h1 class="text-2xl font-bold text-gray-800 mb-6 flex items-center">
        <Icon name="mdi:truck-plus" class="w-7 h-7 mr-2 text-blue-600" />
        Yeni Tedarikçi Ekle
      </h1>

      <form @submit.prevent="saveSupplier" class="space-y-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="space-y-4">
            <h2 class="text-lg font-semibold text-blue-800 flex items-center">
              <Icon name="mdi:information-outline" class="w-5 h-5 mr-2 text-blue-700" />
              Tedarikçi Bilgileri
            </h2>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">
                <Icon name="mdi:domain" class="w-4 h-4 inline mr-1" />
                Şirket Adı
              </label>
              <input 
                v-model="form.CompanyName" 
                type="text" 
                required
                class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">
                <Icon name="mdi:account" class="w-4 h-4 inline mr-1" />
                İletişim Adı
              </label>
              <input 
                v-model="form.ContactName" 
                type="text"
                class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">
                <Icon name="mdi:card-account-details" class="w-4 h-4 inline mr-1" />
                İletişim Ünvanı
              </label>
              <input 
                v-model="form.ContactTitle" 
                type="text"
                class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
          
          <div class="space-y-4">
            <h2 class="text-lg font-semibold text-green-800 flex items-center">
              <Icon name="mdi:contacts" class="w-5 h-5 mr-2 text-green-700" />
              İletişim Bilgileri
            </h2>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">
                <Icon name="mdi:map-marker" class="w-4 h-4 inline mr-1" />
                Adres
              </label>
              <input 
                v-model="form.Address" 
                type="text"
                class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">
                <Icon name="mdi:city" class="w-4 h-4 inline mr-1" />
                Şehir
              </label>
              <input 
                v-model="form.City" 
                type="text"
                class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">
                <Icon name="mdi:map" class="w-4 h-4 inline mr-1" />
                Bölge
              </label>
              <input 
                v-model="form.Region" 
                type="text"
                class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">
                <Icon name="mdi:mail" class="w-4 h-4 inline mr-1" />
                Posta Kodu
              </label>
              <input 
                v-model="form.PostalCode" 
                type="text"
                class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">
                <Icon name="mdi:earth" class="w-4 h-4 inline mr-1" />
                Ülke
              </label>
              <input 
                v-model="form.Country" 
                type="text"
                class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">
                <Icon name="mdi:phone" class="w-4 h-4 inline mr-1" />
                Telefon
              </label>
              <input 
                v-model="form.Phone" 
                type="text"
                class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">
                <Icon name="mdi:fax" class="w-4 h-4 inline mr-1" />
                Faks
              </label>
              <input 
                v-model="form.Fax" 
                type="text"
                class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">
                <Icon name="mdi:web" class="w-4 h-4 inline mr-1" />
                Web Sayfası
              </label>
              <input 
                v-model="form.HomePage" 
                type="text"
                class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
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
            to="/suppliers" 
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
          <span>Tedarikçi başarıyla oluşturuldu.</span>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const router = useRouter()

// Form verilerini hazırla
const form = reactive({
  CompanyName: '',
  ContactName: '',
  ContactTitle: '',
  Address: '',
  City: '',
  Region: '',
  PostalCode: '',
  Country: '',
  Phone: '',
  Fax: '',
  HomePage: ''
})

// Durum değişkenleri
const saving = ref(false)
const saveError = ref(null)
const saveSuccess = ref(false)

// Tedarikçiyi kaydet
async function saveSupplier() {
  if (!form.CompanyName) {
    saveError.value = 'Şirket adı gereklidir.'
    return
  }
  
  saving.value = true
  saveError.value = null
  saveSuccess.value = false
  
  try {
    // API'ye gönder
    const { data, error } = await useFetch('/api/suppliers/create', {
      method: 'POST',
      body: form
    })
    
    if (error.value) throw new Error(error.value.message || 'Tedarikçi oluşturulurken bir hata oluştu')
    
    saveSuccess.value = true
    setTimeout(() => {
      router.push(`/suppliers/${data.value.SupplierID}`)
    }, 1500)
  } catch (err) {
    saveError.value = err.message || 'Tedarikçi oluşturulurken beklenmeyen bir hata oluştu'
  } finally {
    saving.value = false
  }
}
</script> 