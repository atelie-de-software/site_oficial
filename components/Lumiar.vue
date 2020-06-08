<template>
  <section class="sectionsCases sectionsCaseslumiar">
    <div class="container">
      <div class="row">
        <div class="col-md-5">
          <img
            src="~/assets/images/atelie-de-software-lumiar-logo.svg"
            alt="Plataforma Lumiar"
            class="logo-lumiar"
          />
          <p>{{ $t('lumiar.description') }}</p>
          <p>{{ $t('lumiar.descriptionII') }}</p>
          <p>{{ $t('lumiar.descriptionIII') }}</p>
        </div>
        <div class="col-md-6 offset-md-1">
          <img src="~/assets/images/atelie-de-software-tela-Lumiar.png" alt />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.container {
  @media screen and (max-width: 786px) {
    padding-top: 40px;
  }
}
</style>
