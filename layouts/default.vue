<template>
  <div class="min-h-screen bg-gray-50">
    <header class="bg-blue-600 shadow-md">
      <div class="container mx-auto px-4 py-4">
        <h1 class="text-2xl font-bold text-white flex items-center">
          <Icon name="mdi:database" class="mr-2 text-white text-3xl" /> 
          Northwind Veritabanı Yönetimi
        </h1>
        <nav class="mt-2">
          <ul class="flex space-x-4">
            <li><NuxtLink to="/" class="text-white hover:text-blue-200 flex items-center">
              <Icon name="mdi:home" class="mr-1" /> Ana Sayfa
            </NuxtLink></li>
            <li><NuxtLink to="/products" class="text-white hover:text-blue-200 flex items-center">
              <Icon name="mdi:package-variant-closed" class="mr-1" /> Ürünler
            </NuxtLink></li>
            <li><NuxtLink to="/categories" class="text-white hover:text-blue-200 flex items-center">
              <Icon name="mdi:shape" class="mr-1" /> Kategoriler
            </NuxtLink></li>
            <li><NuxtLink to="/customers" class="text-white hover:text-blue-200 flex items-center">
              <Icon name="mdi:account-group" class="mr-1" /> Müşteriler
            </NuxtLink></li>
            <li><NuxtLink to="/orders" class="text-white hover:text-blue-200 flex items-center">
              <Icon name="mdi:cart" class="mr-1" /> Siparişler
            </NuxtLink></li>
            <li><NuxtLink to="/suppliers" class="text-white hover:text-blue-200 flex items-center">
              <Icon name="mdi:truck-delivery" class="mr-1" /> Tedarikçiler
            </NuxtLink></li>
            <li><NuxtLink to="/employees" class="text-white hover:text-blue-200 flex items-center">
              <Icon name="mdi:account-tie" class="mr-1" /> Çalışanlar
            </NuxtLink></li>
            <li><NuxtLink to="/shippers" class="text-white hover:text-blue-200 flex items-center">
              <Icon name="mdi:truck-fast" class="mr-1" /> Nakliyeciler
            </NuxtLink></li>
            <li><NuxtLink to="/regions" class="text-white hover:text-blue-200 flex items-center">
              <Icon name="mdi:map" class="mr-1" /> Bölgeler
            </NuxtLink></li>
            <li><NuxtLink to="/territories" class="text-white hover:text-blue-200 flex items-center">
              <Icon name="mdi:map-marker" class="mr-1" /> Alanlar
            </NuxtLink></li>
            <li class="relative group">
              <span class="text-white hover:text-blue-200 cursor-pointer flex items-center">
                <Icon name="mdi:chart-box" class="mr-1" /> İstatistikler
                <Icon name="mdi:chevron-down" class="ml-1 text-sm" />
              </span>
              <ul class="absolute hidden group-hover:block bg-white shadow-md mt-1 py-2 rounded w-56 z-10">
                <li><NuxtLink to="/statistics/product-sales" class="block px-4 py-2 text-gray-800 hover:bg-blue-100 flex items-center">
                  <Icon name="mdi:chart-line" class="mr-2 text-blue-600" /> Ürün Satışları
                </NuxtLink></li>
                <li><NuxtLink to="/statistics/category-sales" class="block px-4 py-2 text-gray-800 hover:bg-blue-100 flex items-center">
                  <Icon name="mdi:chart-pie" class="mr-2 text-indigo-600" /> Kategori Satışları
                </NuxtLink></li>
                <li><NuxtLink to="/statistics/customer-purchases" class="block px-4 py-2 text-gray-800 hover:bg-blue-100 flex items-center">
                  <Icon name="mdi:chart-bar" class="mr-2 text-teal-600" /> Müşteri Satın Almaları
                </NuxtLink></li>
                <li><NuxtLink to="/statistics/employee-performance" class="block px-4 py-2 text-gray-800 hover:bg-blue-100 flex items-center">
                  <Icon name="mdi:chart-timeline-variant" class="mr-2 text-orange-600" /> Çalışan Performansı
                </NuxtLink></li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <main class="container mx-auto px-4 py-6">
      <slot />
    </main>
    <footer class="bg-gray-100 border-t">
      <div class="container mx-auto px-4 py-4 text-center text-gray-600">
        &copy; {{ new Date().getFullYear() }} Northwind Veritabanı Yönetimi
        <div class="flex justify-center mt-2 space-x-4">
          <a href="https://github.com/bdaban" target="_blank" class="text-gray-500 hover:text-blue-600"><Icon name="mdi:github" size="20" /></a>
          <a href="https://www.linkedin.com/in/burak-d-b95247170/" target="_blank" class="text-gray-500 hover:text-blue-600"><Icon name="mdi:linkedin" size="20" /></a>
          <a href="#" class="text-gray-500 hover:text-blue-600"><Icon name="mdi:twitter" size="20" /></a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script lang="ts" setup>

</script>

<style>

</style>