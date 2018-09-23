const pkg = require('./package');

module.exports = {
  mode: 'universal',

  server: {
    post: process.env.PORT
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
        content: 'My Blog of everything new thing I learn each day'
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
  ** Customize the progress-bar color fa923f
  */
  loading: { color: '#fa923f', duration: 5000, height: '4px' },

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
    [
      '@nuxtjs/axios',
      {
        baseURL: 'https://nuxt-blog-13c98.firebaseio.com/',
        browserBaseURL: 'https://nuxt-blog-13c98.firebaseio.com/'
      }
    ]
  ],

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
