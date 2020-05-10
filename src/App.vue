<template>
  <div id="app">
    <el-container>
      <Aside></Aside>
      <el-container class="right-side">
        <el-header>
          <el-menu
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
            <el-menu-item index="1">处理中心</el-menu-item>
            <el-submenu index="2">
              <template slot="title">我的工作台</template>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
              <el-menu-item index="2-3">选项3</el-menu-item>
            </el-submenu>
            <el-menu-item index="3">消息中心</el-menu-item>
            <el-submenu index="4" class="menu-user">
              <template slot="title">您好,管理员</template>
              <el-menu-item index="4-1">个人中心</el-menu-item>
              <el-menu-item index="4-2">修改面</el-menu-item>
              <el-menu-item index="4-3">退出</el-menu-item>
            </el-submenu>
          </el-menu>
        </el-header>
        <router-view></router-view>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Aside from "./common/aside.vue";

export default {
  name: "App",
  components: {
    Aside: Aside
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
html,
body {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.side-left {
  width: 230px;
  text-align: left;
}
.el-header {
  background-color: #545c64;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
.right-side {
  height: 100vh;
}

.el-menu--horizontal>.el-submenu.menu-user{
    float:right;
}
</style>
