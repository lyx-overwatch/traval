<template>
    <div class="idea">
      <span>旅行攻略</span>
      <el-tabs v-model="activeName">
        <el-tab-pane label="暑假去哪儿" name="first">
          <div class="img">
            <img src="https://tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/e9c208ca3f2fa6550bc9f54cfbf1b004.jpg">
            <p>避暑张家界，数不尽的湘西美</p>
          </div>
          <div class="img">
            <img src="https://tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/53b10c55117cd5b006449df8b97c9e76.jpg">
            <p>再忙也要看看世界，马来西亚浪漫之旅</p>
          </div>
          <div class="img">
            <img src="https://tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/4215243616425303cff934857fa13897.jpg">
            <p>从你的全世界路过，圆梦稻城亚丁</p>
          </div>
          <div class="img">
            <img src="https://tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/2cb12a625b4f5cb4d6d9a1f4cd307d65.jpg">
            <p>穿过高山草甸，在青海湖旁发个呆</p>
          </div>
        </el-tab-pane>
        <el-tab-pane label="趣味亲子游" name="second">
          <div class="img">
            <img src="https://tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/7d9b233c71cad13ded0013f9c9cec635.jpg">
            <p>驾一叶扁舟，寻瓯江往事</p>
          </div>
          <div class="img">
            <img src="https://tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/fd16ccffb2e2376ff370bda3bebebd71.jpg">
            <p>不负好时光，似乎太安逸</p>
          </div>
          <div class="img">
            <img src="https://tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/c2ae82fcc9fa11fa253e5919c49bcfbf.jpg">
            <p>探访日本，一部家庭旅行画册</p>
          </div>
          <div class="img">
            <img src="https://tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/5a11974656794b4715156501be10c1b7.jpg">
            <p>厦门，带娃出门与幸福同行</p>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
</template>

<script>
export default {
  name: 'Idea',
  data: function () {
    return {
      activeName: 'first'
    }
  }
}
</script>

<style lang="stylus" scoped>
.idea
  margin-top 1rem
  text-align left
  font-size .8rem
  span
    font-size 1rem
  .img
    float left
    width 50%
    height 9rem
    img
      width 95%
      height 7rem
    p
      height 2rem
      margin 0
      font-size .5rem
</style>
