<template>
  <div>
    <Header></Header>
    <List></List>
    <Idea></Idea>
    <Swiper></Swiper>
  </div>
</template>

<script>
import Header from './header'
import List from './list'
import Idea from './idea'
import Swiper from './swiper'
export default {
  name: 'TravalIndex',
  components: {
    Header,
    List,
    Idea,
    Swiper
  }
}
</script>

<style lang="stylus" scoped>

</style>
