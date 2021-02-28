<template>
  <div class="words">
    <h1>Words</h1>

    <div style="margin-top: 10px">
          <p v-for="item in words">
            {{item}}
          </p>
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
  name: 'Words',
  data() {
    return {
      words: '',
    }
  },
  created() {
    this.getTips()
  },
  methods: {
    getTips() {
      this.$axios('https://www.hexianwei.com/api/word/english').then(res => {
        this.words = res.data
      })
    }
  }
}
</script>

<style>

</style>
