<template>
  <div class="wrapper">
    <backend-header></backend-header>
    <backend-content></backend-content>
  </div>
</template>

<script>
import BackendHeader from './components/Header'
import BackendContent from './components/Content'
export default {
  name: 'Backend',
  components: {
    BackendHeader,
    BackendContent
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper
    width: 1024px
    margin: 20px auto
    border: 1px solid #eaeaea
    padding: 20px
</style>
