// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

    modules: ['@pinia/nuxt', '@nuxt/image', '@nuxt/ui', '@vite-pwa/nuxt'],
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
    runtimeConfig: {
        public: {
            fathom_analytics_id: process.env.fathom_analytics_id,
            siteUrl: 'https://geekiam.app',
        },
    }
})
