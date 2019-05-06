<template>
  <div id="cases">
    <div class="header-cases">
      <h2
        tabindex="0"
        data-aos="zoom-in"
        data-aos-delay="300"
        data-aos-once="true"
      >
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
      <Slide v-for="slide in slides" :key="slide.key" class="swiper-wrapper">
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
                  conheça nossos cases
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
          content:
            'A Educadora FM é a rádio do Grupo Bandeirantes de Televisão líder de audiência em Campinas e região.',
          screen: require('@/assets/images/educadora.png')
        },
        {
          key: 1,
          content:
            'O ConLicitação possui o maior banco de dados de avisos de licitações do país. Reestruturamos seus sistemas internos e a criamos novos softwares. Estão conosco há 11 anos.',
          screen: require('@/assets/images/conlicitacao.png')
        },
        {
          key: 2,
          content:
            'O Granatum é um sistema online de controle financeiro para micro e pequenas empresas, sendo um produto criado, desenvolvido e mantido pela Webgoal.',
          screen: require('@/assets/images/granatum.png')
        },
        {
          key: 3,
          content:
            'A Lumiar proporciona um ambiente diferenciado para os estudantes. Somos responsáveis por tornar a metodologia Lumiar uma solução digital utilizada pelas escolas no Brasil e exterior.',
          screen: require('@/assets/images/lumiar.png')
        },
        {
          key: 4,
          content:
            'A DSOP promove educação financeira ajudando seus parceiros a construir hábitos saudáveis. Nosso time é responsável pela plataforma que promove educação financeira em escolas, empresas e para trabalhadores Brasil afora.',
          screen: require('@/assets/images/dsop.png')
        },
        {
          key: 5,
          content:
            'A VAGAS.com é líder no mercado de e-recruitment no Brasil e oferece soluções para facilitar a conexão dos melhores talentos às empresas. Criamos novas soluções e otimizar processos já existentes.',
          screen: require('@/assets/images/vagas.png')
        },
        {
          key: 6,
          content:
            'A Synergia, através de suas pesquisas socioambientais, muda a vida de milhares de pessoas. Nosso time é responsável por sistematizar todas as etapas da pesquisa e criar inteligência para que elas possam trazer bons resultados.',
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
