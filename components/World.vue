<template>
  <div id="mundo" class="container world">
    <div class="row">
      <img
        src="~/assets/images/line-logo.png"
        alt
        aria-hidden="true"
        class="line-logo"
        data-aos="zoom-index"
        data-aos-delay="1000"
        data-aos-once="true"
      />
      <div class="col-md-7">
        <h3 tabindex="0" data-aos="fade-right" data-aos-once="true">
          {{ $t('world.message') }}
        </h3>
        <p
          tabindex="0"
          data-aos="fade-right"
          data-aos-delay="300"
          data-aos-once="true"
        >
          {{ $t('world.description') }}
        </p>
      </div>
      <div class="col-md-5">
        <img
          tabindex="0"
          data-aos="fade-left"
          data-aos-delay="500"
          data-aos-once="true"
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
