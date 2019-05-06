<template>
  <section class="home">
    <HeroCulture />
    <OurValues />
    <FooterSection />
  </section>
</template>

<script>
import HeroCulture from '@/components/HeroCulture'
import OurValues from '@/components/OurValues'
import FooterSection from '@/components/Footer'

export default {
  name: 'Cultura',
  head() {
    return {
      title: this.$t('seo.cultureTitle'),
      meta: [{ name: 'og:title', content: this.$t('seo.cultureTitle') }]
    }
  },
  components: {
    HeroCulture,
    FooterSection,
    OurValues
  }
}
</script>
