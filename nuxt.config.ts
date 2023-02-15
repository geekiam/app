 // https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    pages: true,
    modules: [
      ['@nuxtjs/tailwindcss'],
       [ '@nuxtjs/algolia',
        {
            apiKey: process.env.ALGOLIA_API_KEY,
            applicationId: process.env.ALGOLIA_APPLICATION_ID,
        },
       ],
    ],
    tailwindcss: {
        cssPath: '~/assets/css/tailwind.css',
        configPath: 'tailwind.config',
    },
})
