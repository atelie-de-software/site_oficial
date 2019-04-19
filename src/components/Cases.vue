<template>
  <div id="cases">
    <div class="header-cases">
      <h2 tabindex="0">cases</h2>
    </div>
    <swiper :mySwiper="swiperOption">
      <swiper-slide class="swiper-wrapper">
        <div class="swiper-slide" v-for="(slide, index) in slides" :key="index">
          <div class="container">
            <div class="row">
              <div class="col-md-5 content">
                <div tabindex="-1" class="col-md-12 show-mobile">
                  <Notebook :background="slide.screen"/>
                </div>
                <div class="text-and-button">
                  <p tabindex="0">{{slide.content}}</p>
                  <a href="/cases" class="btn">conheça nossos cases</a>
                </div>
              </div>
              <div tabindex="-1" class="col-md-7 show-desktop">
                <Notebook :background="slide.screen"/>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
      <div class="swiper-button-prev" slot="button-prev">
        <g-image src="@/assets/images/left-arrow.svg" alt="Slide anterior" />
      </div>
      <div class="swiper-button-next" slot="button-next">
        <g-image src="@/assets/images/right-arrow.svg" alt="Próximo slide" />
      </div>
    </swiper>
  </div>
</template>

<script>
import Notebook from '@/components/Notebook'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'Cases',
  components: {
    swiper,
    swiperSlide
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
          content:
            'A Educadora FM é a rádio do Grupo Bandeirantes de Televisão líder de audiência em Campinas e região.',
          screen: require('@/assets/images/educadora.png')
        },
        {
          content:
            'O ConLicitação possui o maior banco de dados de avisos de licitações do país. Reestruturamos seus sistemas internos e a criamos novos softwares. Estão conosco há 11 anos.',
          screen: require('@/assets/images/conlicitacao.png')
        },
        {
          content:
            'O Granatum é um sistema online de controle financeiro para micro e pequenas empresas, sendo um produto criado, desenvolvido e mantido pela Webgoal.',
          screen: require('@/assets/images/granatum.png')
        },
        {
          content:
            'A Lumiar proporciona um ambiente diferenciado para os estudantes. Somos responsáveis por tornar a metodologia Lumiar uma solução digital utilizada pelas escolas no Brasil e exterior.',
          screen: require('@/assets/images/lumiar.png')
        },
        {
          content:
            'A DSOP promove educação financeira ajudando seus parceiros a construir hábitos saudáveis. Nosso time é responsável pela plataforma que promove educação financeira em escolas, empresas e para trabalhadores Brasil afora.',
          screen: require('@/assets/images/dsop.png')
        },
        {
          content:
            'A VAGAS.com é líder no mercado de e-recruitment no Brasil e oferece soluções para facilitar a conexão dos melhores talentos às empresas. Criamos novas soluções e otimizar processos já existentes.',
          screen: require('@/assets/images/vagas.png')
        },
        {
          content:
            'A Synergia, através de suas pesquisas socioambientais, muda a vida de milhares de pessoas. Nosso time é responsável por sistematizar todas as etapas da pesquisa e criar inteligência para que elas possam trazer bons resultados.',
          screen: require('@/assets/images/synergia.png')
        }
      ]
    }
  },
  components: {
    Notebook
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
.swiper-button-prev {
  background-image: none;
  left: 5%;
}
.swiper-button-next {
  background-image: none;
  right: 5%;
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
