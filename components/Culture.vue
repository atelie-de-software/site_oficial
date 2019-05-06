<template>
  <div id="cultura" class="culture container">
    <div class="row">
      <div class="col-md-6 content">
        <h3 tabindex="0" data-aos="fade-right" data-aos-once="true">
          {{ $t('culture.message') }}
        </h3>

        <div
          class="blockquote"
          data-aos="fade-right"
          data-aos-delay="200"
          data-aos-once="true"
        >
          <p tabindex="0">
            {{ $t('culture.description') }}
          </p>
        </div>
        <nuxt-link
          data-aos="fade-right"
          data-aos-delay="400"
          data-aos-once="true"
          to="/cultura"
          class="btn"
        >
          {{ $t('culture.more') }}
        </nuxt-link>
      </div>
      <div
        class="col-md-6"
        data-aos="fade-left"
        data-aos-delay="600"
        data-aos-once="true"
      >
        <Person />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.culture {
  margin-top: -100px;
  margin-bottom: 50px;
  @media screen and (max-width: 640px) {
    margin-top: 50px;
  }
}
.content {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
.blockquote {
  max-width: 420px;
  border-left: 4px solid rgba($color: #000000, $alpha: 0.5);
  padding-left: 30px;
  letter-spacing: 2.72px;
  margin-bottom: 50px;
  line-height: 27px;
}
</style>

<script>
import Person from '~/components/Person'

export default {
  name: 'Culture',
  components: {
    Person
  }
}
</script>
