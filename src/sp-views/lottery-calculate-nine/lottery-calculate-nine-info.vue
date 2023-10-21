<template>
  <div class="vue-box sbot" style="width: 600px;">
    <!-- ------- 内容部分 ------- -->
    <div class="c-panel">
      <el-form v-if="m">
                						<sa-info name="主键id" br>{{m.id}}</sa-info>
        						<sa-info name="年份" br>{{m.year}}</sa-info>
        						<sa-info name="月份" br>{{m.month}}</sa-info>
        						<sa-info name="类型1：年份2：月份" br>{{m.type}}</sa-info>
        						<sa-info name="区号区间" br>{{m.codes}}</sa-info>
        						<sa-info name="九转连环分布比" br>{{m.nineTurn}}</sa-info>
        						<sa-info name="统计个数" br>{{m.nineTurnCount}}</sa-info>
        						<sa-info name="09,17,33" br>{{m.nineTurnType}}</sa-info>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'lottery-calculate-nine-info',
  props: { param: Object },
  data() {
    return {
      id: this.param.id || 0,
      sa: sa,
      m: {}
    }
  },
  created: function() {
    sa.ajax('/lotteryCalculateNine/getById?id=' + this.id, function(res) {
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
