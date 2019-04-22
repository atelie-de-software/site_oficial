<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <p>O ConLicitação é uma empresa que possui o maior banco de dados de avisos de licitações, leilões, editais e resultados de processos de compras governamentais do país.</p>
        <Tablet :background="print" class="show-mobile"/>
        <p>Em 2008, iniciamos o projeto de reestruturação e reimplementação dos seus sistemas internos e a criação de novos softwares.</p>

        <p>Depois de 10 anos, uma equipe dedicada do Ateliê de Software faz melhorias constantes e incrementais nos sistemas, além de colaborar na criação de novos produtos e negócios, ajudando o ConLicitação a triplicar sua base de clientes.</p>
        <a href="#" class="btn">conheça o projeto</a>
      </div>
      <div class="col-md-8">
        <Tablet :background="print" class="show-desktop"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  text-align: center;
  margin-top: 230px;
  margin-bottom: 180px;
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
