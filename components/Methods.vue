<template>
  <div class="methods container">
    <div class="row">
      <div class="col-md-4 content">
        <h3 tabindex="0" data-aos="fade-right" data-aos-once="true">
          {{ $t('methodology.message') }}
        </h3>
        <p
          tabindex="0"
          data-aos="fade-right"
          data-aos-delay="300"
          data-aos-once="true"
        >
          {{ $t('methodology.description') }}
        </p>
      </div>
      <div class="col-md-8">
        <img
          data-aos="fade-left"
          data-aos-delay="600"
          data-aos-once="true"
          tabindex="0"
          src="@/assets/images/metodologia.svg"
          alt="representação da concepção dos valores: inception, lean ux, agile dev"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.methods {
  margin-top: 65px;
  margin-bottom: 65px;
}
.content {
  text-align: right;
}
</style>
