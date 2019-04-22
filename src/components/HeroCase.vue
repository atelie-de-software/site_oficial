<template>
  <div class="container hero">
    <div class="row">
      <div class="col-md-6">
        <h1>Conheça
          <br>os nossos
          <br>cases
        </h1>
      </div>

      <div class="col-md-4 offset-md-1">
        <p>Abaixo você encontrará alguns dos trabalhos realizados pelo Ateliê. Se quiser saber mais ou falar do seu projeto é só entrar em contao.</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hero {
  min-height: 50vh;
  display: flex;
  align-items: center;
  @media screen and (max-width: 786px) {
    min-height: auto;
    margin: 40px 0;
  }
}
.row > div {
  display: flex;
  align-items: center;
}
h1 {
  color: #444140;
  font-size: 81px;
  font-weight: 800;
  line-height: 86.12px;
  text-transform: uppercase;
  letter-spacing: 2.1px;
  @media screen and (max-width: 640px) {
    font-size: 38px;
    margin-bottom: 20px;
    line-height: 1;
  }
}
p {
  color: #444140;
  line-height: 28px;
}
</style>
