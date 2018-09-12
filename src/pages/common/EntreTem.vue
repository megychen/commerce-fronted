<template>
  <div>
    <!-- <div class="title">新增商会新闻专题</div> -->
    <input class="input input-name" placeholder="姓名..." v-model="name">
    <input class="input input-title" placeholder="商会头衔..." v-model="title">
    <input class="input input-company" placeholder="公司或行业描述..." v-model="company">
    <mavonEditor v-model="description" ref="md"  @imgAdd="handleAddImg"/>
    <div>
      <input type="file" class="input input-file" @change="handleFileChange" name="avatar">
      <span class="img-label">(上传图片)</span>
      <div class="current-image" v-if="avatar">
        目前封面图
        <img class="image" :src="avatar">
      </div>
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
import {setLocalStorageInfo} from 'api/localstorage'

export default {
  name: 'EntreTemplate',
  components: {
    mavonEditor
  },
  props: {
    item: {
      type: Object
    },
    flag: {
      type: String
    }
  },
  data () {
    return {
      name: '',
      title: '',
      company: '',
      description: '',
      avatar: '',
      currentImg: '',
      pos: 0,
      errors: []
    }
  },
  methods: {
    checkForm () {
      this.errors = []
      if (this.name && this.title && this.company && this.avatar) {
        return true
      }

      if (!this.name) {
        this.errors.push('缺少企业家名称')
      }

      if (!this.title) {
        this.errors.push('缺少企业家商会头衔')
      }

      if (!this.company) {
        this.errors.push('缺少企业家公司名称')
      }

      if (!this.avatar) {
        this.errors.push('缺少企业家图片')
      }
    },
    handleFileChange (e) {
      this.avatar = e.target.files[0]
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
        formData.append('name', this.name)
        formData.append('title', this.title)
        formData.append('company', this.company)
        formData.append('description', this.description)
        formData.append('avatar', this.avatar)
        formData.append('currentImg', this.currentImg)
        setLocalStorageInfo(`${this.flag}`, true)
        this.$emit('submit', formData)
      }
    }
  },
  watch: {
    item () {
      this.name = this.item.name
      this.title = this.item.title
      this.company = this.item.company
      this.description = this.item.description
      this.avatar = this.item.avatar
      this.currentImg = this.item.avatar
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
  .input-name
    width: 48%
    float: left
  .input-title
    width: 48%
    float: right
  .input-company
    width: 100%
    margin: 0
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
