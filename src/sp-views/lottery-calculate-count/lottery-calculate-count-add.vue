<template>
  <div class="vue-box" :class="id != 0 ? 'sbot sbot-fluid': null">
    <!-- 参数栏 -->
    <div class="c-panel">
      <h4 class="c-title">添加一个按照不同时间维度统计每个红蓝球情况</h4>
      <el-form>
        <!-- 防止密码框被填充 -->
        <div style="height: 0px; overflow: hidden;">
          <el-input />
          <el-input type="password" />
        </div>

        						<sa-item type="text" name="主键id" v-model="m.id" br></sa-item>
        						<sa-item type="text" name="年份" v-model="m.year" br></sa-item>
        						<sa-item type="text" name="月份" v-model="m.month" br></sa-item>
        						<sa-item type="text" name="周" v-model="m.week" br></sa-item>
        						<sa-item type="text" name="期号XX1-XX0" v-model="m.codes" br></sa-item>
        						<sa-item type="text" name="红球1个数" v-model="m.red1" br></sa-item>
        						<sa-item type="text" name="红球2个数" v-model="m.red2" br></sa-item>
        						<sa-item type="text" name="红球3个数" v-model="m.red3" br></sa-item>
        						<sa-item type="text" name="红球4个数" v-model="m.red4" br></sa-item>
        						<sa-item type="text" name="红球5个数" v-model="m.red5" br></sa-item>
        						<sa-item type="text" name="红球6个数" v-model="m.red6" br></sa-item>
        						<sa-item type="text" name="红球7个数" v-model="m.red7" br></sa-item>
        						<sa-item type="text" name="红球8个数" v-model="m.red8" br></sa-item>
        						<sa-item type="text" name="红球9个数" v-model="m.red9" br></sa-item>
        						<sa-item type="text" name="红球10个数" v-model="m.red10" br></sa-item>
        						<sa-item type="text" name="红球11个数" v-model="m.red11" br></sa-item>
        						<sa-item type="text" name="红球12个数" v-model="m.red12" br></sa-item>
        						<sa-item type="text" name="红球13个数" v-model="m.red13" br></sa-item>
        						<sa-item type="text" name="红球14个数" v-model="m.red14" br></sa-item>
        						<sa-item type="text" name="红球15个数" v-model="m.red15" br></sa-item>
        						<sa-item type="text" name="红球16个数" v-model="m.red16" br></sa-item>
        						<sa-item type="text" name="红球17个数" v-model="m.red17" br></sa-item>
        						<sa-item type="text" name="红球18个数" v-model="m.red18" br></sa-item>
        						<sa-item type="text" name="红球19个数" v-model="m.red19" br></sa-item>
        						<sa-item type="text" name="红球20个数" v-model="m.red20" br></sa-item>
        						<sa-item type="text" name="红球21个数" v-model="m.red21" br></sa-item>
        						<sa-item type="text" name="红球22个数" v-model="m.red22" br></sa-item>
        						<sa-item type="text" name="红球23个数" v-model="m.red23" br></sa-item>
        						<sa-item type="text" name="红球24个数" v-model="m.red24" br></sa-item>
        						<sa-item type="text" name="红球25个数" v-model="m.red25" br></sa-item>
        						<sa-item type="text" name="红球26个数" v-model="m.red26" br></sa-item>
        						<sa-item type="text" name="红球27个数" v-model="m.red27" br></sa-item>
        						<sa-item type="text" name="红球28个数" v-model="m.red28" br></sa-item>
        						<sa-item type="text" name="红球29个数" v-model="m.red29" br></sa-item>
        						<sa-item type="text" name="红球30个数" v-model="m.red30" br></sa-item>
        						<sa-item type="text" name="红球31个数" v-model="m.red31" br></sa-item>
        						<sa-item type="text" name="红球32个数" v-model="m.red32" br></sa-item>
        						<sa-item type="text" name="红球33个数" v-model="m.red33" br></sa-item>
        						<sa-item type="text" name="蓝球1个数" v-model="m.blue1" br></sa-item>
        						<sa-item type="text" name="蓝球2个数" v-model="m.blue2" br></sa-item>
        						<sa-item type="text" name="蓝球3个数" v-model="m.blue3" br></sa-item>
        						<sa-item type="text" name="蓝球4个数" v-model="m.blue4" br></sa-item>
        						<sa-item type="text" name="蓝球5个数" v-model="m.blue5" br></sa-item>
        						<sa-item type="text" name="蓝球6个数" v-model="m.blue6" br></sa-item>
        						<sa-item type="text" name="蓝球7个数" v-model="m.blue7" br></sa-item>
        						<sa-item type="text" name="蓝球8个数" v-model="m.blue8" br></sa-item>
        						<sa-item type="text" name="蓝球9个数" v-model="m.blue9" br></sa-item>
        						<sa-item type="text" name="蓝球10个数" v-model="m.blue10" br></sa-item>
        						<sa-item type="text" name="蓝球11个数" v-model="m.blue11" br></sa-item>
        						<sa-item type="text" name="蓝球12个数" v-model="m.blue12" br></sa-item>
        						<sa-item type="text" name="蓝球13个数" v-model="m.blue13" br></sa-item>
        						<sa-item type="text" name="蓝球14个数" v-model="m.blue14" br></sa-item>
        						<sa-item type="text" name="蓝球15个数" v-model="m.blue15" br></sa-item>
        						<sa-item type="text" name="蓝球16个数" v-model="m.blue16" br></sa-item>
        						<sa-item type="text" name="1：按月统计2：按年统计3：按周统计" v-model="m.calType" br></sa-item>
        						<sa-item type="text" name="红球奇偶2:4" v-model="m.redParityRatio24" br></sa-item>
        						<sa-item type="text" name="红球奇偶4:2" v-model="m.redParityRatio42" br></sa-item>
        						<sa-item type="text" name="红球奇偶5:1" v-model="m.redParityRatio51" br></sa-item>
        						<sa-item type="text" name="红球奇偶1:5" v-model="m.redParityRatio15" br></sa-item>
        						<sa-item type="text" name="红球奇偶3:3" v-model="m.redParityRatio33" br></sa-item>
        						<sa-item type="text" name="红球奇偶6:0" v-model="m.redParityRatio60" br></sa-item>
        						<sa-item type="text" name="红球奇偶0:6" v-model="m.redParityRatio06" br></sa-item>
        						<sa-item type="text" name="红球区间比2_3_1" v-model="m.redRange231" br></sa-item>
        						<sa-item type="text" name="红球区间比2_2_2" v-model="m.redRange222" br></sa-item>
        						<sa-item type="text" name="红球区间比3_2_1" v-model="m.redRange321" br></sa-item>
        						<sa-item type="text" name="红球区间比1_2_3" v-model="m.redRange123" br></sa-item>
        						<sa-item type="text" name="红球区间比2_0_4" v-model="m.redRange204" br></sa-item>
        						<sa-item type="text" name="红球区间比2_4_0" v-model="m.redRange240" br></sa-item>
        						<sa-item type="text" name="红球区间比4_0_2" v-model="m.redRange402" br></sa-item>
        						<sa-item type="text" name="红球区间比4_2_0" v-model="m.redRange420" br></sa-item>
        						<sa-item type="text" name="红球区间比3_1_2" v-model="m.redRange312" br></sa-item>
        						<sa-item type="text" name="红球区间比2_1_3" v-model="m.redRange213" br></sa-item>
        						<sa-item type="text" name="红球区间比4_1_1" v-model="m.redRange411" br></sa-item>
        						<sa-item type="text" name="红球区间比1_1_4" v-model="m.redRange114" br></sa-item>
        						<sa-item type="text" name="红球区间比1_4_1" v-model="m.redRange141" br></sa-item>
        						<sa-item type="text" name="蓝球个数_小" v-model="m.blueSmall" br></sa-item>
        						<sa-item type="text" name="蓝球个数_大" v-model="m.blueBig" br></sa-item>
        						<sa-item type="text" name="蓝球区域_1" v-model="m.blueAreaOne" br></sa-item>
        						<sa-item type="text" name="蓝球区域_2" v-model="m.blueAreaTwo" br></sa-item>
        						<sa-item type="text" name="蓝球区域_3" v-model="m.blueAreaThree" br></sa-item>
        						<sa-item type="text" name="蓝球区域_4" v-model="m.blueAreaFour" br></sa-item>
        						<sa-item type="text" name="蓝球奇数个数" v-model="m.blueParity" br></sa-item>
        						<sa-item type="text" name="蓝球偶数个数" v-model="m.blueRatio" br></sa-item>
        						<sa-item type="text" name="红球和21_60" v-model="m.red2160" br></sa-item>
        						<sa-item type="text" name="红球和73_78" v-model="m.red7378" br></sa-item>
        						<sa-item type="text" name="红球和61_66" v-model="m.red6166" br></sa-item>
        						<sa-item type="text" name="红球和103_108" v-model="m.red103108" br></sa-item>
        						<sa-item type="text" name="红球和91_96" v-model="m.red9196" br></sa-item>
        						<sa-item type="text" name="红球和79_84" v-model="m.red7984" br></sa-item>
        						<sa-item type="text" name="红球和67_72" v-model="m.red6772" br></sa-item>
        						<sa-item type="text" name="红球和109_114" v-model="m.red109114" br></sa-item>
        						<sa-item type="text" name="红球和115_120" v-model="m.red115120" br></sa-item>
        						<sa-item type="text" name="红球和133_138" v-model="m.red133138" br></sa-item>
        						<sa-item type="text" name="红球和97_102" v-model="m.red97102" br></sa-item>
        						<sa-item type="text" name="红球和139_144" v-model="m.red139144" br></sa-item>
        						<sa-item type="text" name="红球和127_132" v-model="m.red127132" br></sa-item>
        						<sa-item type="text" name="红球和121_126" v-model="m.red121126" br></sa-item>
        						<sa-item type="text" name="红球和145_183" v-model="m.red145183" br></sa-item>
      </el-form>
    </div>
  </div>
</template>

<script>

export default {
  name: 'lottery-calculate-count-add',
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
    sa.ajax('/lotteryCalculateCount/getList', function(res) {
      this.roleList = res.data;	// 数据
    }.bind(this), { msg: null });
  },
  methods: {
    crateModel() {
      return {
            "id": "",
            "year": "",
            "month": "",
            "week": "",
            "codes": "",
            "red1": "",
            "red2": "",
            "red3": "",
            "red4": "",
            "red5": "",
            "red6": "",
            "red7": "",
            "red8": "",
            "red9": "",
            "red10": "",
            "red11": "",
            "red12": "",
            "red13": "",
            "red14": "",
            "red15": "",
            "red16": "",
            "red17": "",
            "red18": "",
            "red19": "",
            "red20": "",
            "red21": "",
            "red22": "",
            "red23": "",
            "red24": "",
            "red25": "",
            "red26": "",
            "red27": "",
            "red28": "",
            "red29": "",
            "red30": "",
            "red31": "",
            "red32": "",
            "red33": "",
            "blue1": "",
            "blue2": "",
            "blue3": "",
            "blue4": "",
            "blue5": "",
            "blue6": "",
            "blue7": "",
            "blue8": "",
            "blue9": "",
            "blue10": "",
            "blue11": "",
            "blue12": "",
            "blue13": "",
            "blue14": "",
            "blue15": "",
            "blue16": "",
            "calType": "",
            "redParityRatio24": "",
            "redParityRatio42": "",
            "redParityRatio51": "",
            "redParityRatio15": "",
            "redParityRatio33": "",
            "redParityRatio60": "",
            "redParityRatio06": "",
            "redRange231": "",
            "redRange222": "",
            "redRange321": "",
            "redRange123": "",
            "redRange204": "",
            "redRange240": "",
            "redRange402": "",
            "redRange420": "",
            "redRange312": "",
            "redRange213": "",
            "redRange411": "",
            "redRange114": "",
            "redRange141": "",
            "blueSmall": "",
            "blueBig": "",
            "blueAreaOne": "",
            "blueAreaTwo": "",
            "blueAreaThree": "",
            "blueAreaFour": "",
            "blueParity": "",
            "blueRatio": "",
            "red2160": "",
            "red7378": "",
            "red6166": "",
            "red103108": "",
            "red9196": "",
            "red7984": "",
            "red6772": "",
            "red109114": "",
            "red115120": "",
            "red133138": "",
            "red97102": "",
            "red139144": "",
            "red127132": "",
            "red121126": "",
            "red145183": "",
      }
    },
    // 修改
    ok: function(){
      // 表单校验
      let m = this.m;
      sa.checkNull(m.name, '请输入昵称');

      // 添加
      sa.ajax('/lotteryCalculateCount/add', m, function(res) {
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
