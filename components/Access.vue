<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12 text-center">
        <img src="~/assets/images/dsop-logo.png" alt />
      </div>
    </div>
    <div class="row">
      <div class="col-md-12 text-center">
        <img src="~/assets/images/dsop-print.png" alt aria-hidden="true" />
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <div>
          <p>{{ $t('dsop.description') }}</p>

          <p>{{ $t('dsop.descriptionII') }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  margin-top: 150px;
  margin-bottom: 125px;
}
.text-center {
  text-align: center;
}
.content {
  margin: 60px 0;
}
.relative {
  position: relative;
  @media screen and (max-width: 786px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    .show-mobile {
      margin-bottom: 40px;
    }
  }
}
.logo {
  position: absolute;
  right: 0;
  bottom: 0px;
  z-index: -1;
}
</style>
