<template>
  <div>
    <home-header></home-header>
    <home-footer></home-footer>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeFooter from './components/Footer'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeFooter
  }
}
</script>

<style>

</style>
