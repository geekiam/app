import type { Config } from 'tailwindcss'

export default {
  darkMode: 'class',
  content: [  "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}"],
  theme: {
      extend: {
          typography: {
              DEFAULT: {
                  css: {
                      "code::before": { content: '' },
                      "code::after": { content: '' }
                  }
              }
          }
      }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@headlessui/tailwindcss'),
  ],
} satisfies Config

