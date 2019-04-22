<template>
  <div
    class="notebook"
    :style="style"
  >
    <g-image
      src="/notebook.png"
      alt
    />
  </div>
</template>

<style lang="scss" scoped>
.notebook {
  background-size: 77% auto;
  background-repeat: no-repeat;
  background-position: center center;
  g-image {
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
  name: 'Notebook',
  props: {
    background: { type: String, default: '' }
  },
  computed: {
    style () {
      return `background-image: url(${this.background})`
    }
  }
}
</script>
