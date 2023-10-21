<template>
  <div class="vue-box" :class="id != 0 ? 'sbot sbot-fluid': null">
    <!-- 参数栏 -->
    <div class="c-panel">
      <h4 class="c-title">添加一个</h4>
      <el-form>
        <!-- 防止密码框被填充 -->
        <div style="height: 0px; overflow: hidden;">
          <el-input />
          <el-input type="password" />
        </div>

        						<sa-item type="text" name="期号" v-model="m.code" br></sa-item>
        						<sa-item type="text" name="开奖日期" v-model="m.date" br></sa-item>
        						<sa-item type="text" name="中奖号码：红" v-model="m.red" br></sa-item>
        						<sa-item type="text" name="中奖号码：蓝" v-model="m.blue" br></sa-item>
        						<sa-item type="text" name="总销售额" v-model="m.sales" br></sa-item>
        						<sa-item type="text" name="一等奖注数" v-model="m.oneTypeNum" br></sa-item>
        						<sa-item type="text" name="一等奖中奖金额" v-model="m.oneTypeMoney" br></sa-item>
        						<sa-item type="text" name="二等奖注数" v-model="m.twoTypeNum" br></sa-item>
        						<sa-item type="text" name="二等奖中奖金额" v-model="m.twoTypeMoney" br></sa-item>
        						<sa-item type="text" name="三等奖注数" v-model="m.threeTypeNum" br></sa-item>
        						<sa-item type="text" name="三等奖中奖金额" v-model="m.threeTypeMoney" br></sa-item>
        						<sa-item type="text" name="奖金池" v-model="m.poolmoney" br></sa-item>
      </el-form>
    </div>
  </div>
</template>

<script>

export default {
  name: 'lottery-add',
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
    sa.ajax('/lottery/getList', function(res) {
      this.roleList = res.data;	// 数据
    }.bind(this), { msg: null });
  },
  methods: {
    crateModel() {
      return {
            "code": "",
            "date": "",
            "red": "",
            "blue": "",
            "sales": "",
            "oneTypeNum": "",
            "oneTypeMoney": "",
            "twoTypeNum": "",
            "twoTypeMoney": "",
            "threeTypeNum": "",
            "threeTypeMoney": "",
            "poolmoney": "",
      }
    },
    // 修改
    ok: function(){
      // 表单校验
      let m = this.m;
      sa.checkNull(m.name, '请输入昵称');

      // 添加
      sa.ajax('/lottery/add', m, function(res) {
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
