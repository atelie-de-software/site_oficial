<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12 logo">
        <img src="@/assets/images/conlicitacao-logo.png" alt />
      </div>
    </div>
    <div class="row">
      <div class="col-md-4">
        <p>{{ $t('conlicitacao.description') }}</p>
        <p>{{ $t('conlicitacao.descriptionII') }}</p>
        <p>{{ $t('conlicitacao.descriptionIII') }}</p>
      </div>
      <div class="col-md-8">
        <Tablet :background="print" class="show-desktop" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  text-align: center;
  margin-bottom: 180px;
}
.logo {
  margin-top: 120px;
  margin-bottom: 40px;
}
</style>

<script>
import Tablet from '@/components/Tablet'
import ConlicitaPrint from '@/assets/images/conlicitacao-print.jpg'

export default {
  name: 'ConlicitacaoCase',
  components: {
    Tablet
  },
  computed: {
    print() {
      return ConlicitaPrint
    }
  }
}
</script>
