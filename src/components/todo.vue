<template>
  <div>
  <div class="back">
    <router-link to="/person">
      <i class="el-icon-arrow-left"></i>
    </router-link>
  </div>
  <div class="todo">
    <p>
        Welcome：{{name}}！
    </p>
      <el-input
        v-model="todo"
        placeholder="请输入待办事项"
        @keyup.enter.native="addTodos"
      >
      </el-input>
      <el-tabs>
        <el-tab-pane label="待办事项" name="first">
          <el-table  :data="tableData"  border class="table">
            <el-table-column
              prop="things"
              label="待办事项"
              style="width: 30%"
            >
            </el-table-column>
            <el-table-column
              label="操作"
              style="width: 20%">
              <template slot-scope="scope">
                <el-button type="text" size="small" @click="finish(scope.row, alreadyData)">完成</el-button>
                <el-button type="text" size="small" @click="deleteRow(scope.$index, tableData)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="已完成事项" name="second">
          <el-table  :data="alreadyData"  border class="table">
            <el-table-column
              prop="things"
              label="完成事项"
              style="width: 50%"
            >
            </el-table-column>
          </el-table>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ToDo',
  data: function () {
    return {
      name: 'LiuYunxiang',
      todo: '',
      tableData: [],
      alreadyData: []
    }
  },
  methods: {
    addTodos: function () {
      if (this.todo === '') {
        alert('请加入待办事项')
      } else {
        let things = {
          things: this.todo
        }
        this.tableData.push(things)
        this.todo = ''
        this.$message({
          type: 'success',
          message: '添加成功'
        })
      }
    },
    deleteRow (index, rows) {
      rows.splice(index, 1)
      this.$message({
        type: 'success',
        message: '任务删除'
      })
    },
    finish (rows, data) {
      data.push(rows)
      this.$message({
        type: 'success',
        message: '任务完成'
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.todo
  width 50%
  margin 5px auto
.back
  width 100%
  height 1rem
.el-icon-arrow-left
  float left
.table
  margin 10px auto
</style>
