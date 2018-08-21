<template>
  <div class="side-wrapper">
    <div class="side-menu">
      <router-link to="/fengcai/entrepreneurs">
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
  .side-wraper >>> router-link-active
     background: #fff
    .side-menu
      background: $bgColor
      color: #fff
      text-align: center
      border-radius: 3px
      .side-item
        padding: 10px;
        color: #fff
        line-height: 38px
        font-size: 18px
        font-family: $fontFamily
        &:hover
          background: #fff
          color: $bgColor
</style>
