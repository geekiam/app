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
        config: {
            plugins: [ require('@tailwindcss/typography'), require('@tailwindcss/aspect-ratio'), require('@tailwindcss/forms')],
            content: [
                'components/**/*.{vue,js}',
                'layouts/**/*.vue',
                'pages/**/*.vue',
                'composables/**/*.{js,ts}',
                'plugins/**/*.{js,ts}',
                'App.{js,ts,vue}',
                'app.{js,ts,vue}'
            ]
        },
    },
})
