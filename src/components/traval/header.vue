<template>
  <div>
  <el-row>
    <router-link to="/person">
      <i class="el-icon-arrow-left"></i>
    </router-link>
    <el-input
      placeholder="请输入景点"
      prefix-icon="el-icon-search"
      v-model="input"
      style="width: 80%;float: left"
    >
    </el-input>
    <i
      id="icon"
      class="el-icon-s-check"
      style="height: 100%"
    ></i>
  </el-row>
  <div class="wrapper">
  <swiper :options="swiperOption">
    <swiper-slide><img src="http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/b72df47942fb28fcd7bf481f01e785f5.jpg"></swiper-slide>
    <swiper-slide><img src="http://h-des-activity-fecp.qunarzz.com/h_des_activity_fe_h_des_activity_fe/973dc1ae0da73a58410186df08ff25cb.jpg"></swiper-slide>
    <swiper-slide><img src="http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/a685001bbf5e77a203ff8815e953efbe.jpg_945x288_52b6ec01.jpg"></swiper-slide>
    <swiper-slide><img src="http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20198/a31023dce497dfebeaced802008c6209.jpg"></swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
  </div>
  </div>
</template>
<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'Header',
  data: function () {
    return {
      input: '',
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        autoplay: 2000,
        speed: 1000,
        slidesPreview: 1
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
.el-input
  width 80%
#icon.el-icon-s-check
  display block
  float left
  font-size 1.5rem
.wrapper>>> .swiper-pagination-bullet-active
  background: #black
.wrapper
  margin-top .2rem
  width 100%
  height 30%
  img
    width 100%
    height 100%
.el-icon-arrow-left
  float left
</style>
