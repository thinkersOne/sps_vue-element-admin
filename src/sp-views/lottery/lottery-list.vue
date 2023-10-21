<template>
  <div class="vue-box">
    <div class="c-panel">
      <!-- ------------- 检索参数 ------------- -->
      <h4 class="c-title">检索参数</h4>
      <el-form>
        <sa-item v-model="p.code" type="text" name="期号" />
        <el-button type="primary" icon="el-icon-search" @click="p.pageNo = 1; f5()">查询</el-button>
        <br>
      </el-form>
      <!-- ------------- 快捷按钮 ------------- -->
      <sa-item type="fast-btn" show="export,reset" />
      <!-- ------------- 数据列表 ------------- -->
      <el-table ref="data-table" class="data-table" :data="dataList">
        <el-table-column label="期号" prop="code" width="70px">
            <template slot-scope="s">
              <el-input v-if="s.row.is_update" v-model="s.row.code" />
              <span v-else>{{ s.row.code}}</span>
            </template>
        </el-table-column>
        <el-table-column label="开奖日期" prop="date" >
            <template slot-scope="s">
              <el-input v-if="s.row.is_update" v-model="s.row.date" />
              <span v-else>{{ s.row.date}}</span>
            </template>
        </el-table-column>
        <el-table-column label="中奖号码：红" prop="red" width="120px">
            <template slot-scope="s">
              <el-input v-if="s.row.is_update" v-model="s.row.red" />
              <span v-else>{{ s.row.red}}</span>
            </template>
        </el-table-column>
        <el-table-column label="中奖号码：蓝" prop="blue" >
            <template slot-scope="s">
              <el-input v-if="s.row.is_update" v-model="s.row.blue" />
              <span v-else>{{ s.row.blue}}</span>
            </template>
        </el-table-column>
        <el-table-column label="总销售额" prop="sales" >
            <template slot-scope="s">
              <el-input v-if="s.row.is_update" v-model="s.row.sales" />
              <span v-else>{{ s.row.sales}}</span>
            </template>
        </el-table-column>
        <el-table-column label="一等奖注数" prop="oneTypeNum" >
            <template slot-scope="s">
              <el-input v-if="s.row.is_update" v-model="s.row.oneTypeNum" />
              <span v-else>{{ s.row.oneTypeNum}}</span>
            </template>
        </el-table-column>
        <el-table-column label="一等奖金额" prop="oneTypeMoney" >
            <template slot-scope="s">
              <el-input v-if="s.row.is_update" v-model="s.row.oneTypeMoney" />
              <span v-else>{{ s.row.oneTypeMoney}}</span>
            </template>
        </el-table-column>
        <el-table-column label="二等奖注数" prop="twoTypeNum" >
            <template slot-scope="s">
              <el-input v-if="s.row.is_update" v-model="s.row.twoTypeNum" />
              <span v-else>{{ s.row.twoTypeNum}}</span>
            </template>
        </el-table-column>
        <el-table-column label="二等奖金额" prop="twoTypeMoney" >
            <template slot-scope="s">
              <el-input v-if="s.row.is_update" v-model="s.row.twoTypeMoney" />
              <span v-else>{{ s.row.twoTypeMoney}}</span>
            </template>
        </el-table-column>
        <el-table-column label="三等奖注数" prop="threeTypeNum" >
            <template slot-scope="s">
              <el-input v-if="s.row.is_update" v-model="s.row.threeTypeNum" />
              <span v-else>{{ s.row.threeTypeNum}}</span>
            </template>
        </el-table-column>
        <el-table-column label="三等奖金额" prop="threeTypeMoney" >
            <template slot-scope="s">
              <el-input v-if="s.row.is_update" v-model="s.row.threeTypeMoney" />
              <span v-else>{{ s.row.threeTypeMoney}}</span>
            </template>
        </el-table-column>
        <!-- <el-table-column label="奖金池" prop="poolmoney" >
            <template slot-scope="s">
              <el-input v-if="s.row.is_update" v-model="s.row.poolmoney" />
              <span v-else>{{ s.row.poolmoney}}</span>
            </template>
        </el-table-column> -->
     </el-table>
      <!-- 分页 -->
      <div class="page-box">
        <el-pagination
          background
          layout="total, prev, pager, next, sizes, jumper"
          :current-page.sync="p.pageNo"
          :page-size.sync="p.pageSize"
          :total="dataCount"
          :page-sizes="[1, 5, 10, 20, 30, 40, 50, 100, 1000]"
          @current-change="f5()"
          @size-change="f5()"
        />
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'admin-list',
  data() {
    return {
      p: {		// 查询参数
        id: '',
        code: '',
        pageNo: 1,
        pageSize: 10,
      },
      dataCount: 0,
      dataList: [],	// 数据集合
      roleList: [],	// 角色集合
    }
  },
  created: function() {
    this.f5();
    sa.onInputEnter();	// 监听回车执行查询
  },
  methods: {

    // 刷新
    f5: function() {
      sa.ajax('/lottery/getList', this.p, function(res) {
        this.dataList = sa.listAU(res.data);
        this.dataCount = res.dataCount; // 数据总数
        sa.f5TableHeight();		// 刷新表格高度
      }.bind(this));
    },
    // 查看 - 根据选中的
    getBySelect: function(data) {
      var selection = this.$refs['data-table'].selection;
      if (selection.length === 0) {
        return sa.msg('请至少选择一条数据')
      }
      this.getInfo(selection[0]);
    },
  }
}
</script>

<style scoped>

</style>
