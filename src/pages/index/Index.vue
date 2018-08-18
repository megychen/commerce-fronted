<template>
  <div class="main">
    <home-banner></home-banner>
    <news></news>
    <home-friends :linkList="linkList"></home-friends>
  </div>
</template>

<script>
import HomeBanner from './components/Banner'
import HomeFriends from './components/Friends'
import News from '../news/News'
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    HomeBanner,
    News,
    HomeFriends
  },
  data () {
    return {
      linkList: []
    }
  },
  methods: {
    getHomeInfo () {
      axios.get('/static/mock/index.json')
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        this.linkList = res.data.linkList
      }
    }
  },
  mounted () {
    this.getHomeInfo()
  }
}
</script>

<style lang="stylus" scoped>
.main
  background: url(../../assets/styles/images/bg.gif)repeat
</style>
