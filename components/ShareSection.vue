<template>
  <div v-if="postsLoaded" id="share" class="share-section">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-6 title">
          <h2
            tabindex="0"
            class="share"
            data-aos="fade-up"
            data-aos-once="true"
          >
            share
            <span>!</span>
          </h2>
          <p
            tabindex="0"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-once="true"
          >
            {{ $t('share.description') }}
          </p>
        </div>
        <div class="col-lg-4 col-md-6">
          <MediumCard
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-once="true"
            :title="firstPost.title"
            :date="firstPost.pubDate"
            :author="firstPost.author"
            :content="firstPost.description | removeHtml"
            :thumb="firstPost.thumbnail"
            :link="firstPost.link"
          />
        </div>
        <div class="col-lg-4 col-md-6 posts">
          <MediumPost
            v-for="(post, index) in latestPosts"
            :key="index"
            :date="post.pubDate"
            :author="post.author"
            :title="post.title"
            :link="post.link"
            data-aos="fade-up"
            :data-aos-delay="600 + index * 100"
            data-aos-once="true"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#share {
  margin-bottom: 50px;
}
.share-section {
  background-color: rgba($color: #e5ecf0, $alpha: 0.5);
  padding-top: 56px;
  padding: 78px;
  position: relative;
  z-index: 5;
  @media screen and (max-width: 768px) {
    padding: 30px 0 60px;
  }
}
.share {
  color: #000000;
  font-size: 72px;
  font-weight: 700;
  line-height: 76.05px;
  /* Text style for "share" */
  letter-spacing: 1.79px;
  display: flex;
  span {
    color: #00f993;
  }
}
.title {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.posts {
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  @media screen and (max-width: 991px) {
    display: none;
  }
}
</style>

<script>
import axios from 'axios'
import MediumCard from './MediumCard.vue'
import MediumPost from './MediumPost.vue'

export default {
  name: 'Share',
  filters: {
    removeHtml: function(value) {
      if (!value) return ''
      const regex = /(&nbsp;|<([^>]+)>)/gi
      const output = value.replace(regex, '')
      return `${output}`
    }
  },
  components: {
    MediumCard,
    MediumPost
  },
  data() {
    return {
      posts: []
    }
  },
  computed: {
    firstPost: function() {
      return this.posts.items ? this.posts.items[0] : []
    },
    latestPosts: function() {
      if (!this.posts.items) return []
      const posts = [
        this.posts.items[1],
        this.posts.items[2],
        this.posts.items[3]
      ]
      return posts
    },
    postsLoaded: function() {
      return this.posts.items
    }
  },
  mounted: function() {
    this.$nextTick(function() {
      this.loadPosts()
    })
  },
  methods: {
    async loadPosts() {
      const posts = await axios.get(
        'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fshare.atelie.software%2Ffeed'
      )
      this.posts = posts.data
    }
  }
}
</script>
