<template>
  <div class="body">
    <home-header></home-header>
    <div class="content-wrapper">
      <router-view></router-view>
    </div>
    <home-footer></home-footer>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeFooter from './components/Footer'
import {getNewsList} from 'api/news'
import {getCompaniesList} from 'api/companies'
import {getEntrepreneursList} from 'api/entrepreneurs'
import {mapMutations} from 'vuex'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeFooter
  },
  methods: {
    query () {
      getNewsList(10, 1).then((res) => {
        res = res.data
        if (res.success) {
          this.setNews(res.postList)
          this.setNewsTotal(res.total)
        }
      })
      getCompaniesList(4, 1).then((res) => {
        res = res.data
        if (res.success) {
          this.setCompanies(res.companyList)
          this.setCompaniesTotal(res.total)
        }
      })
      getEntrepreneursList(6, 1).then((res) => {
        res = res.data
        if (res.success) {
          this.setEntrepreneurs(res.entrepreneurList)
          this.setEntrepreneursTotal(res.total)
        }
      })
    },
    ...mapMutations({
      setNews: 'SET_NEWS',
      setCompanies: 'SET_COMPANIES',
      setEntrepreneurs: 'SET_ENTREPRENEURS',
      setNewsTotal: 'SET_NEWS_TOTAL',
      setCompaniesTotal: 'SET_COMPANIES_TOTAL',
      setEntrepreneursTotal: 'SET_ENTREPRENEURS_TOTAL'
    })
  },
  created () {
    this.query()
  }
}
</script>

<style lang="stylus" scoped>
.body
  background: url(../../assets/styles/images/bg.gif)repeat
</style>
