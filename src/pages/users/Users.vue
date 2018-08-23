<template>
  <div class="content-wraper">
    <ul class="list">
      <li class="message" v-if="message"><span class="message">{{message}}!</span></li>
      <li class="content" v-for="item of userList" :key="item._id">
        <span class="content-title">{{item.name}}</span>
        <button class="button" @click="handleManageBtn(item._id)">{{word}}</button>
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
  </div>
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
    },
    word: function () {
      if (this.userList.isAdmin === false) {
        return '设为管理员'
      } else {
        return '取消管理员'
      }
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
      this.userList.isAdmin = !this.userList.isAdmin
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
.content-wraper
  display: flex
  justify-content: space-between
  font-family: $fontFamily
  .list
    margin-top: 20px
    width: 80%
    .message
      float: right
      color: $fontColor
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
        width: 58%
        ellipsis()
        color: #666
        font-size: 16px
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
