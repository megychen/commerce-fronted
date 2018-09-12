<template>
  <div>
    <div class="new">新增企业</div>
    <div>
      <new-template :flag="'companies'" @submit="handleSubmit"></new-template>
    </div>
  </div>
</template>

<script>
import {createCompanies} from 'api/companies'
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
      this._createCompanies(data)
    },
    _createCompanies (data) {
      createCompanies(data).then((res) => {
        res = res.data
        if (res.success) {
          this.$router.push('/admin/companies')
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
