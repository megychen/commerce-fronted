<template>
  <div class="news">
    <div class="main">
      <h2 class="sh_tit">
        <span>企业家风采</span>
        <router-link class="detail" to="/fengcai/entrepreneurs">更多</router-link>
      </h2>
      <ul class="content">
        <li class="member" v-for="item of entrepreneurs" :key='item.id' >
          <a class="pic-wraper" :href="'/#/entrepreneurs/' + item._id"><img class="pic" :src="item.avatar" ></a>
          <a :href="'/#/entrepreneurs/' + item._id">
            <div class="text">
              <span class="name">{{item.name}}</span>
              <p class="title">{{item.company}}</p>
            </div>
          </a>
        </li>
      </ul>
      <h2 class="sh_tit">
        <span>企业风采</span>
        <router-link class="detail" to="/fengcai/companies">更多</router-link>
      </h2>
      <ul class="com-content">
        <li class="company" v-for="item of companies" :key='item.id' >
          <a  :href="link(item)" class="compic-wraper">
            <img class="com-pic" :src="item.postImg" >
          </a>
          <a :href="link(item)">
            <div class="com-intro">
              <div class="com-name">{{item.title}}</div>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Entrepreneur',
  props: {
    companies: {
      type: Array
    },
    entrepreneurs: {
      type: Array
    }
  },
  methods: {
    link (item) {
      return item.postLink ? item.postLink : `/#/companies/${item._id}`
    }
  }
}
</script>

<style lang="stylus" scoped>
 @import '~styles/variables.styl'
 @import '~styles/mixins.styl'

.news
  width: 1200px
  margin: 20px auto
  .main
    overflow: hidden
    margin-left: 0
    background: #fff
    .sh_tit
      overflow: hidden
      height: 40px
      line-height: 40px
      padding: 0 15px
      span
        float: left
        font-size: 17px
        color: #333
        border-left: 3px solid #C94834
        height: 17px
        line-height: 17px
        margin-top: 10px
        padding-left: 10px
        font-family: $fontFamily
        letter-spacing: 1px
      .detail
        float: right
        font-size: 14px
        color: #C94834
        font-family: $fontFamily
    .content
      padding: 14px 18px
      display: flex
      justify-content: space-between
      .member
        width: 16%
        .pic-wraper
          background: #eee
          display: inline-block
          width: 100%
          height: 0
          padding-bottom: 100%;
          overflow hidden
          .pic
            width: 100%
      .text
        padding: 20px 10px 0
        color: #666
        .name
          font-size: 18px
          font-weight: 600
          font-family: $fontFamily
        .title
          margin: 8px 0
          line-height: 22px
          font-family: $fontFamily
    .com-content
      padding: 14px 18px
      display: flex
      justify-content: space-around
      .company
        width: 24%
        .compic-wraper
          display: inline-block
          width: 100%
          height: 0
          padding-bottom: 66.67%
          overflow: hidden
          .com-pic
            width: 100%
        .com-intro
          background: rgba(100, 100 ,100, 0.9)
          position: relative
          top: -40px
          .com-name
            color: #EEB345
            font-family: $fontFamily
            line-height: 38px
            height: 38px
            text-align: center
            font-size: 16px
            font-weight: 600
            ellipsis ()
</style>
