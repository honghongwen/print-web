<template>
  <div class="t-print">
    <el-card shadow="always" class="t-card">
      <div class="t-query-group">
        <div class="flex-1">
          <span class="t-query-group-text">打印状态：</span>
          <el-select
            v-model="value"
            placeholder="请选择"
            class="input-width-short"
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>

        <div class="flex-2">
          <span class="t-query-group-text">收件人：</span>
          <el-input
            placeholder="请输入内容"
            v-model="input3"
            class="input-with-select input-width-large"
          >
            <el-select v-model="select" slot="prepend" placeholder="请选择">
              <el-option label="姓名" value="1"></el-option>
              <el-option label="手机号" value="2"></el-option>
              <el-option label="公司名称" value="3"></el-option>
            </el-select>
          </el-input>
        </div>

        <div class="flex-3">
          <span class="t-query-group-text">运单号：</span>
          <el-input
            placeholder="请输入运单号"
            v-model="orderNo"
            class="input-width"
            clearable
          >
          </el-input>
        </div>

        <div class="flex-4">
          <span class="t-query-group-text">导入日期：</span>
          <el-date-picker
            v-model="startDate"
            type="date"
            placeholder="开始日期"
            class="input-width-normal"
          >
          </el-date-picker>
          <el-date-picker
            v-model="endDate"
            type="date"
            placeholder="结束日期"
            class="input-width-normal"
          >
          </el-date-picker>
        </div>
      </div>

      <div class="t-button-group">
        <div class="t-button-group-batch">
          <el-button type="primary" icon="el-icon-printer">批量打印</el-button>
          <el-button type="danger" icon="el-icon-folder-delete"
            >批量删除</el-button
          >
        </div>
        <div class="t-button-group-single">
          <el-button type="primary" icon="el-icon-search">查询</el-button>
          <el-button icon="el-icon-refresh">重置</el-button>
        </div>
      </div>

      <div class="t-table">
        <el-table
          ref="multipleTable"
          :data="tableData"
          tooltip-effect="dark"
          style="width: 100%"
          @selection-change="handleSelectionChange"
        >
          <el-table-column type="selection" width="55"> </el-table-column>
          <el-table-column label="日期" width="120">
            <template slot-scope="scope">{{ scope.row.date }}</template>
          </el-table-column>
          <el-table-column prop="name" label="姓名" width="120">
          </el-table-column>
          <el-table-column prop="address" label="地址" show-overflow-tooltip>
          </el-table-column>
        </el-table>
      </div>

      <page-nation></page-nation>
    </el-card>
  </div>
</template>


<script>
import PageNation from "@/components/pageNation";
export default {
  components: {
    PageNation,
  },
  data() {
    return {
      options: [
        {
          value: 0,
          label: "全部",
        },
        {
          value: 1,
          label: "未打印",
        },
        {
          value: 2,
          label: "已打印",
        },
      ],
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },        
      ],
      value: 0,
      receiveMan: "1",
      select: "1",
      input3: "",
      startDate: "",
      endDate: "",
    };
  },
};
</script>

<style lang="scss" scoped>
.t-print {
  .t-card{
    overflow: auto;
  }
  .t-button-group {
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: space-between;
  }

  .t-query-group {
    display: flex;
    width: 100%;
    justify-content: space-between;

    .el-select{
      width: 110px;
    }
    .t-query-group-text {
      font-size: 14px;
      font-weight: bold;
    }
  }

  .t-table {
    margin-top: 30px;
  }

  .t-br {
    margin-top: 20px;
  }
}
</style>