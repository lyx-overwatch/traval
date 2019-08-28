<template>
    <div class="list">
      <router-link to="/traval/city">
      <div class="item">
        <img src="http://s.qunarzz.com/homenode/images/touchheader/piao.png"><p>景点门票</p>
      </div>
      </router-link>
      <div class="item"><img src="http://s.qunarzz.com/homenode/images/touchheader/train.png"><p>火车票</p></div>
      <div class="item"><img src="http://s.qunarzz.com/homenode/images/touchheader/package.png"><p>度假</p></div>
      <div class="item"><img src="http://s.qunarzz.com/homenode/images/touchheader/flight.png"><p>机票</p></div>
      <div class="item"><img src="http://s.qunarzz.com/homenode/images/touchheader/hotel.png"><p>酒店</p></div>
    </div>
</template>

<script>
export default {
  name: 'List'
}
</script>

<style lang="stylus" scoped>
.list
  width 100%
  height 4rem
  font-size .8rem
  .item
    width 20%
    height 100%
    float left
    img
      display block
      width 90%
      height 70%
p
  margin 0
  padding 0
</style>
