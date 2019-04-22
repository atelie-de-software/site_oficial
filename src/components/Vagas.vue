<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 content">
        <g-image src="~/assets/images/vagas-logo.png" class="logo" alt />
        <div>
          <p>A VAGAS.com é líder no mercado de e-recruitment no Brasil e oferece soluções para facilitar a conexão dos melhores talentos às empresas.</p>
          <Mobile :background="granatumPrint" class="show-mobile"/>

          <p>A parceria Vagas - Ateliê de Software é responsável por criar novas soluções e otimizar processos já existentes, prezando pela eficiência, praticidade e pela experiência do usuário.</p>
        </div>
        <a href="#" class="btn">conheça o projeto</a>
      </div>
      <div class="col-md-6">
        <Mobile :background="granatumPrint" class="show-desktop"/>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  margin-top: 150px;
}

.content {
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
}

.logo {
  @media screen and (max-width: 786px) {
    margin-bottom: 40px;
  }
}
</style>


<script>
import Mobile from '@/components/Mobile'
import Print from '@/assets/images/vagas-print.jpg'
export default {
  name: 'VagasCase',
  components: {
    Mobile
  },
  computed: {
    granatumPrint () {
      return Print
    }
  }
}
</script>
