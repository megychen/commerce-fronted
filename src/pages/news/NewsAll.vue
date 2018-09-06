<template>
  <div class="content">
    <head><base target="_blank" /></head>
    <post-tem
      :items="postList"
      :total="total"
      :type="'posts'"
      @pageChange="handlePageChanged"
    >
    </post-tem>
  </div>
</template>

<script>
import CommonPagination from '../common/Pagination'
import PostTem from '../common/PostTem'
import {getNewsList} from 'api/news'

export default {
  name: 'NewsAll',
  components: {
    CommonPagination,
    PostTem
  },
  data () {
    return {
      currentPage: 1,
      perPage: 10,
      postList: [],
      total: 0,
      search: ''
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
    _getNewsList () {
      this.search = this.$route.query.search
      getNewsList(this.perPage, this.currentPage, this.search).then((res) => {
        res = res.data
        if (res.success) {
          this.postList = res.postList
          this.total = res.total
        }
      })
    }
  },
  computed: {
    totalPages () {
      return Math.ceil(this.total / 10)
    }
  },
  watch: {
    '$route' () {
      this._getNewsList()
    }
  }
}
</script>

<style lang="stylus" scoped>
 @import '~styles/variables.styl'
 @import '~styles/mixins.styl'
.content
  width: 1024px
  margin: 0 auto
  padding: 20px 0
  display: flex
  .postList
    background: #fff
    padding: 0 18px
    li
      display: flex
      justify-content: space-between
      padding: 14px 0
      border-bottom: 1px solid #eee
      .cover
        display: block
        width: 26%
        .pic-wraper
          overflow: hidden
          width: 100%
          height: 0
          padding-bottom: 66.67%
          background: #eeeeee
          .pic
            width: 100%
      .text
        width: 70%
        .title
          display: block
          font-family: $fontFamily
          font-size: 18px
          font-weight: bold
          line-height: 40px
          height: 40px
          color: #444
          letter-spacing : 1px
          margin-bottom: 10px
          ellipsis()
          &:hover
            color: $bgColor
        p a
          font-family: $fontFamily
          font-size: 14px
          line-height: 28px
          color: #666
          &:hover
            color: $bgColor
        .more
          overflow: hidden
          margin-top: 14px
          span
           float: left
           font-size: 14px
           font-family: $fontFamily
           color: #666
          .button
            float: right
            text-align: center
            height: 28px
            line-height: 26px
            .more-text
              color: #888
              font-size: 14px
              letter-spacing: 1px
              font-family: $fontFamily
              display: inline-block
              border: 1px solid #888
              width: 70px
              border-radius: 2px
              &:hover
               border: 1px solid $bgColor
               color: $bgColor
    ul .content-pagination
      margin: 20px 0
      padding: 0 30px
</style>
