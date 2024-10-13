// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   modules: [
     '@nuxtjs/tailwindcss',
     '@nuxt/icon',
     '@nuxtjs/color-mode',
     '@pinia/nuxt',
     '@nuxt/image',
     '@vite-pwa/nuxt'
   ],
   tailwindcss: {
       cssPath: '~/assets/css/tailwind.css',
       configPath: 'tailwind.config',
   },
   colorMode: {
       preference: 'light', // default value of $colorMode.preference
       fallback: 'light', // fallback value if not system preference found
       hid: 'nuxt-color-mode-script',
       globalName: '__NUXT_COLOR_MODE__',
       componentName: 'ColorScheme',
       classPrefix: '',
       classSuffix: '',
       storageKey: 'nuxt-color-mode',
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
   }
})