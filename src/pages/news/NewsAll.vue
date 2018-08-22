<template>
  <div class="content">
    <head><base target="_blank" /></head>
    <ul class="postList">
      <li v-for="item of postList" :key="item.id">
        <a class="cover" v-if="item.postLink" :href="item.postLink">
          <img class="pic" :src="item.postImg">
        </a>
        <a class="cover" v-else :href="'/#/posts/' + item._id">
          <img class="pic" :src="item.postImg">
        </a>
        <div class="text">
          <a v-if="item.postLink" class="title" :href="item.postLink">{{item.title}}</a>
          <a v-else class="title" :href="'/#/posts/' + item._id">{{item.title}}</a>
          <p>
            <a v-if="item.postLink" :href="item.postLink">{{item.content.substr(0, 90)}}... </a>
            <a v-else :href="'/#/posts/' + item._id">{{item.content.substr(0, 90)}}... </a>
          </p>
          <div class="more">
            <span>{{item.timestamp}}</span>
            <div class="button">
              <a v-if="item.postLink" class="more-text" :href="item.postLink">更多</a>
              <a v-else class="more-text" :href="'/#/posts/' + item._id">更多</a>
            </div>
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
import CommonPagination from '../common/Pagination'
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
      const search = this.$route.query.search
      axios.get('/api/posts', {
        params: {
          pageNo: 1,
          pageSize: 8,
          search: search
        }
      }).then(this.handlePostsDataSucc)
    },
    handlePostsDataSucc (res) {
      res = res.data
      if (res.success) {
        this.postList = res.postList
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
