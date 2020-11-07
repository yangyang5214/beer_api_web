<template>
  <div class="jrebel">

    <h2>jrebel 激活 online</h2>

    <br>
    <br>

    <div>
      <span>出处：<a href="https://www.hexianwei.com/2019/07/10/jrebel%E6%BF%80%E6%B4%BB/" target="_blank">www.hexianwei.com</a></span>
    </div>

    <br>
    <br>
    <br>

    <el-button style="width: 300px" type="success" v-on:click=getJrebelLisence()>获取激活码</el-button>

    <br>
    <br>
    <br>

    <div>
      <el-input
        type="type"
        v-model="license"
      >
      </el-input>
    </div>
  </div>

</template>


<script>
export default {
  name: 'DailyPhoto',
  data() {
    return {
      license: ''
    }
  },
  methods: {
    getJrebelLisence() {
      this.$axios('https://www.hexianwei.com/api/jrebel').then(res => {
        this.license = res.data
      })
    }
  }
}
</script>

<style scoped>
</style>
