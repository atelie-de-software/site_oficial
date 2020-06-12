<template>
  <section class="sectionsCases">
    <div class="container">
      <div class="row">
        <div class="col-md-5 contentSection">
          <img
            src="~/assets/images/granatum logotipo.svg"
            alt="Granatum Controle Financeiro Online"
            class="logo-granatum"
          />
          <p>{{ $t('granatum.description') }}</p>
          <p>{{ $t('granatum.descriptionII') }}</p>
          <p>
            <nuxt-link to="cases/granatum" class="btn">Saiba mais</nuxt-link>
          </p>
        </div>
        <div class="col-md-6 offset-md-1">
          <img src="~/assets/images/atelie-de-software-cases.jpg" alt />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.container {
  @media screen and (max-width: 786px) {
    padding-top: 40px;
    padding-bottom: 40px;
  }
}
</style>
