<template>
  <ul>
    <li class="content" v-for="item of companiesList" :key="item.id">
      <router-link to="#"><span class="content-title">{{item.title}}  {{item.author}}</span></router-link>
      <router-link :to="'/admin/companies-edit/' + item.id"><button class="button">编辑</button></router-link>
      <button class="button">删除</button>
    </li>
    <li class="content-pagination">
      <common-pagination
        :currentPage="currentPage"
        :totalPages="12"
        :total="120"
        :perPage="12"
        @pagechanged="onPageChange"
      >
      </common-pagination>
    </li>
  </ul>
</template>

<script>
import CommonPagination from '../common/Pagination'
export default {
  name: 'Companies',
  components: {
    CommonPagination
  },
  data () {
    return {
      companiesList: [{
        id: '0001',
        title: '朱孟君：振兴中国压缩机行业的领军者',
        author: '【秘书处】'
      }, {
        id: '0002',
        title: '传承民族工艺 精耕细作品牌',
        author: '【张晋洲】'
      }, {
        id: '0003',
        title: '金锦建：商业地产虎山行',
        author: '【张晋洲】'
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
</style>
