<template>
  <section class="sectionsCases">
    <div class="container">
      <div class="row">
        <div class="col-md-7">
          <img
            src="@/assets/images/atelie-de-software-conlicitacao.png"
            alt="Telas do sistema."
          />
        </div>
        <div class="col-md-4 offset-md-1">
          <img
            src="@/assets/images/conlicitacao-logo.png"
            alt="Conlicitação"
            width="200"
            class="logo-conlicitacao"
          />
          <p>
            Possui um dos sistemas de organização e leilão de licitações
            públicas do país. Digitalizamos a plataforma e aumentamos a base de
            clientes.
          </p>

          <p>
            Otimizamos o tempo de processamento de licitações de dias para
            apenas alguns minutos e a base de clientes quintuplicou. Depois de
            12 anos, uma equipe dedicada faz melhorias constantes no sistema.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.logo {
  margin-top: 120px;
  margin-bottom: 40px;
}
</style>

<script>
import ConlicitaPrint from '@/assets/images/conlicitacao-print.jpg'

export default {
  computed: {
    print() {
      return ConlicitaPrint
    }
  }
}
</script>
