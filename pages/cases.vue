<template>
  <section class="home">
    <HeroCase />
    <Conlicitacao />
    <Granatum />
    <Dsop />
    <Lumiar />
    <Vagas />
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
import Vagas from '@/components/Vagas'
import Synergia from '@/components/Synergia'

export default {
  name: 'Cases',
  head() {
    return {
      title: this.$t('seo.casesTitle'),
      meta: [{ name: 'og:title', content: 'Home - Ateliê de Software' }]
    }
  },
  components: {
    HeroCase,
    FooterSection,
    Educadora,
    Conlicitacao,
    Lumiar,
    Granatum,
    Vagas,
    Synergia,
    Dsop
  }
}
</script>
