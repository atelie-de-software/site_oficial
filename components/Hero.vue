<template>
  <div class="container hero">
    <div class="row">
      <div class="col-md-9">
        <h1 tabindex="0" data-aos="fade-right" data-aos-once="true">
          {{ $t('hero.message') }}
        </h1>
        <p
          tabindex="0"
          data-aos="fade-right"
          data-aos-delay="300"
          data-aos-once="true"
        >
          {{ $t('hero.description') }}
        </p>
      </div>

      <div class="col-md-3 logo">
        <img
          src="/logo_element.png"
          data-aos="fade-left"
          data-aos-delay="500"
          data-aos-once="true"
          alt
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hero {
  padding-top: 50px;
  padding-bottom: 50px;
  position: relative;
}
.logo {
  display: flex;
  justify-content: center;
  align-items: baseline;
  padding-top: 45px;
}
h1 {
  color: #444140;
  font-size: 81px;
  font-weight: 800;
  line-height: 86.12px;
  text-transform: uppercase;
  letter-spacing: 2.1px;
  margin-bottom: 67px;
  @media screen and (max-width: 640px) {
    font-size: 38px;
    margin-bottom: 20px;
    line-height: 1;
  }
}
p {
  color: #444140;
  margin-bottom: 41px;
  width: 560px;
  max-width: 100%;
  line-height: 28px;
}
</style>
