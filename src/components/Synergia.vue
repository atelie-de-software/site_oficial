<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 center">
        <g-image src="~/assets/images/synergia-logo.png" alt="Synergia Logo" class="show-mobile logo" />
        <g-image src="~/assets/images/synergia-laptop.png" aria-hidden="true" />
      </div>
      <div class="col-md-6 center">
        <g-image src="~/assets/images/synergia-logo.png" alt="Synergia Logo" class="show-desktop" />
        <div class="content">
          <p>A Synergia, através de suas pesquisas socioambientais, muda a vida de milhares de pessoas e trás uma melhora na qualidade de vida e nos impactos ambientais que nos rodeiam, gerando relatórios e informações que embasam projetos e estudos na área.</p>

          <p>O time da Synergia do Ateliê de Software é responsável por sistematizar todas as etapas da pesquisa e criar inteligência para que elas possam trazer bons resultados.</p>
        </div>
        <a href="#" class="btn">conheça o projeto</a>
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

