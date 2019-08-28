<template>
  <div>
  <router-link to="/">
    <i class="el-icon-arrow-left"></i>
  </router-link>
  <el-col>
    <img src="../assets/logo.png">
    <el-button type="success" @click="toTodo" class="button">My TodoList</el-button>
    <el-button type="success" @click="toTraval" class="button">My Traval</el-button>
  </el-col>
  </div>
</template>

<script>
export default {
  name: 'person',
  methods: {
    toTodo: function () {
      this.$router.push('/todo')
    },
    toTraval: function () {
      this.$router.push('/traval')
    }
  }
}
</script>

<style lang="stylus" scoped>
.button
  display block
  width 30%
  margin 5px auto
.el-icon-arrow-left
  float left
</style>
