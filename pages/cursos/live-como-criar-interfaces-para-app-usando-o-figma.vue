<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-sm-6">
        <h1 class="mt-4">Como criar interfaces para app usando o Figma_</h1>
        <p>
          <strong>Faça sua inscrição</strong> para participar da nossa
          <strong>LIVE</strong> e veja na prática como criar interfaces com a
          ferramenta de prototipação
          <strong>Figma.</strong>
        </p>
      </div>
      <div class="col-md-4 col-sm-4 offset-md-1">
        <FormLanding />
      </div>
    </div>
  </div>
</template>

<script>
import FormLanding from '~/components/FormLanding'

export default {
  layout: 'capture',
  name: 'Live',
  components: {
    FormLanding
  },
  head() {
    return {
      title: this.$t('seo.indexTitle'),
      meta: [{ name: 'og:title', content: this.$t('seo.indexTitle') }]
    }
  }
}
</script>

<style lang="scss" scoped></style>
