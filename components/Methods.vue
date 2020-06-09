<template>
  <div class="container">
    <div class="row text-center">
      <div class="col-md-12">
        <h3>{{ $t('thewaywework.title') }}</h3>
      </div>
      <div class="col-md-4">
        <img
          src="~/assets/images/atelie-de-software-binoculo.svg"
          alt="Conheça nossos cases."
          class="image"
        />
        <h4>{{ $t('thewaywework.discovery') }}</h4>
        <p>{{ $t('thewaywework.discoveryparagrah') }}</p>
      </div>
      <div class="col-md-4">
        <img
          src="~/assets/images/atelie-de-software-map.svg"
          alt="Conheça nossos cases."
          class="image"
        />
        <h4>{{ $t('thewaywework.exploration') }}</h4>
        <p>{{ $t('thewaywework.explorationparagrah') }}</p>
      </div>
      <div class="col-md-4">
        <img
          src="~/assets/images/atelie-de-software-foguete.svg"
          alt="Conheça nossos cases."
          class="image"
        />
        <h4>{{ $t('thewaywework.craft') }}</h4>
        <p>{{ $t('thewaywework.craftparagrah') }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
img.image {
  width: 30%;
  margin: 20px 0;
}
h4 {
  margin: 40px 0 20px 0;
  font-size: 23px;
}
p {
  padding-bottom: 80px;
}
.text-center {
  text-align: center;
}
</style>
