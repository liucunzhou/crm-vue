<template>
  <el-aside class="side-left">
    <el-menu>
      <div :v-for="item in menus" :key="key">
        <el-submenu>
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
      </div>
    </el-menu>
  </el-aside>
</template>
<style>
.side-left {
  width: 200;
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
  name: "Aside",
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
    return {
      menus: menus
    };
  },
  methods: {
    jumpTo(router) {
      this.$router.push(router);
    }
  }
};
</script>
