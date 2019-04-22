<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <g-image src="~/assets/images/educadora-print.png" class="show-desktop" alt />
      </div>
      <div class="col-md-6 center">
        <g-image src="~/assets/images/educadora-logo.png" alt />
        <g-image src="~/assets/images/educadora-print.png" class="show-mobile" alt />
        <p>
          A Educadora FM (
          <a href="www.educadorafm.com.br">www.educadorafm.com.br</a>) é a rádio do Grupo Bandeirantes de Televisão líder de audiência em Campinas e região. Em 2013 começamos o projeto de criação de um novo gerenciador de conteúdo e do site da rádio, que no seu lançamento bateu a marca de 1 milhão de acessos.
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.center {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: 60px;
}

.margin-negative {
  margin-top: -60px;
}
.relative {
  position: relative;
}
.float-logo {
  position: absolute;
  bottom: 30px;
  left: 0;
}
.container {
  margin-top: 100px;
  margin-bottom: 165px;
}
</style>
