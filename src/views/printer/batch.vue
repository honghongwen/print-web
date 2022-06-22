<template>
<div class="t_batch_import">
  <el-card>
    <el-upload class="upload-demo" drag action="https://jsonplaceholder.typicode.com/posts/" multiple>
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      <div class="el-upload__tip" slot="tip">
        <span class="t_download_template">下载示例文件</span>
        <span class="t_download_link" @click="fill()">查看填写方法</span>
      </div>
    </el-upload>

    <div class="t_batch_fill" v-show="showImg"></div>
  </el-card>
</div>
</template>
<script>
export default {
  data() {
    return {
      showImg: false,
    };
  },
  methods: {
    fill() {
      this.showImg = !this.showImg;
    },
  },
};
</script>

<style lang="scss" scoped>
.t_batch_import {
    .upload-demo {
        .el-upload__tip {
            display: flex;
            width: 360px;
            justify-content: space-between;
            color: blue;
            font-size: 14px;
            .t_download_link {
                cursor: pointer;
            }
        }
    }
    .t_batch_fill {
        margin-top: 50px;
        width: 100%;
        height: 400px;
        background-image: url("../../assets/image/bg.jpg");
        background-position: center center;
    }
}
</style>
