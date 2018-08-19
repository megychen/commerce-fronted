<template>
  <div class="content-wrapper">
    <div class="detail-title">{{post.title}}</div>
    <div class="subtitle">
      <span class="flag">日期: {{post.timestamp}}</span>
      <span class="flag">作者: {{post.author}}</span>
    </div>
    <div class="content" v-html="compiledMarkdown"></div>
  </div>
</template>

<script>
import axios from 'axios'
import marked from 'marked'
export default {
  name: 'PostDetail',
  components: {
    marked
  },
  data () {
    return {
      post: ''
    }
  },
  computed: {
    compiledMarkdown: function () {
      return marked(this.post.content || '', { sanitize: true })
    }
  },
  methods: {
    getPostInfo () {
      axios.get('/api/posts/' + this.$route.params.id)
        .then(this.handleDataSucc)
    },
    handleDataSucc (res) {
      res = res.data
      if (res.success) {
        this.post = res.post
      }
    }
  },
  mounted () {
    this.getPostInfo()
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  .content-wrapper
    width: 1024px
    margin: 20px auto
    padding: 20px
    background: #fff
    color: #666
    .detail-title
      line-height: 60px
      text-align: center
      font-size: 20px
      letter-spacing: 2px
    .subtitle
      text-align: center
      .flag
        padding-right: 40px
        font-weight: bold
    .content
      padding: 30px 100px
      line-height: 30px
      text-align: justify;
</style>
