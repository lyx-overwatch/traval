const Sequelize = require('sequelize') // 引入sequelize

// 使用url连接的形式进行连接
const Todolist = new Sequelize('mysql://root:root@localhost/todo', {
  define: {
    timestamps: false // 取消Sequelzie自动给数据表加入时间戳（createdAt以及updatedAt）
  }
})

module.exports = {
  Todolist // 将Todolist暴露出接口方便Model调用
}
