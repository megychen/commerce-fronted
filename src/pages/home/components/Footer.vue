<template>
  <div class="footer border-top">
    <p class="info">
      地址：松江區三新北路100弄1號三樓<br>
      E-Mail：jiahe707@163.com<br>
      電話：021-37793081 33558666 33558686<br>
      傳真：37793080
    </p>
  </div>
</template>

<script>
export default {
  name: 'HomeFooter'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  .footer
    margin: 40px auto
    padding: 20px
    width: 1024px
    overflow: hidden
    height: 100px
    color: #666
    font-family: $fontFamily
    .info
      text-align: center
      line-height: 24px
</style>
