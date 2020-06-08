<template>
  <section class="sectionsCases">
    <div class="container">
      <div class="row">
        <div class="col-md-7">
          <img
            src="~/assets/images/atelie-de-software-acess-loans.png"
            alt="Access Loans"
          />
        </div>
        <div class="col-md-4 offset-md-1">
          <img
            src="~/assets/images/atelie-de-software-access-logo.png"
            alt="Dsop"
            class="logo-accessloans"
          />
          <p>{{ $t('accessloans.description') }}</p>
          <p>{{ $t('accessloans.descriptionII') }}</p>
          <p>{{ $t('accessloans.descriptionIII') }}</p>
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
