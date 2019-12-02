<template>
  <div :class="socorro">
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
    >
      <!-- Replace these inputs with your own. Make sure they have a "name" attribute! -->
      <label htmlFor="name">
        {{ $t('contactFormQuestions.name') }}
      </label>
      <input id="name" type="text" name="name" required />

      <label htmlFor="phone">
        {{ $t('contactFormQuestions.phone') }}
      </label>
      <input id="phone" type="text" name="phone" required />

      <label htmlFor="phone">
        {{ $t('contactFormQuestions.bestEmail') }}
      </label>
      <input id="email" type="email" name="email" required />

      <div class="select-box">
        <label>
          {{ $t('contactFormQuestions.contactType') }}
        </label>

        <div class="select-field">
          <select name="contactType" required>
            <option value="" selected></option>
            <option value="phone">Telefone</option>
            <option value="email">E-mail</option>
            <option value="skype">Skype</option>
            <option value="whatsapp">Whatsapp</option>
            <option value="video">Vídeo Conferência</option>
          </select>
        </div>
      </div>

      <div class="select-box">
        <label>
          {{ $t('contactFormQuestions.contactPeriod') }}
        </label>

        <div class="select-field">
          <select name="contactPeriod" required>
            <option value="" selected></option>
            <option value="morning">Manhã</option>
            <option value="afternoon">Tarde</option>
            <option value="evening">Noite</option>
          </select>
        </div>
      </div>

      <div class="select-box">
        <label>
          {{ $t('contactFormQuestions.budget') }}
        </label>

        <div class="select-field">
          <select name="budget" required>
            <option value="" selected></option>
            <option value="0">180 Mil Reais (contrato mínimo).</option>
            <option value="1">De 180 Mil Reais até 360 Mil Reais.</option>
            <option value="2">De 360 Mil até 600 Mil Reais.</option>
            <option value="3">Mais de 600 Mil Reais.</option>
          </select>
        </div>
      </div>

      <!-- This button will have a loading spinner. Keep the inner span for best results. -->
      <button type="submit" class="pageclip-form__submit btn">
        <span>Enviar</span>
      </button>
    </form>
  </div>
</template>

<style lang="scss" scoped>
select::-ms-expand {
  display: none;
}

.contact {
  background-color: #ffffff;
  color: rgb(0, 0, 0);
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

.select-box {
  margin: 0 0 20px 0;
}

.select-field {
  margin: 7px 0 0 0;

  select {
    border: 1px solid;
    font-size: 18px;
    font-weight: bold;
    height: 3.5em;
    width: 100%;
  }
}
</style>

<script>
import { required, email, minLength } from 'vuelidate/lib/validators'

export default {
  name: 'FormContato',
  data() {
    return {
      prices: [
        '150 mil',
        '200 mil',
        '250 mil',
        '300 mil',
        '350 mil',
        '500 mil'
      ],
      projectPrice: undefined,
      stepOne: true,
      nome: '',
      telefone: '',
      email: '',
      empresa: '',
      descricao: '',
      submited: false,
      socorro: ''
    }
  },
  validations: {
    nome: {
      required,
      minLength: minLength(2)
    },
    email: {
      required,
      email
    },
    empresa: {
      required
    }
  },
  methods: {
    nextStep() {
      this.submited = true
      if (!this.$v.$invalid) {
        this.stepOne = false
        this.submitStatus = 'ERROR'
      }
    }
  }
}
</script>
