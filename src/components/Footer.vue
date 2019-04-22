<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <g-image src="/logo_atelie_footer.png" alt="Logo ateliê de software" />
        </div>
        <div class="col-md-6 vertical">
          <address>Av. João Pinheiro, 341 - Sala 3 - Centro, Poços de Caldas - MG, 37701-880</address>
          <span tabindex="0">Todos os direitos reservados Ateliê de Software {{year}}©</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  height: 79px;
  background-color: #f2f2f2;
  display: flex;
  align-items: center;
  @media screen and (max-width: 786px) {
    height: auto;
    text-align: center;
  }
  .row {
    div {
      display: flex;
      align-items: center;
      padding-top: 10px;
      padding-bottom: 10px;
      @media screen and (max-width: 786px) {
        justify-content: center;
      }
    }
  }
  span,
  address {
    color: #878f99;
    font-size: 15px;
    font-weight: 300;
    letter-spacing: 2.31px;
    line-height: 16px;
  }
  span {
    font-size: 12px;
    line-height: 12px;
  }
  .vertical {
    display: flex;
    flex-direction: column;
    text-align: center;
    address {
      margin-bottom: 10px
    }
  }
}
</style>

<script>
export default {
  name: 'siteFooter',
  computed: {
    year: function() {
      return new Date().getFullYear()
    }
  }
}
</script>
