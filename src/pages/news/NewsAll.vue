<template>
  <div class="content">
    <ul class="postList">
      <li v-for="item of postList" :key="item.id">
        <a class="cover" href="/"><img class="pic" :src="item.imgUrl"></a>
        <div class="text">
          <a class="title" href="/">{{item.title}}</a>
          <p>
            <a href="/">{{item.text}}</a>
          </p>
          <div class="more">
            <span>{{item.time}}</span>
            <button><a class="more-text" href="/">更多</a></button>
          </div>
        </div>
      </li>
      <li class="content-pagination">
        <common-pagination
          :currentPage="currentPage"
          :totalPages="totalPages"
          :total="total"
          :perPage="10"
          @pagechanged="onPageChange"
        >
        </common-pagination>
      </li>
    </ul>
  </div>
</template>

<script>
import President from '../../assets/styles/images/president2.jpg'
import CommonPagination from '../common/Pagination'
export default {
  name: 'NewsDetail',
  components: {
    CommonPagination
  },
  data () {
    return {
      postList: [{
        id: '001',
        imgUrl: President,
        title: '林奇：游族网络将一如既往创造经典，创造下一个辉煌',
        text: '与绝大多数企业家相比，上海市浙江商会副会长、游族网络董事长兼CEO林奇更早地看到了创业所能带来的荣耀与财富。几乎在一年之内，光环与成功都在一张稚气未全部消逝的脸上找到了落脚之处...',
        time: '时间：2018-08-07'
      }, {
        id: '002',
        imgUrl: President,
        title: '林奇：游族网络将一如既往创造经典，创造下一个辉煌',
        text: '与绝大多数企业家相比，上海市浙江商会副会长、游族网络董事长兼CEO林奇更早地看到了创业所能带来的荣耀与财富。几乎在一年之内，光环与成功都在一张稚气未全部消逝的脸上找到了落脚之处...',
        time: '时间：2018-08-07'
      }, {
        id: '003',
        imgUrl: President,
        title: '林奇：游族网络将一如既往创造经典，创造下一个辉煌',
        text: '与绝大多数企业家相比，上海市浙江商会副会长、游族网络董事长兼CEO林奇更早地看到了创业所能带来的荣耀与财富。几乎在一年之内，光环与成功都在一张稚气未全部消逝的脸上找到了落脚之处...',
        time: '时间：2018-08-07'
      }, {
        id: '004',
        imgUrl: President,
        title: '林奇：游族网络将一如既往创造经典，创造下一个辉煌',
        text: '与绝大多数企业家相比，上海市浙江商会副会长、游族网络董事长兼CEO林奇更早地看到了创业所能带来的荣耀与财富。几乎在一年之内，光环与成功都在一张稚气未全部消逝的脸上找到了落脚之处...',
        time: '时间：2018-08-07'
      }, {
        id: '005',
        imgUrl: President,
        title: '林奇：游族网络将一如既往创造经典，创造下一个辉煌',
        text: '与绝大多数企业家相比，上海市浙江商会副会长、游族网络董事长兼CEO林奇更早地看到了创业所能带来的荣耀与财富。几乎在一年之内，光环与成功都在一张稚气未全部消逝的脸上找到了落脚之处...',
        time: '时间：2018-08-07'
      }, {
        id: '006',
        imgUrl: President,
        title: '林奇：游族网络将一如既往创造经典，创造下一个辉煌',
        text: '与绝大多数企业家相比，上海市浙江商会副会长、游族网络董事长兼CEO林奇更早地看到了创业所能带来的荣耀与财富。几乎在一年之内，光环与成功都在一张稚气未全部消逝的脸上找到了落脚之处...',
        time: '时间：2018-08-07'
      }],
      currentPage: 1,
      perPage: 10
    }
  },
  computed: {
    total () {
      return this.postList.length
    },
    totalPages () {
      return Math.ceil(this.postList.length / 10)
    }
  },
  methods: {
    onPageChange (page) {
      console.log(page)
      this.currentPage = page
    }
  }
}
</script>

<style lang="stylus" scoped>
 @import '~styles/variables.styl'
.content
  width: 1024px
  margin: 0 auto
  padding: 20px 0
  display: flex
  .postList
    background: #fff
    padding: 0 18px
    li
      display: flex
      justify-content: space-between
      padding: 14px 0
      border-bottom: 1px solid #eee
      .cover
        display: block
        width: 26%
        .pic
          width: 100%
      .text
        width: 70%
        .title
          display: block
          font-family: $fontFamily
          font-size: 18px
          font-weight: bold
          line-height: 40px
          height: 40px
          color: #666
          letter-spacing : 1px
          margin-bottom: 10px
          &:hover
            color: $bgColor
        p a
          font-family: $fontFamily
          font-size: 14px
          line-height: 28px
          color: #666
          &:hover
            color: $bgColor
        .more
          overflow: hidden
          margin-top: 14px
          span
           float: left
           font-size: 14px
           font-family: $fontFamily
           color: #666
          button
            float: right
            .more-text
              color: #888
              font-size: 14px
              letter-spacing: 1px
              font-family: $fontFamily
              display: inline-block
              border: 1px solid #888
              width: 70px
              height: 26px
              line-height: 28px
              border-radius: 2px
              &:hover
               border: 1px solid $bgColor
               color: $bgColor
    ul .content-pagination
      margin: 20px 0
      padding: 0 30px
</style>
