<template>
  <div id="dark">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div id="logo-capture">
            <LogoWhite />
          </div>
        </div>
      </div>
    </div>
    <Nuxt />
  </div>
</template>

<script>
import LogoWhite from '~/components/LogoWhite'

export default {
  components: {
    LogoWhite
  }
}
</script>

<style scoped>
#logo-capture {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 0;
}
#dark {
  height: 100vh;
  background-color: #232323;
  color: #ffffff;
}
</style>
