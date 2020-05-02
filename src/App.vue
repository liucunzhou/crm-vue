<template>
  <div id="app">
      <el-container>
        <Aside></Aside>
        <router-view></router-view>
      </el-container>
  </div>
</template>

<script>
import Aside from "./common/aside.vue";

export default {
  name: "App",
  components: {
    Aside
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
</style>
