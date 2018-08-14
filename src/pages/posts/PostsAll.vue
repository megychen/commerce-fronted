<template>
  <ul>
    <li class="content" v-for="item of newsList" :key="item.id">
      <router-link to="#"><span class="content-title">{{item.title}}  {{item.author}}</span></router-link>
      <router-link :to="'/admin/posts-edit/' + item.id"><button class="button">编辑</button></router-link>
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
</template>

<script>
export default {
  name: 'Posts',
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
</style>
