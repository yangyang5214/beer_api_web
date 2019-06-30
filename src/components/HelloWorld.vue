<template>
  <div class="hello">

    <el-container>

      <el-header>
        <NavMenu></NavMenu>
      </el-header>

      <el-main>
        <router-view></router-view>
      </el-main>

    </el-container>
  </div>
</template>

<script>

  import NavMenu from '../components/NavMenu'

  export default {
    name: 'HelloWord',
    data() {
      return {}
    },
    components: {
      NavMenu
    }

  }
</script>

<style scoped>
  .hello {
    position: absolute;
    top: 2%;
    left: 20%;
    right: 20%;
  }
</style>
