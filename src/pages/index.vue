<template>
  <Default>
    <section class="home">
      <Hero/>
      <Culture/>
      <Methods/>
      <Cases/>
      <World/>
      <Share/>
      <Contact/>
      <Form/>
      <FooterSection/>
    </section>
  </Default>
</template>

<script>
import Default from '~/layouts/Default.vue'
import Hero from '@/components/Hero'
import Culture from '@/components/Culture'
import Methods from '@/components/Methods'
import Cases from '@/components/Cases'
import World from '@/components/World'
import Share from '@/components/ShareSection'
import Contact from '@/components/Contact'
import FooterSection from '@/components/Footer'

export default {
  name: 'Home',
  components: {
    Default,
    Hero,
    Culture,
    Methods,
    Cases,
    World,
    Share,
    Contact,
    FooterSection
  },
  // methods: {
  //   scrollToHash() {
  //     var hash = $nuxt.$route.hash
  //     this.$nextTick(() => {
  //       this.$scrollTo(hash, 0, { offset: 0 })
  //     })
  //   }
  // },
  // mounted() {
  //   if ($nuxt.$route.hash) {
  //     this.scrollToHash()
  //   }
  // }
}
</script>

<style>
</style>
