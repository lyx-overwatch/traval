const user = require('../operate/user')
const getUserInfo = function* () {
  const id = this.params.id // 获取url里传过来的参数里的id
  const result = yield user.getUserById(id) // 通过yield “同步”地返回查询结果
  this.body = result // 将请求的结果放到response的body里返回
}

module.exports = {
  getUserInfo // 把获取用户信息的方法暴露出去
}
