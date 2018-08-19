<template>
  <ul>
    <li class="content" v-for="item of companyList" :key="item._id">
      <router-link to="#"><span class="content-title">{{item.title}}  {{item.author}}</span></router-link>
      <router-link :to="'/admin/companies-edit/' + item._id"><button class="button">编辑</button></router-link>
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
</template>

<script>
import axios from 'axios'
import CommonPagination from '../common/Pagination'
export default {
  name: 'Companies',
  components: {
    CommonPagination
  },
  data () {
    return {
      companyList: [],
      currentPage: 1,
      perPage: 10
    }
  },
  computed: {
    total () {
      return this.companyList.length
    },
    totalPages () {
      return Math.ceil(this.companyList.length / 10)
    }
  },
  methods: {
    getCompanyInfo () {
      axios.get('/api/companies', {
        params: {
          pageNo: this.currentPage,
          pageSize: this.perPage
        }
      }).then(this.handleDataSucc)
    },
    handleDataSucc (res) {
      res = res.data
      if (res.success) {
        this.companyList = res.companyList
      }
    },
    onPageChange (page) {
      console.log(page)
      this.currentPage = page
    },
    handleDelBtn (id, index) {
      axios.delete('/api/companies/' + id)
        .then(this.handleDelSucc)
    },
    handleDelSucc (res, index) {
      res = res.data
      if (res.success) {
        this.getCompanyInfo()
      }
    }
  },
  mounted () {
    this.getCompanyInfo()
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
