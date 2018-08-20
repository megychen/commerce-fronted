<template>
  <div class="main-page">
    <backend-header></backend-header>
    <div class="wrapper">
      <sidebar></sidebar>
      <div class="content-wrapper">
        <router-view></router-view>
      </div>
      <div class="clear"></div>
    </div>
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
  .main-page
    background: url(../../assets/styles/images/bg.gif)repeat
    padding: 30px
    .wrapper
      width: 1024px
      margin: 20px auto
      border: 1px solid #eaeaea
      padding: 20px
      background: #fff
      .content-wrapper
        box-sizing: border-box
        float: right
        width: 78%
        padding: 0 20px
        border: 1px solid $borderColor
      .clear
        clear: both
</style>
