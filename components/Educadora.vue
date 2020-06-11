<template>
  <section class="sectionsCases">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <img
            src="~/assets/images/atelie-de-software-educadorafm.png"
            class="show-desktop"
            alt="EducadoraFM"
          />
        </div>
        <div class="col-md-5 offset-md-1">
          <img
            src="~/assets/images/atelie-de-software-educadora-logo.png"
            alt="Educadorafm"
            class="logo-educadorafm"
          />
          <p>{{ $t('educadora.description') }}</p>
          <p>{{ $t('educadora.descriptionII') }}</p>
          <p>{{ $t('educadora.descriptionIII') }}</p>
          <p>
            <nuxt-link to="cases/educadorafm" class="btn">Saiba mais</nuxt-link>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
