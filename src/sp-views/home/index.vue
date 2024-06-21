<template>
  <div class="vue-box" style="background-color: #FFF;">
    <div style="width: 100%; height: 100%; display: flex; align-items: center; text-align: center;">
      <div style="flex: 1;">
        <!-- 内容部分 -->
        <div class="content">
          <div>
            <img src="@/assets/logo.png" class="admin-logo">
          </div>
          <h1 style="margin-top: 30px; font-size: 30px;">{{$root.title}}系统</h1>
          <!-- <div>
            <el-link type="primary" href="https://gitee.com/click33/sa-plus" target="_blank">
              https://gitee.com/click33/sa-plus
            </el-link>
          </div> -->
          <div style="margin-top: 30px;">
            <!-- 当前为Vue单页版本：vue2、element-ui、js、vue-cli、vuex、vue-router、axios、xlsx -->
            系统涵盖智能对话功能(chartgpt)、账号密码管理功能等，更多功能持续开发中...
          </div>
          <div style="height: 20vh;" />
        </div>
      </div>
    </div>
    <div style="width: 100%;align-items: center;text-align: center;font-size: 20px;color: blue">
      <a href="https://beian.miit.gov.cn/" target="_blank">沪ICP备2024069122号</a>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {

    }
  },
  computed: {
  },
  created() {
  }
}
</script>

<style scoped>
  .content{padding: 1em;}
  .admin-logo{width: 100px; height: 100px;}
</style>
