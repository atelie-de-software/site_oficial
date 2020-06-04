<template>
  <section class="home">
    <Hero />
    <Cases />
    <Methods />
    <Share />
    <Contact />
    <Form />
    <FooterSection />
  </section>
</template>

<script>
import Hero from '@/components/Hero'
import Cases from '@/components/Cases'
import Methods from '@/components/Methods'
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
    Cases,
    Methods,
    Share,
    Contact,
    FooterSection
  }
}
</script>

<style></style>
