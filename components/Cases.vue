<template>
  <div id="cases">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <img
            src="~/assets/images/atelie-de-software-cases.jpg"
            alt="Conheça nossos cases."
            class="casesImage"
          />
        </div>
        <div class="col-md-5 offset-md-1">
          <h2 tabindex="0">{{ $t('cases.know') }}</h2>
          <p>{{ $t('cases.description') }}</p>
          <nuxt-link :to="localePath('cases')" class="btn">
            {{ $t('cases.button') }}
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#cases {
  margin-bottom: 50px;
  h2 {
    margin: 100px 0 20px 0;
    @media screen and (max-width: 640px) {
      margin-top: 0;
    }
  }
}
p {
  margin-bottom: 50px;
}
.content {
  @media screen and (min-width: 787px) {
    text-align: right;
    margin-top: 25vh;
  }
  @media screen and (max-width: 786px) {
    margin-left: 10vw;
    margin-right: 10vw;
    text-align: center;
  }
}
</style>
