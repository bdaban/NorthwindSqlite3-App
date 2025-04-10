<template>
  <div>
    <div class="bg-white p-6 rounded-lg shadow-md">
      <h1 class="text-3xl font-bold text-gray-800 mb-6 flex items-center">
        <Icon name="mdi:view-dashboard" class="mr-3 text-blue-600 text-4xl" /> 
        Northwind Veritabanı Yönetim Sistemi
      </h1>
      
      <p class="text-lg text-gray-600 mb-8">
        Bu uygulama, Northwind veritabanındaki verileri görüntülemek ve yönetmek için tasarlanmıştır.
        Aşağıdaki veri tablolarına erişebilirsiniz:
      </p>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <NuxtLink to="/products" class="block p-6 bg-blue-50 hover:bg-blue-100 rounded-lg shadow-sm border border-blue-200 transition-colors">
          <div class="flex items-center mb-2">
            <Icon name="mdi:package-variant-closed" class="text-blue-600 text-2xl mr-2" />
            <h2 class="text-xl font-semibold text-blue-800">Ürünler</h2>
          </div>
          <p class="text-blue-600">Tüm ürünleri görüntüleyin ve yönetin.</p>
        </NuxtLink>
        
        <NuxtLink to="/categories" class="block p-6 bg-green-50 hover:bg-green-100 rounded-lg shadow-sm border border-green-200 transition-colors">
          <div class="flex items-center mb-2">
            <Icon name="mdi:shape" class="text-green-600 text-2xl mr-2" />
            <h2 class="text-xl font-semibold text-green-800">Kategoriler</h2>
          </div>
          <p class="text-green-600">Ürün kategorilerini görüntüleyin ve yönetin.</p>
        </NuxtLink>
        
        <NuxtLink to="/customers" class="block p-6 bg-purple-50 hover:bg-purple-100 rounded-lg shadow-sm border border-purple-200 transition-colors">
          <div class="flex items-center mb-2">
            <Icon name="mdi:account-group" class="text-purple-600 text-2xl mr-2" />
            <h2 class="text-xl font-semibold text-purple-800">Müşteriler</h2>
          </div>
          <p class="text-purple-600">Müşteri kayıtlarını görüntüleyin ve yönetin.</p>
        </NuxtLink>
        
        <NuxtLink to="/orders" class="block p-6 bg-amber-50 hover:bg-amber-100 rounded-lg shadow-sm border border-amber-200 transition-colors">
          <div class="flex items-center mb-2">
            <Icon name="mdi:cart" class="text-amber-600 text-2xl mr-2" />
            <h2 class="text-xl font-semibold text-amber-800">Siparişler</h2>
          </div>
          <p class="text-amber-600">Tüm siparişleri görüntüleyin ve yönetin.</p>
        </NuxtLink>
      </div>
      
      <h2 class="text-2xl font-bold text-gray-800 mt-10 mb-6 flex items-center">
        <Icon name="mdi:chart-bar" class="mr-2 text-indigo-600" />
        İstatistikler ve Raporlar
      </h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <NuxtLink to="/statistics/product-sales" class="block p-6 bg-red-50 hover:bg-red-100 rounded-lg shadow-sm border border-red-200 transition-colors">
          <div class="flex items-center mb-2">
            <Icon name="mdi:chart-line" class="text-red-600 text-2xl mr-2" />
            <h2 class="text-xl font-semibold text-red-800">Ürün Satışları</h2>
          </div>
          <p class="text-red-600">Ürün bazlı satış istatistiklerini görüntüleyin.</p>
        </NuxtLink>
        
        <NuxtLink to="/statistics/category-sales" class="block p-6 bg-indigo-50 hover:bg-indigo-100 rounded-lg shadow-sm border border-indigo-200 transition-colors">
          <div class="flex items-center mb-2">
            <Icon name="mdi:chart-pie" class="text-indigo-600 text-2xl mr-2" />
            <h2 class="text-xl font-semibold text-indigo-800">Kategori Satışları</h2>
          </div>
          <p class="text-indigo-600">Kategori bazlı satış analizini görüntüleyin.</p>
        </NuxtLink>
        
        <NuxtLink to="/statistics/customer-purchases" class="block p-6 bg-teal-50 hover:bg-teal-100 rounded-lg shadow-sm border border-teal-200 transition-colors">
          <div class="flex items-center mb-2">
            <Icon name="mdi:chart-bar" class="text-teal-600 text-2xl mr-2" />
            <h2 class="text-xl font-semibold text-teal-800">Müşteri Satın Almaları</h2>
          </div>
          <p class="text-teal-600">Müşterilerin satın alma istatistiklerini görüntüleyin.</p>
        </NuxtLink>
        
        <NuxtLink to="/statistics/employee-performance" class="block p-6 bg-orange-50 hover:bg-orange-100 rounded-lg shadow-sm border border-orange-200 transition-colors">
          <div class="flex items-center mb-2">
            <Icon name="mdi:chart-timeline-variant" class="text-orange-600 text-2xl mr-2" />
            <h2 class="text-xl font-semibold text-orange-800">Çalışan Performansı</h2>
          </div>
          <p class="text-orange-600">Çalışanların performans analizini görüntüleyin.</p>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  title: 'Ana Sayfa'
})
</script>

<style>

</style>