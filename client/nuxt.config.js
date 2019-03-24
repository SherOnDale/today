import pkg from './package';

export default {
  mode: 'universal',
  server: {
    port: 3000,
    host: '0.0.0.0'
  },

  /*
   ** Headers of the page
   */
  head: {
    title: 'What I Learned Today',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'My Blog of everything new I learn each day'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Open+Sans'
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fa923f', height: '4px', throttle: 0 },

  /*
   ** Global CSS
   */
  css: ['~assets/styles/main.css'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~plugins/index.js', '~plugins/date-filter.js'],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    [
      '@nuxtjs/axios',
      {
        baseURL: 'https://nuxt-blog-13c98.firebaseio.com/',
        browserBaseURL: 'https://nuxt-blog-13c98.firebaseio.com/'
      }
    ],
    '@nuxtjs/pwa'
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },

  env: {
    fbAPIKey: 'AIzaSyDeQ8zBDXxN4Ut9Xvze6IUi3RdRuaMEOds'
  },

  transition: {
    name: 'fade',
    mode: 'out-in'
  }
};
