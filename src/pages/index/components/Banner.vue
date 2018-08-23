<!-- The ref attr used to find the swiper instance -->
<template>
  <!-- <div class="wraper">
    <swiper :options="swiperOption">
        <swiper-slide v-for="item of swiperList" :key="item.id">
          <img class="swip-img" :src="item.imgUrl">
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div> -->
  <div class="video">
    <video-player
      class="vjs-custom-skin"
      ref="videoPlayer"
      :options="playerOptions"
      :playsinline="true"
    >
    </video-player>
  </div>
</template>

<script>
// import Img1 from '../../../assets/styles/images/01.jpg'
// import Img2 from '../../../assets/styles/images/02.jpg'
// import Img3 from '../../../assets/styles/images/03.jpg'
// import Img4 from '../../../assets/styles/images/04.jpg'
// import Img5 from '../../../assets/styles/images/05.jpg'
// import Img6 from '../../../assets/styles/images/06.jpg'
// export default {
//   name: 'HomeSwiper',
//   data () {
//     return {
//       swiperOption: {
//         pagination: '.swiper-pagination',
//         loop: true,
//         autoplay: 5000,
//         clickable: true
//       },
//       swiperList: [{
//         id: '01',
//         imgUrl: Img6
//       }, {
//         id: '02',
//         imgUrl: Img2
//       }, {
//         id: '03',
//         imgUrl: Img3
//       }, {
//         id: '04',
//         imgUrl: Img4
//       }, {
//         id: '05',
//         imgUrl: Img5
//       }, {
//         id: '06',
//         imgUrl: Img1
//       }]
//     }
//   }
// }
export default {
  name: 'IntroVideo',
  data () {
    return {
      // videojs options
      playerOptions: {
        height: '360',
        autoplay: true,
        muted: true,
        fluid: true,
        language: 'en',
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        sources: [{
          type: 'video/mp4',
          src: '../../../static/mock/video.mov'
        }]
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  // .wraper >>> .swiper-pagination-bullet-active
  //   background: #ffffff
  // .wraper
  //   margin-top: 10px
  //   overflow: hidden
  //   width: 100%
  //   height: 0
  //   padding-bottom: 16.12%
  //   background: #eeeeee
  //   .swip-img
  //       width: 100%
  .video >>> .vjs-big-play-button
    background-color: rgba(0,0,0,0.45)
  .video
    width: 1200px
    margin: 20px auto
    .vjs-big-play-button:hover
      color: #000
</style>
