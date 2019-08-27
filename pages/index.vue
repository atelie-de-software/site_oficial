<template>
  <section class="home">
    <Hero />
    <Culture />
    <Methods />
    <Cases />
    <Share />
    <Contact />
    <Form />
    <FooterSection />
  </section>
</template>

<script>
import Hero from '@/components/Hero'
import Culture from '@/components/Culture'
import Methods from '@/components/Methods'
import Cases from '@/components/Cases'
import Share from '@/components/ShareSection'
import Contact from '@/components/Contact'
import FooterSection from '@/components/Footer'

export default {
  name: 'Home',
  head() {
    return {
      title: this.$t('seo.indexTitle'),
      meta: [{ name: 'og:title', content: this.$t('seo.indexTitle') }]
    }
  },
  components: {
    Hero,
    Culture,
    Methods,
    Cases,
    Share,
    Contact,
    FooterSection
  }
}
</script>

<style></style>
