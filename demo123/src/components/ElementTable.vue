<template>
  <div class="elementTable" style="width: 500px">
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="个人中心"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="智能订舱"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="商城首页">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: "ElementTable",
    data() {
      return {
        // 表格数据
        tableData: [{
          date: 10,
          name: 15,
          address: 20
        }]
      }
    },
    mounted() {
      this.timer = setInterval(this.get, 1000);
    },
    beforeDestroy() {
      clearInterval(this.timer);
    },
    methods: {
      // 改变表格数据
      get() {
        this.tableData = this.tableData.map(() => {
          return {
            date: this.numDel(),
            name: this.numDel(),
            address: this.numDel()
          };
        });
      },
      // 数字处理
      numDel() {
        return (Math.random() * 10).toFixed(2);
      }
    },
  }
</script>

<style scoped>

</style>
