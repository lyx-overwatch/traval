<template>
  <div id="login">
    <img src="../assets/logo.png">
    <form>
    <el-input v-model="input"
              placeholder="请输入账户名"
              class="input"
              ref="account">

    </el-input>
    <el-input v-model="password"
              placeholder="请输入密码"
              class="input"
              show-password
              ref="password">

    </el-input>
    <el-button type="primary" class="login" @click="login">登录</el-button>
    </form>
    <Check :check = 'check' v-on:success="success" v-on:cancel="checkChange"></Check>
  </div>
</template>

<script>
import Check from './check'
export default {
  name: 'Login',
  data: function () {
    return {
      input: 'lyx',
      password: '123',
      check: false
    }
  },
  methods: {
    login: function () {
      if (this.$refs.account.value === 'lyx' && this.$refs.password.value === '123') {
        this.check = true
      }
    },
    success: function (succ) {
      if (succ) {
        this.$message({
          type: 'success',
          message: '验证成功',
          duration: 1000
        })
        setTimeout(() => {
          this.$router.push('/person')
        }, 1000)
      }
    },
    checkChange: function () {
      this.check = false
    }
  },
  components: {
    Check
  }
}
</script>

<style>
  .input {
    display: block;
    width: 35%;
    margin: 10px auto;
  }
  .login {
    width: 35%;
    height: 100%;
    overflow: hidden;
    position: relative;
  }
</style>
