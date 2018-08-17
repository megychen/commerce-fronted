<template>
  <div>
    <!-- <div class="title">新增商会新闻专题</div> -->
    <input class="input-title" placeholder="标题..." v-model="title">
    <input class="input-author" placeholder="作者..." v-model="author">
    <mavonEditor v-model="content"/>
    <input class="input-link" placeholder="文章链接..." v-model="postLink">
    <div><input type="file" class="input-file" @change="handleFileChange" name="postImg"></div>
    <div class="content-submit" @click="handleBtnSubmit">提交</div>
  </div>
</template>

<script>
import axios from 'axios'
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
export default {
  name: 'NewTemplate',
  components: {
    mavonEditor
  },
  data () {
    return {
      title: '',
      author: '',
      content: '',
      postLink: '',
      postImg: ''
    }
  },
  methods: {
    handleFileChange (e) {
      this.postImg = e.target.files[0]
    },
    handleBtnSubmit () {
      const formData = new FormData()
      formData.append('title', this.title)
      formData.append('author', this.author)
      formData.append('content', this.content)
      formData.append('postLink', this.postLink)
      formData.append('postImg', this.postImg)
      const path = this.$router.currentRoute.path === '/admin/posts-new' ? '/api/posts' : '/api/companies'
      axios.post(path, formData).then(this.handleDataSucc)
    },
    handleDataSucc (res) {
      res = res.data
      if (res.success) {
        this.$router.push('/')
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  .v-note-wrapper
    clear: both
    min-height: 600px
    margin: 20px 0
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
    margin-bottom: 15px
    box-shadow: $boxShadow
  .input-author
    box-sizing: border-box
    border: 1px solid $borderColor
    padding: 10px
    width: 35%
    float: right
    box-shadow: $boxShadow
  .input-content
    box-sizing: border-box
    border: 1px solid $borderColor
    width: 100%
    margin: 20px 0
    padding: 10px
  .input-link
    box-sizing: border-box
    border: 1px solid $borderColor
    width: 100%
    padding: 10px
    margin-bottom: 15px
    box-shadow: $boxShadow
  .input-file
    display: inline-block
    color: $fontColor
    box-sizing: border-box
    border: 1px solid $borderColor
    padding: 10px
    margin-bottom: 15px
    box-shadow: $boxShadow
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
