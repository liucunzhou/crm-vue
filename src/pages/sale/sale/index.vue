<template>
    <el-main>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>订单管理</el-breadcrumb-item>
        <el-breadcrumb-item>出售订单</el-breadcrumb-item>
      </el-breadcrumb>
      <el-table :data="tableData"  class="table100">>
        <template v-for="row in tableFields">
          <template v-if="row.id != 'operation'">
            <el-table-column :key="row.id" :prop="row.id" :label="row.label" :width="row.width"></el-table-column>
          </template>
          <template v-else>
             <el-table-column :key="row.id" :label="row.lable" width="row.width">
              <template slot-scope="scope">
                <template v-for="btn in row.buttons">
                  <el-button :key="btn.label" @click="actions(scope.row, btn.action)" :type="btn.type" :size="btn.size">{{btn.label}}</el-button>
                </template>
              </template>
            </el-table-column>
          </template>
        </template>
      </el-table>
    </el-main>
</template>

<style>
.table-100{
  width: 100%;
}
</style>
<script>
export default {
  name: "Main",
  data() {
    return {
      tableFields: [],
      tableData: []
    };
  },
  created: function() {
    this.getDataList();
  },
  methods: {
    jumpTo(router) {
      alert(router);
      this.$router.push(router);
    },
    getDataList() {
        let that = this;
        let url =  this.host + '/api/sale.sale/index';
        this.axios.post(url, {}).then(function (response) {
          let result = response.data;
          that.tableFields = result.data.fields;
          that.tableData = result.data.list;
        });
    },
    actions(row, action) {
      console.log(row, action);
      alert('aa');
    }
  }
};
</script>
