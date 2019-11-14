<template>
  <div id="contato" class="contact">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div :class="socorro">
            <script
              src="https://s.pageclip.co/v1/pageclip.js"
              charset="utf-8"
            ></script>
            <form
              action="https://send.pageclip.co/5nqgwIYU1sEj0vS15XqCbt8FuFbN4EgZ/FormAtelie"
              class="pageclip-form"
              method="post"
            >
              <!-- Replace these inputs with your own. Make sure they have a "name" attribute! -->
              <input type="text" name="name" value="Roscoe Jones" />
              <input type="email" name="email" value="roscoe@example.com" />
              <input type="text" name="phone" value="(35) 37832-4782" />

              <!-- This button will have a loading spinner. Keep the inner span for best results. -->
              <button type="submit" class="pageclip-form__submit">
                <span>Enviar</span>
              </button>
            </form>
          </div>
        </div>
        <div class="col-md-6">
          R. Paraíba, 49 Vila Ricasavcuysavgcausygsyu, 37701-726 | (35)3722-3776
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.contact {
  background-color: #ffffff;
  color: rgb(0, 0, 0);
  height: 80vh;
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
</style>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      socorro: ''
    }
  }
}
</script>
