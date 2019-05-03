<template>
  <div class="tablet" :style="style">
    <img src="@/assets/images/tablet.png" alt />
  </div>
</template>

<style lang="scss" scoped>
.tablet {
  box-shadow: -52px 47px 80px 0px rgba(0, 0, 0, 0.15);
  display: block;
  border-radius: 60px;
  background-size: 97% 97%;
  background-repeat: no-repeat;
  background-position: center center;
  margin-bottom: -10px;
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
  props: {
    background: { type: String, default: '' }
  },
  computed: {
    style() {
      return `background-image: url(${this.background})`
    }
  }
}
</script>
