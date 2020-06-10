<template>
  <div class="container sectionsCases">
    <div class="row">
      <div class="col-md-6">
        <img
          src="~/assets/images/granatum logotipo.svg"
          alt="Granatum Controle Financeiro Online"
          class="logo-granatum"
        />
        <p>{{ $t('granatum.description') }}</p>
        <p>{{ $t('granatum.descriptionII') }}</p>
      </div>
      <div class="col-md-6">
        <img
          src="~/assets/images/granatum/atelie-de-software-mockup-iphones-granatum.webp"
          alt="Granatum Controle Financeiro Online"
        />
      </div>
    </div>
    <div class="row color">
      <div class="col-md-6">
        <img
          src="~/assets/images/granatum/atelie-de-software-mao-iphone-granatum.webp"
          alt="Granatum Controle Financeiro Online"
        />
      </div>
      <div class="col-md-6">
        <h3>Desafios</h3>
        <p>
          Criar o aplicativo mobile do Granatum oferecendo as mesmas
          funcionalidades da plataforma web.
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.color {
  background-color: #0092e5;
  h3,
  p {
    color: white;
  }
}
</style>
