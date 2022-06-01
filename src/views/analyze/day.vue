  <template>
  <div class="annlyze-day">
    <el-card shadow="always">
      <div class="top-bar">
        <el-date-picker v-model="pickDate" type="date" placeholder="选择日期">
        </el-date-picker>

        <el-button type="primary"
          ><i class="el-icon-search"></i> 查询</el-button
        >
        <el-button type="primary"
          ><i class="el-icon-printer"></i> 打印</el-button
        >
        <el-button type="primary"
          ><i class="el-icon-folder-opened"></i> 导出</el-button
        >
      </div>

      <div class="bottom-table">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="date" label="日期" width="180">
          </el-table-column>
          <el-table-column prop="name" label="姓名" width="180">
          </el-table-column>
          <el-table-column prop="address" label="地址"> </el-table-column>
        </el-table>
      </div>

      <div class="block">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[10, 20, 50, 100]"
          :page-size="10"
          layout="total, sizes, prev, pager, next, jumper"
          :total="98"
        >
        </el-pagination>
      </div>
    </el-card>
  </div>
</template>

  <script>
export default {
  data() {
    return {
      currentPage: 5,
      pickDate: "",
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
    };
  },
};
</script>

<style scoped>
.bottom-table {
  margin-top: 50px;
}
.el-pagination {
  margin-top: 30px;
  padding-bottom: 20px;
  float: right;
}
</style>