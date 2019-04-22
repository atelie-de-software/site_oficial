<template>
  <div class="mobile" :style="style">
    <g-image src="@/assets/images/mobile.png" alt />
  </div>
</template>

<style lang="scss" scoped>
.mobile {
    box-shadow: -52px 47px 80px 0px rgba(0, 0, 0, 0.15);
    border-radius: 60px;
    background-size: auto 95%;
    background-repeat: no-repeat;
    background-position: center center;
  img {
    position: relative;
    z-index: 10;
    display: block;
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
