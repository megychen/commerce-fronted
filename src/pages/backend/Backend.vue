<template>
  <div class="main-page">
    <backend-header></backend-header>
    <div class="content">
      <div class="wraper">
        <sidebar class="sidebar"></sidebar>
        <div class="content-wrapper">
          <keep-alive><router-view></router-view></keep-alive>
        </div>
      </div>
    </div>
    <backend-footer></backend-footer>
  </div>
</template>

<script>
import BackendHeader from './components/Header'
import Sidebar from './components/Sidebar'
import BackendFooter from '../home/components/Footer'
export default {
  name: 'Backend',
  components: {
    BackendHeader,
    Sidebar,
    BackendFooter
  }
}
</script>

<style lang="stylus" scoped>
  .main-page
    background: url(../../assets/styles/images/bg.gif)repeat
    .content
      margin: 1px auto
      background: #fff
      .wraper
        width: 1024px
        margin: 20px auto
        padding: 20px 0
        display: flex
        justify-content: space-between
        .sidebar
          width: 14%
          margin-top: 60px
        .content-wrapper
          width: 80%
</style>
