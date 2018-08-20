<template>
  <div>
    <entre-template @submit="handleSubmit"></entre-template>
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

</style>
