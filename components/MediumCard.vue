<template>
  <div class="card" aria-label="Blog">
    <img tabindex="0" class="featured-image" :src="thumb" alt />
    <div class="infos">
      <div class="date">
        <time tabindex="0" :datetime="date">{{ datetime }}</time>
      </div>
      <div class="photo author">
        <img tabindex="-1" src="//placehold.it/135x135" alt />
      </div>
      <div class="name">
        <h6 tabindex="0">
          {{ author }}
        </h6>
      </div>
    </div>
    <div class="content">
      <h6 tabindex="0">
        {{ title }}
      </h6>
      <p tabindex="0">
        {{ description }}
      </p>
    </div>
    <div class="read-more">
      <a :href="link" target="_blank" class="btn">Leia mais</a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  position: relative;
  width: 100%;
  max-width: 364px;
  height: 566px;
  border-radius: 14px;
  background-color: #ffffff;
  .featured-image {
    border-top-left-radius: 14px;
    border-top-right-radius: 14px;
  }
  .infos {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    position: relative;
    padding: 0 20px;
    .author {
      display: none;
      width: 135px;
      height: 135px;
      box-shadow: 0 0 40px rgba(86, 99, 108, 0.22);
      border-radius: 135px;
      background-color: #ffffff;
      border: 6px solid white;
      overflow: hidden;
      position: absolute;
      top: -65px;
      left: 0;
      right: 0;
      margin: auto;
    }
    .date,
    .name {
      text-align: right;
      width: 100%;
      max-width: 116px;
      padding: 25px 0;
      h6 {
        line-height: 1;
      }
    }
    .date {
      text-align: left;
      color: #878f99;
      font-size: 16px;
      font-weight: 300;
      line-height: 27px;
      letter-spacing: 2.72px;
    }
  }
  .content {
    width: 100%;
    padding: 0 20px 30px;
    h6 {
      margin-top: 10px;
      margin-bottom: 10px;
      line-height: 20px;
    }
    p {
      color: #878f99;
      font-size: 14px;
      font-weight: 300;
      line-height: 20px;
      letter-spacing: 2.38px;
    }
  }
  .read-more {
    display: flex;
    justify-content: center;
    width: 100%;
    position: absolute;
    bottom: -24px;
  }
  @media screen and (max-width: 786px) {
    height: auto;
  }
}
</style>

<script>
export default {
  name: 'MediumCard',
  props: {
    title: { type: String, default: '' },
    date: { type: String, default: '' },
    author: { type: String, default: '' },
    content: { type: String, default: '' },
    thumb: { type: String, default: '' },
    link: { type: String, default: '' }
  },
  computed: {
    description: function() {
      if (!this.content) return ''
      return `${this.content.slice(0, 130)} (...)`
    },
    datetime: function() {
      if (!this.date) return ''
      return `${this.date.slice(8, 10)}/${this.date.slice(5, 7)}`
    }
  }
}
</script>
