<template>
  <div class="news">
    <div class="main">
      <h2 class="sh_tit">
        <span>商会新闻</span>
        <router-link class="detail" to="/news">更多</router-link>
      </h2>
      <div class="content">
        <div class="wraper">
          <div class="swiper">
            <swiper :options="swiperOption" v-if="showSwiper" ref="swiperOption">
                <swiper-slide v-for="(item, index) of news" :key="index">
                  <a :href="link(item)">
                    <img class="swip-img" v-if="item.postImg" :src="item.postImg">
                    <img class="swip-img" v-else src="~styles/images/defaultImg.jpg">
                  </a>
                </swiper-slide>
                <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
          </div>
        </div>

        <div class="posts-wraper">
          <ul class="posts">
            <li class="posts-item" v-for="item of news" :key="item._id">
              <a class="posts-title" :href="link(item)">{{item.title}}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HomeSwiper',
  props: {
    news: {
      type: Array
    }
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 2000,
        clickable: true
      }
    }
  },
  computed: {
    showSwiper () {
      return this.news.length
    }
  },
  methods: {
    link (item) {
      return item.postLink ? item.postLink : `/#/posts/${item._id}`
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
@import '~styles/variables.styl'
.wraper >>> .swiper-pagination-bullet-active
  background: #ffffff
.wraper >>> .swiper-container
  height: 0
  padding-bottom: 66.67%
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
    .wraper
      width: 49%
      .swiper
        overflow: hidden
        width: 100%
        height: 0
        padding-bottom: 66.67%
        background: #eeeeee
        .swip-img
          width: 100%
    .posts-wraper
      width: 49%
      .posts
        list-style-type: square
        list-style-position: inside
        color: $bgColor
        letter-spacing: 1px
        .posts-item
            padding: 10px
            border-bottom: 1px dotted #ccc
            line-height: 16px
            ellipsis()
          .posts-title
              color: #666
          .posts-title:hover
            color: $bgColor
            .button
                background: $bgColor
                padding: 2px 8px
                color: #fff
                cursor: pointer
</style>
