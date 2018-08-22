<template>
  <ul>
    <li class="message" v-if="message"><span class="message">{{message}}!</span></li>
    <li class="content" v-for="item of userList" :key="item._id">
      <router-link :to="'/users/' + item._id"><span class="content-title">{{item.name}}</span></router-link>
      <button class="button" @click="handleManageBtn(item._id)">设为管理员</button>
      <router-link :to="'/admin/users-reset/' + item._id">
        <button class="button">重置密码</button>
      </router-link>
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
  name: 'Users',
  components: {
    CommonPagination
  },
  data () {
    return {
      userList: [],
      currentPage: 1,
      perPage: 10,
      total: 0,
      message: ''
    }
  },
  computed: {
    totalPages () {
      return Math.ceil(this.total / 10)
    }
  },
  methods: {
    getUserInfo () {
      axios.get('/api/users', {
        params: {
          pageNo: this.currentPage,
          pageSize: this.perPage
        }
      }).then(this.handleDataSucc)
    },
    handleDataSucc (res) {
      res = res.data
      if (res.success) {
        this.userList = res.userList
        this.total = res.total
      }
    },
    onPageChange (page) {
      this.currentPage = page
      axios.get('/api/users', {
        params: {
          pageNo: this.currentPage,
          pageSize: this.perPage
        }
      }).then(this.handleDataSucc)
    },
    handleManageBtn (id) {
      axios.patch('/api/users/' + id, {
        isAdmin: true
      }).then(this.handleManageSucc)
    },
    handleManageSucc (res) {
      res = res.data
      if (res.success) {
        this.message = res.message
      }
    }
  },
  mounted () {
    this.getUserInfo()
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  .message
    float: right
    color: $fontColor
  .content
    clear: both
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
