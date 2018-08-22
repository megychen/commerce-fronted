<template>
  <div>
    <div class="new">新增企业家</div>
    <div>
      <entre-template @submit="handleSubmit"></entre-template>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import EntreTemplate from '../common/EntreTem'
export default {
  name: 'EntrepreneurNew',
  components: {
    EntreTemplate
  },
  methods: {
    handleSubmit (data) {
      console.log(data)
      axios.post('/api/entrepreneurs', data).then(this.handleDataSucc)
    },
    handleDataSucc (res) {
      res = res.data
      if (res.success) {
        this.$router.push('/admin/entrepreneurs')
      }
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
