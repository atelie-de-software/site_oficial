<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <img
          src="~/assets/images/educadora-print.png"
          class="show-desktop"
          alt
        />
      </div>
      <div class="col-md-6 center">
        <img src="~/assets/images/educadora-logo.png" alt />
        <img
          src="~/assets/images/educadora-print.png"
          class="show-mobile"
          alt
        />
        <p>
          {{ $t('educadora.message') }} (
          <a href="www.educadorafm.com.br">www.educadorafm.com.br</a>)
          {{ $t('educadora.description') }}
        </p>
        <p>{{ $t('educadora.descriptionII') }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.center {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: 60px;
}

.margin-negative {
  margin-top: -60px;
}
.relative {
  position: relative;
}
.float-logo {
  position: absolute;
  bottom: 30px;
  left: 0;
}
.container {
  margin-top: 100px;
  margin-bottom: 165px;
}
</style>
