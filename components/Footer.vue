<template>
  <div>
    <div class="container address">
      <div class="row">
        <div class="col-md-12">
          <address>
            {{ $t('footer.address') }}
          </address>
        </div>
      </div>
    </div>
    <footer>
      <div class="container">
        <div class="row">
          <div class="col-md-3">
            <img
              src="/logo_atelie_footer.png"
              alt="Logo ateliê de software"
              @click="scrolltop"
            />
          </div>
          <div class="col-md-6">
            <span tabindex="0">
              {{ $t('footer.copyright') }}
            </span>
          </div>
          <div class="col-md-3 vertical">
            <SocialLinks />
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
.address {
  text-align: center;
  address {
    line-height: 50px;
    font-style: normal;
  }
}
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
  span {
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
      margin-bottom: 10px;
    }
  }
}
</style>

<script>
import SocialLinks from '@/components/SocialIcons'
export default {
  name: 'SiteFooter',
  components: {
    SocialLinks
  },
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
