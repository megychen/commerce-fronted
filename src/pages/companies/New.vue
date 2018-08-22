<template>
  <div>
    <div class="new">新增企业</div>
    <div>
      <new-template @submit="handleSubmit" @addImg="handleUploadImg"></new-template>
    </div>
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
        this.$router.push('/admin/companies')
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
.new
  font-size: 24px
  text-align: center
  margin: 10px 0 30px
  letter-spacing: 1px
  font-weight: 400
</style>
