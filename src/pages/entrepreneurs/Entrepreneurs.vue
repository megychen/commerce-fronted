<template>
  <div class="content-wraper">
    <backend-tem
      :items="entrepreneurList"
      :total="total"
      :type="'entrepreneurs'"
      @pageChange="handlePageChanged"
      @deleteItem="handleItemDelete"
    >
    </backend-tem>
    <div class="new">
      <router-link to="/admin/entrepreneurs-new"><div class="new-tit">新增企业家</div></router-link>
    </div>
  </div>
</template>

<script>
import {getEntrepreneursList, deleteEntrepreneur} from 'api/entrepreneurs'
import BackendTem from '../common/BackendTem'
export default {
  name: 'Entrepreneurs',
  components: {
    BackendTem
  },
  data () {
    return {
      entrepreneurList: [],
      currentPage: 1,
      perPage: 10,
      total: 0
    }
  },
  created () {
    this._getEntrepreneursList()
  },
  methods: {
    handlePageChanged (page) {
      this.currentPage = page
      this._getEntrepreneursList()
    },
    handleItemDelete (id) {
      this._deleteEntrepreneur(id)
    },
    _getEntrepreneursList () {
      getEntrepreneursList(this.perPage, this.currentPage).then((res) => {
        res = res.data
        if (res.success) {
          this.entrepreneurList = res.entrepreneurList
          this.total = res.total
        }
      })
    },
    _deleteEntrepreneur (id) {
      deleteEntrepreneur(id).then((res) => {
        res = res.data
        if (res.success) {
          this._getEntrepreneursList()
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
