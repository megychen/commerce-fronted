<template>
  <div>
    <!-- <div class="title">新增商会新闻专题</div> -->
    <input class="input input-name" placeholder="姓名..." v-model="name">
    <input class="input input-title" placeholder="商会头衔..." v-model="title">
    <input class="input input-company" placeholder="公司..." v-model="company">
    <mavonEditor v-model="description" ref="md"  @imgAdd="handleAddImg"/>
    <div>
      <input type="file" class="input input-file" @change="handleFileChange" name="avatar">
      <span class="img-label">(上传图片)</span>
    </div>
    <div class="content-submit" @click="handleBtnSubmit">提交</div>
  </div>
</template>

<script>
import axios from 'axios'
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
export default {
  name: 'EntreTemplate',
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
      name: '',
      title: '',
      company: '',
      description: '',
      avatar: '',
      pos: 0
    }
  },
  methods: {
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
      const formData = new FormData()
      formData.append('name', this.name)
      formData.append('title', this.title)
      formData.append('company', this.company)
      formData.append('description', this.description)
      formData.append('avatar', this.avatar)
      this.$emit('submit', formData)
    }
  },
  watch: {
    item () {
      this.name = this.item.name
      this.title = this.item.title
      this.company = this.item.company
      this.description = this.item.description
      this.avatar = this.item.avatar
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
  .content-submit
    submitBtn()
</style>
