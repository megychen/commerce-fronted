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
      axios.get('/api/posts', {
        params: {
          pageNo: 1,
          pageSize: 8
        }
      }).then(this.handlePostsDataSucc)

      axios.get('/api/entrepreneurs', {
        params: {
          pageNo: 1,
          pageSize: 6
        }
      }).then(this.handleEntrepreneurDataSucc)

      axios.get('/api/companies', {
        params: {
          pageNo: 1,
          pageSize: 4
        }
      }).then(this.handleCompaniesDataSucc)
    },
    handlePostsDataSucc (res) {
      res = res.data
      if (res.success) {
        this.postList = res.postList
      }
    },
    handleEntrepreneurDataSucc (res) {
      res = res.data
      if (res.success) {
        this.entrepreneurList = res.entrepreneurList
      }
    },
    handleCompaniesDataSucc (res) {
      res = res.data
      if (res.success) {
        this.companyList = res.companyList
      }
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
