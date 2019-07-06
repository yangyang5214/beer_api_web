<template>
  <div class="underLineToCamelCase">

    <h2>下划线转驼峰</h2>

    <el-input
      type="textarea"
      :autosize="{ minRows: 10, maxRows: 20}"
      placeholder="请输入下划线格式的内容："
      v-model="processing_data">
    </el-input>

    <br>
    <br>

    <el-button type="primary" v-on:click="underLineToCamelCase">下划线转驼峰</el-button>
    <el-button type="success" @click="copy_result">复制结果</el-button>
    <el-button type="danger" v-on:click="clear">清空内容</el-button>

    <br>
    <br>

    <el-input
      type="textarea"
      :autosize="{ minRows: 10, maxRows: 20}"
      v-model="processed_data">
    </el-input>
  </div>

</template>


<script>

  import {underLineToCamelCase} from '../../request/api';

  export default {
    name: 'UnderLineToCamelCase',
    data() {
      return {
        processing_data: '',
        processed_data: ''
      }
    },
    methods: {
      //清空输入框
      clear() {
        this.processing_data = ''
      },
      copy_result() {
        this.$copyText(this.processed_data).then(() => {
          }, () => {
            alert("浏览器不支持！")
          }
        );
        this.$message('复制成功！！！');

      },
      underLineToCamelCase() {
        if (this.processing_data.length === 0) {
          alert('请输入内容!!!');
          return
        }
        const params = {"params": this.processing_data};
        underLineToCamelCase(params).then(res => {
          console.log(res);
          this.processed_data = res;
        })
      }
    }

  }
</script>

<style scoped>
</style>
