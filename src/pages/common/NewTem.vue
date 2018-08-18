<template>
  <div>
    <!-- <div class="title">新增商会新闻专题</div> -->
    <input class="input input-title" placeholder="标题..." v-model="title">
    <input class="input input-author" placeholder="作者..." v-model="author">
    <mavonEditor v-model="content"/>
    <input class="input input-link" placeholder="文章链接..." v-model="postLink">
    <div>
      <input type="file" class="input input-file" @change="handleFileChange" name="postImg">
      <span class="img-label">(上传图片)</span>
    </div>
    <div>
      <input type="date" class="input input-date" name="timestamp"  v-model="timestamp">
      <span class="date-label">(文章日期)</span>
    </div>
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
  props: {
    item: {
      type: Object
    }
  },
  data () {
    return {
      title: '',
      author: '',
      content: '',
      postLink: '',
      postImg: '',
      timestamp: ''
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
      formData.append('timestamp', this.timestamp)
      const path = this.$router.currentRoute.path === '/admin/posts-new' ? '/api/posts' : '/api/companies'
      axios.post(path, formData).then(this.handleDataSucc)
    },
    handleDataSucc (res) {
      res = res.data
      if (res.success) {
        this.$router.push('/')
      }
    }
  },
  watch: {
    item () {
      this.title = this.item.title
      this.author = this.item.author
      this.content = this.item.content
      this.postLink = this.item.postLink
      this.postImg = this.item.postImg
      this.timestamp = this.item.timestamp
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
  .input
    box-sizing: border-box
    border: 1px solid $borderColor
    padding: 10px
    margin-bottom: 15px
    box-shadow: $boxShadow
  .input-title
    width: 60%
    float: left
  .input-author
    width: 35%
    float: right
  .input-link
    width: 100%
  .img-label
    color: #666
  .input-file
    width: 40%
  .input-date
    width: 40%
  .date-label
    color: #666
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
