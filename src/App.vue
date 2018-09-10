<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import {getCurrentUser} from 'api/users'

export default {
  name: 'App',
  created () {
    this.token = JSON.parse(this.$cookie.get('token'))
    if (this.token) {
      this._getCurrentUser()
    }
  },
  methods: {
    _getCurrentUser () {
      getCurrentUser(this.token.id).then((res) => {
        res = res.data
        if (!res.success) {
          return
        }
        const cookieVal = {
          name: res.user.name,
          isAdmin: res.user.isAdmin
        }
        const token = {
          id: res.user.id
        }
        this.$cookie.set('token', JSON.stringify(token), {expires: '1M'})
        this.$cookie.set('commerce', JSON.stringify(cookieVal), {expires: '1M'})
      })
    }
  }
}
</script>

<style>

</style>
