<template>
  <div class="vue-box">
    <div class="c-panel">
      <!-- ------------- 检索参数 ------------- -->
      <h4 class="c-title">检索参数</h4>
      <el-form>
        <sa-item v-model="p.name" type="text" name="分类名称" />
        <el-button type="primary" icon="el-icon-search" @click="p.pageNo = 1; f5()">查询</el-button>
        <br>
      </el-form>
      <!-- ------------- 快捷按钮 ------------- -->
      <sa-item type="fast-btn" show="add,delete,export,reset" />
      <!-- ------------- 数据列表 ------------- -->
      <el-table class="data-table" ref="data-table" :data="dataList" >
          <sa-td type="selection"></sa-td>
          <el-table-column label="编号" prop="id"/>
          <el-table-column label="分类名称">
            <template slot-scope="s">
              <el-input v-if="s.row.is_update" v-model="s.row.Name" />
              <span v-else>{{ s.row.Name }}</span>
            </template>
          </el-table-column>
          <el-table-column label="创建人">
            <template slot-scope="s">
               {{ s.row.createBy}}
            </template>
          </el-table-column>
          <el-table-column label="创建日期">
            <template slot-scope="s">
              {{ sa.forDate(s.row.createTime, 2) }}
            </template>
          </el-table-column>
          <el-table-column label="更新人">
            <template slot-scope="s">
              {{ s.row.updateBy}}
            </template>
          </el-table-column>
          <el-table-column label="更新日期">
            <template slot-scope="s">
              {{ sa.forDate(s.row.updateTime, 2) }}
            </template>
          </el-table-column>
           <el-table-column label="操作" width="220px">
            <template slot-scope="s">
              <el-button type="text" @click="update(s.row)">
                <span :style="s.row.is_update ? 'color: red;' : ''">修改</span>
              </el-button>
              <el-button class="c-btn" type="danger" icon="el-icon-delete" @click="del(s.row)">删除</el-button>
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
  name: 'category-list',
  data() {
    return {
      p: {		// 查询参数
        id: '',
        name: '',
        pageNo: 1,
        pageSize: 10,
      },
      dataCount: 0,
      dataList: [],	// 数据集合
    }
  },
  created: function() {
    this.f5();
    sa.onInputEnter();	// 监听回车执行查询
  },
  methods: {
    // 刷新
    f5: function() {
      sa.ajax('/category/getList', this.p, function(res) {
        this.dataList = sa.listAU(res.data);
        sa.f5TableHeight();		// 刷新表格高度
      }.bind(this));
    },
    // 新增
    add: function() {
      console.log(123);
      sa.showModel('添加分类', () => import('./category-add'), { id: -1 });
    },
    // 修改名称
    updateName: function(data) {
      sa.layer.prompt({ title: '修改账号名称' }, function(pass, index) {
        sa.layer.close(index);
        sa.ajax('/category/update', { id: data.id, name: pass }, function(res){
          data.name = pass;
          sa.msg('修改成功');
        })
      });
    },
    // 修改用户的状态
    updateStatus: function(data) {
      if (data.id == sa.$sys.getCurrUser().id) {
        data.status = 3 - data.status;
        return sa.alert('不能自己封禁自己');
      }
      var is_ok = false;	// 记录是否成功
      var ajax = sa.ajax('/category/updateStatus', { adminId: data.id, status: data.status }, function(res) {
        sa.msg('修改成功');
        is_ok = true;
      });
      // 如果未能修改成功, 则回滚
      sa.axios.all([ajax]).then(function(res) {
        if (is_ok == false) {
          data.status = 3 - data.status;
        }
      })
    },
    // 修改
    update: function(data) {
      console.log(JSON.stringify(data));
      if (data.is_update == false || data.is_update == 'undefined') {
        data.is_update = true;
      } else {
        sa.confirm('是否修改数据？', function() {
          // let data2 = sa.copyJSON(data);
          sa.ajax('/category/update', data, function(res) {
            sa.ok('修改成功');
            data.is_update = false;
          })
        })
      }
    },
    // 删除
    del: function(data) {
      sa.confirm('是否删除，此操作不可撤销', function(){
        sa.ajax('/category/delete', { id: data.id }, function(res){
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
        sa.ajax('/category/deleteByIds', { ids: ids.join(',') }, function(res) {
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
  .el-tag{border-radius: 0px;}
</style>
