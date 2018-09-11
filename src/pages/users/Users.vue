<template>
  <div class="content-wraper">
    <ul class="list">
      <li class="message" v-if="message"><span class="message">{{message}}!</span></li>
      <li class="content" v-for="item of userList" :key="item._id">
        <span class="content-title">{{item.name}}</span>
        <button class="button" :disabled="item.name === currentUser.name" @click="handleManageBtn(item._id, item.isAdmin)">{{word(item.isAdmin)}}</button>
        <router-link :to="'/admin/users-reset/' + item._id">
          <button class="button">重置密码</button>
        </router-link>
      </li>
      <li class="content-pagination">
        <common-pagination
          :currentPage="currentPage"
          :totalPages="totalPages"
          :perPage="perPage"
          :total="total"
          @pagechanged="onPageChange"
        >
        </common-pagination>
      </li>
    </ul>
  </div>
</template>

<script>
import CommonPagination from '../common/Pagination'
import {getUsersList, setUserAdmin} from 'api/users'

export default {
  name: 'Users',
  components: {
    CommonPagination
  },
  data () {
    return {
      userList: [],
      currentPage: 1,
      perPage: 20,
      total: 0,
      message: '',
      currentUser: {}
    }
  },
  computed: {
    totalPages () {
      return Math.ceil(this.total / 10)
    }
  },
  methods: {
    word: function (isAdmin) {
      if (isAdmin === false) {
        return '设为管理员'
      } else {
        return '取消管理员'
      }
    },
    onPageChange (page) {
      this.currentPage = page
      this._getUsersList()
    },
    handleManageBtn (id, isAdmin) {
      this._setUserAdmin(id, isAdmin)
    },
    _getUsersList () {
      getUsersList(this.perPage, this.currentPage).then((res) => {
        res = res.data
        if (res.success) {
          this.userList = res.userList
          this.total = res.total
        }
      })
    },
    _setUserAdmin (id, isAdmin) {
      setUserAdmin(id, isAdmin).then((res) => {
        res = res.data
        if (res.success) {
          this.message = res.message
          this._getUsersList()
        }
      })
    }
  },
  mounted () {
    this._getUsersList()
    this.currentUser = JSON.parse(this.$cookie.get('commerce'))
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
