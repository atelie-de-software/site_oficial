<template>
  <div class="container">
    <div class="row">
      <div class="col-md-7 content">
        <img src="~/assets/images/vagas-logo.png" class="logo" alt />
        <Mobile :background="granatumPrint" class="mobile-frame show-mobile" />
        <div>
          <p>
            A VAGAS.com é líder no mercado de e-recruitment no Brasil e oferece
            soluções para facilitar a conexão dos melhores talentos às empresas.
          </p>

          <p>
            A parceria Vagas - Ateliê de Software é responsável por criar novas
            soluções e otimizar processos já existentes, prezando pela
            eficiência, praticidade e pela experiência do usuário.
          </p>
        </div>
      </div>
      <div class="col-md-5 align-mobile-frame">
        <Mobile :background="granatumPrint" class="mobile-frame show-desktop" />
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
import Print from '@/assets/images/mindica-print.png'
export default {
  name: 'VagasCase',
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
