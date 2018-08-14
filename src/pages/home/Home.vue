<template>
  <div>
    <home-header></home-header>
    <home-banner></home-banner>
    <home-friends :linkList="linkList"></home-friends>
    <home-footer></home-footer>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeBanner from './components/Banner'
import HomeFriends from './components/Friends'
import HomeFooter from './components/Footer'
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeBanner,
    HomeFriends,
    HomeFooter
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

<style>

</style>
