<template>
  <div class="signin-wrapper">
    <h3 class="signin-title">登录</h3>
    <router-link to="/signup"><div class="hint">没有账号？请点击注册</div></router-link>
    <div class="error-message">
      {{ errMsg }}
    </div>
    <input class="signin-content" type="text" placeholder="名称" v-model="name">
    <input class="signin-content" type="password" placeholder="密码" v-model="password">
    <input type="button" value="提交" class="sub-button" @click="handleBtnSubmit">
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Signin',
  data () {
    return {
      errMsg: '',
      name: '',
      password: ''
    }
  },
  methods: {
    validInput () {
      if (this.name.length === 0) {
        this.errMsg = '名称不能为空'
        return false
      } else if (this.password.length < 6) {
        this.errMsg = '密码长度至少为6位'
        return false
      }
      return true
    },
    handleBtnSubmit () {
      if (this.validInput()) {
        axios.post('/api/signin', {
          name: this.name,
          password: this.password
        }).then(this.handleDataSucc)
      }
    },
    handleDataSucc (res) {
      res = res.data
      if (!res.success) {
        this.errMsg = res.message
        return
      }
      const cookieVal = {
        id: res.token.id,
        name: res.token.name,
        isAdmin: res.token.isAdmin
      }
      this.$cookie.set('commerce', JSON.stringify(cookieVal), {expires: '1D'})
      this.$router.push('/')
    }
  },
  mounted () {
    const user = JSON.parse(this.$cookie.get('commerce'))['name']
    if (user) {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  .signin-wrapper
    position: relative
    background: rgba(0, 0, 0, 0.1)
    margin: 150px auto
    padding: 40px
    text-align: center
    width: 400px
    .signin-title
      text-align: center
      color: $fontColor
      font-size: 24px
      margin-bottom: 15px
    .error-message
      text-align: left
      color: #ff3333
      height: 20px
      line-height: 20px
    .hint
      position: absolute
      font-size: 14px
      top: 45px
      right: 20px
      color: #666
      border-bottom: 1px dotted $bgColor
    .signin-content
      display: block
      font-size: 16px
      line-height: 40px
      margin-bottom: 10px
      padding-left: 25px
      width: 375px
    .sub-button
      display: block
      background: $bgColor
      width: 100%
      height: 40px
      font-size: 16px
      color: #fff
      cursor: pointer
</style>
