<template>
  <div id="contato" class="contact">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <Form />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.contact {
  background-image: url('../assets/images/map.png');
  background-color: #ffffff;
  color: rgb(0, 0, 0);
  padding-bottom: 50px;
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
