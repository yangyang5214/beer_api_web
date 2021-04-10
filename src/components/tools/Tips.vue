<template>
  <div class="tips">
    <h1>Tips</h1>

    <div style="margin-top: 30px">
      <h3 style="color: red">{{ content }}</h3>
      <div>
        详情：<a :href="this.getHref()" target="_blank">{{ link }}</a>
      </div>
    </div>


    <div>
      <el-button
        style="width: 300px;margin-top: 100px"
        type="success"
        v-on:click=getTips()>
        换一个
      </el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UnderLineToCamelCase',
  data() {
    return {
      tips: '',
      link: '',
      content: '',
    }
  },
  created() {
    this.getTips()
  },
  methods: {
    getTips() {
      this.$axios('https://www.hexianwei.com/api/tips').then(res => {
        this.tips = res.data
        this.content = this.tips.content
        this.link = this.tips.link
      })
    },
    getHref() {
      return this.link
    }
  }
}
</script>

<style>

</style>
