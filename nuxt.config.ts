export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },

  nitro: {
    preset: 'vercel-static',
  },

  modules: ['@nuxtjs/google-fonts'],

  googleFonts: {
    families: {
      'Bebas+Neue': true,
      'DM+Sans': [300, 400, 500, 600, 700],
    },
    display: 'swap',
    preload: true,
  },

  app: {
    head: {
      title: 'Kingsport Run 2026',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Kingsport Run — September 14 2026. 5K, Half Marathon & Full Marathon through the heart of Kingsport.',
        },
      ],
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    },
  },

  css: ['~/assets/css/global.css'],
})
