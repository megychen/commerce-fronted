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
  width: 1024px
  margin: 0 auto
  .wraper
    display: flex
    justify-content: space-between
    padding: 18px 0
    .side-bar
      width: 13%
      margin-top: 150px
    .fc-content
      width: 83%
      background: #aaa
</style>
