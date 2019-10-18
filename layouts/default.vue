<template>
  <transition name="page" appear>
    <main>
      <img
        height="1"
        width="1"
        style="display:none"
        src="https://www.facebook.com/tr?id=476265769626154&ev=PageView&noscript=1"
      />
      <Header />
      <Nuxt />
    </main>
  </transition>
</template>

<script>
import Header from '../components/Header.vue'

export default {
  name: 'Default',
  head() {
    const i18nSeo = this.$nuxtI18nSeo()
    return {
      htmlAttrs: {
        ...i18nSeo.htmlAttrs
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'og:url', content: 'http://atelie.software' },
        ...i18nSeo.meta
      ]
    }
  },
  components: {
    Header
  }
}
</script>

<style>
html {
  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

body {
  margin: 0;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
