<template>
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
  .video >>> .vjs-big-play-button
    background-color: rgba(0,0,0,0.45)
  .video
    width: 1024px
    margin: 20px auto
    .vjs-big-play-button:hover
      color: #000
</style>
