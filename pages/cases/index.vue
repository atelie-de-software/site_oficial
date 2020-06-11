<template>
  <section class="home">
    <HeroCase />
    <Granatum />
    <Conlicitacao />
    <Virou />
    <Access />
    <Lumiar />
    <Educadora />
    <Buttomcontact />
    <FooterSection />
  </section>
</template>

<script>
import HeroCase from '@/components/HeroCase'
import Granatum from '@/components/Granatum'
import Conlicitacao from '@/components/Conlicitacao'
import Virou from '@/components/Virou'
import Access from '@/components/Access'
import Lumiar from '@/components/Lumiar'
import Educadora from '@/components/Educadora'
import Buttomcontact from '@/components/Buttomcontact'
import FooterSection from '@/components/Footer'

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
    Granatum,
    Conlicitacao,
    Virou,
    Access,
    Lumiar,
    Educadora,
    Buttomcontact,
    FooterSection
  }
}
</script>
