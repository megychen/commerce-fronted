<template>
  <div class="content">
    <head><base target="_blank" /></head>
    <post-tem
      :items="entrepreneurs"
      :total="entrepreneursTotal"
      :type="'entrepreneurs'"
      @pageChange="handlePageChanged"
    >
    </post-tem>
  </div>
</template>

<script>
import PostTem from 'common/PostTem'
import {getEntrepreneursList} from 'api/entrepreneurs'
import {mapGetters, mapMutations} from 'vuex'

export default {
  name: 'Entrepreneurs',
  components: {
    PostTem
  },
  data () {
    return {
      currentPage: 1,
      perPage: 10
    }
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
          this.setEntrepreneurs(res.entrepreneurList)
          this.setEntrepreneursTotal(res.total)
        }
      })
    },
    ...mapMutations({
      setEntrepreneurs: 'SET_ENTREPRENEURS',
      setEntrepreneursTotal: 'SET_ENTREPRENEURS_TOTAL'
    })
  },
  computed: {
    totalPages () {
      return Math.ceil(this.entrepreneursTotal / 10)
    },
    ...mapGetters([
      'entrepreneurs',
      'entrepreneursTotal'
    ])
  },
  beforeRouteLeave (to, from, next) {
    this.currentPage = 1
    this._getEntrepreneursList()
    next()
  }
}
</script>

<style lang="stylus" scoped>
.content
  width: 100%
  display: flex
</style>
