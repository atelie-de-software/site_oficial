<template>
  <div class="contact" id="contato">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <Form/>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.contact {
  background-image: url('../assets/images/map.png');
}
</style>

<script>
import Form from './Form.vue'
export default {
  name: 'Contact',
  components: {
    Form
  }
}
</script>
