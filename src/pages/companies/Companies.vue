<template>
  <div class="content-wraper">
    <backend-tem
      :items="companyList"
      :total="total"
      :perPage="perPage"
      :type="'companies'"
      @pageChange="handlePageChanged"
      @deleteItem="handleItemDelete"
    >
    </backend-tem>
    <div class="new">
      <router-link to="/admin/companies-new"><div class="new-tit">新增企业</div></router-link>
    </div>
  </div>
</template>

<script>
import {getCompaniesList, deleteCompany} from 'api/companies'
import BackendTem from '../common/BackendTem'

export default {
  name: 'Companies',
  components: {
    BackendTem
  },
  data () {
    return {
      companyList: [],
      currentPage: 1,
      perPage: 20,
      total: 0
    }
  },
  created () {
    this._getCompaniesList()
  },
  methods: {
    handlePageChanged (page) {
      this.currentPage = page
      this._getCompaniesList()
    },
    handleItemDelete (id) {
      this._deleteCompany(id)
    },
    _getCompaniesList () {
      getCompaniesList(this.perPage, this.currentPage).then((res) => {
        res = res.data
        if (res.success) {
          this.companyList = res.companyList
          this.total = res.total
        }
      })
    },
    _deleteCompany (id) {
      deleteCompany(id).then((res) => {
        res = res.data
        if (res.success) {
          this._getCompaniesList()
        }
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  @import '~styles/mixins.styl'
  .content-wraper
    display: flex
    justify-content: space-between
    font-family: $fontFamily
    .new
      width: 12%
      height: 32px
      line-height: 32px
      text-align: center
      border: 1px solid $bgColor
      border-radius: 2px
      &:hover
        background: 1px$bgColor
      .new-tit
        color: $bgColor
        font-size: 16px
        letter-spacing: 1px
        font-family: $fontFamily
        &:hover
          color: #FFF
</style>
