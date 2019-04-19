<template>
  <Default>
    <section class="home">
      <HeroCulture/>
      <OurValues/>
      <FooterSection/>
    </section>
  </Default>
</template>

<script>
import HeroCulture from '@/components/HeroCulture'
import OurValues from '@/components/OurValues'
import FooterSection from '@/components/Footer'
import Default from '~/layouts/Default.vue'

export default {
  name: 'Home',
  components: {
    Default,
    HeroCulture,
    FooterSection,
    OurValues
  }
}
</script>