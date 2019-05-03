<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12 text-center">
        <img src="~/assets/images/dsop-logo.png" alt />
      </div>
    </div>
    <div class="row">
      <div class="col-md-12 text-center">
        <img src="~/assets/images/dsop-print.png" alt aria-hidden="true" />
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <div>
          <p>
            Diagnosticar, Sonhar, Orçar e Poupar. A DSOP promove educação
            financeira ajudando seus parceiros a construir hábitos saudáveis e
            fazer escolhas conscientes para a realização dos seus sonhos.
          </p>

          <p>
            O time DSOP do Ateliê de Software é responsável pela plataforma que
            auxilia os colaboradores DSOP a promoverem educação financeira em
            escolas, empresas e para trabalhadores brasil afora.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  margin-top: 150px;
  margin-bottom: 125px;
}
.text-center {
  text-align: center;
}
.content {
  margin: 60px 0;
}
.relative {
  position: relative;
  @media screen and (max-width: 786px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    .show-mobile {
      margin-bottom: 40px;
    }
  }
}
.logo {
  position: absolute;
  right: 0;
  bottom: 0px;
  z-index: -1;
}
</style>
