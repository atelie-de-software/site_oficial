<template>
  <div>
    <div class="form-container">
      <h1 tabindex="0">
        fale
        <br>conosco
      </h1>

      <form
        class="form"
        method="post"
        data-netlify="true"
        action="https://formspree.io/daniel.oshiro@webgoal.com.br"
      >
        <div
          v-show="stepOne"
          class="form-content"
        >
          <label
            class="sr-only"
            for="nome"
          >nome:</label>
          <input
            v-model="nome"
            required
            type="text"
            name="Nome"
            placeholder="nome"
          >
          <label
            class="sr-only"
            for="email"
          >email:</label>
          <input
            v-model="email"
            required
            type="email"
            name="Email"
            placeholder="email"
          >
          <label
            class="sr-only"
            for="empresa"
          >empresa:</label>
          <input
            v-model="empresa"
            required
            type="text"
            name="Empresa"
            placeholder="empresa"
          >
          <textarea
            id
            v-model="descricao"
            name="Descrição"
            cols="10"
            rows="4"
            placeholder="fale sobre seu projeto"
          />
          <button
            type="button"
            class="btn"
            @click="nextStep"
          >
            Próximo
          </button>
        </div>

        <div
          v-show="!stepOne"
          class="form-content"
        >
          <p tabindex="0">
            <strong>{{ nome }}</strong>, agora nos fale um pouco sobre o seu projeto.
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
              >
              <label
                :for="price"
                tabindex="0"
              >{{ price }}</label>
            </div>
          </div>
          <div class="row divider">
            <div class="col-md-5">
              <hr>
            </div>
            <div class="col-md-2">
              <strong>ou</strong>
            </div>
            <div class="col-md-5">
              <hr>
            </div>
          </div>
          <input
            type="submit"
            value="Enviar"
            class="btn"
            :disabled="!projectPrice"
          >
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
  label {
    width: 100%;
    white-space: nowrap;
  }
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
import { required, email } from 'vuelidate/lib/validators'

export default {
  name: 'FormContato',
  data () {
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
      descricao: ''
    }
  },
  validations: {
    nome: {
      required
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
    nextStep () {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.stepOne = false
        this.submitStatus = 'ERROR'
      }
    }
  }
}
</script>
