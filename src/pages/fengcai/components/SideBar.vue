<template>
  <div class="side-wrapper">
    <div class="side-menu">
      <router-link  to="/fengcai/entrepreneurs">
        <div class="side-item border-bottom">会员风采</div>
      </router-link>
      <router-link to="/fengcai/companies">
        <div class="side-item border-bottom">企业风采</div>
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
  .side-menu >>> .router-link-active
    .side-item
      background: $bgColor
      color: #fff
      line-height: 50px
      font-size: 18px
      text-align: center
      border-radius: 3px
      font-family: $fontFamily
  .side-item
    background: rgba(0, 0, 0, 0.2)
    color: #fff
    text-align: center
    line-height: 50px
    font-size: 18px
    text-align: center
    border-radius: 3px
    font-family: $fontFamily
</style>
