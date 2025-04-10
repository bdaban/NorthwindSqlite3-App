<template>
  <div>
    <div class="bg-white p-6 rounded-lg shadow-md">
      <div class="mb-6">
        <NuxtLink to="/employees" class="text-indigo-600 hover:text-indigo-800 flex items-center">
          <Icon name="mdi:arrow-left" class="w-5 h-5 mr-1" />
          Çalışanlara Dön
        </NuxtLink>
      </div>

      <h1 class="text-2xl font-bold text-gray-800 mb-6 flex items-center">
        <Icon name="mdi:account-plus" class="w-7 h-7 mr-2 text-indigo-600" />
        Yeni Çalışan Ekle
      </h1>

      <form @submit.prevent="saveEmployee" class="space-y-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="space-y-4">
            <h2 class="text-lg font-semibold text-indigo-800 flex items-center">
              <Icon name="mdi:account-details" class="w-5 h-5 mr-2 text-indigo-700" />
              Kişisel Bilgiler
            </h2>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">
                <Icon name="mdi:account" class="w-4 h-4 inline mr-1" />
                Ad
              </label>
              <input 
                v-model="form.FirstName" 
                type="text" 
                required
                class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">
                <Icon name="mdi:account-details" class="w-4 h-4 inline mr-1" />
                Soyad
              </label>
              <input 
                v-model="form.LastName" 
                type="text"
                required
                class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">
                <Icon name="mdi:briefcase" class="w-4 h-4 inline mr-1" />
                Ünvan
              </label>
              <input 
                v-model="form.Title" 
                type="text"
                class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">
                <Icon name="mdi:badge-account" class="w-4 h-4 inline mr-1" />
                Nezaket Ünvanı
              </label>
              <select 
                v-model="form.TitleOfCourtesy" 
                class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="">Seçiniz</option>
                <option value="Mr.">Bay</option>
                <option value="Mrs.">Bayan</option>
                <option value="Ms.">Bayan (Bekar)</option>
                <option value="Dr.">Dr.</option>
              </select>
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">
                <Icon name="mdi:cake-variant" class="w-4 h-4 inline mr-1" />
                Doğum Tarihi
              </label>
              <input 
                v-model="form.BirthDate" 
                type="date"
                class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">
                <Icon name="mdi:calendar-check" class="w-4 h-4 inline mr-1" />
                İşe Başlama Tarihi
              </label>
              <input 
                v-model="form.HireDate" 
                type="date"
                required
                class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
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
                class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
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
                class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
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
                class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
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
                class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
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
                class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">
                <Icon name="mdi:phone" class="w-4 h-4 inline mr-1" />
                Telefon
              </label>
              <input 
                v-model="form.HomePhone" 
                type="text"
                class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">
                <Icon name="mdi:phone-settings" class="w-4 h-4 inline mr-1" />
                Uzantı
              </label>
              <input 
                v-model="form.Extension" 
                type="text"
                class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>
        </div>
        
        <div class="space-y-4">
          <h2 class="text-lg font-semibold text-amber-800 flex items-center">
            <Icon name="mdi:office-building" class="w-5 h-5 mr-2 text-amber-700" />
            İş Bilgileri
          </h2>
          
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">
              <Icon name="mdi:account-supervisor" class="w-4 h-4 inline mr-1" />
              Yönetici
            </label>
            <select 
              v-model="form.ReportsTo" 
              class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option :value="null">Yönetici Yok</option>
              <option v-for="manager in managers" :key="manager.EmployeeID" :value="manager.EmployeeID">
                {{ manager.FirstName }} {{ manager.LastName }}
              </option>
            </select>
          </div>
          
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">
              <Icon name="mdi:note-text" class="w-4 h-4 inline mr-1" />
              Notlar
            </label>
            <textarea 
              v-model="form.Notes" 
              rows="4"
              class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            ></textarea>
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
            to="/employees" 
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
          <span>Çalışan başarıyla oluşturuldu.</span>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const router = useRouter()

// Bugünün tarihini yyyy-MM-dd formatında al
const today = new Date().toISOString().split('T')[0]

// Yönetici olarak seçilebilecek çalışanları al
const { data: managers } = await useFetch('/api/employees')

// Form verilerini hazırla
const form = reactive({
  FirstName: '',
  LastName: '',
  Title: '',
  TitleOfCourtesy: '',
  BirthDate: '',
  HireDate: today, // Varsayılan olarak bugünü seç
  Address: '',
  City: '',
  Region: '',
  PostalCode: '',
  Country: '',
  HomePhone: '',
  Extension: '',
  ReportsTo: null,
  Notes: ''
})

// Durum değişkenleri
const saving = ref(false)
const saveError = ref(null)
const saveSuccess = ref(false)

// Çalışanı kaydet
async function saveEmployee() {
  saving.value = true
  saveError.value = null
  saveSuccess.value = false
  
  try {
    // API'ye gönder
    const { data, error } = await useFetch('/api/employees/create', {
      method: 'POST',
      body: form
    })
    
    if (error.value) throw new Error(error.value.message || 'Çalışan oluşturulurken bir hata oluştu')
    
    saveSuccess.value = true
    setTimeout(() => {
      router.push(`/employees/${data.value.EmployeeID}`)
    }, 1500)
  } catch (err) {
    saveError.value = err.message || 'Çalışan oluşturulurken beklenmeyen bir hata oluştu'
  } finally {
    saving.value = false
  }
}
</script> 