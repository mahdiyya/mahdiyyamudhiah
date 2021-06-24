export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  target: 'static',
  head: {
    title: 'Mahdiyya Mudhiah - Creative Designer & UX Engineer',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Hello! I am Diyyah -- a UX Engineer, a woman who love develops websites, designs some websites, and exploring Blender to models some cute little things.',
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content:
          'Front-End Engineer, UX Engineer, Vue, Nuxt, Profile, Portfolio, Javascript',
      },
      {
        hid: 'theme-color',
        name: 'theme-color',
        content: '#171d2d',
      },
      {
        hid: 'author',
        name: 'author',
        content: 'Mahdiyya Mudhiah',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  pwa: {
    meta: {
      theme_color: '#171d2d',
    },
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/scss/style.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/pwa',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/gtm'],

  gtm: { id: 'GTM-MHN82JG' },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
