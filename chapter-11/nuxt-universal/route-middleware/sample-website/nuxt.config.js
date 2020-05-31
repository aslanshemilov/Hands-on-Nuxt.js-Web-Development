const pkg = require('./package')

module.exports = {
  mode: 'universal',

  // https://nuxtjs.org/api/configuration-router#linkactiveclass
  router: {
    // linkActiveClass: 'current'
    middleware: ['visits', 'user-agent']
  },

  /*
  ** Headers of the page
  * https://github.com/nuxt/vue-meta
  */
  head: {
    title: 'LAU TIAM KOK | PORTFOLIO',
    titleTemplate: ' %s | LAU TIAM KOK',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'LAU TIAM KOK, aka LAU THIAM KOK is a cross-disciplinary Web Developer/Designer, Data Architect and Analyst.' }
    ],
    script: [
      // { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js' },
      // { src: 'https://cdn.jsdelivr.net/npm/foundation-sites@6.5.1/dist/js/foundation.min.js' },
      // { src: 'https://cdnjs.cloudflare.com/ajax/libs/motion-ui/2.0.3/motion-ui.js' },
    ],
    link: [
      // { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/foundation-sites@6.5.1/dist/css/foundation.min.css' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
  },

  env: {
    HOST_URL: process.env.HOST_URL || 'http://127.0.0.1:3000'
  },

  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: '#000000'
  },

  /*
  ** Global CSS
  */
  css: [
    // 'foundation-sites/dist/css/foundation.min.css',
    // 'foundation-icon-fonts/foundation-icons.css',
    // 'jquery-ui-bundle/jquery-ui.min.css',

    // LESS files in the project.
    'assets/less/main.less',

    // SCSS files in the project
    'assets/scss/main.scss'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/vee-validate',
    '~/plugins/mixin-utils',
    '~/plugins/global-components',
    '~/plugins/custom-plugin-sample-import',
    '~/plugins/ctx-inject.js',
    '~/plugins/combined-inject.js',
    '~/plugins/foo.client.js', // only in client side
    '~/plugins/bar.server.js', // only in server side
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',

    // Simple usage
    // '~/modules/simple'

    // Passing options directly
    ['~/modules/simple/module', { token: '123' }],

    ['~/modules/async-await-sample/module'],
    ['~/modules/promise-sample/module'],

  ],

  axios: {
    // proxyHeaders: false
  },

  simple: {
    option1: false,
    option2: true,
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here.
    * The extend is called twice, one time for the server bundle, and one time for the client bundle.
    * https://nuxtjs.org/api/configuration-build#extend
    * To see more about the default webpack configuration:
    * https://github.com/nuxt/nuxt.js/tree/dev/packages/webpack/src/config
    */
    extend(config, ctx) {
      // if (ctx.isDev) {
      //   config.module.rules.push({
      //     test: /\.worker\.js$/,
      //     use: [
      //       'style-loader',
      //       'css-loader'
      //     ],
      //   })
      // }

      // Uncomment line below to view webpack rules
      // console.dir(config.module.rules)
    }
  },

  // Global setting for page components.
  // https://nuxtjs.org/api/configuration-transition
  transition: {
    name: 'bounce',
    mode: 'out-in',
    beforeEnter (el) {
      console.log('Before enter...');
    }
  },

  // Global setting for layouts.
  // https://nuxtjs.org/api/configuration-transition
  layoutTransition: {
    name: 'layout',
    mode: 'out-in'
  }
}
