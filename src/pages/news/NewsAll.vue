<template>
  <div class="content">
    <head><base target="_blank" /></head>
    <post-tem
      :items="news"
      :total="newsTotal"
      :type="'posts'"
      @pageChange="handlePageChanged"
    >
    </post-tem>
  </div>
</template>

<script>
import PostTem from 'common/PostTem'
import {getNewsList} from 'api/news'
import {mapGetters, mapMutations} from 'vuex'

export default {
  name: 'NewsAll',
  components: {
    PostTem
  },
  data () {
    return {
      currentPage: 1,
      perPage: 10,
      search: ''
    }
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
          this.setNews(res.postList)
          this.setNewsTotal(res.total)
        }
      })
    },
    ...mapMutations({
      setNews: 'SET_NEWS',
      setNewsTotal: 'SET_NEWS_TOTAL'
    })
  },
  computed: {
    totalPages () {
      return Math.ceil(this.newsTotal / 10)
    },
    ...mapGetters([
      'news',
      'newsTotal'
    ])
  },
  watch: {
    '$route' () {
      this._getNewsList()
    }
  },
  beforeRouteLeave (to, from, next) {
    this.currentPage = 1
    this._getNewsList()
    next()
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
