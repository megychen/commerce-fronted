<template>
  <div>
    <new-template
      :item="company"
      @submit="handleSubmit"
    >
    </new-template>
  </div>
</template>

<script>
import axios from 'axios'
import NewTemplate from '../common/NewTem'
export default {
  name: 'CompanyEdit',
  data () {
    return {
      company: {}
    }
  },
  components: {
    NewTemplate
  },
  methods: {
    getCompanyInfo () {
      axios.get('/api/companies/' + this.$route.params.id)
        .then(this.handleDataSucc)
    },
    handleDataSucc (res) {
      res = res.data
      if (res.success) {
        this.company = res.company
      }
    },
    handleSubmit (data) {
      axios.patch('/api/companies/' + this.company._id, data).then(this.handleSubmitSucc)
    },
    handleSubmitSucc (res) {
      res = res.data
      if (res.success) {
        this.$router.push('/admin/companies')
      }
    }
  },
  mounted () {
    this.getCompanyInfo()
  }
}
</script>

<style lang="stylus" scoped>

</style>
