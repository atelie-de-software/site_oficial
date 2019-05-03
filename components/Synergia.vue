<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 center">
        <img
          src="~/assets/images/synergia-logo.png"
          alt="Synergia Logo"
          class="show-mobile logo"
        />
        <Notebook :background="SynergiaPrint" />
      </div>
      <div class="col-md-6 center">
        <img
          src="~/assets/images/synergia-logo.png"
          alt="Synergia Logo"
          class="show-desktop"
        />
        <div class="content">
          <p>
            A Synergia, através de suas pesquisas socioambientais, muda a vida
            de milhares de pessoas e trás uma melhora na qualidade de vida e nos
            impactos ambientais que nos rodeiam, gerando relatórios e
            informações que embasam projetos e estudos na área.
          </p>

          <p>
            O time da Synergia do Ateliê de Software é responsável por
            sistematizar todas as etapas da pesquisa e criar inteligência para
            que elas possam trazer bons resultados.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  padding-bottom: 50px;
  padding-top: 50px;
}
.content {
  margin: 40px 0;
}
.center {
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
}
.logo {
  margin-bottom: 40px;
}
</style>

<script>
import Notebook from '@/components/Notebook'
import Print from '@/assets/images/synergia-print.jpg'

export default {
  name: 'SynergiaCase',
  components: {
    Notebook
  },
  computed: {
    SynergiaPrint() {
      return Print
    }
  }
}
</script>
