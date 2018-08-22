<template>
  <div class="content-wraper">
    <ul class="post">
      <li class="content" v-for="item of entrepreneurList" :key="item._id">
        <router-link :to="'/entrepreneurs/' + item._id"><span class="content-title">{{item.name}}  {{item.title}}</span></router-link>
        <router-link :to="'/admin/entrepreneurs-edit/' + item._id"><button class="button">编辑</button></router-link>
        <button class="button" @click="handleDelBtn(item._id)">删除</button>
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
    <div class="new">
      <router-link to="/admin/entrepreneurs-new"><div class="new-tit">新增企业家</div></router-link>
    </div>
    </div>
</template>

<script>
import axios from 'axios'
import CommonPagination from '../common/Pagination'
export default {
  name: 'Posts',
  components: {
    CommonPagination
  },
  data () {
    return {
      entrepreneurList: [],
      currentPage: 1,
      perPage: 10
    }
  },
  computed: {
    total () {
      return this.entrepreneurList.length
    },
    totalPages () {
      return Math.ceil(this.entrepreneurList.length / 10)
    }
  },
  methods: {
    getEntrepreneurInfo () {
      axios.get('/api/entrepreneurs', {
        params: {
          pageNo: this.currentPage,
          pageSize: this.perPage
        }
      }).then(this.handleDataSucc)
    },
    handleDataSucc (res) {
      res = res.data
      if (res.success) {
        this.entrepreneurList = res.entrepreneurList
      }
    },
    onPageChange (page) {
      console.log(page)
      this.currentPage = page
    },
    handleDelBtn (id, index) {
      axios.delete('/api/entrepreneurs/' + id)
        .then(this.handleDelSucc)
    },
    handleDelSucc (res, index) {
      res = res.data
      if (res.success) {
        this.getEntrepreneurInfo()
      }
    }
  },
  mounted () {
    this.getEntrepreneurInfo()
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
  .post
    width: 80%
    margin-top: 20px
    .content
      list-style-type: square
      list-style-position: inside
      padding: 6px 10px
      border-bottom: 1px dotted #ccc
      color: $bgColor
      letter-spacing: 1px
      justify-content: space-between
      line-height: 32px
      height: 32px
      .content-title
        display: inline-block
        vertical-align: middle
        width: 76%
        ellipsis()
        color: #666
        font-size: 16px
        &:hover
          color: $bgColor
      .button
        padding: 4px 8px
        color: #888
        border-radius: 2px
        border: 1px solid #888
        cursor: pointer
        margin-left: 5px
    .content-pagination
      margin: 20px 0
      padding: 0 30px
</style>
