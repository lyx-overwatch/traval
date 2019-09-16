<template>
    <div class="check" v-show="check">
      <template>
        <el-popover
          popper-class="my-check"
          ref="popover"
          trigger="manual"
          v-model="check"
        >
          <div class="check-img">
            <div class="v-img">
              <canvas id="creatImg"></canvas>
              <canvas id="sliderBlock"></canvas>
            </div>
            <div class="slider">
              <div class="track" id="track">
                {{ tips }}
              </div>
              <div class="button el-icon-s-grid" @touchstart.prevent="drag"></div>
            </div>
            <div class="operation">
              <span
                        title="关闭验证码"
                        @click="change"
                        class="el-icon-circle-close el-icon"
              >
              </span>
              <span
                title="刷新验证码"
                @click="initImg"
                class="el-icon-refresh-left el-icon"
              >
              </span>
            </div>
          </div>
        </el-popover>
      </template>
    </div>
</template>

<script>
export default {
  name: 'Check',
  props: {
    check: Boolean
  },
  data: function () {
    return {
      visible: true,
      tips: '请滑动左边滑块完成拼图',
      succ: false,
      refreshDelay: {
        type: Number,
        default: 20
      }
    }
  },
  mounted () {
    this.drawImg()
  },
  methods: {
    drawImg: function () {
      let canvas = document.getElementById('creatImg')
      let context = canvas.getContext('2d')
      let width = canvas.width
      let height = canvas.height
      let slider = document.getElementById('sliderBlock')
      let scontext = slider.getContext('2d')
      // 每次刷新都需要重新绘制
      canvas.height = height
      slider.height = height
      let imgSrc = require('../assets/img/bg.jpg') // 这里不能直接赋值src，需要require
      let img = new Image()
      img.style.objectFit = 'cover'
      img.src = imgSrc
      img.onload = function () {
        context.drawImage(img, 0, 0, width, height)
        scontext.drawImage(img, 0, 0, width, height)
      }
      let random = Math.random()
      let param1 = {
        'x': 10 + 20 * random,
        'y': 50,
        'w': 40,
        'r': 9
      }
      let param2 = {
        'x': 210 + 20 * random,
        'y': 50,
        'w': 40,
        'r': 9
      }
      this.drawBlock(context, param2, 'fill') // 填充滑块
      this.drawBlock(scontext, param1, 'clip') // 裁剪滑块
    },
    drawBlock: function (cxt, param, type) { // 绘制滑块
      let x = param.x
      let y = param.y
      let w = param.w
      let r = param.r
      let pi = Math.PI
      cxt.beginPath()
      cxt.moveTo(x, y)
      cxt.arc(x + (w + 5) / 2, y, r, -pi, 0, true)
      cxt.lineTo(x + w + 5, y)
      cxt.arc(x + w + 5, y + w / 2, r, 1.5 * pi, 0.5 * pi, false)
      cxt.lineTo(x + w + 5, y + w)
      cxt.arc(x + (w + 5) / 2, y + w, r, 0, pi, false)
      cxt.lineTo(x, y + w)
      cxt.arc(x, y + w / 2, r, 0.5 * pi, 1.5 * pi, true)
      cxt.lineTo(x, y)
      cxt.lineWidth = 1
      cxt.fillStyle = 'rgba(255, 255, 255, 0.5)'
      cxt.strokeStyle = 'rgba(255, 255, 255, 0.5)'
      cxt.stroke()
      cxt[type]()
      cxt.globalCompositeOperation = 'xor'
      cxt.closePath()
    },
    initImg: function () {
      this.drawImg()
    },
    drag: function (e) {
      let vue = this // 获取vue对象
      let ele = e.target
      ele.ontouchstart = function (event) {
        let that = this // 获取当前dom对象
        let x = event.changedTouches[0].clientX
        let slider = document.getElementById('sliderBlock')
        const X = 200
        let inside = false
        let insideX = 10
        let movex = 0
        let move = function (e) {
          movex = e.changedTouches[0].clientX - x // 光标移动距离
          that.style.left = movex > 0 && movex <= 220 ? movex + 'px' : ''
          slider.style.left = movex > 0 && movex <= 220 ? movex + 'px' : ''
        }
        let update = function () {
          document.removeEventListener('touchmove', move)
          document.removeEventListener('touchend', update)
          insideX = X - movex
          if (insideX >= 0 && insideX <= 7) {
            inside = true
          }
          if (!inside) {
            that.style.left = ''
            slider.style.left = ''
            vue.tips = '验证失败'
            setTimeout(() => {
              vue.tips = '请滑动左边滑块完成拼图'
            }, 1000)
          } else {
            vue.tips = '验证成功'
            vue.succ = true
          }
        }
        document.addEventListener('touchmove', move)
        document.addEventListener('touchend', update)
      }
    },
    change: function () {
      this.visible = false
      this.$emit('cancel', this.visible)
    }
  },
  watch: {
    data () {
      setTimeout(() => {
        this.refresh()
      }, this.refreshDelay)
    },
    succ: function () {
      if (this.succ) {
        this.$emit('success', this.succ) // 图片验证成功，通知父组件进行路由跳转
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.check
  position absolute
  width 15rem
  height 15rem
  top 10%
  left 50%
  margin-left -7.5rem
.check >>>.el-popover // >>>scoped穿透,用于局部修改引入的第三方组件样式
  padding 0
  position relative
  .check-img
      width 100%
      .v-img
        position relative
        width 100%
        #creatImg
          width 100%
          height 8rem
        #sliderBlock
          width 100%
          height 8rem
          position absolute
          z-index 4000
          left 0
      .slider
        position relative
        width 100%
        height 3rem
        display flex
        align-items center
        justify-content flex-start
        .track
          width 90%
          margin-left 1.3rem
          height 1.5rem
          background-color gainsboro
          border-radius .5rem
          text-align center
        .button
          position absolute
          left 0
          line-height 1.5rem
          width 1.3rem
          font-size 1.3rem
          background beige
          box-shadow #b9bdc8 0 0 3px
          border-radius 50%
          cursor pointer
  .el-icon
    cursor pointer
</style>
