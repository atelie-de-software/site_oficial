<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <g-image src="~/assets/images/granatum-logo.png" class="logo" alt />
      </div>
      <div class="col-md-4">
        <Mobile :background="granatumPrint"  class="logo"/>
      </div>
      <div class="col-md-4">
        <p>
          O Granatum (
          <a href="https://www.granatum.com.br">www.granatum.com.br</a>) é um sistema online de controle financeiro para micro e pequenas empresas, sendo um produto criado, desenvolvido e mantido pela Webgoal.
        </p>

        <p>Hoje o Granatum é utilizado em todo o Brasil, possui mais de 1.200 clientes ativos, controla milhares de registros financeiros de diversas empresas, transações de pagamento e emissão de notas fiscais eletrônicas.</p>
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
  margin: 40px 0
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
    granatumPrint () {
      return Print
    }
  }
}
</script>
