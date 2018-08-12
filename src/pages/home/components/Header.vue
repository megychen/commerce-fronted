<template>
  <div id="header">
    <div id="header-wrap">
      <a href="/" id="logo"><img id="logo-img" src="@/assets/images/logo.jpg"></a>
      <h1>上海松江商会</h1>
      <div id="header-right">
          <router-link class="login" to="/">登录/注册</router-link>
          <form action="" class="search">
            <input class="input" type="text" placeholder="请输入关键字">
            <input class="btn" type="button" value="搜索">
          </form>
      </div>
    </div>
    <div id="header-nav">
      <ul>
        <li><router-link class="menu" to="/">首页</router-link></li>
        <li><router-link class="menu" to="/">商会概况</router-link></li>
        <li><router-link class="menu" to="/">商会新闻</router-link></li>
        <li><router-link class="menu" to="/">企业风采</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
  #header
    font-family: "微软雅黑"
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
        font-family: "微软雅黑"
        color: #DC5A3B
        letter-spacing: 2px
      #header-right
        float: right
        overflow: hidden
        margin: 10px
        .login
          float: right
          color: #444
          line-height: 50px
          text-decoration: none
          font-family: "微软雅黑"
          letter-spacing: 1px
        .search
          display: block
          .input
            box-sizing: border-box
            border: 1px solid #888
            outline: none
            height: 26px
            line-height: 24px
            width: 180px
            border-radius: 3px 0 0 3px
            color: #666
            padding: 0 4px
            font-family: "微软雅黑"
          .btn
            cursor: pointer
            width: 40px
            height: 26px
            border-radius: 0 3px 3px 0
            background-color: #888
            color: #fff
            margin-left: -4px
            font-family: "微软雅黑"
            font-size: 13px
    #header-nav
      height: 55px
      background: #EEB345
      box-shadow: 1px 1px 10px #ccc
      ul
        width: 640px
        margin: 0 auto
        display: flex
        overflow: hidden
      li
        flex: 1
        float:left
        line-height: 60px
        font-size: 17px
        .menu
          color: #fff
        .menu:hover
          color: #DC5A3B
</style>
