<template>
  <div class="container hero">
    <div class="row">
      <div class="col-md-6">
        <h1>
          {{ $t('heroCases.message') }}
          <br />{{ $t('heroCases.messageII') }}<br />
          {{ $t('heroCases.messageIII') }}
        </h1>
      </div>

      <div class="col-md-4 offset-md-1">
        <p>{{ $t('heroCases.description') }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hero {
  display: flex;
  align-items: center;
  padding-top: 100px;
  padding-bottom: 40px;
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
