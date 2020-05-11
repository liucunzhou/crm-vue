<template>
  <el-main>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/">档期管理</a></el-breadcrumb-item>
    </el-breadcrumb>
    
    <el-row>
      <el-col :span="12">
        <div class="grid-content">
          <el-calendar>
            <template slot="dateCell" slot-scope="{date, data}">
              <p class="date" :class="data.isSelected ? 'is-selected' : ''">{{data.day.split('-')[2]}}</p>
              <p class="detail">{{schedule[data.day]? '已占' : ''}}</p>
            </template>
          </el-calendar>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple-light"></div>
      </el-col>
    </el-row>
  </el-main>
</template>
<style>
.is-selected {
  color: #1989fa;
}
.el-calendar-day {
  position: relative;
}
.el-calendar-day .date {
  font-size: 12px;
}
.el-calendar-day .detail {
  position: absolute;
  font-size: 12px;
  bottom: 12px;
  right: 12px;
}
</style>
<script>
export default {
  data() {
    let schedule = {
      "2020-05-11": "11",
      "2020-05-12": "12",
      "2020-05-13": "12"
    };
    return {
      schedule: schedule
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>