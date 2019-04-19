<template>
  <transition name="page" appear>
    <main>
      <Header/>
      <slot/>
    </main>
  </transition>
</template>

<script>
import Header from '../components/Header.vue'

export default {
  name: 'default',
  metaInfo: {
    title: 'Home',
    htmlAttrs: {
      lang: 'pt-BR'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nós criamos soluções digitais' }
    ],
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
