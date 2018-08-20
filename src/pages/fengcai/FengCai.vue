<template>
  <div class="main-width">
    <div class="wraper">
      <div class="side-bar">
        <side-bar></side-bar>
      </div>
      <div class="fc-content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from './components/SideBar'
import company from './components/Company'
import Entrepreneur from './components/Entrepreneur'
export default {
  name: 'FengCai',
  components: {
    SideBar,
    Entrepreneur,
    company
  }
}
</script>

<style lang="stylus" scoped>
.main-width
  width: 1200px
  margin: 0 auto
  .wraper
    display: flex
    justify-content: space-between
    padding: 18px 0
    .side-bar
      width: 14%
      margin-top: 200px
    .fc-content
      width: 82%
      background: #aaa
      // height: 600px
</style>
