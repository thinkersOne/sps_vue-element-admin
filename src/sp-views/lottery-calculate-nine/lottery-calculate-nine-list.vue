<template>
  <div class="vue-box">
    <div class="c-panel">
      <el-form>
        <sa-item name="类型">
          <el-select v-model="p.calType">
            <el-option label="请选择" :value="0" disabled />
            <el-option v-for="calType in calTypeList" :key="calType.id" :label="calType.name" :value="calType.id" />
          </el-select>
        </sa-item>
        <sa-item name="年份">
          <el-select v-model="p.year">
            <el-option label="请选择" :value="0" disabled />
            <el-option v-for="year in yearList" :key="year.id" :label="year.name" :value="year.id" />
          </el-select>
        </sa-item>
        <sa-item name="月份">
          <el-select v-model="p.month">
            <el-option label="请选择" :value="0" disabled />
            <el-option v-for="month in monthpeList" :key="month.id" :label="month.name" :value="month.id" />
          </el-select>
        </sa-item>
        <sa-item v-model="p.codes" type="text" name="期号区间" />
        <sa-item name="九转类型">
          <el-select v-model="p.nineTurnType">
            <el-option label="请选择" :value="0" disabled />
            <el-option v-for="nineTurnType in nineTurnTypeList" :key="nineTurnType.id" :label="nineTurnType.name" 
            :value="nineTurnType.id" />
          </el-select>
        </sa-item>
        <el-button type="primary" icon="el-icon-search" @click="p.pageNo = 1; f5()">查询</el-button>
        <br>
      </el-form>
      <!-- ------------- 快捷按钮 ------------- -->
      <sa-item type="fast-btn" show="export,reset" />
      <!-- ------------- 数据列表 ------------- -->
      <el-table ref="data-table" class="data-table" :data="dataList">
                <el-table-column v-if="!p.calType || p.calType === 1 || p.calType === 2" label="年份" prop="year" >
                    <template slot-scope="s">
                      <el-input v-if="s.row.is_update" v-model="s.row.year" />
                      <span v-else>{{ s.row.year}}</span>
                    </template>
                </el-table-column>
                <el-table-column v-if="!p.calType || p.calType === 2" label="月份" prop="month" >
                    <template slot-scope="s">
                      <el-input v-if="s.row.is_update" v-model="s.row.month" />
                      <span v-else>{{ s.row.month}}</span>
                    </template>
                </el-table-column>
                <el-table-column v-if="!p.calType || p.calType === 4"  label="区号区间" prop="codes" >
                    <template slot-scope="s">
                      <el-input v-if="s.row.is_update" v-model="s.row.codes" />
                      <span v-else>{{ s.row.codes}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="九转连环分布比" prop="nineTurn" >
                    <template slot-scope="s">
                      <el-input v-if="s.row.is_update" v-model="s.row.nineTurn" />
                      <span v-else>{{ s.row.nineTurn}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="统计个数" prop="nineTurnCount" >
                    <template slot-scope="s">
                      <el-input v-if="s.row.is_update" v-model="s.row.nineTurnCount" />
                      <span v-else>{{ s.row.nineTurnCount}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="九转类型" prop="nineTurnType" >
                    <template slot-scope="s">
                      <el-input v-if="s.row.is_update" v-model="s.row.nineTurnType" />
                      <span v-else>{{ s.row.nineTurnType}}</span>
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
        codes: '',
        year: new Date().getFullYear(),
        month: new Date().getMonth() + 1,
        nineTurnType: '',
        calType: 2,
        pageNo: 1,
        pageSize: 10,
      },
      dataCount: 0,
      yearList: [{id: '',name: 'ALL'},{id: 2023,name: '2023'},{id: 2022,name: '2022'},{id: 2021,name: '2021'},
      {id: 2020,name: '2020'},{id: 2019,name: '2019'},{id: 2018,name: '2018'},{id: 2017,name: '2017'},{id: 2016,name: '2016'},
      {id: 2015,name: '2015'},{id: 2014,name: '2014'},{id: 2013,name: '2013'}],
      monthpeList: [{id: '',name: 'ALL'},{id: 1,name:'1'},{id: 2,name:'2'},{id: 3,name:'3'},{id: 4,name:'4'},{id: 5,name:'5'}
      ,{id: 6,name:'6'},{id: 7,name:'7'},{id: 8,name:'8'},{id: 9,name:'9'},{id: 10,name:'10'},{id: 11,name:'11'}
      ,{id: 12,name:'12'}],
      calTypeList: [{ id: '', name: 'ALL' },{ id: 1, name: '按年' }, { id: 2, name: '按月' },{ id: 4, name: '按期号' }],
      nineTurnTypeList: [{id: '',name: 'ALL'},{id: 9,name: '09'},{id: 17,name: '17'},{id: 33,name: '33'}],
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
      if(this.p.calType == 4){
        this.p.year = '';
        this.p.month = '';
      }
      sa.ajax('/lotteryCalculateNine/getList', this.p, function(res) {
        this.dataList = sa.listAU(res.data);
        this.dataCount = res.dataCount;
        sa.f5TableHeight();		// 刷新表格高度
      }.bind(this));
    },
    // 新增
    add: function() {
      console.log(123);
      sa.showModel('管理员添加', () => import('./lottery-calculate-nine-add'), { id: -1 });
    },
    // 查看详情
    getInfo: function(data) {
      sa.showModel('管理员详情', () => import('./lottery-calculate-nine-info'), { id: data.id });
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
              sa.ajax('/lotteryCalculateNine/update', data, function(res) {
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
      var ajax = sa.ajax('/lotteryCalculateNine/updateStatus', { adminId: data.id, status: data.status }, function(res) {
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
        sa.ajax('/lotteryCalculateNine/delete', { id: data.id }, function(res){
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
        sa.ajax('/lotteryCalculateNine/deleteByIds', { ids: ids.join(',') }, function(res) {
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
