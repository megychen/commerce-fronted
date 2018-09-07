<template>
  <div class="input-wrapper">
    <div class="title">重置密码</div>
    <div class="error-message" v-for="(error, index) of errors" :key="index">
      {{ error }}
    </div>
    <input type="password" class="input input-password" placeholder="新密码" v-model="newPass">
    <input type="password" class="input input-password" placeholder="新密码确认" v-model="newRepass">
    <button class="content-submit" @click="handleBtnSubmit">提交</button>
  </div>
</template>

<script>
// import axios from 'axios'
import {resetUserPass} from 'api/users'

export default {
  name: 'UserReset',
  data () {
    return {
      newPass: '',
      newRepass: '',
      errors: []
    }
  },
  methods: {
    validInput () {
      this.errors = []
      if (this.newPass && this.newRepass && this.newPass === this.newRepass) {
        return true
      }

      if (!this.newPass) {
        this.errors.push('密码不能为空')
      }

      if (!this.newRepass) {
        this.errors.push('密码确认不能为空')
      }

      if (!(this.newPass === this.newRepass)) {
        this.errors.push('两次密码不一致')
      }
    },
    handleBtnSubmit () {
      if (this.validInput()) {
        const id = this.$route.params.id
        // axios.patch('/api/users/' + id + '/reset', {
        //   newPass: this.newPass,
        //   newRepass: this.newRepass
        // }).then(this.handleResetSucc)
        this._resetUserPass(id)
      }
    },
    // handleResetSucc (res) {
    //   res = res.data
    //   if (res.success) {
    //     this.$router.push('/admin/users')
    //   }
    // },
    _resetUserPass (id) {
      resetUserPass(id, this.newPass, this.newRepass).then((res) => {
        res = res.data
        if (res.success) {
          this.$router.push('/admin/users')
        }
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  @import '~styles/mixins.styl'
  .input-wrapper
    width: 300px
    margin: 0 auto
    .title
      font-size: 20px
      color: #666
      text-align: center
      margin-bottom: 20px
    .error-message
      font-size: 12px
      text-align: left
      color: #ff3333
      height: 20px
      line-height: 20px
    .input
      inputStyl()
    .input-password
      width: 100%
    .content-submit
      background: $bgColor
      width: 100%
      padding: 10px
      color: #fff
      &:hover
        cursor: pointer
</style>
