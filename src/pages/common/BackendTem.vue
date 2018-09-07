<template>
  <ul class="post">
    <li class="content" v-for="item of items" :key="item._id">
      <a class="content-title" :href="link(item)">{{title(item)}}  {{company(item)}}</a>
      <router-link :to="editLink(item)"><button class="button">编辑</button></router-link>
      <button class="button" @click="handleDelBtn(item._id)">删除</button>
    </li>
    <li class="content-pagination">
      <common-pagination
        :currentPage="currentPage"
        :totalPages="totalPages"
        :total="total"
        :perPage="10"
        @pagechanged="onPageChange"
      >
      </common-pagination>
    </li>
  </ul>
</template>

<script>
import CommonPagination from '../common/Pagination'
export default {
  name: 'BackendTem',
  components: {
    CommonPagination
  },
  props: {
    items: {
      type: Array,
      default: () => []
    },
    total: {
      type: Number,
      default: 0
    },
    type: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      currentPage: 1,
      perPage: 10
    }
  },
  computed: {
    totalPages () {
      return Math.ceil(this.total / 10)
    }
  },
  methods: {
    title (item) {
      return (this.type === 'posts' || this.type === 'companies') ? item.title : item.name
    },
    link (item) {
      return item.postLink ? item.postLink : `/#/${this.type}/${item._id}`
    },
    company (item) {
      return item.company ? item.company : ''
    },
    editLink (item) {
      return `/admin/${this.type}-edit/${item._id}`
    },
    onPageChange (page) {
      this.currentPage = page
      this.$emit('pageChange', page)
    },
    handleDelBtn (id) {
      this.$emit('deleteItem', id)
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  @import '~styles/mixins.styl'
  .post
    width: 80%
    margin-top: 20px
    .content
      list-style-type: square
      list-style-position: inside
      padding: 6px 10px
      border-bottom: 1px dotted #ccc
      color: $bgColor
      letter-spacing: 1px
      justify-content: space-between
      line-height: 32px
      height: 32px
      .content-title
        display: inline-block
        vertical-align: middle
        width: 76%
        ellipsis()
        color: #666
        font-size: 16px
        &:hover
          color: $bgColor
      .button
        padding: 4px 8px
        color: #888
        border-radius: 2px
        border: 1px solid #888
        cursor: pointer
        margin-left: 5px
    .content-pagination
      margin: 20px 0
      padding: 0 30px
</style>
