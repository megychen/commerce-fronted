<template>
  <div id="header">
    <div id="header-wrap">
      <a href="/" id="logo"><img id="logo-img" src="~styles/images/logo.jpg"></a>
      <h1>上海市松江区温州商会</h1>
      <router-link to="/"><span class="back">返回首页</span></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BackendHeader'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  #header >>> .router-link-active
    .item
      color: $hoverColor
  #header
    font-family: $fontFamily
    background: #fff
    #header-wrap
      margin: 0 auto
      width: 1024px
      overflow: hidden
      height: 100px
      #logo
        float: left
        padding: 10px 0
        margin-right: 20px
        #logo-img
          display: block
          width: 80px
          height: 80px
      h1
        display: inline-block
        float: left
        font-size: 36px
        line-height: 100px
        font-family: $fontFamily
        color: #DC5A3B
        letter-spacing: 2px
      .back
        font-size: 16px
        color: #666
        float: right
        position: relative
        top: 70px
        background: #fff
        &:hover
          color: $fontColor
</style>
