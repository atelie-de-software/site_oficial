<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="buttomContact">
          <p>
            Se quiser saber mais ou falar do seu projeto<br />
            é só entrar em contato.
          </p>
          <nuxt-link
            :to="{ path: localePath('index'), hash: '#contact' }"
            class="btn"
          >
            Fale conosco
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.buttomContact {
  text-align: center;
  padding: 60px 0 100px 0;
  p {
    margin: 40px 0;
    font-weight: 700;
  }
}
</style>
