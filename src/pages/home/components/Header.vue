<template>
  <div id="header">
    <div id="header-wrap">
      <a href="/" id="logo"><img id="logo-img" src="~styles/images/logo.jpg"></a>
      <h1>上海市松江区温州商会</h1>
      <div id="header-right">
          <router-link class="login" to="/admin">管理员(<span>{{user}}</span>)</router-link>
          <template v-if="!user">
            <router-link class="login l-margin" to="/signup">注册</router-link>
            <router-link class="login l-margin" to="/signin">登录</router-link>
          </template>
          <form action="" class="search">
            <input class="input" type="text" placeholder="请输入关键字" v-model="keyword">
            <input class="btn" type="button" value="搜索" @click="handleSearchBtn">
          </form>
      </div>
    </div>
    <div id="header-nav">
      <ul>
        <li><router-link class="menu" to="/">首页</router-link></li>
        <li><router-link class="menu" to="/intro">商会概况</router-link></li>
        <li><router-link class="menu" to="/news">商会新闻</router-link></li>
        <li><router-link class="menu" to="/fengcai">商会风采</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
// const currentUser = this.$cookie.get('commerce')['name']
export default {
  name: 'HomeHeader',
  data () {
    return {
      user: '',
      keyword: ''
    }
  },
  methods: {
    handleSearchBtn () {
      this.$router.push({path: '/news', query: {search: this.keyword}})
    }
  },
  mounted () {
    this.user = JSON.parse(this.$cookie.get('commerce'))['name']
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
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
      #header-right
        float: right
        overflow: hidden
        margin: 10px
        .login
          float: right
          color: #444
          line-height: 50px
          text-decoration: none
          font-family: $fontFamily
          letter-spacing: 1px
        .login:hover
          color: $hoverColor
        .l-margin
          margin-right: 5px
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
            padding: 0 8px
            font-family: $fontFamily
          .btn
            cursor: pointer
            width: 40px
            height: 26px
            border-radius: 0 3px 3px 0
            background-color: #888
            color: #fff
            margin-left: -4px
            font-family: $fontFamily
            font-size: 13px
    #header-nav
      height: 60px
      background: $bgColor
      box-shadow: 1px 1px 10px #ccc
      ul
        width: 650px
        margin: 0 auto
        list-style: none
        display: flex
        text-align: center
        li
          display: inline-block
          line-height: 60px
          flex: 1
          .menu
            color: #fff
            display: inline-block
            height: 60px
            font-size: 18px
            letter-spacing: 1px
          .menu:hover
            color: $hoverColor

</style>
