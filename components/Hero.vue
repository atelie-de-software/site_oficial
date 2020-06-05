<template>
  <div class="container hero">
    <div class="row">
      <div class="col-md-5">
        <h1 tabindex="0">
          {{ $t('hero.message') }}
        </h1>
        <p tabindex="0">
          {{ $t('hero.description') }}
        </p>
      </div>

      <div class="col-md-7">
        <img
          src="~/assets/images/atelie-de-software-hero.jpg"
          alt="Projeto EducadoraFM"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hero {
  padding-top: 50px;
  position: relative;
}
h1 {
  color: #444140;
  font-size: 40px;
  font-weight: 800;
  line-height: 50px;
  margin: 120px 0 40px 0;
  @media screen and (max-width: 640px) {
    margin: 0 0 40px 0;
    font-size: 38px;
    margin-bottom: 20px;
    line-height: 1;
  }
}
p {
  color: #444140;
  margin-bottom: 41px;
  width: 560px;
  max-width: 100%;
  line-height: 28px;
}
</style>
