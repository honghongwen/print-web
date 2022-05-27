<template>
  <el-container class="home_container">
  <el-aside width="200px" style="background-color: red">
    <el-menu :default-openeds="['1','2','3']">
        <el-menu-item class="el-icon-s-home"> 首页 </el-menu-item>

        <el-submenu index="1">
          <template slot="title"><i class="el-icon-s-data"></i>数据统计</template>
            <el-menu-item class="home_menu"> 大屏展示 </el-menu-item>
            <el-menu-item class="home_menu"> 订单统计 </el-menu-item>
            <el-menu-item class="home_menu"> 运单统计 </el-menu-item>
        </el-submenu>

        <el-submenu index="2">
          <template slot="title"><i class="el-icon-s-cooperation"></i>基本业务</template>
            <el-menu-item class="home_menu"> 订单查询 </el-menu-item>
            <el-menu-item class="home_menu"> 运单查询 </el-menu-item>
            <el-menu-item class="home_menu"> 问题件 </el-menu-item>
        </el-submenu>

        <el-submenu index="3">
          <template slot="title"><i class="el-icon-s-tools"></i>个人设置</template>
            <el-menu-item class="home_menu"> 权限设置 </el-menu-item>
            <el-menu-item class="home_menu"> 修改密码 </el-menu-item>
            <el-menu-item class="home_menu"> 个人信息 </el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>
  </el-container>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      msg: "欢迎来到Home页面",
      token: this.$store.state.token.token,
    };
  },
};
</script>

<style scoped>
.home_aside {
    background-color: rgb(54, 116, 223)
}
.el-menu-item {


}
</style>