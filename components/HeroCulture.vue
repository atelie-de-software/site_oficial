<template>
  <div class="container hero">
    <div class="row">
      <div class="col-md-12 center">
        <h1>{{ $t('heroCulture.message') }}</h1>
        <img tabindex="0" src="@/assets/images/team.png" alt="Time Ateliê" />
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <p>
          {{ $t('heroCulture.description') }}
        </p>

        <p>
          {{ $t('heroCulture.descriptionII') }}
        </p>

        <p>
          {{ $t('heroCulture.descriptionIII') }}
        </p>
      </div>
      <div class="col-md-6">
        <p>
          {{ $t('heroCulture.descriptionIV') }}
        </p>

        <p>
          {{ $t('heroCulture.descriptionV') }}
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hero {
  padding-top: 50px;
  padding-bottom: 50px;
}
.center {
  text-align: center;
}
h1 {
  color: #444140;
  font-size: 81px;
  font-weight: 800;
  line-height: 86.12px;
  text-transform: uppercase;
  letter-spacing: 2.1px;
  margin-bottom: 67px;
  @media screen and (max-width: 640px) {
    font-size: 38px;
    margin-bottom: 20px;
    line-height: 1;
  }
}
</style>
