<template>
  <div class="mobile">
    <div class="mobile-container">
      <img :src="this.background" class="mobile-image" alt="" />
    </div>
    <img src="@/assets/images/mobile.png" class="frame" alt="" />
  </div>
</template>

<style lang="scss" scoped>
.frame {
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 10;
  margin: auto;
  height: 100%;
  width: 100%;
  // box-shadow: -52px 47px 80px 0px rgba(0, 0, 0, 0.15);
}
.mobile-container {
  width: 95%;
  margin: 10px auto 0;
  overflow: hidden;
  background-color: transparent;
  border-radius: 30px;
}
.mobile {
  position: relative;
  .mobile-image {
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
  name: 'Mobile',
  props: {
    background: { type: String, default: '' }
  },
  computed: {
    style() {
      return `background-image: url(${''})`
    }
  }
}
</script>
