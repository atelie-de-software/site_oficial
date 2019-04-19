<template>
  <div class="share-section" id="share">
    <div class="container">
      <div class="row">
        <div class="col-md-4 title">
          <h2 tabindex="0" class="share">
            share
            <span>!</span>
          </h2>
          <p tabindex="0">compartilhando os desafios diários do ateliê de software</p>
        </div>
        <div class="col-md-4">
          <MediumCard
            :title="firstPost.title"
            :date="firstPost.pubDate"
            :author="firstPost.author"
            :content="firstPost.description | removeHtml"
            :thumb="firstPost.thumbnail"
            :link="firstPost.link"
          />
        </div>
        <div class="col-md-4 posts">
          <MediumPost
            v-for="(post, index) in latestPosts"
            :key="index"
            :date="post.pubDate"
            :author="post.author"
            :title="post.title"
            :link="post.link"
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
  @media screen and (max-width: 768px) {
    display: none;
  }
}
</style>

<script>
import MediumCard from './MediumCard.vue'
import MediumPost from './MediumPost.vue'
import axios from 'axios'

export default {
  name: 'Share',
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
    }
  },
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
  methods: {
    async loadPosts() {
      const posts = await axios.get(
        'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fshare.atelie.software%2Ffeed'
      )
      this.posts = posts.data
    }
  },
  mounted: function() {
    this.$nextTick(function() {
      this.loadPosts()
    })
  }
}
</script>
