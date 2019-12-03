<template>
  <div id="contato" class="contact">
    <div class="container">
      <h1 tabindex="0">
        {{ $t('form.messageI') }}
        <br />
        {{ $t('form.messageII') }}
      </h1>
      <div class="row">
        <div class="col-md-6">
          <Form />
        </div>
        <div class="col-md-6 text-right">
          <div class="container address">
            <address>
              <p>{{ $t('footer.address') }}</p>
              <p>{{ $t('footer.city_state') }}</p>
              <p>{{ $t('footer.postal_code') }}</p>
              <p>{{ $t('footer.phone_1') }}</p>
              <p>{{ $t('footer.phone_2') }}</p>
            </address>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.contact {
  background-color: #ffffff;
  color: rgb(0, 0, 0);
  padding-bottom: 50px;

  h1 {
    opacity: 0.7;
    color: #000000;
    font-size: 87px;
    font-weight: 700;
    line-height: 100px;
    letter-spacing: 0.26px;
    margin-left: 25px;
  }

  address {
    margin-top: 40px;

    p {
      text-align: right;
    }
  }
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
