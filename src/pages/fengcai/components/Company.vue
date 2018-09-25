<template>
  <div class="content">
    <head><base target="_blank" /></head>
    <post-tem
      :items="companies"
      :total="companiesTotal"
      :type="'companies'"
      @pageChange="handlePageChanged"
    >
    </post-tem>
  </div>
</template>

<script>
import PostTem from 'common/PostTem'
import {getCompaniesList} from 'api/companies'
import {mapGetters, mapMutations} from 'vuex'

export default {
  name: 'Comapnies',
  components: {
    PostTem
  },
  data () {
    return {
      currentPage: 1,
      perPage: 10
    }
  },
  methods: {
    handlePageChanged (page) {
      this.currentPage = page
      this._getNewsList()
    },
    _getCompaniesList () {
      getCompaniesList(this.perPage, this.currentPage).then((res) => {
        res = res.data
        if (res.success) {
          this.setCompanies(res.companyList)
          this.setCompaniesTotal(res.total)
        }
      })
    },
    ...mapMutations({
      setCompanies: 'SET_COMPANIES',
      setCompaniesTotal: 'SET_COMPANIES_TOTAL'
    })
  },
  computed: {
    totalPages () {
      return Math.ceil(this.companiesTotal / 10)
    },
    ...mapGetters([
      'companies',
      'companiesTotal'
    ])
  },
  beforeRouteLeave (to, from, next) {
    this.currentPage = 1
    this._getCompaniesList()
    next()
  }
}
</script>

<style lang="stylus" scoped>
.content
  width: 100%
  display: flex
</style>
