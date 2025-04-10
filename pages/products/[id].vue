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
          <Icon name="mdi:package-variant" class="w-7 h-7 mr-2 text-blue-600" />
          {{ product.ProductName }}
        </h1>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div class="bg-gray-50 p-4 rounded-lg">
              <h2 class="text-lg font-semibold text-gray-700 mb-3 flex items-center">
                <Icon name="mdi:information-outline" class="w-5 h-5 mr-2 text-blue-600" />
                Ürün Bilgileri
              </h2>
              
              <div class="space-y-3">
                <p class="flex items-center">
                  <Icon name="mdi:pound" class="w-5 h-5 mr-2 text-gray-500" />
                  <span class="font-medium">Ürün ID:</span> 
                  <span class="ml-2">{{ product.ProductID }}</span>
                </p>
                <p class="flex items-center">
                  <Icon name="mdi:shape" class="w-5 h-5 mr-2 text-gray-500" />
                  <span class="font-medium">Kategori:</span> 
                  <span class="ml-2">{{ product.Categories?.CategoryName || 'Belirtilmemiş' }}</span>
                </p>
                <p class="flex items-center">
                  <Icon name="mdi:truck-delivery" class="w-5 h-5 mr-2 text-gray-500" />
                  <span class="font-medium">Tedarikçi:</span> 
                  <span class="ml-2">{{ product.Suppliers?.CompanyName || 'Belirtilmemiş' }}</span>
                </p>
                <p class="flex items-center">
                  <Icon name="mdi:currency-usd" class="w-5 h-5 mr-2 text-gray-500" />
                  <span class="font-medium">Birim Fiyat:</span> 
                  <span class="ml-2">{{ product.UnitPrice }}</span>
                </p>
                <p class="flex items-center">
                  <Icon name="mdi:scale-balance" class="w-5 h-5 mr-2 text-gray-500" />
                  <span class="font-medium">Birim Başına Miktar:</span> 
                  <span class="ml-2">{{ product.QuantityPerUnit || 'Belirtilmemiş' }}</span>
                </p>
                <p class="flex items-center">
                  <Icon name="mdi:package-variant-closed" class="w-5 h-5 mr-2 text-gray-500" />
                  <span class="font-medium">Stok Miktarı:</span> 
                  <span class="ml-2" :class="product.UnitsInStock > 0 ? 'text-green-600 font-medium' : 'text-red-600'">
                    {{ product.UnitsInStock }}
                  </span>
                </p>
                <p class="flex items-center">
                  <Icon name="mdi:cart" class="w-5 h-5 mr-2 text-gray-500" />
                  <span class="font-medium">Sipariş Bekleyen:</span> 
                  <span class="ml-2">{{ product.UnitsOnOrder }}</span>
                </p>
                <p class="flex items-center">
                  <Icon name="mdi:alert" class="w-5 h-5 mr-2 text-gray-500" />
                  <span class="font-medium">Yeniden Sipariş Seviyesi:</span> 
                  <span class="ml-2">{{ product.ReorderLevel }}</span>
                </p>
                <p class="flex items-center">
                  <Icon 
                    :name="product.Discontinued === '1' ? 'mdi:close-circle' : 'mdi:check-circle'" 
                    class="w-5 h-5 mr-2" 
                    :class="product.Discontinued === '1' ? 'text-red-600' : 'text-green-600'"
                  />
                  <span class="font-medium">Durumu:</span> 
                  <span :class="product.Discontinued === '1' ? 'text-red-600 ml-2' : 'text-green-600 ml-2'">
                    {{ product.Discontinued === '1' ? 'Üretimi Durduruldu' : 'Aktif' }}
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div v-if="product.Categories">
            <div class="bg-green-50 p-4 rounded-lg">
              <h2 class="text-lg font-semibold text-green-700 mb-3 flex items-center">
                <Icon name="mdi:tag-outline" class="w-5 h-5 mr-2 text-green-700" />
                Kategori Bilgileri
              </h2>
              
              <div class="space-y-3">
                <p class="flex items-center">
                  <Icon name="mdi:pound" class="w-5 h-5 mr-2 text-green-600" />
                  <span class="font-medium">Kategori ID:</span> 
                  <span class="ml-2">{{ product.Categories.CategoryID }}</span>
                </p>
                <p class="flex items-center">
                  <Icon name="mdi:tag" class="w-5 h-5 mr-2 text-green-600" />
                  <span class="font-medium">Kategori Adı:</span> 
                  <span class="ml-2">{{ product.Categories.CategoryName }}</span>
                </p>
                <p v-if="product.Categories.Description" class="flex items-start">
                  <Icon name="mdi:text-box-outline" class="w-5 h-5 mr-2 text-green-600 mt-0.5" />
                  <span class="font-medium">Açıklama:</span> 
                  <span class="ml-2">{{ product.Categories.Description }}</span>
                </p>
              </div>
            </div>
            
            <div v-if="product.Suppliers" class="bg-blue-50 p-4 rounded-lg mt-4">
              <h2 class="text-lg font-semibold text-blue-700 mb-3 flex items-center">
                <Icon name="mdi:truck-delivery-outline" class="w-5 h-5 mr-2 text-blue-700" />
                Tedarikçi Bilgileri
              </h2>
              
              <div class="space-y-3">
                <p class="flex items-center">
                  <Icon name="mdi:domain" class="w-5 h-5 mr-2 text-blue-600" />
                  <span class="font-medium">Firma Adı:</span> 
                  <span class="ml-2">{{ product.Suppliers.CompanyName }}</span>
                </p>
                <p v-if="product.Suppliers.ContactName" class="flex items-center">
                  <Icon name="mdi:account" class="w-5 h-5 mr-2 text-blue-600" />
                  <span class="font-medium">İletişim Kişisi:</span> 
                  <span class="ml-2">{{ product.Suppliers.ContactName }}</span>
                </p>
                <p v-if="product.Suppliers.Country" class="flex items-center">
                  <Icon name="mdi:earth" class="w-5 h-5 mr-2 text-blue-600" />
                  <span class="font-medium">Ülke:</span> 
                  <span class="ml-2">{{ product.Suppliers.Country }}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="mt-6 flex">
          <NuxtLink :to="`/products/edit/${product.ProductID}`" class="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg flex items-center mr-2">
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
const productId = parseInt(route.params.id)

const { data: product, pending, error } = await useFetch(`/api/products/${productId}`)
</script> 