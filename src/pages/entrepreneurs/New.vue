<template>
  <div>
    <div class="new">新增企业家</div>
    <div>
      <entre-template @submit="handleSubmit"></entre-template>
    </div>
  </div>
</template>

<script>
import EntreTemplate from '../common/EntreTem'
import {createEntrepreneurs} from 'api/entrepreneurs'

export default {
  name: 'EntrepreneurNew',
  components: {
    EntreTemplate
  },
  methods: {
    handleSubmit (data) {
      this._createEntrepreneurs(data)
    },
    _createEntrepreneurs (data) {
      createEntrepreneurs(data).then((res) => {
        res = res.data
        if (res.success) {
          this.$router.push('/admin/entrepreneurs')
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
