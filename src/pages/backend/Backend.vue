<template>
  <div class="wrapper">
    <backend-header></backend-header>
    <sidebar></sidebar>
    <div class="content-wrapper">
      <router-view></router-view>
    </div>
    <div class="clear"></div>
  </div>
</template>

<script>
import BackendHeader from './components/Header'
import Sidebar from './components/Sidebar'
export default {
  name: 'Backend',
  components: {
    BackendHeader,
    Sidebar
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper
    width: 1024px
    margin: 20px auto
    border: 1px solid #eaeaea
    padding: 20px
    .content-wrapper
      box-sizing: border-box
      float: right
      width: 78%
      padding: 0 20px
      border: 1px solid $borderColor
    .clear
      clear: both
</style>
