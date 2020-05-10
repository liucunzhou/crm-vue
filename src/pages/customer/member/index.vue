<template>
    <el-main>
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
import Axios from "axios";
import Qs from "qs";
Axios.defaults.headers['Content-Type'] = "application/x-www-form-urlencoded;charset=UTF-8";
Axios.defaults.transformRequest = [obj => Qs.stringify(obj)];

export default {
  name: "Main",
  data() {
    return {
      tableFields: [],
      tableData: []
    };
  },
  created: function(options) {
    console.log('加载了',options);
    this.getDataList();
  },
  methods: {
    jumpTo(router) {
      alert(router);
      this.$router.push(router);
    },
    getDataList() {
        let that = this;
        let url = 'http://dress.net/api/customer.customer/index';
        Axios.post(url, {}).then(function (response) {
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
