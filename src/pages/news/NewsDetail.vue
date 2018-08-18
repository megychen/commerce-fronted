<template>
  <div class="content">
    <div class="news">
      <news-img class="swiper"></news-img>
    </div>
     <posts class="articles"></posts>
  </div>
</template>

<script>
import NewsImg from '../common/NewsImg'
import Posts from '../common/Posts'
export default {
  name: 'NewsDetail',
  components: {
    NewsImg,
    Posts
  }
}
</script>

<style lang="stylus" scoped>
.content
  width: 1200px
  margin: 0 auto
  .news
    padding: 18px
</style>
