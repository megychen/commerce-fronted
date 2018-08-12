<template>
  <div>
    <home-header></home-header>
    <home-banner></home-banner>
    <home-footer></home-footer>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeBanner from './components/Banner'
import HomeFooter from './components/Footer'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeBanner,
    HomeFooter
  }
}
</script>

<style>

</style>
