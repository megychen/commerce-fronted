<template>
  <ul>
    <li class="content" v-for="(item, index) of postList" :key="item._id">
      <router-link to="#"><span class="content-title">{{item.title}}  {{item.author}}</span></router-link>
      <router-link :to="'/admin/posts-edit/' + item._id"><button class="button">编辑</button></router-link>
      <button class="button" @click="handleDelBtn(item._id, index)">删除</button>
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
      postList: [],
      currentPage: 1,
      perPage: 10
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
  methods: {
    getPostInfo () {
      axios.get('/api/posts')
        .then(this.handleDataSucc)
    },
    handleDataSucc (res) {
      res = res.data
      if (res.success) {
        this.postList = res.postList
      }
    },
    onPageChange (page) {
      console.log(page)
      this.currentPage = page
    },
    handleDelBtn (id, index) {
      console.log(index)
      axios.delete('/api/posts/' + id)
        .then(this.handleDelSucc)
    },
    handleDelSucc (res) {
      res = res.data
      if (res.success) {
        this.getPostInfo()
      }
    }
  },
  mounted () {
    this.getPostInfo()
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  .content
    overflow: hidden
    text-overflow: ellipsis
    white-space: nowrap
    padding: 10px 30px
    border-bottom: 1px dotted #ccc
    .content-title
      color: #666
      &:hover
        color: $bgColor
    .button
      background: $bgColor
      padding: 2px 8px
      color: #fff
      cursor: pointer
  .content-pagination
    margin: 20px 0
    padding: 0 30px
</style>
