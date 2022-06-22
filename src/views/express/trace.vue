<template>
  <div class="t-express-trace">
    <el-card>
      <el-input
        class="input-width-large"
        v-model="input"
        placeholder="请输入运单号"
      >
      </el-input>
      <el-button type="primary" icon="el-icon-search" circle></el-button>

      <el-divider><i class="el-icon-truck"></i></el-divider>

      <div class="t-express-trace-timeline">
        <el-timeline>
          <el-timeline-item
            v-for="(activity, index) in activities"
            :key="index"
            :icon="activity.icon"
            :type="activity.type"
            :color="activity.color"
            :size="activity.size"
            :timestamp="activity.timestamp"
          >
            {{ activity.content }}
          </el-timeline-item>
        </el-timeline>
      </div>
    </el-card>
  </div>
</template>

<style lang="scss" scoped>
.t-express-trace {
  height: 100%;
  .el-card {
    height: calc(100% - 100px);
  }
}
</style>

<script>
export default {
  data() {
    return {
      input: "",
      activities: [
        {
          content: "支持使用图标",
          timestamp: "2018-04-12 20:46",
          size: "large",
          type: "primary",
          icon: "el-icon-more",
        },
        {
          content: "支持自定义颜色",
          timestamp: "2018-04-03 20:46",
          color: "#0bbd87",
        },
        {
          content: "支持自定义尺寸",
          timestamp: "2018-04-03 20:46",
          size: "large",
        },
        {
          content: "默认样式的节点",
          timestamp: "2018-04-03 20:46",
        },
      ],
    };
  },
};
</script>