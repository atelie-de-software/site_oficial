<template>
  <section class="sectionsCases">
    <div class="container">
      <div class="row">
        <div class="col-md-5">
          <img
            src="~/assets/images/atelie-de-software-access-logo.png"
            alt="Dsop"
            width="160"
            class="logo"
          />
          <p>
            Startup norte-americana, situada em Miami, que realiza empréstimos
            para agentes federais.
          </p>
          <p>
            Criamos campanhas de Landing Page e Email Marketing para atrair
            novos clientes.
          </p>
          <p>
            Concebemos, desenvolvemos e lançamos o produto digital que bateu sua
            meta no primeiro mês de funcionamento.
          </p>
        </div>
        <div class="col-md-7">
          <img
            src="~/assets/images/atelie-de-software-acess-loans.png"
            alt="Access Loans"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.relative {
  position: relative;
  @media screen and (max-width: 786px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    .show-mobile {
      margin-bottom: 40px;
    }
  }
}
</style>
