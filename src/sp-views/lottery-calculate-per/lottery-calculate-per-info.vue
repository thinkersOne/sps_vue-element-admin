<template>
  <div class="vue-box sbot" style="width: 600px;">
    <!-- ------- 内容部分 ------- -->
    <div class="c-panel">
      <el-form v-if="m">
                						<sa-info name="主键id" br>{{m.id}}</sa-info>
        						<sa-info name="期号" br>{{m.code}}</sa-info>
        						<sa-info name="红色球" br>{{m.red}}</sa-info>
        						<sa-info name="篮球" br>{{m.blue}}</sa-info>
        						<sa-info name="红球奇数/偶数比例" br>{{m.redParityRatio}}</sa-info>
        						<sa-info name="红球分区比例" br>{{m.redRangeRatio}}</sa-info>
        						<sa-info name="红球和" br>{{m.redSum}}</sa-info>
        						<sa-info name="蓝球奇数/偶数" br>{{m.blueParity}}</sa-info>
        						<sa-info name="蓝球大/小" br>{{m.blueBigSmall}}</sa-info>
        						<sa-info name="蓝球分区" br>{{m.blueRange}}</sa-info>
        						<sa-info name="年" br>{{m.year}}</sa-info>
        						<sa-info name="月" br>{{m.month}}</sa-info>
        						<sa-info name="年-第几周" br>{{m.week}}</sa-info>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'lottery-calculate-per-info',
  props: { param: Object },
  data() {
    return {
      id: this.param.id || 0,
      sa: sa,
      m: {}
    }
  },
  created: function() {
    sa.ajax('/lotteryCalculatePer/getById?id=' + this.id, function(res) {
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
