<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <img src="~/assets/images/granatum-logo.png" class="logo" alt />
      </div>
      <div class="col-md-4">
        <Mobile :background="granatumPrint" class="logo" />
      </div>
      <div class="col-md-4">
        <p>
          {{ $t('granatum.message') }} (
          <a href="https://www.granatum.com.br">www.granatum.com.br</a>)
          {{ $t('granatum.description') }}
        </p>

        <p>{{ $t('granatum.descriptionII') }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.col-md-4 {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.container {
  @media screen and (max-width: 786px) {
    padding-top: 40px;
    padding-bottom: 40px;
  }
}
.logo {
  margin: 40px 0;
}
</style>

<script>
import Mobile from '@/components/Mobile'
import Print from '@/assets/images/granatum-print.jpg'
export default {
  name: 'GranatumCase',
  components: {
    Mobile
  },
  computed: {
    granatumPrint() {
      return Print
    }
  }
}
</script>
