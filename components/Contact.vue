<template>
  <div id="contact" class="contact">
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
        <div class="col-md-6 contacts-info">
          <address>
            <div class="address">
              <h3>{{ $t('contact.addressTitle') }}</h3>
              <p>{{ $t('contact.address') }}</p>
              <p>{{ $t('contact.cityState') }}</p>
              <p>{{ $t('contact.postalCode') }}</p>
            </div>
            <div class="phone">
              <h3>{{ $t('contact.phoneTitle') }}</h3>
              <p>{{ $t('contact.phone1') }}</p>
              <p>{{ $t('contact.phone2') }}</p>
            </div>
          </address>
          <div class="social-media">
            <h3>{{ $t('contact.socialMediaTitle') }}</h3>
            <SocialLinks />
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
    font-size: 76px;
    font-weight: 700;
    line-height: 60px;
    letter-spacing: 0.26px;
    margin-bottom: 20px;
  }

  .contacts-info {
    address {
      margin-top: 40px;
      p {
        text-align: right;
      }
      .address,
      .phone {
        margin-bottom: 5em;
      }
    }
    h3 {
      font-size: 20px;
      text-transform: uppercase;
      letter-spacing: 0;
      font-style: normal;
      text-align: right;
      line-height: initial;
      margin-bottom: 25px;
    }
  }
}
</style>

<script>
import Form from './Form.vue'
import SocialLinks from '@/components/SocialIcons'

export default {
  name: 'Contact',
  components: {
    Form,
    SocialLinks
  }
}
</script>
