<template>
  <div>
    <intro-video></intro-video>
    <intro-text></intro-text>
  </div>
</template>

<script>
import IntroVideo from './components/Video'
import IntroText from './components/Text'

export default {
  name: 'Intro',
  components: {
    IntroVideo,
    IntroText
  }
}
</script>

<style lang="stylus" scoped>

</style>
