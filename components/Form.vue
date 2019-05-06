<template>
  <div>
    <div class="form-container">
      <h1 tabindex="0">
        {{ $t('form.messageI') }}
        <br />{{ $t('form.messageII') }}
      </h1>

      <form
        class="form"
        method="post"
        data-netlify="true"
        action="https://formspree.io/contato@webgoal.com.br"
      >
        <div v-show="stepOne" class="form-content">
          <input
            id="nome"
            v-model="nome"
            required
            type="text"
            name="nome"
            :aria-label="$t('form.name')"
            :placeholder="$t('form.name')"
          />
          <div v-if="submited && !$v.nome.required" class="error">
            Campo Obrigatório
          </div>
          <input
            id="email"
            v-model="email"
            required
            type="email"
            name="email"
            :aria-label="$t('form.email')"
            :placeholder="$t('form.email')"
          />
          <div v-if="submited && !$v.email.required" class="error">
            Campo Obrigatório
          </div>
          <div v-if="submited && !$v.email.email" class="error">
            Email inválido
          </div>
          <input
            id="empresa"
            v-model="empresa"
            required
            type="text"
            name="empresa"
            :aria-label="$t('form.company')"
            :placeholder="$t('form.company')"
          />
          <div v-if="submited && !$v.empresa.required" class="error">
            Campo Obrigatório
          </div>
          <textarea
            id="description"
            v-model="descricao"
            name="description"
            cols="10"
            rows="4"
            :aria-label="$t('form.tellUs')"
            :placeholder="$t('form.tellUs')"
          />
          <button type="button" class="btn" @click="nextStep">
            {{ $t('form.next') }}
          </button>
        </div>

        <div v-show="!stepOne" class="form-content">
          <p tabindex="0">
            <strong>{{ nome }}</strong
            >, agora nos fale um pouco sobre o seu projeto.
          </p>
          <p>
            <strong tabindex="0">Valor estimado em reais:</strong>
          </p>
          <div class="row">
            <div
              v-for="(price, index) in prices"
              :key="index"
              class="col-md-4 item"
            >
              <input
                :id="price"
                v-model="projectPrice"
                name="Valor Estimado"
                type="radio"
                :value="price"
              />
              <label :for="price" tabindex="0">{{ price }}</label>
            </div>
          </div>
          <div class="row divider">
            <div class="col-md-5">
              <hr />
            </div>
            <div class="col-md-2">
              <strong>ou</strong>
            </div>
            <div class="col-md-5">
              <hr />
            </div>
          </div>
          <input
            type="submit"
            value="Enviar"
            class="btn"
            :disabled="!projectPrice"
          />
        </div>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.form-container {
  width: 100%;
  padding-top: 145px;
  padding-bottom: 92px;
  max-width: 461px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.form {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
  height: 595px;
  box-shadow: 0 0 68px rgba(86, 99, 108, 0.22);
  border-radius: 10px;
  background-color: #ffffff;
  padding: 82px 22px;
  @media screen and (max-width: 786px) {
    padding: 82px 22px 30px;
    height: auto;
  }
}
.form-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  .btn {
    align-self: flex-end;
  }
}
h1 {
  opacity: 0.7;
  color: #000000;
  font-size: 87px;
  font-weight: 700;
  line-height: 64.32px;
  letter-spacing: 0.26px;
  margin-bottom: -40px;
  @media screen and (max-width: 786px) {
    font-size: 15.4vw;
    line-height: 1;
  }
}
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}
.item {
  display: flex;
  font-size: 22px;
  font-weight: 300;
  line-height: 24.58px;
}
label {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}
.divider {
  display: none;
  > div {
    display: flex;
    align-items: center;
    hr {
      width: 100%;
      height: 1px;
      border: 1px solid #000;
    }
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
      email: '',
      empresa: '',
      descricao: '',
      submited: false
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
