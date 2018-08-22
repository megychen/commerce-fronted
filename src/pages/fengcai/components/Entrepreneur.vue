<template>
  <div class="content">
    <ul class="postList">
      <li v-for="item of postList" :key="item.id">
        <a class="cover" v-if="item.postLink" :href="item.postLink">
          <div class="pic-wraper">
            <img class="pic" :src="item.avatar">
          </div>
        </a>
        <a class="cover" v-else :href="'/#/entrepreneurs/' + item._id">
          <div class="pic-wraper">
            <img class="pic" :src="item.avatar">
          </div>
        </a>
        <div class="text">
          <a class="title" v-if="item.postLink" :href="item.postLink">{{item.name}}</a>
          <a class="title" v-else :href="'/#/entrepreneurs/' + item._id">{{item.name}}</a>
          <a class="sub-title" v-if="item.postLink" :href="item.postLink">{{item.company}} ({{item.title}})</a>
          <a class="sub-title" v-else :href="'/#/entrepreneurs/' + item._id">{{item.company}} ({{item.title}})</a>
          <p>
            <a v-if="item.postLink" :href="item.postLink">{{item.description.substr(0, 70) }}... </a>
            <a v-else :href="'/#/entrepreneurs/' + item._id">{{item.description.substr(0, 70)}}... </a>
          </p>
          <div class="more">
            <div class="button">
              <a v-if="item.postLink" class="more-text" :href="item.postLink">更多</a>
              <a v-else class="more-text" :href="'/#/entrepreneurs/' + item._id">更多</a>
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
      postList: [],
      total: 0
    }
  },
  methods: {
    onPageChange (page) {
      console.log(page)
      this.currentPage = page
      axios.get('api/entrepreneurs', {
        params: {
          pageNo: this.currentPage,
          pageSize: this.perPage
        }
      }).then(this.handlePostsDataSucc)
    },
    getPostsData () {
      axios.get('api/entrepreneurs', {
        params: {
          pageNo: this.currentPage,
          pageSize: this.perPage
        }
      }).then(this.handlePostsDataSucc)
    },
    handlePostsDataSucc (res) {
      res = res.data
      if (res.success) {
        this.postList = res.entrepreneurList
        this.total = res.total
      }
    }
  },
  computed: {
    totalPages () {
      return Math.ceil(this.total / 10)
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
          line-height: 30px
          height: 30px
          color: #333
          letter-spacing : 1px
          margin-bottom: 8px
          ellipsis()
          &:hover
            color: $bgColor
        .sub-title
          display: block
          font-family: $fontFamily
          font-size: 15px
          font-weight: bold
          line-height: 20px
          height: 20px
          color: #444
          letter-spacing : 1px
          margin-bottom: 8px
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
