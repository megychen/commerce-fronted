<template>
  <div class="side-wrapper">
    <div class="side-menu">
      <router-link to="/admin/posts">
        <div class="side-item border-bottom">商会新闻</div>
      </router-link>
      <router-link to="/admin/companies">
        <div class="side-item border-bottom">企业风采</div>
      </router-link>
      <router-link to="/admin/entrepreneurs">
        <div class="side-item border-bottom">会员风采</div>
      </router-link>
      <router-link to="/admin/users">
        <div class="side-item border-bottom">用户管理</div>
      </router-link>
    </div>
    <ul class=" post-item post-menu-content">
      <router-link to="/admin/posts-new"><li class="create-item border-bottom">新增商会新闻专题</li></router-link>
      <router-link to="/admin/companies-new"><li class="create-item border-bottom">新增企业专题</li></router-link>
      <router-link to="/admin/entrepreneurs-new"><li class="create-item">新增企业家专题</li></router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Sidebar'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  .side-wrapper >>> .router-link-active
    .side-item
      background: $bgColor
    .create-item
      color: $fontColor
  .side-wrapper
    float: left
    width: 20%
    .side-menu
      border-radius: 3px
      margin-bottom: 30px
      background: rgba(0, 0, 0, 0.2)
      .side-item
        color: #fff
        text-align: center
        line-height: 50px
        font-size: 18px
        text-align: center
        font-family: $fontFamily
    .post-item
      background: $bgColor
      color: #fff
      text-align: center
    .post-menu-content li
      padding: 10px;
      color: #fff
</style>
