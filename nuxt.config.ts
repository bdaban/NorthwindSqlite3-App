import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  runtimeConfig: {
    public: {
      appName: 'Northwind Veritabanı Yönetimi'
    }
  },

  modules: ['@nuxt/icon'],

  compatibilityDate: '2025-04-09',

 
})