<template>
  <Default>
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
  </Default>
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
import Default from '~/layouts/Default.vue'

export default {
  name: 'Cases',
  metaInfo: {
    title: 'Cases',
    meta: [
      { name: 'og:title', content: 'Cases - Ateliê de Software' }
    ]
  },
  components: {
    Default,
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
