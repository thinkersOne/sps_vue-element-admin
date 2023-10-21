<template>
  <div class="vue-box">
    <div class="c-panel">
      <!-- ------------- 检索参数 ------------- -->
      <h4 class="c-title">检索参数</h4>
      <el-form>
        <sa-item name="类型" br>
          <el-select v-model="p.calType">
            <el-option label="请选择" :value="0" disabled />
            <el-option v-for="calType in calTypeList" :key="calType.id" :label="calType.name" :value="calType.id" />
          </el-select>
        </sa-item>
        <el-button type="primary" icon="el-icon-search" @click="p.pageNo = 1; f5()">查询</el-button>
        <br>
      </el-form>
      <!-- ------------- 快捷按钮 ------------- -->
      <sa-item type="fast-btn" show="export,reset" />
      <!-- ------------- 数据列表 ------------- -->
      <el-table ref="data-table" class="data-table" :data="dataList">
                <el-table-column v-if="!p.calType || p.calType === 1 || p.calType === 2 || p.calType === 3" label="年份" prop="year" >
                    <template slot-scope="s">
                      <el-input v-if="s.row.is_update" v-model="s.row.year" />
                      <span v-else>{{ s.row.year}}</span>
                    </template>
                </el-table-column>
                <el-table-column v-if="!p.calType || p.calType === 2" label="月份" prop="month" >
                    <template slot-scope="s">
                      <el-input v-if="s.row.is_update" v-model="s.row.month" />
                      <span v-else>{{ s.row.month}}</span>
                    </template>
                </el-table-column>
                <el-table-column v-if="!p.calType || p.calType === 3" label="周" prop="week" >
                    <template slot-scope="s">
                      <el-input v-if="s.row.is_update" v-model="s.row.week" />
                      <span v-else>{{ s.row.week}}</span>
                    </template>
                </el-table-column>
                <el-table-column v-if="!p.calType || p.calType === 4" label="期号区间" prop="codes" >
                    <template slot-scope="s">
                      <el-input v-if="s.row.is_update" v-model="s.row.codes" />
                      <span v-else>{{ s.row.codes}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="红1" prop="red1" >
                    <template slot-scope="s">
                      <el-input v-if="s.row.is_update" v-model="s.row.red1" />
                      <span v-else>{{ s.row.red1}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="红2" prop="red2" >
                    <template slot-scope="s">
                      <el-input v-if="s.row.is_update" v-model="s.row.red2" />
                      <span v-else>{{ s.row.red2}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="红3" prop="red3" >
                    <template slot-scope="s">
                      <el-input v-if="s.row.is_update" v-model="s.row.red3" />
                      <span v-else>{{ s.row.red3}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="红4" prop="red4" >
                    <template slot-scope="s">
                      <el-input v-if="s.row.is_update" v-model="s.row.red4" />
                      <span v-else>{{ s.row.red4}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="红5" prop="red5" >
                    <template slot-scope="s">
                      <el-input v-if="s.row.is_update" v-model="s.row.red5" />
                      <span v-else>{{ s.row.red5}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="红6" prop="red6" >
                    <template slot-scope="s">
                      <el-input v-if="s.row.is_update" v-model="s.row.red6" />
                      <span v-else>{{ s.row.red6}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="红7" prop="red7" >
                    <template slot-scope="s">
                      <el-input v-if="s.row.is_update" v-model="s.row.red7" />
                      <span v-else>{{ s.row.red7}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="红8" prop="red8" >
                    <template slot-scope="s">
                      <el-input v-if="s.row.is_update" v-model="s.row.red8" />
                      <span v-else>{{ s.row.red8}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="红9" prop="red9" >
                    <template slot-scope="s">
                      <el-input v-if="s.row.is_update" v-model="s.row.red9" />
                      <span v-else>{{ s.row.red9}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="红10" prop="red10" >
                    <template slot-scope="s">
                      <el-input v-if="s.row.is_update" v-model="s.row.red10" />
                      <span v-else>{{ s.row.red10}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="红11" prop="red11" >
                    <template slot-scope="s">
                      <el-input v-if="s.row.is_update" v-model="s.row.red11" />
                      <span v-else>{{ s.row.red11}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="红12" prop="red12" >
                    <template slot-scope="s">
                      <el-input v-if="s.row.is_update" v-model="s.row.red12" />
                      <span v-else>{{ s.row.red12}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="红13" prop="red13" >
                    <template slot-scope="s">
                      <el-input v-if="s.row.is_update" v-model="s.row.red13" />
                      <span v-else>{{ s.row.red13}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="红14" prop="red14" >
                    <template slot-scope="s">
                      <el-input v-if="s.row.is_update" v-model="s.row.red14" />
                      <span v-else>{{ s.row.red14}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="红15" prop="red15" >
                    <template slot-scope="s">
                      <el-input v-if="s.row.is_update" v-model="s.row.red15" />
                      <span v-else>{{ s.row.red15}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="红16" prop="red16" >
                    <template slot-scope="s">
                      <el-input v-if="s.row.is_update" v-model="s.row.red16" />
                      <span v-else>{{ s.row.red16}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="红17" prop="red17" >
                    <template slot-scope="s">
                      <el-input v-if="s.row.is_update" v-model="s.row.red17" />
                      <span v-else>{{ s.row.red17}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="红18" prop="red18" >
                    <template slot-scope="s">
                      <el-input v-if="s.row.is_update" v-model="s.row.red18" />
                      <span v-else>{{ s.row.red18}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="红19" prop="red19" >
                    <template slot-scope="s">
                      <el-input v-if="s.row.is_update" v-model="s.row.red19" />
                      <span v-else>{{ s.row.red19}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="红20" prop="red20" >
                    <template slot-scope="s">
                      <el-input v-if="s.row.is_update" v-model="s.row.red20" />
                      <span v-else>{{ s.row.red20}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="红21" prop="red21" >
                    <template slot-scope="s">
                      <el-input v-if="s.row.is_update" v-model="s.row.red21" />
                      <span v-else>{{ s.row.red21}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="红22" prop="red22" >
                    <template slot-scope="s">
                      <el-input v-if="s.row.is_update" v-model="s.row.red22" />
                      <span v-else>{{ s.row.red22}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="红23" prop="red23" >
                    <template slot-scope="s">
                      <el-input v-if="s.row.is_update" v-model="s.row.red23" />
                      <span v-else>{{ s.row.red23}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="红24" prop="red24" >
                    <template slot-scope="s">
                      <el-input v-if="s.row.is_update" v-model="s.row.red24" />
                      <span v-else>{{ s.row.red24}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="红25" prop="red25" >
                    <template slot-scope="s">
                      <el-input v-if="s.row.is_update" v-model="s.row.red25" />
                      <span v-else>{{ s.row.red25}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="红26" prop="red26" >
                    <template slot-scope="s">
                      <el-input v-if="s.row.is_update" v-model="s.row.red26" />
                      <span v-else>{{ s.row.red26}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="红27" prop="red27" >
                    <template slot-scope="s">
                      <el-input v-if="s.row.is_update" v-model="s.row.red27" />
                      <span v-else>{{ s.row.red27}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="红28" prop="red28" >
                    <template slot-scope="s">
                      <el-input v-if="s.row.is_update" v-model="s.row.red28" />
                      <span v-else>{{ s.row.red28}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="红29" prop="red29" >
                    <template slot-scope="s">
                      <el-input v-if="s.row.is_update" v-model="s.row.red29" />
                      <span v-else>{{ s.row.red29}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="红30" prop="red30" >
                    <template slot-scope="s">
                      <el-input v-if="s.row.is_update" v-model="s.row.red30" />
                      <span v-else>{{ s.row.red30}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="红31" prop="red31" >
                    <template slot-scope="s">
                      <el-input v-if="s.row.is_update" v-model="s.row.red31" />
                      <span v-else>{{ s.row.red31}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="红32" prop="red32" >
                    <template slot-scope="s">
                      <el-input v-if="s.row.is_update" v-model="s.row.red32" />
                      <span v-else>{{ s.row.red32}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="红33" prop="red33" >
                    <template slot-scope="s">
                      <el-input v-if="s.row.is_update" v-model="s.row.red33" />
                      <span v-else>{{ s.row.red33}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="蓝1" prop="blue1" >
                    <template slot-scope="s">
                      <el-input v-if="s.row.is_update" v-model="s.row.blue1" />
                      <span v-else>{{ s.row.blue1}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="蓝2" prop="blue2" >
                    <template slot-scope="s">
                      <el-input v-if="s.row.is_update" v-model="s.row.blue2" />
                      <span v-else>{{ s.row.blue2}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="蓝3" prop="blue3" >
                    <template slot-scope="s">
                      <el-input v-if="s.row.is_update" v-model="s.row.blue3" />
                      <span v-else>{{ s.row.blue3}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="蓝4" prop="blue4" >
                    <template slot-scope="s">
                      <el-input v-if="s.row.is_update" v-model="s.row.blue4" />
                      <span v-else>{{ s.row.blue4}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="蓝5" prop="blue5" >
                    <template slot-scope="s">
                      <el-input v-if="s.row.is_update" v-model="s.row.blue5" />
                      <span v-else>{{ s.row.blue5}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="蓝6" prop="blue6" >
                    <template slot-scope="s">
                      <el-input v-if="s.row.is_update" v-model="s.row.blue6" />
                      <span v-else>{{ s.row.blue6}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="蓝7" prop="blue7" >
                    <template slot-scope="s">
                      <el-input v-if="s.row.is_update" v-model="s.row.blue7" />
                      <span v-else>{{ s.row.blue7}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="蓝8" prop="blue8" >
                    <template slot-scope="s">
                      <el-input v-if="s.row.is_update" v-model="s.row.blue8" />
                      <span v-else>{{ s.row.blue8}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="蓝9" prop="blue9" >
                    <template slot-scope="s">
                      <el-input v-if="s.row.is_update" v-model="s.row.blue9" />
                      <span v-else>{{ s.row.blue9}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="蓝10" prop="blue10" >
                    <template slot-scope="s">
                      <el-input v-if="s.row.is_update" v-model="s.row.blue10" />
                      <span v-else>{{ s.row.blue10}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="蓝11" prop="blue11" >
                    <template slot-scope="s">
                      <el-input v-if="s.row.is_update" v-model="s.row.blue11" />
                      <span v-else>{{ s.row.blue11}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="蓝12" prop="blue12" >
                    <template slot-scope="s">
                      <el-input v-if="s.row.is_update" v-model="s.row.blue12" />
                      <span v-else>{{ s.row.blue12}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="蓝13" prop="blue13" >
                    <template slot-scope="s">
                      <el-input v-if="s.row.is_update" v-model="s.row.blue13" />
                      <span v-else>{{ s.row.blue13}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="蓝14" prop="blue14" >
                    <template slot-scope="s">
                      <el-input v-if="s.row.is_update" v-model="s.row.blue14" />
                      <span v-else>{{ s.row.blue14}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="蓝15" prop="blue15" >
                    <template slot-scope="s">
                      <el-input v-if="s.row.is_update" v-model="s.row.blue15" />
                      <span v-else>{{ s.row.blue15}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="蓝16" prop="blue16" >
                    <template slot-scope="s">
                      <el-input v-if="s.row.is_update" v-model="s.row.blue16" />
                      <span v-else>{{ s.row.blue16}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="类型" prop="calType" >
                    <template slot-scope="s">
                      <el-input v-if="s.row.is_update" v-model="s.row.calType" />
                      <span v-else>{{ s.row.calType}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="红2:4" prop="redParityRatio24" >
                    <template slot-scope="s">
                      <el-input v-if="s.row.is_update" v-model="s.row.redParityRatio24" />
                      <span v-else>{{ s.row.redParityRatio24}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="红4:2" prop="redParityRatio42" >
                    <template slot-scope="s">
                      <el-input v-if="s.row.is_update" v-model="s.row.redParityRatio42" />
                      <span v-else>{{ s.row.redParityRatio42}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="红5:1" prop="redParityRatio51" >
                    <template slot-scope="s">
                      <el-input v-if="s.row.is_update" v-model="s.row.redParityRatio51" />
                      <span v-else>{{ s.row.redParityRatio51}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="红1:5" prop="redParityRatio15" >
                    <template slot-scope="s">
                      <el-input v-if="s.row.is_update" v-model="s.row.redParityRatio15" />
                      <span v-else>{{ s.row.redParityRatio15}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="红3:3" prop="redParityRatio33" >
                    <template slot-scope="s">
                      <el-input v-if="s.row.is_update" v-model="s.row.redParityRatio33" />
                      <span v-else>{{ s.row.redParityRatio33}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="红6:0" prop="redParityRatio60" >
                    <template slot-scope="s">
                      <el-input v-if="s.row.is_update" v-model="s.row.redParityRatio60" />
                      <span v-else>{{ s.row.redParityRatio60}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="红0:6" prop="redParityRatio06" >
                    <template slot-scope="s">
                      <el-input v-if="s.row.is_update" v-model="s.row.redParityRatio06" />
                      <span v-else>{{ s.row.redParityRatio06}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="红2_3_1" prop="redRange231" >
                    <template slot-scope="s">
                      <el-input v-if="s.row.is_update" v-model="s.row.redRange231" />
                      <span v-else>{{ s.row.redRange231}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="红2_2_2" prop="redRange222" >
                    <template slot-scope="s">
                      <el-input v-if="s.row.is_update" v-model="s.row.redRange222" />
                      <span v-else>{{ s.row.redRange222}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="红3_2_1" prop="redRange321" >
                    <template slot-scope="s">
                      <el-input v-if="s.row.is_update" v-model="s.row.redRange321" />
                      <span v-else>{{ s.row.redRange321}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="红1_2_3" prop="redRange123" >
                    <template slot-scope="s">
                      <el-input v-if="s.row.is_update" v-model="s.row.redRange123" />
                      <span v-else>{{ s.row.redRange123}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="红2_0_4" prop="redRange204" >
                    <template slot-scope="s">
                      <el-input v-if="s.row.is_update" v-model="s.row.redRange204" />
                      <span v-else>{{ s.row.redRange204}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="红2_4_0" prop="redRange240" >
                    <template slot-scope="s">
                      <el-input v-if="s.row.is_update" v-model="s.row.redRange240" />
                      <span v-else>{{ s.row.redRange240}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="红4_0_2" prop="redRange402" >
                    <template slot-scope="s">
                      <el-input v-if="s.row.is_update" v-model="s.row.redRange402" />
                      <span v-else>{{ s.row.redRange402}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="红4_2_0" prop="redRange420" >
                    <template slot-scope="s">
                      <el-input v-if="s.row.is_update" v-model="s.row.redRange420" />
                      <span v-else>{{ s.row.redRange420}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="红3_1_2" prop="redRange312" >
                    <template slot-scope="s">
                      <el-input v-if="s.row.is_update" v-model="s.row.redRange312" />
                      <span v-else>{{ s.row.redRange312}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="红2_1_3" prop="redRange213" >
                    <template slot-scope="s">
                      <el-input v-if="s.row.is_update" v-model="s.row.redRange213" />
                      <span v-else>{{ s.row.redRange213}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="红4_1_1" prop="redRange411" >
                    <template slot-scope="s">
                      <el-input v-if="s.row.is_update" v-model="s.row.redRange411" />
                      <span v-else>{{ s.row.redRange411}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="红1_1_4" prop="redRange114" >
                    <template slot-scope="s">
                      <el-input v-if="s.row.is_update" v-model="s.row.redRange114" />
                      <span v-else>{{ s.row.redRange114}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="红1_4_1" prop="redRange141" >
                    <template slot-scope="s">
                      <el-input v-if="s.row.is_update" v-model="s.row.redRange141" />
                      <span v-else>{{ s.row.redRange141}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="蓝小" prop="blueSmall" >
                    <template slot-scope="s">
                      <el-input v-if="s.row.is_update" v-model="s.row.blueSmall" />
                      <span v-else>{{ s.row.blueSmall}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="蓝大" prop="blueBig" >
                    <template slot-scope="s">
                      <el-input v-if="s.row.is_update" v-model="s.row.blueBig" />
                      <span v-else>{{ s.row.blueBig}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="蓝区1" prop="blueAreaOne" >
                    <template slot-scope="s">
                      <el-input v-if="s.row.is_update" v-model="s.row.blueAreaOne" />
                      <span v-else>{{ s.row.blueAreaOne}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="蓝区2" prop="blueAreaTwo" >
                    <template slot-scope="s">
                      <el-input v-if="s.row.is_update" v-model="s.row.blueAreaTwo" />
                      <span v-else>{{ s.row.blueAreaTwo}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="蓝区3" prop="blueAreaThree" >
                    <template slot-scope="s">
                      <el-input v-if="s.row.is_update" v-model="s.row.blueAreaThree" />
                      <span v-else>{{ s.row.blueAreaThree}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="蓝区4" prop="blueAreaFour" >
                    <template slot-scope="s">
                      <el-input v-if="s.row.is_update" v-model="s.row.blueAreaFour" />
                      <span v-else>{{ s.row.blueAreaFour}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="蓝奇" prop="blueParity" >
                    <template slot-scope="s">
                      <el-input v-if="s.row.is_update" v-model="s.row.blueParity" />
                      <span v-else>{{ s.row.blueParity}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="蓝偶" prop="blueRatio" >
                    <template slot-scope="s">
                      <el-input v-if="s.row.is_update" v-model="s.row.blueRatio" />
                      <span v-else>{{ s.row.blueRatio}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="红21_60" prop="red2160" >
                    <template slot-scope="s">
                      <el-input v-if="s.row.is_update" v-model="s.row.red2160" />
                      <span v-else>{{ s.row.red2160}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="红73_78" prop="red7378" >
                    <template slot-scope="s">
                      <el-input v-if="s.row.is_update" v-model="s.row.red7378" />
                      <span v-else>{{ s.row.red7378}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="红61_66" prop="red6166" >
                    <template slot-scope="s">
                      <el-input v-if="s.row.is_update" v-model="s.row.red6166" />
                      <span v-else>{{ s.row.red6166}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="红103_108" prop="red103108" >
                    <template slot-scope="s">
                      <el-input v-if="s.row.is_update" v-model="s.row.red103108" />
                      <span v-else>{{ s.row.red103108}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="红91_96" prop="red9196" >
                    <template slot-scope="s">
                      <el-input v-if="s.row.is_update" v-model="s.row.red9196" />
                      <span v-else>{{ s.row.red9196}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="红79_84" prop="red7984" >
                    <template slot-scope="s">
                      <el-input v-if="s.row.is_update" v-model="s.row.red7984" />
                      <span v-else>{{ s.row.red7984}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="红67_72" prop="red6772" >
                    <template slot-scope="s">
                      <el-input v-if="s.row.is_update" v-model="s.row.red6772" />
                      <span v-else>{{ s.row.red6772}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="红109_114" prop="red109114" >
                    <template slot-scope="s">
                      <el-input v-if="s.row.is_update" v-model="s.row.red109114" />
                      <span v-else>{{ s.row.red109114}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="红115_120" prop="red115120" >
                    <template slot-scope="s">
                      <el-input v-if="s.row.is_update" v-model="s.row.red115120" />
                      <span v-else>{{ s.row.red115120}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="红133_138" prop="red133138" >
                    <template slot-scope="s">
                      <el-input v-if="s.row.is_update" v-model="s.row.red133138" />
                      <span v-else>{{ s.row.red133138}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="红97_102" prop="red97102" >
                    <template slot-scope="s">
                      <el-input v-if="s.row.is_update" v-model="s.row.red97102" />
                      <span v-else>{{ s.row.red97102}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="红139_144" prop="red139144" >
                    <template slot-scope="s">
                      <el-input v-if="s.row.is_update" v-model="s.row.red139144" />
                      <span v-else>{{ s.row.red139144}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="红127_132" prop="red127132" >
                    <template slot-scope="s">
                      <el-input v-if="s.row.is_update" v-model="s.row.red127132" />
                      <span v-else>{{ s.row.red127132}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="红121_126" prop="red121126" >
                    <template slot-scope="s">
                      <el-input v-if="s.row.is_update" v-model="s.row.red121126" />
                      <span v-else>{{ s.row.red121126}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="红145_183" prop="red145183" >
                    <template slot-scope="s">
                      <el-input v-if="s.row.is_update" v-model="s.row.red145183" />
                      <span v-else>{{ s.row.red145183}}</span>
                    </template>
                </el-table-column>
     </el-table>
      <!-- 分页 -->
      <sa-item type="page" :curr.sync="p.pageNo" :size.sync="p.pageSize" :total="dataCount" @change="f5()" />
    </div>

  </div>
</template>

<script>
export default {
  name: 'admin-list',
  data() {
    return {
      p: {		// 查询参数
        id: '',
        name: '',
        calType: 0,
        pageNo: 1,
        pageSize: 10,
      },
      calTypeList: [{ id: '', name: 'ALL' },{ id: 1, name: '按年' }, { id: 2, name: '按月' },{ id: 3, name: '按周' },{ id: 4, name: '按期号' }],
      dataCount: 0,
      dataList: [],	// 数据集合
      roleList: [],	// 角色集合
    }
  },
  created: function() {
    this.f5();
    sa.onInputEnter();	// 监听回车执行查询
  },
  methods: {

    // 刷新
    f5: function() {
      sa.ajax('/lotteryCalculateCount/getList', this.p, function(res) {
        this.dataList = sa.listAU(res.data);
        this.dataCount = res.dataCount;
        sa.f5TableHeight();		// 刷新表格高度
      }.bind(this));
    },
    // 新增
    add: function() {
      console.log(123);
      sa.showModel('管理员添加', () => import('./lottery-calculate-count-add'), { id: -1 });
    },
    // 查看详情
    getInfo: function(data) {
      sa.showModel('管理员详情', () => import('./lottery-calculate-count-info'), { id: data.id });
    },
    // 查看 - 根据选中的
    getBySelect: function(data) {
      var selection = this.$refs['data-table'].selection;
      if (selection.length === 0) {
        return sa.msg('请至少选择一条数据')
      }
      this.getInfo(selection[0]);
    },
    // 修改名称
    update: function(data) {
          console.log(JSON.stringify(data));
          if (data.is_update == false || data.is_update == 'undefined') {
            data.is_update = true;
          } else {
            sa.confirm('是否修改数据？', function() {
              sa.ajax('/lotteryCalculateCount/update', data, function(res) {
                sa.ok('修改成功');
                data.is_update = false;
              })
            })
          }
        },
    // 修改用户的状态
    updateStatus: function(data) {
      if (data.id == sa.$sys.getCurrUser().id) {
        data.status = 3 - data.status;
        return sa.alert('不能自己封禁自己');
      }
      var is_ok = false;	// 记录是否成功
      var ajax = sa.ajax('/lotteryCalculateCount/updateStatus', { adminId: data.id, status: data.status }, function(res) {
        sa.msg('修改成功');
        is_ok = true;
      });
      // 如果未能修改成功, 则回滚
      sa.axios.all([ajax]).then(function(res) {
        if (is_ok == false) {
          data.status = 3 - data.status;
        }
      })
      // $.when(ajax).done(function() {
      //   if(is_ok == false) {
      //     data.status = 3 - data.status;
      //   }
      // })
    },
    // 删除
    del: function(data) {
      sa.confirm('是否删除，此操作不可撤销', function(){
        sa.ajax('/lotteryCalculateCount/delete', { id: data.id }, function(res){
          sa.arrayDelete(this.dataList, data);
          sa.ok('删除成功');
          sa.f5TableHeight();		// 刷新表格高度
        }.bind(this))
      }.bind(this));
    },
    // 批量删除
    deleteByIds: function() {
      // 获取选中元素的id列表
      let selection = this.$refs['data-table'].selection;
      let ids = sa.getArrayField(selection, 'id');
      if (selection.length == 0) {
        return sa.msg('请至少选择一条数据')
      }
      // 提交删除
      sa.confirm('是否批量删除选中数据？此操作不可撤销', function() {
        sa.ajax('/lotteryCalculateCount/deleteByIds', { ids: ids.join(',') }, function(res) {
          sa.arrayDelete(this.dataList, selection);
          sa.ok('删除成功');
          sa.f5TableHeight();		// 刷新表格高度
        }.bind(this))
      }.bind(this));
    },
  }
}
</script>

<style scoped>

</style>
