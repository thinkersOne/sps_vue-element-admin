<template>
  <div class="vue-box" :class="id != 0 ? 'sbot sbot-fluid': null">
    <!-- 参数栏 -->
    <div class="c-panel">
      <h4 class="c-title">添加一个统计计算每期双色球表</h4>
      <el-form>
        <!-- 防止密码框被填充 -->
        <div style="height: 0px; overflow: hidden;">
          <el-input />
          <el-input type="password" />
        </div>

        						<sa-item type="text" name="主键id" v-model="m.id" br></sa-item>
        						<sa-item type="text" name="期号" v-model="m.code" br></sa-item>
        						<sa-item type="text" name="红色球" v-model="m.red" br></sa-item>
        						<sa-item type="text" name="篮球" v-model="m.blue" br></sa-item>
        						<sa-item type="text" name="红球奇数/偶数比例" v-model="m.redParityRatio" br></sa-item>
        						<sa-item type="text" name="红球分区比例" v-model="m.redRangeRatio" br></sa-item>
        						<sa-item type="text" name="红球和" v-model="m.redSum" br></sa-item>
        						<sa-item type="text" name="蓝球奇数/偶数" v-model="m.blueParity" br></sa-item>
        						<sa-item type="text" name="蓝球大/小" v-model="m.blueBigSmall" br></sa-item>
        						<sa-item type="text" name="蓝球分区" v-model="m.blueRange" br></sa-item>
        						<sa-item type="text" name="年" v-model="m.year" br></sa-item>
        						<sa-item type="text" name="月" v-model="m.month" br></sa-item>
        						<sa-item type="text" name="年-第几周" v-model="m.week" br></sa-item>
      </el-form>
    </div>
  </div>
</template>

<script>

export default {
  name: 'lottery-calculate-per-add',
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
    sa.ajax('/lotteryCalculatePer/getList', function(res) {
      this.roleList = res.data;	// 数据
    }.bind(this), { msg: null });
  },
  methods: {
    crateModel() {
      return {
            "id": "",
            "code": "",
            "red": "",
            "blue": "",
            "redParityRatio": "",
            "redRangeRatio": "",
            "redSum": "",
            "blueParity": "",
            "blueBigSmall": "",
            "blueRange": "",
            "year": "",
            "month": "",
            "week": "",
      }
    },
    // 修改
    ok: function(){
      // 表单校验
      let m = this.m;
      sa.checkNull(m.name, '请输入昵称');

      // 添加
      sa.ajax('/lotteryCalculatePer/add', m, function(res) {
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
