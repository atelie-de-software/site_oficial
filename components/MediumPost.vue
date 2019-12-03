<template>
  <div>
    <span
      ><time tabindex="0" :datetime="date">{{ datetime }}</time> -
      <strong>{{ author }}</strong></span
    >
    <h6 tabindex="0">
      {{ title }}
    </h6>
    <div class="read-more">
      <a :href="link" target="_blank">{{ $t('share.readMore') }}</a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
span {
  color: #62686f;
  font-size: 16px;
  line-height: 27px;
  font-weight: 300;
  letter-spacing: 2.72px;
  margin-bottom: 17px;
  strong {
    font-weight: 700;
    letter-spacing: 0.8px;
  }
}
h6 {
  color: #000000;
  margin-bottom: 14px;
}
.read-more {
  width: 100%;
  text-align: right;
}
a {
  font-size: 16px;
  font-weight: 700;
  line-height: 27px;
  letter-spacing: 2.72px;
}
</style>

<script>
export default {
  name: 'MediumPosts',
  props: {
    date: { type: String, default: '' },
    author: { type: String, default: '' },
    title: { type: String, default: '' },
    link: { type: String, default: '' }
  },
  computed: {
    datetime: function() {
      if (!this.date) return ''
      return `${this.date.slice(8, 10)}/${this.date.slice(5, 7)}`
    }
  }
}
</script>
