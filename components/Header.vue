<template>
  <header class="container">
    <div class="row header-nav">
      <div class="col-lg-4 col-md-12 col-5 logo">
        <nuxt-link :to="localePath('index')">
          <Logo />
        </nuxt-link>
      </div>
      <div class="col-md-12 col-lg-8 col-7 nav">
        <Navbar />
      </div>
    </div>
  </header>
</template>

<script>
import Logo from '~/components/Logo'
import Navbar from '~/components/Nav'

export default {
  name: 'Header',
  components: {
    Logo,
    Navbar
  }
}
</script>

<style lang="scss" scoped>
header {
  margin-top: 30px;
}

.nav {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
@media screen and (max-width: 990px) {
  .logo {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }
}
@media screen and (max-width: 786px) {
  .header-nav {
    display: flex;
  }
}
</style>
