<template>
  <div class="vue-box sbot" style="width: 600px;">
    <!-- ------- 内容部分 ------- -->
    <div class="c-panel">
      <el-form v-if="m">
                						<sa-info name="主键id" br>{{m.id}}</sa-info>
        						<sa-info name="预测红球" br>{{m.red}}</sa-info>
        						<sa-info name="奇偶比" br>{{m.redParityRatio}}</sa-info>
        						<sa-info name="分区比" br>{{m.redRangeRatio}}</sa-info>
        						<sa-info name="红球和值" br>{{m.redSum}}</sa-info>
        						<sa-info name="连号个数" br>{{m.consecutiveNumbersCount}}</sa-info>
        						<sa-info name="最大连号数" br>{{m.maxConsecutiveNumbersCount}}</sa-info>
        						<sa-info name="九转连环-09" br>{{m.nineTurn09}}</sa-info>
        						<sa-info name="九转连环-17" br>{{m.nineTurn17}}</sa-info>
        						<sa-info name="九转连环-33" br>{{m.nineTurn33}}</sa-info>
        						<sa-info name="预测期号" br>{{m.code}}</sa-info>
        						<sa-info name="预测中奖号码" br>{{m.forecastRed}}</sa-info>
        						<sa-info name="预测蓝球" br>{{m.blue}}</sa-info>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'lottery-forecast-info',
  props: { param: Object },
  data() {
    return {
      id: this.param.id || 0,
      sa: sa,
      m: {}
    }
  },
  created: function() {
    sa.ajax('/lotteryForecast/getById?id=' + this.id, function(res) {
            this.m = res.data;
          }.bind(this));
  },
  methods: {
  }
}
</script>

<style scoped>
  .vue-box,.c-panel{}
  .c-panel >>> .c-title{margin-bottom: 20px;}
  .c-panel >>> .c-item .c-label{width: 150px;}
  .c-panel >>> .c-item .el-input{width: 300px;}
  /* 链接样式  */
  /*.my-link{position: relative; top: -1px; margin-left: 0.5em;}*/
</style>
