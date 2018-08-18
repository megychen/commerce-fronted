<template>
  <div>
    <new-template
      :item="company"
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
    }
  },
  mounted () {
    this.getCompanyInfo()
  }
}
</script>

<style lang="stylus" scoped>

</style>
