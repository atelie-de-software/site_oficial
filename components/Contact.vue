<template>
  <div id="contact" class="contact">
    <div class="container">
      <div class="row">
        <div class="col-md-2">
          <h2 tabindex="0">
            {{ $t('form.message') }}
          </h2>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <Form />
        </div>
        <div class="col-md-6 contacts-info">
          <address>
            <div class="address">
              <h3>
                {{ $t('contact.addressTitle') }}
              </h3>
              <div>
                <p>{{ $t('contact.address') }}</p>
                <p>{{ $t('contact.cityState') }}</p>
                <p>{{ $t('contact.postalCode') }}</p>
              </div>
            </div>
            <div class="phone">
              <h3>
                {{ $t('contact.phoneTitle') }}
              </h3>
              <div>
                <div class="phone-box">
                  <label>{{ $t('contact.whatsappPhoneTitle') }}</label>
                  <p>
                    <img
                      tabindex="0"
                      class="phone-icon"
                      src="@/assets/images/whatsapp.svg"
                      alt="WhatsApp contact"
                    />
                    <a
                      aria-label="Whats App"
                      class="whatsapp-link"
                      target="_blank"
                      href="https://bit.ly/30azLxL"
                    >
                      {{ $t('contact.phoneWhatsApp') }}
                    </a>
                  </p>
                </div>

                <div class="phone-box">
                  <label>{{ $t('contact.officePhoneTitle') }}</label>
                  <p>
                    <img
                      tabindex="0"
                      class="phone-icon"
                      src="@/assets/images/building.svg"
                      alt="Office contact"
                    />
                    {{ $t('contact.phoneOffice') }}
                  </p>
                </div>
              </div>
            </div>
          </address>
          <div class="social-media">
            <h3>
              {{ $t('contact.socialMediaTitle') }}
            </h3>
            <div>
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.form-container {
  margin: 20px 0 0 0;
}
.contact {
  background-color: #ffffff;
  color: rgb(0, 0, 0);
  padding-bottom: 50px;

  .contacts-info {
    padding-left: 80px;
    @media screen and (max-width: 1024px) {
      padding-left: 15px;
    }
    address {
      font-style: normal;
      margin-top: 17px;
      p {
        text-align: left;
      }
      .address,
      .phone {
        margin-bottom: 5em;
      }
    }
    .phone-box {
      &:first-child {
        margin-bottom: 30px;
      }

      label {
        font-weight: bold;
        display: inline-block;
        margin-bottom: 5px;
      }

      .phone-icon {
        width: 20px;
        position: relative;
        top: 4px;
      }
      .whatsapp-link {
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
}
</style>

<script>
import SocialLinks from '@/components/SocialIcons'
import Form from './Form.vue'

export default {
  name: 'Contact',
  components: {
    Form,
    SocialLinks
  }
}
</script>
