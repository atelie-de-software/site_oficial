<template>
  <div class="mobile" :style="style">
    <g-image src="@/assets/images/mobile.png" alt />
  </div>
</template>

<style lang="scss" scoped>
.mobile {
    border-radius: 20%;
    background-size: auto 95%;
    background-repeat: no-repeat;
    background-position: center center;
  img {
    position: relative;
    z-index: 10;
  }
}
.background {
  position: absolute;
  display: block;
  width: 77%;
  height: 82%;
  top: 10px;
  left: 0;
  right: 0;
  z-index: 1;
  margin: auto;
  background-size: cover;
  background-position: center center;
}
</style>

<script>
export default {
  name: 'Tablet',
  computed: {
    style() {
      return `background-image: url(${this.background})`
    }
  },
  props: {
    background: String
  }
}
</script>
