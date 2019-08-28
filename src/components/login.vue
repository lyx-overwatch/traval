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
  </div>
</template>

<script>
export default {
  name: 'Login',
  data: function () {
    return {
      input: 'lyx',
      password: '123'
    }
  },
  methods: {
    login: function () {
      if (this.$refs.account.value === 'lyx' && this.$refs.password.value === '123') {
        this.$router.push('/person')
      }
    }
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
  }
</style>
