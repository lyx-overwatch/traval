<template>
  <div class="swiper">
    <span>热门推荐</span>
    <div class="wrapper">
      <swiper :options="swiperOption">
        <swiper-slide>
          <img data-src="http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/87a224d0349d94a11e97f31aa1aba4f5.jpg_750x200_1f78af87.jpg"
               src=""
               ref="img_one">
        </swiper-slide>
        <swiper-slide>
          <img data-src="https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20198/06e65ace8dce3638e847b04e975489d1.jpg_750x200_a2dcb0a4.jpg"
               src=""
               ref="img_two">
        </swiper-slide>
        <swiper-slide>
          <img data-src="https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/0b0622e5b6ac5fbed3084dd2832e6f8f.jpg_750x200_895321b6.jpg"
               src=""
               ref="img_three">
        </swiper-slide>
        <swiper-slide>
          <img data-src="https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/2df3ba0f23801d7ed5607f4767a18482.jpg_750x200_b4d6aa93.jpg"
               src=""
               ref="img_four">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'Swiper',
  data: function () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        autoplay: 2000,
        speed: 1000,
        slidesPreview: 1
      },
      imgSrc: []
    }
  },
  mounted () {
    window.addEventListener('scroll', this.throttle(this.setImgSrc, 100), false)
  },
  methods: {
    setImgSrc: function () { // 实现图片的懒加载
      let obj = this.$refs
      for (let key in obj) {
        if (this.isInSight(obj[key])) {
          obj[key].src = obj[key].dataset.src
        }
      }
      console.log(this.isInSight(this.$refs.img_one)) // 图片是否在视口中
    },
    getHeight: function (e) {
      let top = e.offsetTop // 获取当前元素的顶部高度
      if (e.offsetParent !== null) { // 判断上层元素是否为空
        top += this.getHeight(e.offsetParent)
      }
      return top // 当前元素到窗口顶部的高度
    },
    isInSight: function (e) {
      const clientHeight = document.documentElement.clientHeight // 窗口高度
      const scrollHeight = document.documentElement.scrollTop + clientHeight // 窗口高度带上滚动高度
      return this.getHeight(e) < scrollHeight
    },
    throttle: function (func, delay) { // 函数节流
      let timeout
      return function () {
        let context = this
        let args = arguments
        if (!timeout) {
          timeout = setTimeout(() => {
            timeout = null
            func.apply(context, args)
          }, delay)
        }
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>

<style lang="stylus" scoped>
.swiper
  display inherit
  span
    display block
    font-size 1rem
    text-align  left
  .wrapper>>> .swiper-pagination-bullet-active
    background: #black
  .wrapper
    margin-top .2rem
    width 100%
    height 30%
    img
      width 100%
      height 100%
</style>
