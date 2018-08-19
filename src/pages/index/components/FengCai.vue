<template>
  <div class="news">
    <div class="main">
      <h2 class="sh_tit">
        <span>会员风采</span>
        <router-link class="detail" to="/intro">更多</router-link>
      </h2>
      <ul class="content">
        <li class="member" v-for="item of memberList" :key='item.id' >
          <a href="/"><img class="pic" :src="item.imgUrl" ></a>
          <a href="/">
            <div class="text">
              <span class="name">{{item.name}}</span>
              <p class="title">{{item.title}}</p>
            </div>
          </a>
        </li>
      </ul>
      <h2 class="sh_tit">
        <span>企业风采</span>
        <router-link class="detail" to="/intro">更多</router-link>
      </h2>
      <ul class="com-content">
        <li class="company" v-for="item of comList" :key='item.id' >
          <a href="/"><img class="com-pic" :src="item.imgUrl" ></a>
          <a href="/">
            <div class="com-intro">
              <div class="com-name">{{item.name}}</div>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import President from '../../../assets/styles/images/president.jpg'
import MB from '../../../assets/styles/images/MB.jpg'
export default {
  name: 'Entrepreneur',
  data () {
    return {
      memberList: [{
        id: '001',
        imgUrl: President,
        name: '朱荣平',
        title: '万丰奥特控股集团有限公司党委书记、董事局主席'
      }, {
        id: '002',
        imgUrl: President,
        name: '朱荣平',
        title: '万丰奥特控股集团有限公司党委书记、董事局主席'
      }, {
        id: '003',
        imgUrl: President,
        name: '朱荣平',
        title: '万丰奥特控股集团有限公司党委书记、董事局主席'
      }, {
        id: '004',
        imgUrl: President,
        name: '朱荣平',
        title: '万丰奥特控股集团有限公司党委书记、董事局主席'
      }, {
        id: '005',
        imgUrl: President,
        name: '朱荣平',
        title: '万丰奥特控股集团有限公司党委书记、董事局主席'
      }, {
        id: '006',
        imgUrl: President,
        name: '朱荣平',
        title: '万丰奥特控股集团有限公司党委书记、董事局主席'
      }],
      comList: [{
        id: '001',
        imgUrl: MB,
        name: '美特斯邦威'
      }, {
        id: '002',
        imgUrl: MB,
        name: '美特斯邦威'
      }, {
        id: '003',
        imgUrl: MB,
        name: '美特斯邦威'
      }, {
        id: '004',
        imgUrl: MB,
        name: '美特斯邦威'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
 @import '~styles/variables.styl'
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
        .pic
          width: 100%
      .text
        padding-top: 15px
        color: #666
        .name
          font-size: 17px
          font-weight: 600
        .title
          margin: 8px 0
          line-height: 22px
    .com-content
      padding: 14px 18px
      display: flex
      justify-content: space-around
      .company
        width: 24%
        .com-pic
          width: 100%
        .com-intro
          background: rgba(0, 0, 0, 0.3)
          position: relative
          top: -30px
          .com-name
            color: #EEB345
            font-family: $fontFamily
            line-height: 30px
            height: 30px
            text-align: center
            font-size: 16px
</style>
