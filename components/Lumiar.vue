<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <img src="~/assets/images/lumiar-logo.png" alt class="logo" />
        <div class="content">
          <p>{{ $t('lumiar.description') }}</p>
          <p>{{ $t('lumiar.descriptionII') }}</p>
        </div>
      </div>
      <div class="col-md-8">
        <img src="~/assets/images/lumiar-print.png" class="show-desktop" alt />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.content {
  margin: 60px 0;
}
.col-md-4,
.col-md-8 {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.container {
  @media screen and (max-width: 786px) {
    padding-top: 40px;
  }
}
</style>
