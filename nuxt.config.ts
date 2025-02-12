export default defineNuxtConfig({
    modules: ['@pinia/nuxt', '@nuxt/image', '@nuxt/ui', '@vite-pwa/nuxt', 'nuxt-mitter', '@vee-validate/nuxt', 'nuxt-fathom'],
    pwa: {
        /* your pwa options */
    },
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
    fathom: {
        siteId: process.env.fathom_analytics_id
    },
    mitt: {
        types: './types/event.d.ts'
    }
})
