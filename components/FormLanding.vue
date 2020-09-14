<template>
  <div class="form-landing">
    <script src="https://s.pageclip.co/v1/pageclip.js" charset="utf-8"></script>
    <link
      rel="stylesheet"
      href="https://s.pageclip.co/v1/pageclip.css"
      media="screen"
    />
    <form
      action="https://send.pageclip.co/9IHKLuoFqinaSCo9CUxzldXvfUwdrVXd/Live"
      class="pageclip-form"
      method="post"
      @submit="EnviarForm"
    >
      <!-- Replace these inputs with your own. Make sure they have a "name" attribute! -->
      <div class="form-group">
        <label for="name">Nome</label>
        <input
          class="form-control"
          type="text"
          name="name"
          placeholder="Seu nome"
          required
        />
      </div>
      <div class="form-group">
        <label for="email">E-mail</label>
        <input type="email" name="email" placeholder="Seu e-mail" required />
      </div>
      <div class="form-group">
        <label for="phone">Telefone</label>
        <input
          type="number"
          name="phone"
          placeholder="(00)00000-0000"
          required
        />
      </div>
      <div class="form-group">
        <label for="profission">Profissão</label>
        <select id="profission" name="profission" required>
          <option selected>Selecione</option>
          <option value="designer">Designer</option>
          <option value="desenvolvedor">Desenvolvedor</option>
          <option value="outros">Outros</option>
        </select>
      </div>

      <!-- This button will have a loading spinner. Keep the inner span for best results. -->
      <button type="submit" class="pageclip-form__submit btn">
        <span>Enviar</span>
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'FormLanding',
  methods: {
    EnviarForm() {
      this.$router.push('/cursos/thanks')
    }
  }
}
</script>

<style lang="scss" scoped></style>
