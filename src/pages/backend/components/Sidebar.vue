<template>
  <div class="side-wrapper">
    <div class="side-menu">
      <router-link to="/admin/posts">
        <div class="side-item border-bottom">商会新闻</div>
      </router-link>
      <router-link to="/admin/companies">
        <div class="side-item border-bottom">企业风采</div>
      </router-link>
      <router-link to="/admin/entrepreneurs">
        <div class="side-item border-bottom">企业家风采</div>
      </router-link>
      <router-link to="/admin/users">
        <div class="side-item border-bottom">用户管理</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  .side-wrapper >>> .router-link-active
    .side-item
      background: $bgColor
      color: red
    .create-item
      color: $fontColor
  .side-wrapper
    float: left
    width: 20%
    .side-menu
      border-radius: 3px
      margin-bottom: 30px
      background: rgba(238,179,69,0.6)
      .side-item
        color: #fff
        text-align: center
        line-height: 50px
        font-size: 18px
        text-align: center
        font-family: $fontFamily
</style>
