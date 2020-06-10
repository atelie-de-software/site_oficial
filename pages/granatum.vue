<template>
  <div class="jeff">
    <div class="main">
      <div class="container">
        <div class="row">
          <div class="col-md-5 contentSection">
            <img
              src="~/assets/images/granatum logotipo.svg"
              alt="Granatum Controle Financeiro Online"
              class="logo-granatum"
            />
            <h2>Desenvolvimento do app do Granatum Financeiro</h2>
            <p>
              Startup brasileira que oferece um SaaS de Gestão Financeira para
              empresas.
            </p>
            <p class="details">
              <img
                src="~/assets/images/atelie-de-software-icon-time.svg"
                alt="Granatum Controle Financeiro Online"
              />
              Duração: 1 ano
            </p>
            <p class="details">
              <img
                src="~/assets/images/atelie-de-software-icon-team.svg"
                alt="Granatum Controle Financeiro Online"
              />
              Equipe: 4 pessoas
            </p>
          </div>
          <div class="col-md-7">
            <img
              src="~/assets/images/atelie-de-software-cases.jpg"
              alt="Granatum Controle Financeiro Online"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="challenge color">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <img
              src="~/assets/images/granatum/atelie-de-software-mao-iphone-granatum.webp"
              alt="Granatum Controle Financeiro Online"
            />
          </div>
          <div class="col-md-6 contentSection">
            <h2>Desafios</h2>
            <p>
              Criar o aplicativo mobile do Granatum oferecendo as mesmas
              funcionalidades da plataforma web.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="solution color">
      <div class="container">
        <div class="row">
          <div class="col-md-4 contentSection">
            <h2>Solução</h2>
            <p>
              Projetar e desenvolver o aplicativo do Granatum com uma
              experiência para o usuário, aumentando a retenção de clientes.
            </p>
            <p>Para este projeto usamos:</p>
            <p>Reactive Native e Expo</p>
          </div>
          <div class="col-md-8">
            <img
              src="~/assets/images/granatum/atelie-de-software-mockup-iphones-granatum.svg"
              alt="Granatum Controle Financeiro Online"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="screen color">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <img
              src="~/assets/images/granatum/atelie-de-software-wireframe-telas-granatum.webp"
              alt="Granatum Controle Financeiro Online"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="screen color">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <img
              src="~/assets/images/granatum/atelie-de-software-telas-granatum-app.webp"
              alt="Granatum Controle Financeiro Online"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="result">
      <div class="container">
        <div class="row">
          <div class="col-md-6 contentSection">
            <h2>Resultados</h2>
            <p>
              Startup brasileira que oferece um SaaS de Gestão Financeira para
              empresas.
            </p>
          </div>
          <div class="col-md-6">
            <img
              src="~/assets/images/granatum/atelie-de-software-mao-iphone-granatum.webp"
              alt="Granatum Controle Financeiro Online"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.color {
  background-color: #0d91e5;
  h2,
  p {
    color: #ffffff;
  }
}
.main {
  .logo-granatum {
    width: 200px;
  }
}
.challenge {
  p {
    font-size: 1.6em;
    line-height: 1.4em;
  }
}
h2 {
  font-size: 2em;
  text-transform: unset;
  margin: 20px 0;
}
.details {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  img {
    margin: 0 10px 0 0;
  }
}
.contentSection {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}
</style>
