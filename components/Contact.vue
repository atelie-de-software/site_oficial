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
              <h3
                data-aos="fade-left"
                data-aos-delay="300"
                data-aos-once="true"
              >
                {{ $t('contact.addressTitle') }}
              </h3>
              <div
                data-aos="fade-left"
                data-aos-delay="400"
                data-aos-once="true"
              >
                <p>{{ $t('contact.address') }}</p>
                <p>{{ $t('contact.cityState') }}</p>
                <p>{{ $t('contact.postalCode') }}</p>
              </div>
            </div>
            <div class="phone">
              <h3
                data-aos="fade-left"
                data-aos-delay="500"
                data-aos-once="true"
              >
                {{ $t('contact.phoneTitle') }}
              </h3>
              <div
                data-aos="fade-left"
                data-aos-delay="600"
                data-aos-once="true"
              >
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
                      href="https://api.whatsapp.com/send?phone=5535999998914"
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
            <h3 data-aos="fade-left" data-aos-delay="700" data-aos-once="true">
              {{ $t('contact.socialMediaTitle') }}
            </h3>
            <div data-aos="fade-left" data-aos-delay="800" data-aos-once="true">
              <SocialLinks />
            </div>
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
    h3 {
      font-size: 20px;
      text-transform: uppercase;
      letter-spacing: 0;
      font-style: normal;
      text-align: left;
      line-height: initial;
      margin-bottom: 25px;
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
