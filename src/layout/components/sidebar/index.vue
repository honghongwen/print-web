<template>
  <div class="t-sidebar">
    <el-scrollbar>
      <el-menu>
        <router-link to="/">
         <el-menu-item>
            <i class="el-icon-s-home"></i>首页
         </el-menu-item>
        </router-link>

        <el-submenu index="1">
          <template slot="title"><i class="el-icon-s-data"></i>报表统计</template>
          <router-link to="/analyze/day">
            <el-menu-item index="1-1">
                日报
            </el-menu-item>
          </router-link>
          <router-link to="/analyze/month">
            <el-menu-item index="1-2">
                月报
            </el-menu-item>
          </router-link>
        </el-submenu>

        <el-submenu index="2">
          <template slot="title"><i class="el-icon-s-platform"></i>业务</template>
          <router-link to="/biz/print">
            <el-menu-item index="2-1">
                面单打印
            </el-menu-item>
          </router-link>
          <router-link to="/biz/trace">
            <el-menu-item index="2-2">
                物流跟踪
            </el-menu-item>
          </router-link>
        </el-submenu>

        <el-submenu index="3">
          <template slot="title"><i class="el-icon-s-custom"></i>基础设置</template>
          <router-link to="/analyze/day">
            <el-menu-item index="1-1">
                快递单模版
            </el-menu-item>
          </router-link>
          <router-link to="/analyze/month">
            <el-menu-item index="1-2">
                常用收件人
            </el-menu-item>
          </router-link>
          <router-link to="/analyze/month">
            <el-menu-item index="1-2">
                常用寄件人
            </el-menu-item>
          </router-link>
        </el-submenu> 

        <el-submenu index="4">
          <template slot="title"><i class="el-icon-s-tools"></i>系统管理</template>
          <router-link to="/analyze/day">
            <el-menu-item index="1-1">
                用户管理
            </el-menu-item>
          </router-link>
          <router-link to="/analyze/month">
            <el-menu-item index="1-2">
              客户管理
            </el-menu-item>
          </router-link>
          <router-link to="/analyze/month">
            <el-menu-item index="1-2">
                常用寄件人
            </el-menu-item>
          </router-link>
        </el-submenu> 
      </el-menu>
    </el-scrollbar>
  </div>
</template>