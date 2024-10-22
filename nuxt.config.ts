// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   head: {
       title : 'Geekiam'
   },
    modules: [
        '@pinia/nuxt',
        '@vite-pwa/nuxt',
        '@nuxt/image',
        '@nuxt/ui'
    ],
    pwa: {
        /* PWA options */
        registerWebManifestInRouteRules: true,
        scope: '/',
        base: '/',
        injectRegister: 'auto',
        registerType: 'autoUpdate',
        workbox: {
            globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
            globIgnores: [],
            runtimeCaching: [
                {
                    urlPattern: '/',
                    handler: 'NetworkFirst'
                }
            ],
            navigateFallback: undefined
        },
        manifest: {
            name: 'Geekiam',
            short_name: 'Geekiam',

        },
        client: {
            installPrompt: true
        }
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

    runtimeConfig: {
        public: {
            fathom_analytics_id: process.env.fathom_analytics_id,
            siteUrl: 'https://geekiam.app',
        },
    },
    compatibilityDate: '2024-10-20'
})