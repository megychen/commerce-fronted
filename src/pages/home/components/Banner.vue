<!-- The ref attr used to find the swiper instance -->
<template>
  <div class="wraper">
    <swiper :options="swiperOption">
        <swiper-slide>
          <img class="swip-img" src="~styles/images/01.jpg">
        </swiper-slide>
        <swiper-slide>
          <img class="swip-img" src="~styles/images/02.jpg">
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wraper >>> .swiper-pagination-bullet-active
    background: #ffffff
  .wraper
    margin-top: 10px
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 16.12%
    background: #eeeeee
    .swip-img
        width: 100%

</style>
