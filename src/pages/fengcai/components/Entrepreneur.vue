<template>
  <div class="content">
    <head><base target="_blank" /></head>
    <post-tem
      :items="entrepreneurList"
      :total="total"
      :type="'entrepreneurs'"
      @pageChange="handlePageChanged"
    >
    </post-tem>
  </div>
</template>

<script>
import PostTem from '../../common/PostTem'
import {getEntrepreneursList} from 'api/entrepreneurs'
export default {
  name: 'Entrepreneurs',
  components: {
    PostTem
  },
  data () {
    return {
      currentPage: 1,
      perPage: 10,
      entrepreneurList: [],
      total: 0
    }
  },
  created () {
    this._getEntrepreneursList()
  },
  methods: {
    handlePageChanged (page) {
      this.currentPage = page
      this._getEntrepreneursList()
    },
    _getEntrepreneursList () {
      getEntrepreneursList(this.perPage, this.currentPage).then((res) => {
        res = res.data
        if (res.success) {
          this.entrepreneurList = res.entrepreneurList
          this.total = res.total
        }
      })
    }
  },
  computed: {
    totalPages () {
      return Math.ceil(this.total / 10)
    }
  }
}
</script>

<style lang="stylus" scoped>
.content
  width: 100%
  display: flex
</style>
