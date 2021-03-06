const cheerio = require('cheerio')
const en = require('./locales/enn')
const pt = require('./locales/pt')

module.exports = {
  mode: 'spa',
  serverMiddleware: ['~/servermiddleware/seo.js'],

  /*
   ** Headers of the page
   */
  head: {
    title: 'Ateliê de Software',
    titleTemplate: '%s',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        rel: 'apple-touch-icon',
        sizes: '120x120',
        href: '/apple-touch-icon.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#3ee6a1' },

  /*
   ** Global CSS
   */
  css: [
    '@/assets/scss/bootstrap/bootstrap',
    '@/assets/scss/main.scss',
    '@/assets/css/page-transitions.css'
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~/plugins/carousel.js', ssr: false },
    { src: '~/plugins/toggle.js', ssr: false },
    { src: '~/plugins/vuelidate.js', ssr: false },
    { src: '~/plugins/hotjar.js', ssr: false },
    { src: '~/plugins/ga.js', ssr: false },
    { src: '~/plugins/lazyload', ssr: false },
    { src: '~/plugins/facebook', ssr: false },
    { src: '~/plugins/gtm', ssr: false }
  ],

  router: {
    scrollBehavior: async (to, from, savedPosition) => {
      if (savedPosition) {
        return savedPosition
      }

      const findEl = (hash, x) => {
        return (
          document.querySelector(hash) ||
          new Promise((resolve, reject) => {
            if (x > 50) {
              return resolve()
            }
            setTimeout(() => {
              resolve(findEl(hash, ++x || 1))
            }, 100)
          })
        )
      }

      if (to.hash) {
        const el = await findEl(to.hash)
        if ('scrollBehavior' in document.documentElement.style) {
          return window.scrollTo({ top: el.offsetTop, behavior: 'smooth' })
        } else {
          return window.scrollTo(0, el.offsetTop)
        }
      }

      return { x: 0, y: 0 }
    }
  },

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // '@nuxtjs/pwa',
    'nuxt-webfontloader',
    [
      'nuxt-i18n',
      {
        locales: [
          { code: 'en', file: 'enn.js', iso: 'en' },
          { code: 'pt', file: 'pt.js', iso: 'pt-BR' }
        ],
        defaultLocale: 'pt',
        lazy: true,
        langDir: 'locales/',
        seo: true,
        detectBrowserLanguage: {
          useCookie: true
        }
      }
    ],
    ['@nuxtjs/google-gtag', { id: 'UA-118597190-1' }]
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },
  webfontloader: {
    google: {
      families: ['Montserrat:300,400,800']
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  render: { resourceHints: false },
  hooks: {
    // This hook is called before rendering the html to the browser
    // 'render:route': (url, result) => {
    //   this.$ = cheerio.load(html)
    //   this.$('#__nuxt')
    //     .removeAttr('data-server-rendered')
    //     .removeAttr('id')
    //   this.$(`body script[src="/_nuxt/app.js"]`).remove()
    //   this.$(`head link[href="/_nuxt/app.js"]`).remove()
    //   result.html = this.$.html()
    // }
  },
  generate: {
    fallback: true
  }
}
