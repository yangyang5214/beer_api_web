<template>
  <div>
    <el-menu
      :default-active="$route.path"
      class="el-menu-demo"
      mode="horizontal"
      router
      @select="handleSelect"
    >

      <el-submenu index="1">
        <template slot="title">小工具</template>

        <el-menu-item
          v-for="nav_item in nav_list"
          :key="nav_item.index"
          :index="nav_item.index"
        >
          {{ nav_item.title }}
        </el-menu-item>

      </el-submenu>

      <el-menu-item index="2">
        <a
          href="https://www.hexianwei.com"
          target="_blank"
        >个人网站</a>
      </el-menu-item>
      <el-menu-item index="2">
        <a
          href="https://beef.hexianwei.com"
          target="_blank"
        >个人杂记</a>
      </el-menu-item>

    </el-menu>
  </div>

</template>

<script>
    export default {
        name: 'NavMenu',
        data() {
            return {
                nav_list: [
                    {index: '/tools/dailyPhoto', title: '随机一图'},
                    {index: '/tools/jrebel', title: 'jrebel 激活'},
                    {index: '/tools/tips', title: 'tips'},
                    {index: '/tools/urlparse', title: 'urlparse'},
                ]
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
