<template>
  <div>
    <Header></Header>
    <List></List>
    <Idea></Idea>
  </div>
</template>

<script>
import Header from './header'
import List from './list'
import Idea from './idea'
export default {
  name: 'TravalIndex',
  components: {
    Header,
    List,
    Idea
  }
}
</script>

<style lang="stylus" scoped>

</style>
