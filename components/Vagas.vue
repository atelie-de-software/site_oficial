<template>
  <div class="container">
    <div class="row">
      <div class="col-md-7 content">
        <img src="~/assets/images/vagas-logo.png" class="logo" alt />
        <Mobile :background="vagasPrint" class="mobile-frame show-mobile" />
        <div>
          <p>{{ $t('vagas.description') }}</p>
          <p>{{ $t('vagas.descriptionII') }}</p>
        </div>
      </div>
      <div class="col-md-5 align-mobile-frame">
        <Mobile :background="vagasPrint" class="mobile-frame show-desktop" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  margin-top: 150px;
  margin-bottom: 150px;
}
.mobile-frame {
  max-width: 345px;
}
.align-mobile-frame {
  display: flex;
  justify-content: flex-end;
  @media screen and (max-width: 640px) {
    justify-content: center;
  }
}
.content {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  img {
    margin-bottom: 60px;
  }
}

.logo {
  margin: 40px 0;
}
</style>

<script>
import Mobile from '@/components/Mobile'
import Print from '@/assets/images/mindica-print.jpg'
export default {
  name: 'VagasCase',
  components: {
    Mobile
  },
  computed: {
    vagasPrint() {
      return Print
    }
  }
}
</script>
