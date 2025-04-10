<template>
  <div>
    <div class="mb-4">
      <NuxtLink :to="`/suppliers/${supplierId}`" class="text-blue-600 hover:text-blue-800">
        &lt; Tedarikçi Detayına Dön
      </NuxtLink>
    </div>

    <div v-if="pendingSupplier || pendingProducts" class="flex justify-center items-center py-8">
      <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    </div>
    
    <div v-else-if="errorSupplier || errorProducts" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
      <strong class="font-bold">Hata!</strong>
      <span class="block sm:inline"> Veriler yüklenirken bir sorun oluştu.</span>
    </div>
    
    <div v-else>
      <h1 class="text-2xl font-bold mb-2">{{ supplier.CompanyName }}</h1>
      <h2 class="text-xl font-semibold mb-4">Tedarikçinin Ürünleri</h2>
      
      <div v-if="products.length === 0" class="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded relative" role="alert">
        <span class="block sm:inline">Bu tedarikçiye ait ürün bulunamadı.</span>
      </div>
      
      <div v-else class="overflow-x-auto">
        <table class="min-w-full bg-white border border-gray-300">
          <thead>
            <tr class="bg-gray-100">
              <th class="py-2 px-4 border-b text-left">Ürün Adı</th>
              <th class="py-2 px-4 border-b text-left">Kategori</th>
              <th class="py-2 px-4 border-b text-left">Birim Fiyat</th>
              <th class="py-2 px-4 border-b text-left">Stok</th>
              <th class="py-2 px-4 border-b text-left">Sipariş Edilmiş</th>
              <th class="py-2 px-4 border-b text-left">Birim Başına Miktar</th>
              <th class="py-2 px-4 border-b text-left">İşlemler</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in products" :key="product.ProductID" class="hover:bg-gray-50">
              <td class="py-2 px-4 border-b">{{ product.ProductName }}</td>
              <td class="py-2 px-4 border-b">{{ product.Categories?.CategoryName || '-' }}</td>
              <td class="py-2 px-4 border-b">{{ formatCurrency(product.UnitPrice) }}</td>
              <td class="py-2 px-4 border-b">{{ product.UnitsInStock }}</td>
              <td class="py-2 px-4 border-b">{{ product.UnitsOnOrder }}</td>
              <td class="py-2 px-4 border-b">{{ product.QuantityPerUnit }}</td>
              <td class="py-2 px-4 border-b">
                <NuxtLink 
                  :to="`/products/${product.ProductID}`"
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
</template>

<script setup>
const route = useRoute()
const supplierId = route.params.id

const { data: supplier, pending: pendingSupplier, error: errorSupplier } = await useFetch(`/api/suppliers/${supplierId}`)
const { data: products, pending: pendingProducts, error: errorProducts } = await useFetch(`/api/suppliers/${supplierId}/products`)

const formatCurrency = (value) => {
  if (value == null) return '-'
  return new Intl.NumberFormat('tr-TR', {
    style: 'currency',
    currency: 'USD'
  }).format(value)
}
</script> 