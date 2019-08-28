<template>
  <div class="city">
    <div class="head">
      <router-link to="/traval">
        <i class="el-icon-arrow-left"></i>
      </router-link>
      <span>城市选择</span>
    </div>
    <el-input v-model="input" placeholder="请输入城市首字母拼写"></el-input>
    <div class="search-res" v-if="search">
      <div class="item-list" v-for="(city, index) in arr" :key="index" @click="toPlace">{{city}}</div>
    </div>
    <div v-show="!search">
    <div class="list">
      <el-tag type="info">热门城市</el-tag>
      <div v-for="(hotCity, index) in hotCities" :key="index">
        <div class="list-cld"  @click="toPlace">{{hotCity.name}}</div>
      </div>
    </div>
    <div class="cities" ref="wrapper">
      <div>
        <div class="area"  v-for="(city,index) in cities" :key="index">
          <div class="area-title">{{index}}</div>
          <div class="item-list" v-for="(item,index) in city" :key="index">
            <div class="item" @click="toPlace">{{item.name}}</div>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
// import axios from 'axios'
import {getPinFirstCodeToEng} from '../../assets/js/chinesePin.js'
import cityData from '@/assets/city.json'

export default {
  name: 'TravalCity',
  data: function () {
    return {
      input: '',
      search: false,
      hotCities: [],
      cities: {},
      arr: [],
      refreshDelay: {
        type: Number,
        default: 20
      }
    }
  },
  watch: {
    data () {
      setTimeout(() => {
        this.refresh()
      }, this.refreshDelay)
    },
    input: function () {
      let value = this.input.toString()
      if (value) {
        let arr = []
        let firstCode = value.substr(0, 1).toUpperCase()
        for (let index in this.cities) {
          if (firstCode === index) {
            for (let city of this.cities[index]) {
              arr.push(city.name)
            }
          }
        } // cities中将首字母为输入框第一个字母的城市挑选出来
        let res = []
        if (value.length >= 2) {
          for (let i = 0; i < arr.length; i++) {
            for (let j = 1; j < value.length; j++) {
              if (arr[i].length >= value.length) {
                let s = getPinFirstCodeToEng(arr[i][j])
                if (value[j] && value[j].toUpperCase() === s) {
                  res.push(arr[i])
                } else {
                  break
                }
              }
            }
          }
        } else {
          res = arr //  如果输入一个字母，结果就是第一次匹配的结果
        }
        res = Array.from(new Set([...res])) // 去重
        if (res.length < 1) {
          res.push('没有有匹配结果')
        }
        this.arr = res
        if (arr && this.search === true) {
          this.search = true
        } else if (arr && this.search === false) {
          this.search = !this.search
        }
      } else {
        this.search = !this.search
      }
    }
  },
  methods: {
    // getCityInfo: function () {
    //   axios.get('../../../static/city.json')
    //     .then(this.handleInfo)
    // },
    // handleInfo: function (res) {
    //   // const data = res.data.data
    //   const data = cityData.data
    //   if (res.data) {
    //     this.cities = data.cities
    //     this.hotCities = data.hotCities
    //     setTimeout(() => {
    //       this.scroll = new BScroll(this.$refs.wrapper, {
    //         click: true // 设置better-scroll支持原生click事件
    //       })
    //     }, 20)
    //   }
    // },
    getData: function () {
      const data = cityData.data
      if (data) {
        this.cities = data.cities
        this.hotCities = data.hotCities
        setTimeout(() => {
          this.scroll = new BScroll(this.$refs.wrapper, {
            click: true // 设置better-scroll支持原生click事件
          })
        }, 20)
      }
    },
    toPlace: function (e) {
      e = e.target
      let route = '/traval/' + e.innerText
      console.log(route)
      this.$router.push(route)
    }
  },
  created () {
    this.getData() // ajax获取城市列表信息
    document.addEventListener('touchmove', null, {passive: true})
    // 当属性passive的值为true的时候，代表该监听器内部不会调用preventDefault函数来阻止默认滑动行为
  }
}
</script>

<style lang="stylus" scoped>
.city
  position absolute
  margin 0
  padding 0
  top 0
  left 0
  right 0
  bottom 0
  .head
    width 100%
    height 2rem
    background-color lightblue
  .el-input
      display block
      color black
      text-align center
    .el-icon-arrow-left
      float left
    span
      font-size 1rem
  .list
      width 100%
      height 3.4rem
      font-size 1rem
      .el-tag
        display block
        float left
        font-size .8rem
        width 100%
        height 1rem
      .list-cld
        display block
        float left
        width 30%
        height 2rem
        margin-top .2rem
        margin-right .6rem
        background-color gainsboro
  .cities
      position absolute
      top 7.3rem
      left 0
      right 0
      bottom 0
      overflow hidden
  .area
      width 100%
      text-align left
      .area-title
        background-color gainsboro
        font-size 1rem
  .item-list
        line-height 1.5rem
        padding-left .2rem
        font-size 1rem
        background-color #eee
</style>
