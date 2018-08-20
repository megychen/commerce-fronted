<template>
  <div>
    <new-template @submit="handleSubmit"></new-template>
  </div>
</template>

<script>
import axios from 'axios'
import NewTemplate from '../common/NewTem'
export default {
  name: 'PostNew',
  components: {
    NewTemplate
  },
  methods: {
    handleSubmit (data) {
      axios.post('/api/posts', data).then(this.handleDataSucc)
    },
    handleDataSucc (res) {
      res = res.data
      if (res.success) {
        this.$router.push('/admin/posts')
      }
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
