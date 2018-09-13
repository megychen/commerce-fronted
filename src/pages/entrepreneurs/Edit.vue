<template>
  <div>
    <entre-template
      :item="entrepreneur"
      @submit="handleSubmit"
      :flag="'entresUpdate'"
    >
    </entre-template>
  </div>
</template>

<script>
import axios from 'axios'
import EntreTemplate from 'common/EntreTem'
export default {
  name: 'EntrepreneurEdit',
  data () {
    return {
      entrepreneur: {}
    }
  },
  components: {
    EntreTemplate
  },
  methods: {
    getEntrepreneurInfo () {
      axios.get('/api/entrepreneurs/' + this.$route.params.id)
        .then(this.handleDataSucc)
    },
    handleDataSucc (res) {
      res = res.data
      if (res.success) {
        this.entrepreneur = res.entrepreneur
      }
    },
    handleSubmit (data) {
      axios.patch('/api/entrepreneurs/' + this.entrepreneur._id, data).then(this.handleSubmitSucc)
    },
    handleSubmitSucc (res) {
      res = res.data
      if (res.success) {
        this.$router.push('/admin/entrepreneurs')
      }
    }
  },
  mounted () {
    this.getEntrepreneurInfo()
  }
}
</script>

<style lang="stylus" scoped>

</style>
