<template>
  <div class="signup-wrapper">
    <h3 class="signup-title">注册</h3>
    <router-link to="/signin"><div class="hint">已有账号？请点击登录</div></router-link>
    <div class="error-message">
      {{ errMsg }}
    </div>
    <input class="signup-content" type="text" placeholder="名称" v-model="name">
    <input class="signup-content" type="password" placeholder="密码" v-model="password">
    <input class="signup-content" type="password" placeholder="密码确认" v-model="rePass">
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
      password: '',
      rePass: ''
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
      } else if (this.rePass.length < 6) {
        this.errMsg = '密码确认长度至少为6位'
        return false
      } else if (this.password !== this.rePass) {
        this.errMsg = '两次密码输入不一致'
        return false
      }
      return true
    },
    handleBtnSubmit () {
      if (this.validInput()) {
        axios.post('/api/signup', {
          name: this.name,
          password: this.password,
          rePass: this.rePass
        }).then(this.handleDataSucc)
      }
    },
    handleDataSucc (res) {
      res = res.data
      if (!res.success) {
        this.errMsg = res.message
        return
      }
      this.$router.push('/signin')
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  .signup-wrapper
    position: relative
    background: rgba(0, 0, 0, 0.1)
    margin: 150px auto
    padding: 40px
    text-align: center
    width: 400px
    .signup-title
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
    .signup-content
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
