<template>
  <div class="footer border-top">
    <div class="info">
      <div class="info-text">
        <span class="iconfont info-icon">&#xe61f;</span>
        <p>地址：松江区三新北路100弄1号三楼</p>
      </div>
      <div class="info-text">
        <span class="iconfont info-icon">&#xe604;</span>
        <p>邮箱：sj_wzsh@163.com</p>
      </div>
      <div class="info-text">
        <span class="iconfont info-icon">&#xe624;</span>
        <p>电话：021-37793081</p>
      </div>
      <div class="info-text">
        <span class="iconfont info-icon">&#xe6e3;</span>
        <p>传真：021-37793080</p>
      </div>
    </div>
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
    background: #eee

    .info
      padding: 20px
      margin: 10px auto
      width: 280px
      overflow: hidden
      color: #666
      font-family: $fontFamily
      font-size: 14px
      line-height: 30px
      .info-icon
        float: left
        margin-right: 8px
</style>
