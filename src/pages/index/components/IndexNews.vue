<template>
  <div class="news">
    <div class="main">
      <h2 class="sh_tit">
        <span>商会新闻</span>
        <router-link class="detail" to="/intro">更多</router-link>
      </h2>
      <div class="content">
        <div class="wraper">
          <div class="swiper">
            <swiper :options="swiperOption">
                <swiper-slide v-for="item of swiperList" :key="item.id">
                  <img class="swip-img" :src="item.imgUrl">
                </swiper-slide>
                <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
          </div>
        </div>
        <div class="articles">
          <posts></posts>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Img7 from '../../../assets/styles/images/07.jpg'
import Img8 from '../../../assets/styles/images/08.jpg'
import Posts from '../../common/Posts'

export default {
  name: 'HomeSwiper',
  components: {
    Posts
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [{
        id: '07',
        imgUrl: Img7
      }, {
        id: '08',
        imgUrl: Img8
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl'
.wraper >>> .swiper-pagination-bullet-active
  background: #ffffff
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
        padding-bottom: 66%
        background: #eeeeee
        .swip-img
          width: 100%
    .articles
      width: 49%
</style>
