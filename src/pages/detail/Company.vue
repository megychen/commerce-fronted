<template>
  <div class="content-wrapper">
    <div class="detail-title">{{company.title}}</div>
    <div class="subtitle">
      <span class="flag">日期: {{company.timestamp}}</span>
      <span class="flag">作者: {{company.author}}</span>
    </div>
    <div class="content" v-html="compiledMarkdown"></div>
  </div>
</template>

<script>
import {getCompanyInfo} from 'api/companies'
import marked from 'marked'
export default {
  name: 'CompanyDetail',
  components: {
    marked
  },
  data () {
    return {
      company: ''
    }
  },
  computed: {
    compiledMarkdown: function () {
      return marked(this.company.content || '', { sanitize: true })
    }
  },
  methods: {
    _getCompanyInfo () {
      getCompanyInfo(this.$route.params.id).then((res) => {
        res = res.data
        if (res.success) {
          this.company = res.company
        }
      })
    }
  },
  created () {
    this._getCompanyInfo()
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
  .content-wrapper >>> img
    display: block
    width: 500px
    margin: 10px auto
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
      font-size: 16px
      .flag
        padding-right: 40px
        font-weight: bold
    .content
      padding: 30px 100px
      line-height: 30px
      text-align: justify
</style>
