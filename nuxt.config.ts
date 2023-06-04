import wasm from 'vite-plugin-wasm'
import topLevelAwait from 'vite-plugin-top-level-await'

export default defineNuxtConfig({
  app: {
    head: {
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
      charset: 'utf-8',
      meta: [{ name: 'format-detection', content: 'telephone=no' }],
      link: [
        { rel: 'dns-prefetch', href: 'https://fonts.gstatic.com/' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: 'anonymous',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap',
        },
      ],
    },
  },
  css: ['@/assets/styles/_colors.scss', '@/assets/styles/_variables.scss'],
  vite: {
    plugins: [wasm(), topLevelAwait()],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData:
            '@import "@/assets/styles/mixins/_dynamic-sizes.scss"; @import "@/assets/styles/mixins/_screens.scss"; @import "@/assets/styles/mixins/_widths.scss";',
        },
      },
    },
  },
  typescript: {
    typeCheck: true,
    strict: true,
  },
  telemetry: {
    enabled: false,
  },
})
