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
                <el-table-column label="主键id" prop="id" >
                  <template slot-scope="s">
                    <el-input v-if="s.row.is_update" v-model="s.row.id" />
                    <span v-else>{{ s.row.id}}</span>
                  </template>
                </el-table-column>
                <el-table-column label="期号" prop="code" >
                    <template slot-scope="s">
                      <el-input v-if="s.row.is_update" v-model="s.row.code" />
                      <span v-else>{{ s.row.code}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="红色球" prop="red" width="120px">
                    <template slot-scope="s">
                      <el-input v-if="s.row.is_update" v-model="s.row.red" />
                      <span v-else>{{ s.row.red}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="篮球" prop="blue" >
                    <template slot-scope="s">
                      <el-input v-if="s.row.is_update" v-model="s.row.blue" />
                      <span v-else>{{ s.row.blue}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="红球奇偶比" prop="redParityRatio" >
                    <template slot-scope="s">
                      <el-input v-if="s.row.is_update" v-model="s.row.redParityRatio" />
                      <span v-else>{{ s.row.redParityRatio}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="红球分区比" prop="redRangeRatio" >
                    <template slot-scope="s">
                      <el-input v-if="s.row.is_update" v-model="s.row.redRangeRatio" />
                      <span v-else>{{ s.row.redRangeRatio}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="红球和" prop="redSum" >
                    <template slot-scope="s">
                      <el-input v-if="s.row.is_update" v-model="s.row.redSum" />
                      <span v-else>{{ s.row.redSum}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="蓝球奇偶" prop="blueParity" >
                    <template slot-scope="s">
                      <el-input v-if="s.row.is_update" v-model="s.row.blueParity" />
                      <span v-else>{{ s.row.blueParity}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="蓝球大/小" prop="blueBigSmall" >
                    <template slot-scope="s">
                      <el-input v-if="s.row.is_update" v-model="s.row.blueBigSmall" />
                      <span v-else>{{ s.row.blueBigSmall}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="蓝球分区" prop="blueRange" >
                    <template slot-scope="s">
                      <el-input v-if="s.row.is_update" v-model="s.row.blueRange" />
                      <span v-else>{{ s.row.blueRange}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="年" prop="year" width="50px">
                    <template slot-scope="s">
                      <el-input v-if="s.row.is_update" v-model="s.row.year" />
                      <span v-else>{{ s.row.year}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="月" prop="month" width="50px">
                    <template slot-scope="s">
                      <el-input v-if="s.row.is_update" v-model="s.row.month" />
                      <span v-else>{{ s.row.month}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="年-周" prop="week" width="80px">
                    <template slot-scope="s">
                      <el-input v-if="s.row.is_update" v-model="s.row.week" />
                      <span v-else>{{ s.row.week}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="九转连环图-09" prop="nineTurn09" width="100px">
                    <template slot-scope="s">
                      <el-input v-if="s.row.is_update" v-model="s.row.nineTurn09" />
                      <span v-else>{{ s.row.nineTurn09}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="九转连环图17" prop="nineTurn17" width="100px">
                    <template slot-scope="s">
                      <el-input v-if="s.row.is_update" v-model="s.row.nineTurn17" />
                      <span v-else>{{ s.row.nineTurn17}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="九转连环图33" prop="nineTurn33" width="100px">
                    <template slot-scope="s">
                      <el-input v-if="s.row.is_update" v-model="s.row.nineTurn33" />
                      <span v-else>{{ s.row.nineTurn33}}</span>
                    </template>
                </el-table-column>
     </el-table>
      <!-- 分页 -->
      <sa-item type="page" :curr.sync="p.pageNo" :size.sync="p.pageSize" :total="dataCount" @change="f5()" />
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
      sa.ajax('/lotteryCalculatePer/getList', this.p, function(res) {
        this.dataList = sa.listAU(res.data);
        this.dataCount = res.dataCount;
        sa.f5TableHeight();		// 刷新表格高度
      }.bind(this));
    },
    // 新增
    add: function() {
      console.log(123);
      sa.showModel('管理员添加', () => import('./lottery-calculate-per-add'), { id: -1 });
    },
    // 查看详情
    getInfo: function(data) {
      sa.showModel('管理员详情', () => import('./lottery-calculate-per-info'), { id: data.id });
    },
    // 查看 - 根据选中的
    getBySelect: function(data) {
      var selection = this.$refs['data-table'].selection;
      if (selection.length === 0) {
        return sa.msg('请至少选择一条数据')
      }
      this.getInfo(selection[0]);
    },
    // 修改名称
    update: function(data) {
          console.log(JSON.stringify(data));
          if (data.is_update == false || data.is_update == 'undefined') {
            data.is_update = true;
          } else {
            sa.confirm('是否修改数据？', function() {
              sa.ajax('/lotteryCalculatePer/update', data, function(res) {
                sa.ok('修改成功');
                data.is_update = false;
              })
            })
          }
        },
    // 修改用户的状态
    updateStatus: function(data) {
      if (data.id == sa.$sys.getCurrUser().id) {
        data.status = 3 - data.status;
        return sa.alert('不能自己封禁自己');
      }
      var is_ok = false;	// 记录是否成功
      var ajax = sa.ajax('/lotteryCalculatePer/updateStatus', { adminId: data.id, status: data.status }, function(res) {
        sa.msg('修改成功');
        is_ok = true;
      });
      // 如果未能修改成功, 则回滚
      sa.axios.all([ajax]).then(function(res) {
        if (is_ok == false) {
          data.status = 3 - data.status;
        }
      })
      // $.when(ajax).done(function() {
      //   if(is_ok == false) {
      //     data.status = 3 - data.status;
      //   }
      // })
    },
    // 删除
    del: function(data) {
      sa.confirm('是否删除，此操作不可撤销', function(){
        sa.ajax('/lotteryCalculatePer/delete', { id: data.id }, function(res){
          sa.arrayDelete(this.dataList, data);
          sa.ok('删除成功');
          sa.f5TableHeight();		// 刷新表格高度
        }.bind(this))
      }.bind(this));
    },
    // 批量删除
    deleteByIds: function() {
      // 获取选中元素的id列表
      let selection = this.$refs['data-table'].selection;
      let ids = sa.getArrayField(selection, 'id');
      if (selection.length == 0) {
        return sa.msg('请至少选择一条数据')
      }
      // 提交删除
      sa.confirm('是否批量删除选中数据？此操作不可撤销', function() {
        sa.ajax('/lotteryCalculatePer/deleteByIds', { ids: ids.join(',') }, function(res) {
          sa.arrayDelete(this.dataList, selection);
          sa.ok('删除成功');
          sa.f5TableHeight();		// 刷新表格高度
        }.bind(this))
      }.bind(this));
    },
  }
}
</script>

<style scoped>

</style>
