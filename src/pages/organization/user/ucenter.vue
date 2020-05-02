<template>
  <el-container>
    <el-aside class="side-left">
      <el-menu>
          <el-submenu :v-for="item in menus" :key="key">
            <template slot="title">
              <i class="el-icon-message"></i>
              {{row.title}}
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="1-1" @click="jumpTo('/form')">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
      </el-menu>
    </el-aside>
    <el-container class="right-side">
      <el-header style="text-align: right; font-size: 12px">
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>王小虎</span>
      </el-header>

      <el-main>
        <el-table :data="tableData">
          <el-table-column prop="date" label="日期" width="140"></el-table-column>
          <el-table-column prop="name" label="姓名" width="120"></el-table-column>
          <el-table-column prop="address" label="地址"></el-table-column>
        </el-table>
      </el-main>
    </el-container>
  </el-container>
</template>
<style>
.side-left {
  width: 230px;
  text-align: left;
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}

.right-side {
  height: 100vh;
}
</style>

<script>
export default {
  name: "Main",
  data() {
    let menus = [
      {
        icon: "el-icon-message",
        title: "客资管理",
        items: [
          {
            title: "客资列表",
            icon: "el-icon-message",
            path: "/customer/index"
          },
          {
            title: "回访列表",
            icon: "el-icon-message",
            path: "/visit/index"
          },
          {
            title: "进店列表",
            icon: "el-icon-message",
            path: "/into/index"
          }
        ]
      },
      {
        icon: "el-icon-message",
        title: "组织架构",
        items: [
          {
            title: "部门管理",
            icon: "el-icon-message",
            path: "/department/index"
          },
          {
            title: "用户管理",
            icon: "el-icon-message",
            path: "/user/index"
          }
        ]
      }
    ];
    const item = {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄"
    };
    return {
      menus: menus,
      tableData: Array(15).fill(item)
    };
  },
  methods: {
    jumpTo(router) {
      alert(router);
      this.$router.push(router);
    }
  }
};
</script>
