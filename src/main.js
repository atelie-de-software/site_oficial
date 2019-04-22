// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import Vue from 'vue'
import DefaultLayout from '~/layouts/Default.vue'
import VueScrollTo from 'vue-scrollto'
import Vuelidate from 'vuelidate'

import '@/assets/scss/main.scss'
import '@/assets/css/page-transitions.css'
import '@/assets/scss/bootstrap/bootstrap.scss'
import { en, ptBR } from '@/locales'
const locales = {
  en,
  ptBR
}
Vue.prototype.$locales = locales

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.use(VueScrollTo)
  Vue.use(Vuelidate)
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Montserrat:300,400,800'
  })
}
