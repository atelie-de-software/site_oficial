<template>
  <div id="cases">
    <div class="header-cases">
      <h2 tabindex="0">
        cases
      </h2>
    </div>

    <Carousel
      :per-page="1"
      :navigation-enabled="true"
      :pagination-enabled="false"
      navigation-next-label="›"
      navigation-prev-label="‹"
    >
      <Slide v-for="slide in slides" :key="slide.key" class="wrapper">
        <div class="container">
          <div class="row">
            <div class="col-md-5 content">
              <div tabindex="-1" class="col-md-12 show-mobile">
                <Notebook :background="slide.screen" />
              </div>
              <div class="text-and-button">
                <p tabindex="0">
                  {{ slide.content }}
                </p>
                <nuxt-link to="/cases" class="btn">
                  {{ $t('cases.know') }}
                </nuxt-link>
              </div>
            </div>
            <div tabindex="-1" class="col-md-7 show-desktop">
              <Notebook :background="slide.screen" />
            </div>
          </div>
        </div>
      </Slide>
    </Carousel>
  </div>
</template>

<script>
import Notebook from '@/components/Notebook'

export default {
  name: 'Cases',
  components: {
    Notebook
  },
  data() {
    return {
      swiperOption: {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      slides: [
        {
          key: 0,
          content: this.$t('cases.educadora'),
          screen: require('@/assets/images/educadora.png')
        },
        {
          key: 1,
          content: this.$t('cases.conlicita'),
          screen: require('@/assets/images/conlicitacao.png')
        },
        {
          key: 2,
          content: this.$t('cases.granatum'),
          screen: require('@/assets/images/granatum.png')
        },
        {
          key: 3,
          content: this.$t('cases.lumiar'),
          screen: require('@/assets/images/lumiar.png')
        },
        {
          key: 4,
          content: this.$t('cases.dsop'),
          screen: require('@/assets/images/dsop.png')
        },
        {
          key: 5,
          content: this.$t('cases.vagas'),
          screen: require('@/assets/images/vagas.png')
        },
        {
          key: 6,
          content: this.$t('cases.synergia'),
          screen: require('@/assets/images/synergia.png')
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
#cases {
  margin-bottom: 50px;
}
.row {
  padding-left: 0;
}
p {
  margin-bottom: 50px;
}
.content {
  @media screen and (min-width: 787px) {
    text-align: right;
    margin-top: 25vh;
  }
  @media screen and (max-width: 786px) {
    margin-left: 10vw;
    margin-right: 10vw;
    text-align: center;
  }
}
.text-and-button {
  margin-right: 10px;
  @media screen and (max-width: 786px) {
    text-align: center;
    margin-right: 0;
  }
  a {
    margin-bottom: 50px;
  }
}
.wrapper {
  height: auto;
  display: flex;
  align-items: center;
}
.header-cases {
  @media screen and (min-width: 787px) {
    position: absolute;
    left: 20vw;
    font-size: 25vw;
  }
  @media screen and (max-width: 786px) {
    h2 {
      font-size: 20vw;
      text-align: center;
    }
  }
}
</style>
