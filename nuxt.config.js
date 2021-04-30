export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'safe-wallet',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['normalize.css/normalize.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@plugins/accessor'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [{ path: '@/components', pathPrefix: false }],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios'],

  axios: {
    // eslint-disable-next-line prettier/prettier
    baseURL:
      process.env.NOV_ENV === 'production' ? '' : 'https://localhost:3000'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}
