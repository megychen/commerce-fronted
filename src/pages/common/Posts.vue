<template>
  <ul>
    <li class="content" v-for="item of newsList" :key="item.id">
      <router-link to="#"><span class="content-title">{{item.title}}  {{item.author}}</span></router-link>
      <router-link :to="'/admin/posts-edit/' + item.id"><button class="button">编辑</button></router-link>
      <button class="button">删除</button>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Posts',
  data () {
    return {
      currentPage: 1,
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
  },
  methods: {
    onPageChange (page) {
      console.log(page)
      this.currentPage = page
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  ul
    list-style-type: square
    list-style-position: inside
    color: $bgColor
    letter-spacing: 1px
    .content
        overflow: hidden
        text-overflow: ellipsis
        white-space: nowrap
        padding: 10px
        border-bottom: 1px dotted #ccc
        .content-title
           color: #666
        .content-title:hover
          color: $bgColor
        .button
            background: $bgColor
            padding: 2px 8px
            color: #fff
            cursor: pointer
        .content-pagination
            margin: 20px 0
            padding: 0 30px
</style>
