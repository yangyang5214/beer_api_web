<template>
  <div class="graph_bed">
    <h2>图床</h2>

    <el-upload
      class="upload-demo"
      drag
      :data="{'description' :description,'key':key}"
      :action="action_url"
      :auto-upload="false"
      :on-success="uploadSuccessResave"
      multiple>
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
    </el-upload>

    <br>
    <br>

    <el-input
      type="textarea"
      placeholder="请输入图片描述："
      v-model="description">
    </el-input>

    <br>
    <br>

    <el-button type="primary" v-on:click="uploadImage">上传到服务器</el-button>
    <el-button type="success" v-on:click="copyImageUrl">复制结果</el-button>

  </div>

</template>


<script>

  import {upload_photo_url} from '../../request/api';

  export default {
    name: 'GraphBed',
    data() {
      return {
        description: "222",
        key: "beer5214",
        action_url: upload_photo_url,
        image_url: ''
      }
    },
    methods: {
      uploadSuccessResave(response, file, fileList) {
        this.image_url = response.data;
      },
      uploadImage() {
        this.$refs.upload.submit();
      },
      copyImageUrl() {
        this.$copyText(this.image_url).then(() => {
          }, () => {
            alert("浏览器不支持！")
          }
        )
      },
    }
  }
</script>

<style scoped>
</style>
