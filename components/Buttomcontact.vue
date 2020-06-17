<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="buttomContact">
          <p>{{ $t('calltoactionbuttom.title') }}</p>
          <nuxt-link
            :to="{ path: localePath('index'), hash: '#contact' }"
            class="btn"
          >
            {{ $t('calltoactionbuttom.label') }}
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
