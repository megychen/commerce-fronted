<template>
  <div>
    <new-template :flag="'posts'" :item="post" @submit="handleSubmit"></new-template>
  </div>
</template>

<script>
import axios from 'axios'
import NewTemplate from '../common/NewTem'
export default {
  name: 'PostEdit',
  components: {
    NewTemplate
  },
  data () {
    return {
      post: {}
    }
  },
  methods: {
    getPostInfo () {
      axios.get('/api/posts/' + this.$route.params.id)
        .then(this.handleDataSucc)
    },
    handleDataSucc (res) {
      res = res.data
      if (res.success) {
        this.post = res.post
      }
    },
    handleSubmit (data) {
      axios.patch('/api/posts/' + this.post._id, data).then(this.handleSubmitSucc)
    },
    handleSubmitSucc (res) {
      res = res.data
      if (res.success) {
        this.$router.push('/admin/posts')
      }
    }
  },
  mounted () {
    this.getPostInfo()
  }
}
</script>

<style lang="stylus" scoped>

</style>
