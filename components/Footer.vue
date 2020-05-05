<template>
  <div>
    <footer>
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <img
              @click="scrolltop"
              src="/logo_atelie_footer.png"
              alt="Logo ateliê de software"
            />
          </div>
          <div class="col-md-6 copyright">
            {{ $t('footer.copyright') }}
          </div>
        </div>
      </div>
    </footer>
  </div>
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
  .vertical {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  .copyright {
    justify-content: flex-end;
    color: #62686f;
    font-weight: 300;
    letter-spacing: 2.31px;
    font-size: 12px;
    line-height: 12px;
  }
}
</style>

<script>
export default {
  name: 'SiteFooter',
  computed: {
    year: function() {
      return new Date().getFullYear()
    }
  },
  methods: {
    scrolltop() {
      window.scroll({ top: 0, left: 0, behavior: 'smooth' })
    }
  }
}
</script>
