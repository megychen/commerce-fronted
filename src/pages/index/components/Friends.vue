<template>
  <div class="friends">
    <h3>友情链接</h3>
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
  padding: 15px
  width: 1200px
  margin: 0 auto
  h3
    border-left: 3px solid #C94834
    padding-left: 10px
    font-size: 17px
    height: 18px
    line-height: 18px
    font-family: $fontFamily
    letter-spacing: 1px
  .link-list
    overflow: hidden
    .list-item
      float: left
      background: $bgColor
      color: #fff
      width: 210px
      text-align: center
      margin-right: 20px
      border-radius: 3px
      margin-top: 10px
      height: 28px
      line-height: 28px
      font-family: $fontFamily
  .show-more
    float: right
    font-size: 14px
    color: #888
    font-family: $fontFamily
    .show-icon
      font-size: 18px
      margin-right: -4px
</style>
