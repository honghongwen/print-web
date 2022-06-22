<template>
<div class="t-receive-man">
  <el-form ref="form" :model="form" label-width="80px">
    <el-form-item label="姓名" :required="true">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="手机">
      <el-input v-model="form.phone"></el-input>
    </el-form-item>
    <el-form-item label="电话">
      <el-input v-model="form.mobile"></el-input>
    </el-form-item>
    <el-form-item label="公司">
      <el-input v-model="form.mobile"></el-input>
    </el-form-item>
    <el-form-item label="地址" :required="true">
      <el-input v-model="form.address"></el-input>
    </el-form-item>
    <el-form-item label="添加到常用收件人">
      <el-switch v-model="form.delivery"></el-switch>
    </el-form-item>

    <div class="t-next-btn">
      <el-button @click="next" type="primary">下一步，填写常用寄件人</el-button>
    </div>
  </el-form>
</div>
</template>


<script>
export default {
  data() {
    return {
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.t-receive-man {
    padding: 30px 100px;

    .el-form-item__label {
        width: 200px;
    }

    .t-next-btn {
        width: 150px;
        margin: auto;
    }
}
</style>
