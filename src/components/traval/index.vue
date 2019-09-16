<template>
  <div>
    <Header></Header>
    <List></List>
    <Idea></Idea>
    <ImageLazyLoad></ImageLazyLoad>
  </div>
</template>

<script>
import Header from './header'
import List from './list'
import Idea from './idea'
import ImageLazyLoad from './lazyload'
export default {
  name: 'TravalIndex',
  components: {
    Header,
    List,
    Idea,
    ImageLazyLoad
  }
}
</script>

<style lang="stylus" scoped>

</style>
