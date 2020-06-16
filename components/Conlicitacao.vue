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
            class="logo-conlicitacao"
          />
          <p>{{ $t('conlicitacao.description') }}</p>
          <p>{{ $t('conlicitacao.descriptionII') }}</p>
          <p>
            <nuxt-link to="/cases/conlicitacao" class="btn">{{
              $t('cases.button')
            }}</nuxt-link>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
