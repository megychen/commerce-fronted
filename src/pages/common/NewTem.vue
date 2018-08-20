<template>
  <div>
    <!-- <div class="title">新增商会新闻专题</div> -->
    <input class="input input-title" placeholder="标题..." required v-model="title">
    <input class="input input-author" placeholder="作者..." v-model="author">
    <mavonEditor v-model="content" ref="md"  @imgAdd="handleAddImg"/>
    <input class="input input-link" placeholder="文章链接..." v-model="postLink">
    <div>
      <input type="file" class="input input-file" @change="handleFileChange" name="postImg" required>
      <span class="img-label">(上传封面图片)</span>
      <div class="current-image" v-if="postImg">
        目前封面图
        <img class="image" :src="currentImg">
      </div>
    </div>
    <div>
      <input type="date" class="input input-date" name="timestamp"  v-model="timestamp" required>
      <span class="date-label">(文章日期)</span>
    </div>
    <div class="content-submit" @click="handleBtnSubmit">提交</div>
    <ul class="content-error">
      <li class="error-item" v-for="(error, index) of errors" :key="index">{{error}}</li>
    </ul>
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
      currentImg: '',
      timestamp: '',
      pos: 0,
      errors: []
    }
  },
  methods: {
    checkForm () {
      this.errors = []
      if (this.title && this.author && this.content && this.postImg) {
        return true
      }

      if (!this.title) {
        this.errors.push('缺少文章标题')
      }

      if (!this.author) {
        this.errors.push('缺少文章作者')
      }

      if (!this.content) {
        this.errors.push('缺少文章简介或内容')
      }

      if (!this.postImg) {
        this.errors.push('缺少文章封面图')
      }
    },
    handleFileChange (e) {
      this.postImg = e.target.files[0]
    },
    handleAddImg (pos, file) {
      const formData = new FormData()
      formData.append('imgFile', file)
      this.pos = pos
      axios.post('/api/image', formData)
        .then(this.handleUploadImgSucc)
    },
    handleUploadImgSucc (res) {
      res = res.data
      if (res.success) {
        this.$refs.md.$img2Url(this.pos, res.filePath)
      }
    },
    handleBtnSubmit () {
      if (this.checkForm()) {
        const formData = new FormData()
        formData.append('title', this.title)
        formData.append('author', this.author)
        formData.append('content', this.content)
        formData.append('postLink', this.postLink)
        formData.append('postImg', this.postImg)
        formData.append('currentImg', this.currentImg)
        formData.append('timestamp', this.timestamp)
        this.$emit('submit', formData)
      }
    }
  },
  watch: {
    item () {
      this.title = this.item.title
      this.author = this.item.author
      this.content = this.item.content
      this.postLink = this.item.postLink
      this.currentImg = this.item.postImg
      this.postImg = this.item.postImg
      this.timestamp = this.item.timestamp
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  @import '~styles/mixins.styl'
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
    inputStyl()
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
  .current-image
    width: 200px
    margin: 20px 0
    .image
      margin-top: 5px
      width: 100%
      border: 1px solid $borderColor
  .input-date
    width: 40%
  .date-label
    color: #666
  .content-submit
    submitBtn()
  .content-error
    margin-top: 10px
    list-style-type: square
    list-style-position: inside
    .error-item
      margin-top: 10px
      color: #ff3333
</style>
