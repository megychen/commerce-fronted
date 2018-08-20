<template>
  <div class="content">
    <ul class="postList">
      <li v-for="item of postList" :key="item.id">
        <a class="cover" href="/">
          <div class="pic-wraper">
            <img class="pic" :src="item.avatar">
          </div>
        </a>
        <div class="text">
          <a class="title" href="/">{{item.name + "   " + "  " + item.company}}</a>
          <p>
            <a href="/">{{item.description.substr(0, 70) }}... </a>
          </p>
          <div class="more">
            <button><a class="more-text" href="/">更多</a></button>
          </div>
        </div>
      </li>
      <li class="content-pagination">
        <common-pagination
          :currentPage="currentPage"
          :totalPages="totalPages"
          :total="total"
          :perPage="10"
          @pagechanged="onPageChange"
        >
        </common-pagination>
      </li>
    </ul>
  </div>
</template>

<script>
import CommonPagination from '../../common/Pagination'
import axios from 'axios'
export default {
  name: 'NewsAll',
  components: {
    CommonPagination
  },
  data () {
    return {
      currentPage: 1,
      perPage: 10,
      postList: []
    }
  },
  methods: {
    onPageChange (page) {
      console.log(page)
      this.currentPage = page
    },
    getPostsData () {
      axios.get('api/entrepreneurs', {
        params: {
          pageNo: 1,
          pageSize: 8
        }
      }).then(this.handlePostsDataSucc)
    },
    handlePostsDataSucc (res) {
      res = res.data
      if (res.success) {
        this.postList = res.entrepreneurList
      }
    }
  },
  computed: {
    total () {
      return this.postList.length
    },
    totalPages () {
      return Math.ceil(this.postList.length / 10)
    }
  },
  mounted () {
    this.getPostsData()
  }
}
</script>

<style lang="stylus" scoped>
 @import '~styles/variables.styl'
 @import '~styles/mixins.styl'
.content
  width: 100%
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
        width: 20%
        .pic-wraper
          width: 100%
          height: 0
          padding-bottom: 100%
          overflow hidden
        .pic
          width: 100%
      .text
        width: 76%
        .title
          display: block
          font-family: $fontFamily
          font-size: 18px
          font-weight: bold
          line-height: 40px
          height: 40px
          color: #666
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
          button
            float: right
            .more-text
              color: #888
              font-size: 14px
              letter-spacing: 1px
              font-family: $fontFamily
              display: inline-block
              border: 1px solid #888
              width: 70px
              height: 26px
              line-height: 28px
              border-radius: 2px
              &:hover
               border: 1px solid $bgColor
               color: $bgColor
    ul .content-pagination
      margin: 20px 0
      padding: 0 30px
</style>
