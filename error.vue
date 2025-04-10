<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
    <div class="bg-white p-8 rounded-lg shadow-md max-w-lg w-full text-center">
      <h1 class="text-3xl font-bold text-red-600 mb-4">{{ error.statusCode }}</h1>
      <p class="text-xl text-gray-800 mb-6">{{ error.statusMessage || 'Bir hata oluştu' }}</p>
      <p class="text-gray-600 mb-8">{{ error.message || 'Üzgünüz, bir sorun oluştu. Lütfen tekrar deneyin.' }}</p>
      <button @click="handleError" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg">
        Ana Sayfaya Dön
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  error: Object
})

const handleError = () => clearError({ redirect: '/' })
</script> 