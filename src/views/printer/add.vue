<template>
<div class="t-step">
  <el-card>
    <el-steps :active="active" finish-status="success" align-center>
      <el-step title="填写收件人"></el-step>
      <el-step title="填写寄件人"></el-step>
      <el-step title="填写商品信息"></el-step>
    </el-steps>

    <receive-man></receive-man>

  </el-card>
</div>
</template>

<script/>

<style lang="scss" scoped>
.t-step {
    padding: 30px 200px;
}
</style>
