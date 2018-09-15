<template>
  <ul class="postList">
    <li v-for="item of items" :key="item.id">
      <a class="cover" :href="link(item)">
        <div class="pic-wraper" :style="{ overflow: isOverflow }">
          <img class="pic" v-if="image(item)" :src="image(item)">
          <img class="pic" v-else :src="~styles/images/defaultImg.jpg">
        </div>
      </a>
      <div class="text">
        <a class="title" :href="link(item)">{{title(item)}}</a>
        <a class="sub-title" v-if="item.company" :href="link(item)">{{company(item)}} ({{subtitle(item)}})</a>
        <p>
          <a :href="link(item)">{{content(item).substr(0, 90)}}... </a>
        </p>
        <div class="more">
          <span>{{datetime(item)}}</span>
          <div class="button">
            <a class="more-text" :href="link(item)">更多</a>
          </div>
        </div>
      </div>
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
import CommonPagination from 'common/Pagination'

export default {
  name: 'PostTem',
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
      perPage: 10,
      search: ''
    }
  },
  computed: {
    totalPages () {
      return Math.ceil(this.total / 10)
    },
    isOverflow () {
      return this.type === 'posts' ? 'hidden' : 'none'
    }
  },
  methods: {
    title (item) {
      return item.title ? item.title : item.name
    },
    link (item) {
      return item.postLink ? item.postLink : `/#/${this.type}/${item._id}`
    },
    subtitle (item) {
      if (this.type === 'entrepreneurs') {
        return item.title
      }
    },
    company (item) {
      return item.company ? item.company : ''
    },
    image (item) {
      return item.postImg ? item.postImg : item.avatar ? item.avatar : ''
    },
    content (item) {
      return item.content ? item.content : item.description
    },
    datetime (item) {
      return item.timestamp ? item.timestamp : ''
    },
    onPageChange (page) {
      this.currentPage = page
      this.$emit('pageChange', page)
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  @import '~styles/mixins.styl'

  .postList
    background: #fff
    padding: 0 18px
    li
      display: flex
      justify-content: space-between
      padding: 14px 0
      border-bottom: 1px solid #eee
      .cover
        display: block
        width: 26%
        .pic-wraper
          // overflow: hidden
          width: 100%
          height: 0
          padding-bottom: 66.67%
          background: #eeeeee
          .pic
            width: 100%
      .text
        width: 70%
        .title
          display: block
          font-family: $fontFamily
          font-size: 18px
          font-weight: bold
          line-height: 40px
          height: 40px
          color: #444
          letter-spacing : 1px
          margin-bottom: 10px
          ellipsis()
          &:hover
            color: $bgColor
        .sub-title
          display: block
          font-family: $fontFamily
          font-size: 15px
          font-weight: bold
          line-height: 20px
          height: 20px
          color: #444
          letter-spacing : 1px
          margin-bottom: 8px
          ellipsis()
          &:hover
            color: $bgColor
        p a
          font-family: $fontFamily
          font-size: 14px
          line-height: 28px
          color: #666
          &:hover
            color: $bgColor
        .more
          overflow: hidden
          margin-top: 14px
          span
           float: left
           font-size: 14px
           font-family: $fontFamily
           color: #666
          .button
            float: right
            text-align: center
            height: 28px
            line-height: 26px
            .more-text
              color: #888
              font-size: 14px
              letter-spacing: 1px
              font-family: $fontFamily
              display: inline-block
              border: 1px solid #888
              width: 70px
              border-radius: 2px
              &:hover
               border: 1px solid $bgColor
               color: $bgColor
    ul .content-pagination
      margin: 20px 0
      padding: 0 30px
</style>
