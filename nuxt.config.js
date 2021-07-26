export default {
  // target: 'static',
  head: {
    title: 'Mahdiyyatul Mudhiah - Creative Designer & UX Engineer',
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
          'Hello! I am Diyyah -- a UX Engineer, a woman who love arts, the art of website development, meanwhile exploring Blender to models some cute little things.',
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content:
          'Mahdiyyatul Mudhiah, diadhees, Mahdiyya Mudhiah, Front-End Engineer, UX Engineer, Vue, Nuxt, Profile, Portfolio, Javascript',
      },
      {
        hid: 'theme-color',
        name: 'theme-color',
        content: '#171d2d',
      },
      {
        hid: 'author',
        name: 'author',
        content: 'diadhees - Mahdiyyatul Mudhiah',
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

  plugins: ['~/plugins/gtm'],
  gtm: {
    id: process.env.GTM_ID || 'GTM-MHN82JG',
    scriptDefer: true,
    pageTracking: true,
    // layer: 'test',
    variables: { test: '1' },
  },
  publicRuntimeConfig: {
    gtm: {
      id: 'GTM-MHN82JG&runtime',
    },
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
