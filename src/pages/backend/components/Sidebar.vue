<template>
  <div class="side-wrapper">
    <div class="side-menu">
      <router-link to="/admin/posts">
        <div class="side-item border-bottom">商会新闻</div>
      </router-link>
      <router-link to="/admin/companies">
        <div class="side-item border-bottom">企业风采</div>
      </router-link>
      <div class="side-item">其他</div>
    </div>
    <ul class=" post-item post-menu-content border-top">
      <router-link to="/admin/posts-new"><li class="border-bottom">新增商会新闻专题</li></router-link>
      <router-link to="/admin/companies-new"><li>新增企业风采专题</li></router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Sidebar'
}
</script>

<style lang="stylus">
  @import '~styles/variables.styl'
  .side-wrapper
    float: left
    width: 20%
    .side-menu
      box-sizing: border-box
      border: 1px solid red
      font-size: 16px
      border: 1px solid $borderColor
      margin-bottom: 30px
      .side-item
        text-align: center
        padding: 10px
        cursor: pointer
        color: #666
        &:hover
          background: $bgColor
          color: #fff
    .post-item
      background: $bgColor
      color: #fff
      text-align: center
    .post-menu-content li
      padding: 10px;
      color: #fff
</style>
