<template>
  <div>
    <div class="side-wrapper">
      <div class="side-menu">
        <div class="side-item border-bottom">商会新闻</div>
        <div class="side-item border-bottom">企业风采</div>
        <div class="side-item ">其他</div>
      </div>
      <div class="post-item post-menu">发表新闻</div>
      <ul class=" post-item post-menu-content border-top">
        <router-link to="/"><li class="border-bottom">新增商会新闻专题</li></router-link>
        <router-link to="/"><li>新增企业风采专题</li></router-link>
      </ul>
    </div>
    <div class="content-wrapper">
      <ul>
        <li class="content" v-for="item of newsList" :key="item.id">
          <router-link to="#"><span class="content-title">{{item.title}}  {{item.author}}</span></router-link>
          <button class="button">编辑</button>
          <button class="button">删除</button>
        </li>
        <div class="content-pagination">
          <ul class="pagination-item-wrapper">
            <li class="pagination-item">1</li>
            <li class="pagination-item">2</li>
            <li class="pagination-item">3</li>
            <li class="pagination-item">4</li>
            <li class="pagination-item">5</li>
          </ul>
        </div>
      </ul>
    </div>
    <div class="clear"></div>
  </div>
</template>

<script>
export default {
  name: 'BackendContent',
  data () {
    return {
      newsList: [{
        id: '0001',
        title: '代表上海形象 办出上海水平 市合作交流系统社会组织年度工作会议召开',
        author: '【作者】'
      }, {
        id: '0002',
        title: '代表上海形象 办出上海水平 市合作交流系统社会组织年度工作会议召开',
        author: '【作者】'
      }, {
        id: '0003',
        title: '代表上海形象 办出上海水平 市合作交流系统社会组织年度工作会议召开',
        author: '【作者】'
      }, {
        id: '0004',
        title: '代表上海形象 办出上海水平 市合作交流系统社会组织年度工作会议召开',
        author: '【作者】'
      }, {
        id: '0005',
        title: '代表上海形象 办出上海水平 市合作交流系统社会组织年度工作会议召开',
        author: '【作者】'
      }, {
        id: '0006',
        title: '代表上海形象 办出上海水平 市合作交流系统社会组织年度工作会议召开',
        author: '【作者】'
      }, {
        id: '0007',
        title: '代表上海形象 办出上海水平 市合作交流系统社会组织年度工作会议召开',
        author: '【作者】'
      }, {
        id: '0008',
        title: '代表上海形象 办出上海水平 市合作交流系统社会组织年度工作会议召开',
        author: '【作者】'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  .side-wrapper
    float: left
    width: 20%
    .side-menu
      box-sizing: border-box
      border: 1px solid red
      color: #666
      font-size: 16px
      border: 1px solid $borderColor
      margin-bottom: 30px
      .side-item
        text-align: center
        padding: 10px
        cursor: pointer
        &:hover
          background: $bgColor
          color: #fff
    .post-item
      background: $bgColor
      color: #fff
      text-align: center
    .post-menu
      padding: 10px;
    .post-menu-content li
      padding: 10px;
      color: #fff
  .content-wrapper
    box-sizing: border-box
    float: right
    width: 78%
    padding: 0 20px
    border: 1px solid $borderColor
    .content
      overflow: hidden
      text-overflow: ellipsis
      white-space: nowrap
      padding: 10px 30px
      border-bottom: 1px dotted #ccc
      .content-title
        color: #666
        &:hover
          color: $bgColor
      .button
        background: $bgColor
        padding: 2px 8px
        border-radius: 4px
        color: #fff
        cursor: pointer
    .content-pagination
      margin: 20px 0
      padding: 0 30px
      .pagination-item-wrapper
        .pagination-item
          margin-right: 10px
          display: inline-block
          padding: 5px 10px
          border: 1px solid $borderColor
          color: #666
          &:hover
            background: $borderColor
            cursor: pointer
  .clear
    clear: both
</style>
