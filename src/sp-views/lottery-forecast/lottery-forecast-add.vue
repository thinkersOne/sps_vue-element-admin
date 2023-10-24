<template>
  <div class="vue-box" :class="id != 0 ? 'sbot sbot-fluid': null">
    <!-- 参数栏 -->
    <div class="c-panel">
      <h4 class="c-title">添加一个号码预测</h4>
      <el-form>
        <!-- 防止密码框被填充 -->
        <div style="height: 0px; overflow: hidden;">
          <el-input />
          <el-input type="password" />
        </div>
        <sa-item type="text" name="预测红球" v-model="m.red" br></sa-item>
        <sa-item name="奇偶比" br>
          <el-select v-model="m.redParityRatio">
            <el-option label="请选择" :value="0" disabled />
            <el-option v-for="redParityRatio in redParityRatioList" :key="redParityRatio" :label="redParityRatio" 
              :value="redParityRatio" />
          </el-select>
        </sa-item>
        <sa-item name="分区比" br>
          <el-select v-model="m.redRangeRatio">
            <el-option label="请选择" :value="0" disabled />
            <el-option v-for="redRangeRatio in redRangeRatioList" :key="redRangeRatio" :label="redRangeRatio" 
              :value="redRangeRatio" />
          </el-select>
        </sa-item>
        <sa-item name="红球和值" br>
          <el-select v-model="m.redSum">
            <el-option label="请选择" :value="0" disabled />
            <el-option v-for="redSum in redSumList" :key="redSum" :label="redSum" 
              :value="redSum" />
          </el-select>
        </sa-item>
        <sa-item name="连号个数" br>
          <el-select v-model="m.consecutiveNumbersCount">
            <el-option label="请选择" :value="0" disabled />
            <el-option v-for="consecutiveNumbersCount in consecutiveNumbersCountList" :key="consecutiveNumbersCount" :label="consecutiveNumbersCount" 
              :value="consecutiveNumbersCount" />
          </el-select>
        </sa-item>
        <sa-item name="最大连号" br>
          <el-select v-model="m.maxConsecutiveNumbersCount">
            <el-option label="请选择" :value="0" disabled />
            <el-option v-for="maxConsecutiveNumbersCount in maxConsecutiveNumbersCountList" :key="maxConsecutiveNumbersCount" 
            :label="maxConsecutiveNumbersCount" :value="maxConsecutiveNumbersCount" />
          </el-select>
        </sa-item>
        <sa-item type="text" name="九连环09" v-model="m.nineTurn09" br></sa-item>
        <sa-item type="text" name="九连环17" v-model="m.nineTurn17" br></sa-item>
        <sa-item type="text" name="九连环33" v-model="m.nineTurn33" br></sa-item>
        <sa-item type="text" name="预测蓝球" v-model="m.blue" br></sa-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'lottery-forecast-add',
  props: { param: Object },
  data() {
    return {
      id: (this.param && this.param.id) || 0, 	// 超级对象
      m: this.crateModel(),
      redParityRatioList: ["2:4","4:2","5:1","1:5","3:3","6:0","0:6"],
      redRangeRatioList: ["2:3:1","1:3:2","2:2:2","3:2:1","1:2:3","2:0:4","2:4:0","4:0:2","4:2:0","3:1:2","2:1:3"
      ,"4:1:1","1:1:4","1:4:1","0:5:1"],
      redSumList: ["21_60","73_78","61_66","103_108","91_96","79_84","67_72","109_114","115_120","133_138","97_102",
            "139_144","127_132","121_126","145_183"],
      consecutiveNumbersCountList: ["0","1","2"],
      maxConsecutiveNumbersCountList: ["1","2","3","4","5"],
      roleList: []
    }
  },
  created: function() {
    // 加载角色
    sa.ajax('/lotteryForecast/getList', function(res) {
      this.roleList = res.data;	// 数据
    }.bind(this), { msg: null });
  },
  methods: {
    crateModel() {
      return {
            "id": "",
            "red": "",
            "redParityRatio": "",
            "redRangeRatio": "",
            "redSum": "",
            "consecutiveNumbersCount": "",
            "maxConsecutiveNumbersCount": "",
            "nineTurn09": "",
            "nineTurn17": "",
            "nineTurn33": "",
            "code": "",
            "forecastRed": "",
            "blue": "",
      }
    },
    // 修改
    ok: function(){
      // 表单校验
      let m = this.m;
      // 添加
      sa.ajax('/lotteryForecast/add', m, function(res) {
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
