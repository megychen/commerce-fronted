<template>
  <div class="content-wraper">
    <backend-tem
      :items="postList"
      :total="total"
      :type="'posts'"
      @pageChange="handlePageChanged"
      @deleteItem="handleItemDelete"
    >
    </backend-tem>
    <div class="new">
      <router-link to="/admin/posts-new"><div class="new-tit">新增新闻</div></router-link>
    </div>
  </div>
</template>

<script>
import {getNewsList, deleteNew} from 'api/news'
import BackendTem from '../common/BackendTem'
export default {
  name: 'Posts',
  components: {
    BackendTem
  },
  data () {
    return {
      postList: [],
      currentPage: 1,
      perPage: 10,
      total: 0
    }
  },
  created () {
    this._getNewsList()
  },
  methods: {
    handlePageChanged (page) {
      this.currentPage = page
      this._getNewsList()
    },
    handleItemDelete (id) {
      this._deleteNew(id)
    },
    _getNewsList () {
      getNewsList(this.perPage, this.currentPage).then((res) => {
        res = res.data
        if (res.success) {
          this.postList = res.postList
          this.total = res.total
        }
      })
    },
    _deleteNew (id) {
      deleteNew(id).then((res) => {
        res = res.data
        if (res.success) {
          this._getNewsList()
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
