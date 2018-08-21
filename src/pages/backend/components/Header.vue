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
  @import '~styles/variables.styl'
  .header
    color: #dc5a3b
    font-size: 28px
    text-align: center
    padding: 30px
    margin-bottom: 30px
    background: #fff
    .back
      font-size: 16px
      color: #666
      float: right
      border: 1px solid $bgColor
      padding: 5px 15px
      background: #fff
      &:hover
        color: $fontColor
</style>
