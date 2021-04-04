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
      url: 'https://api.zolaprod.babylone.io/proxy-search/algolia/products?index=zolaprod_products&country=CN&locale=en&date=2021-04-04T13:37:15.203Z&queries=%7B%22ruleContexts%22:%22women_nouveautes_COUNTRY_CN%22,%22searchType%22:%22tag%22,%22tagFilters%22:[%22women_nouveautes%22,%22CN%22],%22numericFilters%22:[[%22discontinued%22,%22!%3D%22,1]]%7D',
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
        url: 'https://www.hexianwei.com/api/crawler/param',
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
