<template>
  <div class="vue-box">
    <div class="c-panel">
      <!-- ------------- 检索参数 ------------- -->
      <h4 class="c-title">检索参数</h4>
      <el-form>
        <sa-item v-model="p.name" type="text" name="名称" />
        <el-button type="primary" icon="el-icon-search" @click="p.pageNo = 1; f5()">查询</el-button>
        <br>
        <sa-item name="综合排序" class="s-radio-text">
          <el-radio-group v-model="p.sortType">
            <el-radio label="id">最近添加</el-radio>
            <el-radio label="loginTime">最近登录</el-radio>
            <el-radio label="loginCount">登录次数</el-radio>
          </el-radio-group>
        </sa-item>
      </el-form>
      <!-- ------------- 快捷按钮 ------------- -->
      <sa-item type="fast-btn" show="add,delete,export,reset" />
      <!-- ------------- 数据列表 ------------- -->
      <el-table ref="data-table" class="data-table" :data="dataList">
        <sa-td type="selection"></sa-td>
                        <el-table-column label="主键id" prop="id" >
                    <template slot-scope="s">
                      <el-input v-if="s.row.is_update" v-model="s.row.id" />
                      <span v-else>{{ s.row.id}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="商品名称" prop="name" >
                    <template slot-scope="s">
                      <el-input v-if="s.row.is_update" v-model="s.row.name" />
                      <span v-else>{{ s.row.name}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="商品类别1:包天2:包月3:三个月4:包季度5:包年6:永久" prop="type" >
                    <template slot-scope="s">
                      <el-input v-if="s.row.is_update" v-model="s.row.type" />
                      <span v-else>{{ s.row.type}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="单价" prop="unitPrice" >
                    <template slot-scope="s">
                      <el-input v-if="s.row.is_update" v-model="s.row.unitPrice" />
                      <span v-else>{{ s.row.unitPrice}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="商品图片" prop="imgUrl" >
                    <template slot-scope="s">
                      <el-input v-if="s.row.is_update" v-model="s.row.imgUrl" />
                      <span v-else>{{ s.row.imgUrl}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="1：上架2:下架" prop="status" >
                    <template slot-scope="s">
                      <el-input v-if="s.row.is_update" v-model="s.row.status" />
                      <span v-else>{{ s.row.status}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="创建时间" prop="createTime" >
                    <template slot-scope="s">
                      <el-input v-if="s.row.is_update" v-model="s.row.createTime" />
                      <span v-else>{{ s.row.createTime}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="创建人" prop="createBy" >
                    <template slot-scope="s">
                      <el-input v-if="s.row.is_update" v-model="s.row.createBy" />
                      <span v-else>{{ s.row.createBy}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="更新时间" prop="updateTime" >
                    <template slot-scope="s">
                      <el-input v-if="s.row.is_update" v-model="s.row.updateTime" />
                      <span v-else>{{ s.row.updateTime}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="更新人" prop="updateBy" >
                    <template slot-scope="s">
                      <el-input v-if="s.row.is_update" v-model="s.row.updateBy" />
                      <span v-else>{{ s.row.updateBy}}</span>
                    </template>
                </el-table-column>
            <el-table-column label="操作" fixed="right"  width="240px">
                <template slot-scope="s">
                    <el-button class="c-btn" type="primary" icon="el-icon-edit" @click="update(s.row)">修改</el-button>
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
  name: 'admin-list',
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
      sa.ajax('/spProduct/getList', this.p, function(res) {
        this.dataList = sa.listAU(res.data);
        sa.f5TableHeight();		// 刷新表格高度
      }.bind(this));
    },
    // 新增
    add: function() {
      console.log(123);
      sa.showModel('管理员添加', () => import('./sp-product-add'), { id: -1 });
    },
    // 查看详情
    getInfo: function(data) {
      sa.showModel('管理员详情', () => import('./sp-product-info'), { id: data.id });
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
              sa.ajax('/spProduct/update', data, function(res) {
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
      var ajax = sa.ajax('/spProduct/updateStatus', { adminId: data.id, status: data.status }, function(res) {
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
        sa.ajax('/spProduct/delete', { id: data.id }, function(res){
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
        sa.ajax('/spProduct/deleteByIds', { ids: ids.join(',') }, function(res) {
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
