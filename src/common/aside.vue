<template>
  <el-aside class="side-left">
    <el-menu class="aside-menu">
      <template v-for="menu in menus">
        <el-submenu :key="menu.title" :index="menu.title">
          <template slot="title">
            <i :class="menu.icon"></i>
            {{menu.title}}
          </template>
          <el-menu-item-group>
              <template v-for="submenu in menu.items">
                <el-menu-item :key="submenu.title" :index="submenu.title" @click="jumpTo(submenu.path)">{{submenu.title}}</el-menu-item>
              </template>
          </el-menu-item-group>
        </el-submenu>
      </template>
    </el-menu>
  </el-aside>
</template>
<style>
.side-left {
  width: 200px;
  height: 100vh;
  text-align: left;
   background:#303133
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}

.aside-menu{
    height: 100vh;
   
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
  created: function() {
    this.getDataList();
  },
  methods: {
    jumpTo(router) {
      this.$router.push(router);
    },
    getDataList() {
        let that = this;
        let url =  this.host + '/api/auth.menu/index';
        this.axios.post(url, {}).then(function (response) {
          let result = response.data;
          that.menus = result.data.menus;
        });
    },
  }
};
</script>
