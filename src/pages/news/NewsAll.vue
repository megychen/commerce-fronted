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
import PostTem from '../common/PostTem'
import {getNewsList} from 'api/news'

export default {
  name: 'NewsAll',
  components: {
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
.content
  width: 1024px
  margin: 0 auto
  padding: 20px 0
  display: flex
</style>
