<template>
  <div class="content">
    <head><base target="_blank" /></head>
    <post-tem
      :items="companyList"
      :total="total"
      :type="'companies'"
      @pageChange="handlePageChanged"
    >
    </post-tem>
  </div>
</template>

<script>
import PostTem from 'common/PostTem'
import {getCompaniesList} from 'api/companies'
export default {
  name: 'Comapnies',
  components: {
    PostTem
  },
  data () {
    return {
      currentPage: 1,
      perPage: 10,
      companyList: [],
      total: 0
    }
  },
  created () {
    this._getCompaniesList()
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
          this.companyList = res.companyList
          this.total = res.total
        }
      })
    }
  },
  computed: {
    totalPages () {
      return Math.ceil(this.total / 10)
    }
  }
}
</script>

<style lang="stylus" scoped>
.content
  width: 100%
  display: flex
</style>
