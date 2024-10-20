// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt',
    '@vite-pwa/nuxt',
    '@nuxt/image',
    '@nuxt/ui'
  ],

  tailwindcss: {
      cssPath: '~/assets/css/tailwind.css',
      configPath: 'tailwind.config',
  },

  image: {
      provider: 'cloudinary',
      cloudinary: {
          baseURL: 'https://res.cloudinary.com/geekiam-io/image/upload/'
      }
  },

  runtimeConfig: {
      public: {
          fathom_analytics_id: process.env.fathom_analytics_id,
          siteUrl: 'https://geekiam.app',
      },
  },

  compatibilityDate: '2024-10-20'
})