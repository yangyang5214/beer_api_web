<template>
  <div class="menu">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >

      <el-submenu index="1">
        <template slot="title">小工具</template>

        <el-menu-item index="daily/photo">每日一图</el-menu-item>
        <el-menu-item index="underLineToCamelCase">下换线转驼峰</el-menu-item>
        <el-menu-item index="photoUpload">图床</el-menu-item>
        <!-- <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu> -->
      </el-submenu>

      <!-- <el-menu-item index="1">小工具</el-menu-item> -->

      <!-- <el-menu-item
        index="3"
        disabled
      >消息中心</el-menu-item> -->

      <el-menu-item index="4">
        <a
          href="https://www.hexianwei.com"
          target="_blank"
        >个人网站</a>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'NavMenu',
  data () {
    return {
       activeIndex: '1',
        activeIndex2: '1'
    }
  },
   methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>

<style scoped>
</style>
