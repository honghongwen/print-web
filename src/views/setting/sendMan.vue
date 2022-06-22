<template>
  <div>
    <el-card>
      <div class="t_query_group">
        <div class="flex-1">
          <span class="t-query-group-text">公司：</span>
          <el-input placeholder="请输入公司名" v-model="orderNo" class="input-width" clearable>
          </el-input>
        </div>
        <div class="flex-2">
          <span class="t-query-group-text">寄件人：</span>
          <el-input placeholder="请输入寄件人" v-model="orderNo" class="input-width" clearable>
          </el-input>
        </div>
        <div class="flex-3">
          <span class="t-query-group-text">电话：</span>
          <el-input placeholder="请输入电话" v-model="orderNo" class="input-width" clearable>
          </el-input>
        </div>
        <div class="flex-4">
          <span class="t-query-group-text">地址：</span>
          <el-input placeholder="请输入地址" v-model="orderNo" class="input-width" clearable>
          </el-input>
        </div>
      </div>
      <div class="t_btn_group">
        <div class="t_btn_group_left">
          <el-button type="primary" icon="el-icon-s-custom" @click="dialogFormVisible = true">新增</el-button>
          <el-button type="primary" icon="el-icon-files">导入</el-button>
        </div>
        <div class="t_btn_group_right">
          <el-button type="primary" icon="el-icon-search">查询</el-button>
        </div>
      </div>

      <div class="t_table">
        <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%"
          @selection-change="handleSelectionChange">
          <el-table-column type="selection" width="55"> </el-table-column>
          <el-table-column label="寄件人" width="120">
            <template slot-scope="scope">{{ scope.row.date }}</template>
          </el-table-column>
          <el-table-column prop="phone" label="寄件人电话" width="120">
          </el-table-column>
          <el-table-column prop="company" label="寄件人公司" width="120">
          </el-table-column>
          <el-table-column prop="address" label="寄件人地址" width="120">
          </el-table-column>
          <el-table-column prop="operation" label="操作" width="120">
          </el-table-column>
        </el-table>
      </div>
      <page-nation></page-nation>

      <!-- Form -->
      <el-dialog title="新增常用收件人" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="寄件人：" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off" class="input-width"></el-input>
          </el-form-item>
          <el-form-item label="寄件人手机：" :label-width="formLabelWidth">
            <el-input v-model="form.mobile" autocomplete="off" class="input-width"></el-input>
          </el-form-item>
          <el-form-item label="寄件人电话：" :label-width="formLabelWidth">
            <el-input v-model="form.phone" autocomplete="off" class="input-width"></el-input>
          </el-form-item>
          <el-form-item label="省/市/区/县：" :label-width="formLabelWidth">
            <region-group :town="true" v-model="form.region" @change="change" />
          </el-form-item>
          <el-form-item label="详细地址：" :label-width="formLabelWidth">
            <el-input v-model="form.address" autocomplete="off" class="input-width"></el-input>
          </el-form-item>
          <el-form-item label="寄件人公司：" :label-width="formLabelWidth">
            <el-input v-model="form.company" autocomplete="off" class="input-width"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="submitAddSendMan">确 定</el-button>
        </div>
      </el-dialog>
    </el-card>
  </div>
</template>

<script>
  import PageNation from "@/components/pageNation";
  import {
    RegionGroup
  } from "v-region";
  import addSendMan from "@/api/addSendMan";

  export default {
    components: {
      PageNation,
      RegionGroup,
    },
    data() {
      return {
        tableData: [{
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        }, ],
        dialogFormVisible: false,
        form: {
          name: "",
          mobile: "",
          phone: "",
          region: "",
          address: "",
          company: ""
        },
        formLabelWidth: "120px",
      };
    },
    methods: {
      regionChange(data) {
        console.log(data);
      },
      submitAddSendMan() {
        this.dialogFormVisible = false;
        addSendMan(form).then((successResponse) => {
          console.log(successResponse);
        })
      }
    },
  };

</script>

<style lang="scss" scoped>
  .t_query_group {
    display: flex;
    justify-content: space-between;
  }

  .t_btn_group {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
  }

  .t_table {
    margin-top: 50px;
  }

</style>
