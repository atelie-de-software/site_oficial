<template>
  <div class="dark">
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

<style lang="scss" scoped>
#logo-capture {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 0;
}
.dark {
  background-color: #232323;
  color: #ffffff;
}

@media only screen and (min-width: 600px) {
  .dark {
    height: 100vh;
  }
}
</style>
