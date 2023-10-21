<template>
  <div class="vue-box sbot" style="width: 600px;">
    <!-- ------- 内容部分 ------- -->
    <div class="c-panel">
      <el-form v-if="m">
                						<sa-info name="主键id" br>{{m.id}}</sa-info>
        						<sa-info name="年份" br>{{m.year}}</sa-info>
        						<sa-info name="月份" br>{{m.month}}</sa-info>
        						<sa-info name="周" br>{{m.week}}</sa-info>
        						<sa-info name="期号XX1-XX0" br>{{m.codes}}</sa-info>
        						<sa-info name="红球1个数" br>{{m.red1}}</sa-info>
        						<sa-info name="红球2个数" br>{{m.red2}}</sa-info>
        						<sa-info name="红球3个数" br>{{m.red3}}</sa-info>
        						<sa-info name="红球4个数" br>{{m.red4}}</sa-info>
        						<sa-info name="红球5个数" br>{{m.red5}}</sa-info>
        						<sa-info name="红球6个数" br>{{m.red6}}</sa-info>
        						<sa-info name="红球7个数" br>{{m.red7}}</sa-info>
        						<sa-info name="红球8个数" br>{{m.red8}}</sa-info>
        						<sa-info name="红球9个数" br>{{m.red9}}</sa-info>
        						<sa-info name="红球10个数" br>{{m.red10}}</sa-info>
        						<sa-info name="红球11个数" br>{{m.red11}}</sa-info>
        						<sa-info name="红球12个数" br>{{m.red12}}</sa-info>
        						<sa-info name="红球13个数" br>{{m.red13}}</sa-info>
        						<sa-info name="红球14个数" br>{{m.red14}}</sa-info>
        						<sa-info name="红球15个数" br>{{m.red15}}</sa-info>
        						<sa-info name="红球16个数" br>{{m.red16}}</sa-info>
        						<sa-info name="红球17个数" br>{{m.red17}}</sa-info>
        						<sa-info name="红球18个数" br>{{m.red18}}</sa-info>
        						<sa-info name="红球19个数" br>{{m.red19}}</sa-info>
        						<sa-info name="红球20个数" br>{{m.red20}}</sa-info>
        						<sa-info name="红球21个数" br>{{m.red21}}</sa-info>
        						<sa-info name="红球22个数" br>{{m.red22}}</sa-info>
        						<sa-info name="红球23个数" br>{{m.red23}}</sa-info>
        						<sa-info name="红球24个数" br>{{m.red24}}</sa-info>
        						<sa-info name="红球25个数" br>{{m.red25}}</sa-info>
        						<sa-info name="红球26个数" br>{{m.red26}}</sa-info>
        						<sa-info name="红球27个数" br>{{m.red27}}</sa-info>
        						<sa-info name="红球28个数" br>{{m.red28}}</sa-info>
        						<sa-info name="红球29个数" br>{{m.red29}}</sa-info>
        						<sa-info name="红球30个数" br>{{m.red30}}</sa-info>
        						<sa-info name="红球31个数" br>{{m.red31}}</sa-info>
        						<sa-info name="红球32个数" br>{{m.red32}}</sa-info>
        						<sa-info name="红球33个数" br>{{m.red33}}</sa-info>
        						<sa-info name="蓝球1个数" br>{{m.blue1}}</sa-info>
        						<sa-info name="蓝球2个数" br>{{m.blue2}}</sa-info>
        						<sa-info name="蓝球3个数" br>{{m.blue3}}</sa-info>
        						<sa-info name="蓝球4个数" br>{{m.blue4}}</sa-info>
        						<sa-info name="蓝球5个数" br>{{m.blue5}}</sa-info>
        						<sa-info name="蓝球6个数" br>{{m.blue6}}</sa-info>
        						<sa-info name="蓝球7个数" br>{{m.blue7}}</sa-info>
        						<sa-info name="蓝球8个数" br>{{m.blue8}}</sa-info>
        						<sa-info name="蓝球9个数" br>{{m.blue9}}</sa-info>
        						<sa-info name="蓝球10个数" br>{{m.blue10}}</sa-info>
        						<sa-info name="蓝球11个数" br>{{m.blue11}}</sa-info>
        						<sa-info name="蓝球12个数" br>{{m.blue12}}</sa-info>
        						<sa-info name="蓝球13个数" br>{{m.blue13}}</sa-info>
        						<sa-info name="蓝球14个数" br>{{m.blue14}}</sa-info>
        						<sa-info name="蓝球15个数" br>{{m.blue15}}</sa-info>
        						<sa-info name="蓝球16个数" br>{{m.blue16}}</sa-info>
        						<sa-info name="1：按月统计2：按年统计3：按周统计" br>{{m.calType}}</sa-info>
        						<sa-info name="红球奇偶2:4" br>{{m.redParityRatio24}}</sa-info>
        						<sa-info name="红球奇偶4:2" br>{{m.redParityRatio42}}</sa-info>
        						<sa-info name="红球奇偶5:1" br>{{m.redParityRatio51}}</sa-info>
        						<sa-info name="红球奇偶1:5" br>{{m.redParityRatio15}}</sa-info>
        						<sa-info name="红球奇偶3:3" br>{{m.redParityRatio33}}</sa-info>
        						<sa-info name="红球奇偶6:0" br>{{m.redParityRatio60}}</sa-info>
        						<sa-info name="红球奇偶0:6" br>{{m.redParityRatio06}}</sa-info>
        						<sa-info name="红球区间比2_3_1" br>{{m.redRange231}}</sa-info>
        						<sa-info name="红球区间比2_2_2" br>{{m.redRange222}}</sa-info>
        						<sa-info name="红球区间比3_2_1" br>{{m.redRange321}}</sa-info>
        						<sa-info name="红球区间比1_2_3" br>{{m.redRange123}}</sa-info>
        						<sa-info name="红球区间比2_0_4" br>{{m.redRange204}}</sa-info>
        						<sa-info name="红球区间比2_4_0" br>{{m.redRange240}}</sa-info>
        						<sa-info name="红球区间比4_0_2" br>{{m.redRange402}}</sa-info>
        						<sa-info name="红球区间比4_2_0" br>{{m.redRange420}}</sa-info>
        						<sa-info name="红球区间比3_1_2" br>{{m.redRange312}}</sa-info>
        						<sa-info name="红球区间比2_1_3" br>{{m.redRange213}}</sa-info>
        						<sa-info name="红球区间比4_1_1" br>{{m.redRange411}}</sa-info>
        						<sa-info name="红球区间比1_1_4" br>{{m.redRange114}}</sa-info>
        						<sa-info name="红球区间比1_4_1" br>{{m.redRange141}}</sa-info>
        						<sa-info name="蓝球个数_小" br>{{m.blueSmall}}</sa-info>
        						<sa-info name="蓝球个数_大" br>{{m.blueBig}}</sa-info>
        						<sa-info name="蓝球区域_1" br>{{m.blueAreaOne}}</sa-info>
        						<sa-info name="蓝球区域_2" br>{{m.blueAreaTwo}}</sa-info>
        						<sa-info name="蓝球区域_3" br>{{m.blueAreaThree}}</sa-info>
        						<sa-info name="蓝球区域_4" br>{{m.blueAreaFour}}</sa-info>
        						<sa-info name="蓝球奇数个数" br>{{m.blueParity}}</sa-info>
        						<sa-info name="蓝球偶数个数" br>{{m.blueRatio}}</sa-info>
        						<sa-info name="红球和21_60" br>{{m.red2160}}</sa-info>
        						<sa-info name="红球和73_78" br>{{m.red7378}}</sa-info>
        						<sa-info name="红球和61_66" br>{{m.red6166}}</sa-info>
        						<sa-info name="红球和103_108" br>{{m.red103108}}</sa-info>
        						<sa-info name="红球和91_96" br>{{m.red9196}}</sa-info>
        						<sa-info name="红球和79_84" br>{{m.red7984}}</sa-info>
        						<sa-info name="红球和67_72" br>{{m.red6772}}</sa-info>
        						<sa-info name="红球和109_114" br>{{m.red109114}}</sa-info>
        						<sa-info name="红球和115_120" br>{{m.red115120}}</sa-info>
        						<sa-info name="红球和133_138" br>{{m.red133138}}</sa-info>
        						<sa-info name="红球和97_102" br>{{m.red97102}}</sa-info>
        						<sa-info name="红球和139_144" br>{{m.red139144}}</sa-info>
        						<sa-info name="红球和127_132" br>{{m.red127132}}</sa-info>
        						<sa-info name="红球和121_126" br>{{m.red121126}}</sa-info>
        						<sa-info name="红球和145_183" br>{{m.red145183}}</sa-info>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'lottery-calculate-count-info',
  props: { param: Object },
  data() {
    return {
      id: this.param.id || 0,
      sa: sa,
      m: {}
    }
  },
  created: function() {
    sa.ajax('/lotteryCalculateCount/getById?id=' + this.id, function(res) {
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
