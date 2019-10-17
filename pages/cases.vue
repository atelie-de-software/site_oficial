<template>
  <section class="home">
    <HeroCase />
    <Conlicitacao />
    <Granatum />
    <Dsop />
    <Lumiar />
    <Synergia />
    <Educadora />
    <FooterSection />
  </section>
</template>

<script>
import HeroCase from '@/components/HeroCase'
import FooterSection from '@/components/Footer'
import Educadora from '@/components/Educadora'
import Conlicitacao from '@/components/Conlicitacao'
import Granatum from '@/components/Granatum'
import Lumiar from '@/components/Lumiar'
import Dsop from '@/components/Dsop'
import Synergia from '@/components/Synergia'

export default {
  name: 'Cases',
  head() {
    return {
      title: this.$t('seo.casesTitle'),
      meta: [{ name: 'og:title', content: this.$t('seo.casesTitle') }]
    }
  },
  components: {
    HeroCase,
    FooterSection,
    Educadora,
    Conlicitacao,
    Lumiar,
    Granatum,
    Synergia,
    Dsop
  }
}
</script>
