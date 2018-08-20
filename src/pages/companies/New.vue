<template>
  <div>
    <new-template @submit="handleSubmit" @addImg="handleUploadImg"></new-template>
  </div>
</template>

<script>
import axios from 'axios'
import NewTemplate from '../common/NewTem'
export default {
  name: 'CompanyNew',
  data () {
    return {
      pos: 0
    }
  },
  components: {
    NewTemplate
  },
  methods: {
    handleSubmit (data) {
      axios.post('/api/companies', data).then(this.handleDataSucc)
    },
    handleDataSucc (res) {
      res = res.data
      if (res.success) {
        this.$router.push('/')
      }
    },
    handleUploadImg (data, pos) {
      this.pos = pos
      axios.post('/api/image', data)
        .then(this.handleUploadImgSucc)
    },
    handleUploadImgSucc (res) {
      res = res.data
      if (res.success) {
        this.filePath = res.filePath
      }
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
