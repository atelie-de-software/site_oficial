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
  metaInfo: {
    title: 'Cultura',
    meta: [{ name: 'og:title', content: 'Cultura - Ateliê de Software' }]
  },
  components: {
    HeroCulture,
    FooterSection,
    OurValues
  }
}
</script>
