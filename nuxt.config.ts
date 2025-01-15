export default defineNuxtConfig({
  modules: ['@pinia/nuxt', '@nuxt/image', '@nuxt/ui', '@vite-pwa/nuxt', 'nuxt-mitter', '@vee-validate/nuxt'],
  ssr: false,

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

  mitt: {
      types: './types/event.d.ts'
  },

  runtimeConfig: {
      public: {
          fathom_analytics_id: process.env.fathom_analytics_id,
          siteUrl: 'https://geekiam.app',
      },
  }
})
