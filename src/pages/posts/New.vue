<template>
  <div>
    <div class="new">新增新闻</div>
    <div>
      <new-template @submit="handleSubmit"></new-template>
    </div>
  </div>

</template>

<script>
import NewTemplate from '../common/NewTem'
import {createNews} from 'api/news'
export default {
  name: 'PostNew',
  components: {
    NewTemplate
  },
  methods: {
    handleSubmit (data) {
      this._createNews(data)
    },
    _createNews (data) {
      createNews(data).then((res) => {
        res = res.data
        if (res.success) {
          this.$router.push('/admin/posts')
        }
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.new
  font-size: 24px
  text-align: center
  margin: 10px 0 30px
  letter-spacing: 1px
  font-weight: 400
</style>
