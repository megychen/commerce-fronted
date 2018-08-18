<template>
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
</template>

<script>
import Img7 from '../../assets/styles/images/07.jpg'
import Img8 from '../../assets/styles/images/08.jpg'

export default {
  name: 'HomeSwiper',
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
  .wraper >>> .swiper-pagination-bullet-active
    background: #ffffff
  .swip-img
    width: 100%
</style>
