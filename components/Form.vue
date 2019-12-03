<template>
  <div class="form-container">
    <script src="https://s.pageclip.co/v1/pageclip.js" charset="utf-8"></script>
    <link
      rel="stylesheet"
      href="https://s.pageclip.co/v1/pageclip.css"
      media="screen"
    />
    <form
      action="https://send.pageclip.co/UJN10AWTdqnphMMuTYOl1YYav1Gz70FA/atelie-form"
      class="pageclip-form"
      method="post"
      novalidate="true"
    >
      <!-- Replace these inputs with your own. Make sure they have a "name" attribute! -->
      <div
        class="form-input"
        data-aos="fade-right"
        data-aos-delay="400"
        data-aos-once="true"
      >
        <label htmlFor="name">
          {{ $t('contactFormQuestions.name') }}
        </label>
        <input id="name" v-model="name" type="text" name="name" />
        <div v-if="submited && !$v.name.required" class="error">
          {{ $t('contactFormQuestions.error.required') }}
        </div>
      </div>

      <div
        class="form-input"
        data-aos="fade-right"
        data-aos-delay="500"
        data-aos-once="true"
      >
        <label htmlFor="phone">
          {{ $t('contactFormQuestions.phone') }}
        </label>
        <input id="phone" v-model="phone" type="text" name="phone" />
        <div v-if="submited && !$v.phone.required" class="error">
          {{ $t('contactFormQuestions.error.required') }}
        </div>
      </div>

      <div
        class="form-input"
        data-aos="fade-right"
        data-aos-delay="600"
        data-aos-once="true"
      >
        <label htmlFor="phone">
          {{ $t('contactFormQuestions.bestEmail') }}
        </label>
        <input id="email" v-model="email" type="email" name="email" />
        <div v-if="submited && !$v.email.required" class="error">
          {{ $t('contactFormQuestions.error.required') }}
        </div>
        <div v-if="submited && !$v.email.email" class="error">
          {{ $t('contactFormQuestions.error.email') }}
        </div>
      </div>

      <div
        class="form-input"
        data-aos="fade-right"
        data-aos-delay="700"
        data-aos-once="true"
      >
        <div class="select-box">
          <label>
            {{ $t('contactFormQuestions.contactType') }}
          </label>

          <div class="select-field">
            <select v-model="contactType" name="contactType">
              <option value="" selected></option>
              <option value="Telefone">Telefone</option>
              <option value="Email">E-mail</option>
              <option value="WhatsApp">What's App</option>
              <option value="Skype">Skype</option>
              <option value="Video">Vídeo Conferência</option>
            </select>
          </div>
          <div v-if="submited && !$v.contactType.required" class="error">
            {{ $t('contactFormQuestions.error.required') }}
          </div>

          <div
            v-if="['Skype', 'Video'].includes(contactType)"
            id="alternative-channel"
          >
            <label>
              {{ $t('contactFormQuestions.contactAlternativeChannel') }}
            </label>
            <input
              id="contact-alternative_channel"
              v-model="contactAlternativeChannel"
              type="text"
              name="contactAlternativeChannel"
            />
            <div
              v-if="submited && !$v.contactAlternativeChannel.required"
              class="error"
            >
              {{ $t('contactFormQuestions.error.required') }}
            </div>
          </div>
        </div>
      </div>

      <div
        class="form-input"
        data-aos="fade-right"
        data-aos-delay="800"
        data-aos-once="true"
      >
        <div class="select-box">
          <label>
            {{ $t('contactFormQuestions.contactPeriod') }}
          </label>

          <div class="select-field">
            <select
              id="contact-period"
              v-model="contactPeriod"
              name="contactPeriod"
            >
              <option value="" selected></option>
              <option value="Manhã">Manhã</option>
              <option value="Tarde">Tarde</option>
              <option value="Noite">Noite</option>
            </select>
          </div>
          <div v-if="submited && !$v.contactPeriod.required" class="error">
            {{ $t('contactFormQuestions.error.required') }}
          </div>
        </div>
      </div>

      <div
        class="form-input"
        data-aos="fade-right"
        data-aos-delay="900"
        data-aos-once="true"
      >
        <div class="select-box">
          <label>
            {{ $t('contactFormQuestions.budget') }}
          </label>

          <div class="select-field">
            <select id="budget" v-model="budget" name="budget">
              <option value="" selected></option>
              <option value="0 a 180mil">
                180 mil reais (contrato mínimo)
              </option>
              <option value="180 a 360mil">
                De 180 mil reais até 360 mil reais
              </option>
              <option value="360 a 600mil">
                De 360 mil até 600 mil reais
              </option>
              <option value="acima de 600mil">
                Mais de 600 mil reais
              </option>
            </select>
          </div>
          <div v-if="submited && !$v.budget.required" class="error">
            {{ $t('contactFormQuestions.error.required') }}
          </div>
        </div>
      </div>

      <div
        class="form-input"
        data-aos="fade-right"
        data-aos-delay="1000"
        data-aos-once="true"
      >
        <label htmlFor="project-description">
          {{ $t('contactFormQuestions.projectDescription') }}
        </label>
        <textarea
          id="project-description"
          v-model="projectDescription"
          name="project-description"
          rows="5"
        ></textarea>
        <div v-if="submited && !$v.projectDescription.required" class="error">
          {{ $t('contactFormQuestions.error.required') }}
        </div>
      </div>
      <!-- This button will have a loading spinner. Keep the inner span for best results. -->
      <button
        type="submit"
        class="pageclip-form__submit btn btn-submit"
        data-aos="fade-right"
        data-aos-delay="1100"
        data-aos-once="true"
        @click="submitForm"
      >
        <span>{{ $t('contactFormQuestions.sendButton') }}</span>
      </button>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.form-container {
  margin-bottom: 50px;
}
select::-ms-expand {
  display: none;
}
.block-scroller__Root-sc-23jz1-0 .tSSlS {
  overflow-y: hidden !important;
}
.overflow-form {
  overflow: hidden !important;
}
.typeform-widget {
  height: auto;
}
.pageclip-form__success {
  display: none;
}
.pageclip-form__submit {
  z-index: 1;
}
.select-box {
  margin: 0 0 20px 0;
}
.select-field {
  margin: 7px 0 0 0;
}
textarea {
  resize: none;
}
#alternative-channel {
  margin-top: 1em;
  text-align: right;

  label {
    display: inline-block;
    width: 49%;
  }
  input {
    display: inline-block;
    width: 49%;
  }
}
</style>

<script>
import {
  required,
  requiredIf,
  email,
  minLength
} from 'vuelidate/lib/validators'

export default {
  name: 'FormContato',
  data() {
    return {
      submited: false,
      name: '',
      phone: '',
      email: '',
      contactType: '',
      contactAlternativeChannel: '',
      contactPeriod: '',
      budget: '',
      projectDescription: ''
    }
  },
  computed: {
    isAlternativeChannelSelected() {
      return ['Skype', 'Video'].includes(this.contactType)
    }
  },
  validations: {
    name: { required, minLength: minLength(2) },
    phone: { required },
    email: { required, email },
    contactType: { required },
    contactAlternativeChannel: {
      required: requiredIf('isAlternativeChannelSelected')
    },
    contactPeriod: { required },
    budget: { required },
    projectDescription: { required }
  },
  methods: {
    submitForm: function(event) {
      this.submited = true
      if (this.$v.$invalid) {
        event.preventDefault()
        event.stopPropagation()
        return false
      }
      return false
    }
  }
}
</script>
