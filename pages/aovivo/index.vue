<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-sm-6">
        <h1 class="mt-4">Como criar interfaces para app usando o Figma_</h1>
        <p>
          Nessa live iremos criar um app do ZERO em tempo real. Vamos fazer tudo
          na prática.
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

<style lang="scss" scoped>
h1 {
  margin: 60px 0 20px 0;
  text-transform: uppercase;
  background: linear-gradient(to right, #2f00fb 0%, #fe0466 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
p {
  color: white;
}

@media only screen and (max-width: 600px) {
  h1 {
    margin: 20px 0;
    font-size: 2em;
  }
  p {
    margin: 40px 0;
    font-size: 0.9em;
  }
}
</style>
