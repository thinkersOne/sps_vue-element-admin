<template>
  <div class="vue-box" :class="id != 0 ? 'sbot sbot-fluid': null">
    <!-- 参数栏 -->
    <div class="c-panel">
      <h4 class="c-title">添加一个九转连环图统计表</h4>
      <el-form>
        <!-- 防止密码框被填充 -->
        <div style="height: 0px; overflow: hidden;">
          <el-input />
          <el-input type="password" />
        </div>

        						<sa-item type="text" name="主键id" v-model="m.id" br></sa-item>
        						<sa-item type="text" name="年份" v-model="m.year" br></sa-item>
        						<sa-item type="text" name="月份" v-model="m.month" br></sa-item>
        						<sa-item type="text" name="类型1：年份2：月份" v-model="m.type" br></sa-item>
        						<sa-item type="text" name="区号区间" v-model="m.codes" br></sa-item>
        						<sa-item type="text" name="九转连环分布比" v-model="m.nineTurn" br></sa-item>
        						<sa-item type="text" name="统计个数" v-model="m.nineTurnCount" br></sa-item>
        						<sa-item type="text" name="09,17,33" v-model="m.nineTurnType" br></sa-item>
      </el-form>
    </div>
  </div>
</template>

<script>

export default {
  name: 'lottery-calculate-nine-add',
  props: { param: Object },
  data() {
    return {
      id: (this.param && this.param.id) || 0, 	// 超级对象
      m: this.crateModel(),
      roleList: []
    }
  },
  created: function() {
    // 加载角色
    sa.ajax('/lotteryCalculateNine/getList', function(res) {
      this.roleList = res.data;	// 数据
    }.bind(this), { msg: null });
  },
  methods: {
    crateModel() {
      return {
            "id": "",
            "year": "",
            "month": "",
            "type": "",
            "codes": "",
            "nineTurn": "",
            "nineTurnCount": "",
            "nineTurnType": "",
      }
    },
    // 修改
    ok: function(){
      // 表单校验
      let m = this.m;
      sa.checkNull(m.name, '请输入昵称');

      // 添加
      sa.ajax('/lotteryCalculateNine/add', m, function(res) {
        sa.alert('添加成功, 账号id为：' + res.data, function(){
          this.m = this.crateModel();
          if (this.id != 0) {
            sa.closeModel();
            sa.currView().f5();
          }
        }.bind(this));
      }.bind(this));
    }
  }
}
</script>

<style scoped>
/*.vue-box >>> .c-item .el-input__inner{width: 300px;}*/
</style>
