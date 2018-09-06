<template>
  <div class="content-wrapper">
    <div class="detail-title">{{entrepreneur.name}}</div>
    <div class="subtitle">
      {{entrepreneur.company}} ({{entrepreneur.title}})
    </div>
    <div class="avatar"><img class="image" :src="entrepreneur.avatar"></div>
    <div class="content" v-html="compiledMarkdown"></div>
  </div>
</template>

<script>
import {getEntrepreneurInfo} from 'api/entrepreneurs'
import marked from 'marked'
export default {
  name: 'EntrepreneurDetail',
  components: {
    marked
  },
  data () {
    return {
      entrepreneur: ''
    }
  },
  computed: {
    compiledMarkdown: function () {
      return marked(this.entrepreneur.description || '', { sanitize: true })
    }
  },
  methods: {
    _getEntrepreneurInfo () {
      getEntrepreneurInfo(this.$route.params.id).then((res) => {
        res = res.data
        if (res.success) {
          this.entrepreneur = res.entrepreneur
        }
      })
    }
  },
  created () {
    this._getEntrepreneurInfo()
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  .content-wrapper >>> p
    font-family: $fontFamily
    line-height: 26px;
    font-size: 16px;
    letter-spacing: 1px;
    margin: 10px 0;
    white-space: wrap
  .content-wrapper
    width: 1024px
    margin: 20px auto
    padding: 20px
    background: #fff
    color: #444
    font-family: $fontFamily
    .detail-title
      line-height: 60px
      text-align: center
      font-size: 20px
      letter-spacing: 2px
      width: 600px
      margin: 0 auto
      font-weight: bold
    .subtitle
      text-align: center
      font-size: 18px
      margin-bottom: 30px
    .avatar
      width: 300px
      margin: 0 auto
      .image
        width: 100%
    .content
      padding: 30px 100px
      line-height: 30px
      text-align: justify
</style>
