<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <g-image src="~/assets/images/case1.png" class="show-desktop" alt />
      </div>
      <div class="col-md-6 center">
        <g-image src="~/assets/images/educadora-logo.png" alt />
        <p>
          A Educadora FM (
          <a href="www.educadorafm.com.br">www.educadorafm.com.br</a>) é a rádio do Grupo Bandeirantes de Televisão líder de audiência em Campinas e região. Em 2013 começamos o projeto de criação de um novo gerenciador de conteúdo e do site da rádio, que no seu lançamento bateu a marca de 1 milhão de acessos.
        </p>
      </div>
    </div>
    <div class="row relative">
      <g-image src="~/assets/images/line-logo.png" alt class="float-logo" />
      <div class="col-md-6 offset-md-3 margin-negative">
        <g-image src="~/assets/images/case2.png" alt />
      </div>
      <div class="col-md-3">
        <p>Atualmente, estamos desenvolvendo a segunda fase do projeto para aumentar ainda mais a audiência da rádio a partir da gamificação da interação dos usuários com o site e da criação dos aplicativos para Android e iOS.</p>
        <a href="#" class="btn">conheça o projeto</a>
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
</style>
