<template>
  <div class="footer">
    <head><base target="_blank" /></head>
    <div>
      <div class="main-width">
        <div class="footer-nav">
          <ul class="border-bottom">
            <li><router-link class="menu" to="/index"><div class="item">首页</div></router-link></li>
            <li><router-link class="menu" to="/intro"><div class="item">商会概况</div></router-link></li>
            <li><router-link class="menu" to="/news"><div class="item">商会新闻</div></router-link></li>
            <li><router-link class="menu" to="/fengcai"><div class="item">商会风采</div></router-link></li>
          </ul>
        </div>
        <div class="content">
          <div class="logo">
            <img class="logo-img" src="~styles/images/logo5.png">
          </div>
          <div class="info">
            <div class="info-text">
              <span class="iconfont info-icon">&#xe624;</span>
              <p>电话：021-37793081</p>
            </div>
            <div class="info-text">
              <span class="iconfont info-icon">&#xe604;</span>
              <p>邮箱：sj_wzsh@163.com</p>
            </div>
            <div class="info-text">
              <span class="iconfont info-icon">&#xe6e3;</span>
              <p>传真：021-37793080</p>
            </div>
            <div class="info-text">
              <span class="iconfont info-icon">&#xe61f;</span>
              <p>地址：松江区三新北路100弄1号三楼</p>
            </div>
            <div class="info-text">
              &copy; 2018-09 上海市松江区温州商会 版权所有
            </div>
          </div>
        </div>
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
  @import '~styles/mixins.styl'
  .footer
    background: #6b6f7d
    .main-width
      width: 650px
      margin: 0 auto
      .footer-nav
        height: 54px
        ul
          width: 650px
          margin: 0 auto
          list-style: none
          display: flex
          text-align: center
          li
            display: inline-block
            line-height: 54px
            flex: 1
            .menu
              color: #ccc
              display: inline-block
              height: 54px
              font-size: 16px
              font-family: $fontFamily
              letter-spacing: 1px
      .content
        padding: 18px
        display: flex
        justify-content: space-between
        .logo
          width: 30%
          margin: auto
          .logo-img
            width: 80%
        .info
          width: 60%
          .info-text
            font-family: $fontFamily
            font-size: 12px
            letter-spacing: 1px
            line-height: 32px
            color: #ccc
            .info-icon
              float: left
              margin-right: 8px
</style>
