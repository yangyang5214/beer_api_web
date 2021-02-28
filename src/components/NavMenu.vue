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

      <el-submenu index="2">
        <template slot="title">强烈推荐</template>

        <el-menu-item
          v-for="nav_item in favorite_nav_list"
          :key="nav_item.index"
          :index="nav_item.index"
        >
          <a v-bind:href="nav_item.index" target="_blank">{{ nav_item.title }}</a>
        </el-menu-item>

      </el-submenu>

      <el-menu-item index="3">
        <a
          href="https://www.hexianwei.com"
          target="_blank"
        >个人网站</a>
      </el-menu-item>
      <el-menu-item index="4">
        <a
          href="https://yangyang5214.github.io/note/"
          target="_blank"
        >个人笔记</a>
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
        {index: '/tools/words', title: 'words'},
      ],
      favorite_nav_list: [
        {index: 'https://crontab.guru/', title: 'crontab'},
        {index: 'https://curl.trillworks.com/', title: 'curl to python'}
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
