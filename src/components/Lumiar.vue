<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <g-image
          src="~/assets/images/lumiar-logo.png"
          alt
          class="logo"
        />
        <div class="content">
          <p>A Lumiar proporciona através de exclusiva prática pedagógica um ambiente diferenciado para os estudantes se desenvolverem de forma ativa e autônoma na sociedade.</p>
          <p>O Ateliê de Software é responsável por tornar a metodologia Lumiar uma solução digital utilizada pelas escolas no Brasil e exterior.</p>
        </div>
      </div>
      <div class="col-md-8">
        <g-image
          src="~/assets/images/lumiar-print.png"
          class="show-desktop"
          alt
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.content {
  margin: 60px 0;
}
.col-md-4,
.col-md-8 {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.container {
  @media screen and (max-width: 786px) {
    padding-top: 40px;
  }
}
</style>
