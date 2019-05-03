<template>
  <div
    id="mundo"
    class="container world"
  >
    <div class="row">
      <g-image
        src="~/assets/images/line-logo.png"
        alt
        aria-hidden="true"
        class="line-logo"
      />
      <div class="col-md-7">
        <h3 tabindex="0">
          O Ateliê pelo mundo
        </h3>
        <p tabindex="0">
          Nossos serviços diferenciados também são oferecidos em Portugal através da parceira com a SCOPPHU, empresa que complementa nossa proposta de valor oferecendo serviços de formação e consultoria em gestão de projetos e agile para o mercado europeu.
        </p>
      </div>
      <div class="col-md-5">
        <g-image
          tabindex="0"
          src="/scopphu.png"
          alt="scopphu: the agile transition company"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#mundo {
  margin-bottom: 50px;
}
.line-logo {
  position: absolute;
  left: -25%;
  bottom: -70px;
  z-index: 0;
  @media screen and (max-width: 786px) {
    bottom: 10%;
  }
}
.row {
  height: 546px;
  position: relative;
}
.world {
  background-repeat: no-repeat;
  & > div {
    display: flex;
    align-items: center;
  }
}
</style>

<script>
export default {
  name: 'World'
}
</script>
