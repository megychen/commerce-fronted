<template>
  <div>
    <!-- <div class="title">新增商会新闻专题</div> -->
    <input class="input-title" placeholder="标题..." v-model="title">
    <input class="input-author" placeholder="作者..." v-model="author">
    <textarea class="input-content" type="text" rows="23" placeholder="文章内容..." v-model="content"></textarea>
    <div class="content-submit">提交</div>
  </div>
</template>

<script>
export default {
  name: 'NewTemplate',
  data () {
    return {
      title: '',
      author: '',
      content: ''
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  .title
    text-align: center
    font-size: 24px
    color: $fontColor
    margin: 30px 0
  .input-title
    box-sizing: border-box
    border: 1px solid $borderColor
    padding: 10px
    width: 60%
    float: left
  .input-author
    box-sizing: border-box
    border: 1px solid $borderColor
    padding: 10px
    width: 35%
    float: right
  .input-content
    box-sizing: border-box
    border: 1px solid $borderColor
    width: 100%
    margin: 20px 0
    padding: 10px
  .content-submit
    background: $bgColor
    width: 100px;
    // margin: 0 auto
    float: right
    color: #fff
    text-align: center
    padding: 10px 0
    cursor: pointer
</style>
