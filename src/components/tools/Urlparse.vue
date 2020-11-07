<template>
  <div class="url_parse">
    <h2>url parse</h2>

    <el-input
      type="textarea"
      :autosize="{ minRows: 1, maxRows: 5}"
      placeholder="请输入url："
      v-model="url">
    </el-input>

    <br>
    <br>

    <el-button type="primary" v-on:click="getParse">提取</el-button>

    <br>
    <br>

    <el-input
      type="textarea"
      :autosize="{ minRows: 15, maxRows: 100}"
      v-model="result">
    </el-input>

  </div>

</template>


<script>

export default {
  name: 'urlparse',
  data() {
    return {
      url: 'https://github.com?age=13',
      result: '',
    }
  },
  methods: {
    getParse() {
      this.result = ''
      const body = {
        'url': this.url
      }
      this.$axios({
        url: 'https://www.hexianwei.com/api/urlparams',
        method: 'post',
        data: body,
        header:{
          'Content-Type':'application/json'
        }
      }).then(res => {
        this.result = JSON.stringify(res.data,null,2)
      })
    },
  }
}
</script>

<style scoped>
</style>
