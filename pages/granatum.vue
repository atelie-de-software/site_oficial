<template>
  <div class="jeff">
    <div class="main">
      <div class="container">
        <div class="row">
          <div class="col-md-6 contentSection">
            <img
              src="~/assets/images/granatum logotipo.svg"
              alt="Granatum Controle Financeiro Online"
              class="logo-granatum"
            />
            <h2>Desenvolvimento do App do Granatum Financeiro</h2>
            <p>{{ $t('granatum.description') }}</p>
            <p>{{ $t('granatum.descriptionII') }}</p>
          </div>
          <div class="col-md-6">
            <img
              src="~/assets/images/granatum/atelie-de-software-mockup-iphones-granatum.webp"
              alt="Granatum Controle Financeiro Online"
            />
          </div>
        </div>
      </div>
      <div class="challenge">
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
      <div class="solution">
        <div class="container">
          <div class="row">
            <div class="col-md-4 contentSection">
              <h2>Solução</h2>
              <p>
                Projetar e desenvolver o aplicativo do Granatum com uma
                excelente experiência para o usuário, aumentando a retenção de
                clientes.
              </p>
              <p>Para este projeto usamos:</p>
              <p>Reactive Native e Expo</p>
            </div>
            <div class="col-md-8">
              <img
                src="~/assets/images/granatum/atelie-de-software-telas-granatum.webp"
                alt="Granatum Controle Financeiro Online"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="screen">
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
      <div class="screen">
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
    </div>
    <div class="result">
      <div class="container">
        <div class="row">
          <div class="col-md-4 contentSection">
            <h2>Resultado</h2>
            <p>
              O aplicativo do Granatum foi desenvolvido em 1 ano por uma equipe
              composta por 2 desenvolvedores e 1 designer. Após o lançamento, os
              usuários do Granatum começaram a utilizar a solução mobile e houve
              um aumento significativo de novos assinantes.
            </p>
          </div>
          <div class="col-md-8"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
h2 {
  font-size: 20px;
  text-transform: capitalize;
  margin: 40px 0;
}
.contentSection {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}
</style>
