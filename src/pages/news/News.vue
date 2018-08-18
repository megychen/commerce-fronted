<template>
  <div class="news">
    <div class="main">
      <h2 class="sh_tit">
        <span>商会新闻</span>
        <router-link class="detail" to="/intro">更多</router-link>
      </h2>
      <div class="content">
        <news-img class="swiper"></news-img>
        <div class="articles">
          <posts></posts>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NewsImg from '../common/NewsImg'
import Posts from '../common/Posts'
export default {
  name: 'News',
  components: {
    NewsImg,
    Posts
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl'
.news
  width: 1200px
  margin: 20px auto
  .main
    overflow: hidden
    margin-left: 0
    background: #fff
    .sh_tit
      overflow: hidden
      background: #F8F8F8
      border-bottom: 1px solid #eee
      height: 40px
      line-height: 40px
      padding: 0 15px
      span
        float: left
        font-size: 17px
        color: #333
        border-left: 3px solid #C94834
        height: 17px
        line-height: 17px
        margin-top: 10px
        padding-left: 10px
        font-family: $fontFamily
        letter-spacing: 1px
      .detail
        float: right
        font-size: 14px
        color: #C94834
        font-family: $fontFamily
    .content
      display: flex
      padding: 18px
      justify-content: space-between
      .swiper
        width: 49%
      .articles
        width: 49%

</style>
