<template>
  <div class="vue-box sbot" style="width: 600px;">
    <!-- ------- 内容部分 ------- -->
    <div class="c-panel">
      <el-form v-if="m">
                						<sa-info name="期号" br>{{m.code}}</sa-info>
        						<sa-info name="开奖日期" br>{{m.date}}</sa-info>
        						<sa-info name="中奖号码：红" br>{{m.red}}</sa-info>
        						<sa-info name="中奖号码：蓝" br>{{m.blue}}</sa-info>
        						<sa-info name="总销售额" br>{{m.sales}}</sa-info>
        						<sa-info name="一等奖注数" br>{{m.oneTypeNum}}</sa-info>
        						<sa-info name="一等奖中奖金额" br>{{m.oneTypeMoney}}</sa-info>
        						<sa-info name="二等奖注数" br>{{m.twoTypeNum}}</sa-info>
        						<sa-info name="二等奖中奖金额" br>{{m.twoTypeMoney}}</sa-info>
        						<sa-info name="三等奖注数" br>{{m.threeTypeNum}}</sa-info>
        						<sa-info name="三等奖中奖金额" br>{{m.threeTypeMoney}}</sa-info>
        						<sa-info name="奖金池" br>{{m.poolmoney}}</sa-info>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'lottery-info',
  props: { param: Object },
  data() {
    return {
      id: this.param.id || 0,
      sa: sa,
      m: {}
    }
  },
  created: function() {
    sa.ajax('/lottery/getById?id=' + this.id, function(res) {
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
