<template>
  <div class="main">
    <home-banner></home-banner>
    <index-news :news="postList"></index-news>
    <feng-cai :companies="companyList" :entrepreneurs="entrepreneurList"></feng-cai>
    <home-friends :linkList="linkList"></home-friends>
  </div>
</template>

<script>
import HomeBanner from './components/Banner'
import HomeFriends from './components/Friends'
import IndexNews from './components/IndexNews'
import FengCai from './components/Fengcai'
import axios from 'axios'
import {getNewsList} from 'api/news'
import {getCompaniesList} from 'api/companies'
import {getEntrepreneursList} from 'api/entrepreneurs'

export default {
  name: 'Home',
  components: {
    HomeBanner,
    IndexNews,
    FengCai,
    HomeFriends
  },
  data () {
    return {
      linkList: [],
      postList: [],
      entrepreneurList: [],
      companyList: []
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
    },
    query () {
      getNewsList(10, 1).then((res) => {
        res = res.data
        if (res.success) {
          this.postList = res.postList
        }
      })
      getCompaniesList(4, 1).then((res) => {
        res = res.data
        if (res.success) {
          this.companyList = res.companyList
        }
      })
      getEntrepreneursList(6, 1).then((res) => {
        res = res.data
        if (res.success) {
          this.entrepreneurList = res.entrepreneurList
        }
      })
    }
  },
  mounted () {
    this.getHomeInfo()
    this.query()
  }
}
</script>

<style lang="stylus" scoped>
.main
  background: url(../../assets/styles/images/bg.gif)repeat
</style>
