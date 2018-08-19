<template>
  <div class="friends">
    <div class="title"><span>友情链接</span></div>
    <ul class="link-list">
      <a
      class="list-item"
      v-for="item of showList" :key="item.id"
      :href="item.linkUrl"
      >
      {{item.title}}
      </a>
    </ul>
    <h4 @click="showAll = !showAll" class="show-more">
      <span class="iconfont show-icon">&#xe62a;</span>
      {{word}}
      </h4>
  </div>
</template>

<script>
export default {
  name: 'HomeFriends',
  props: {
    linkList: Array
  },
  data () {
    return {
      showAll: false
    }
  },
  computed: {
    showList: function () {
      if (this.showAll === false) {
        var showList = []
        if (this.linkList.length > 10) {
          for (var i = 0; i < 10; i++) {
            showList.push(this.linkList[i])
          }
        } else {
          showList = this.linkList
        }
        return showList
      } else {
        return this.linkList
      }
    },
    word: function () {
      if (this.showAll === false) {
        return '展开'
      } else {
        return '收起'
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl'
.friends
  background: #fff
  margin-top: 15px
  width: 1200px
  margin: 0 auto
  overflow: hidden
  .title
    padding: 0 15px
    background: #f8f8f8
    border-bottom: 1px solid #eee;
    height: 40px;
    line-height: 40px;
    span
      font-family: $fontFamily
      font-size: 17px;
      color: #333;
      border-left: 3px solid #c94834;
      height: 17px;
      line-height: 17px;
      padding-left: 10px;
      letter-spacing: 1px;
  .link-list
    padding: 20px 18px 0
    display: flex
    flex-wrap: wrap
    .list-item
      background: $bgColor
      color: #fff
      width: 18%
      text-align: center
      margin: 0 20px 18px 0
      border-radius: 3px
      height: 28px
      line-height: 28px
      font-family: $fontFamily
  .show-more
    float: right
    font-size: 14px
    color: #c94834
    font-family: $fontFamily
    padding: 0 15px 10px
    cursor: pointer
    .show-icon
      font-size: 18px
      margin-right: -4px
</style>
