<template>
  <div class="header">
    上海市松江区温州商会 (后台管理)
    <router-link to="/"><span class="back">返回首页</span></router-link>
  </div>
</template>

<script>
export default {
  name: 'BackendHeader'
}
</script>

<style lang="stylus" scoped>
  .header
    color: #dc5a3b
    font-size: 28px
    text-align: center
    margin-bottom: 30px
    .back
      font-size: 16px
      color: #666
      float: right
</style>
