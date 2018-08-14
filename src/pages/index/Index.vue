<template>
  <div>
    <home-banner></home-banner>
    <home-friends :linkList="linkList"></home-friends>
  </div>
</template>

<script>
import HomeBanner from './components/Banner'
import HomeFriends from './components/Friends'
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    HomeBanner,
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

<style>

</style>
