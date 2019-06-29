<template>
  <div class="hello">
    <NavMenu></NavMenu>
    <router-view></router-view>
  </div>
</template>

<script>

import NavMenu from '../components/NavMenu'

export default {
  name: 'HelloWord',
  data () {
    return {
    }
  },
  components:{
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
