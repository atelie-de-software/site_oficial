<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 center">
        <img
          src="~/assets/images/synergia-logo.png"
          alt="Synergia Logo"
          class="show-mobile logo"
        />
        <Notebook :background="SynergiaPrint" />
      </div>
      <div class="col-md-6 center">
        <img
          src="~/assets/images/synergia-logo.png"
          alt="Synergia Logo"
          class="show-desktop"
        />
        <div class="content">
          <p>{{ $t('synergia.description') }}</p>
          <p>{{ $t('synergia.descriptionII') }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  padding-bottom: 50px;
  padding-top: 50px;
}
.content {
  margin: 40px 0;
}
.center {
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
}
.logo {
  margin-bottom: 40px;
}
</style>

<script>
import Notebook from '@/components/Notebook'
import Print from '@/assets/images/synergia-print.jpg'

export default {
  name: 'SynergiaCase',
  components: {
    Notebook
  },
  computed: {
    SynergiaPrint() {
      return Print
    }
  }
}
</script>
