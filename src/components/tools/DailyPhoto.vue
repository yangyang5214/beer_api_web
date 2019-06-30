<template>
  <div class="daily_photo">
    <div class="block">
      <el-image :src=this.image_url></el-image>
    </div>

    <div class="copyright">
      <span>{{copyright}}</span>
      <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
      来源：<a :href=source target="_blank">{{source}}</a>
    </div>

    <div class="function">
      <el-button type="success" v-on:click=againSelect()>换一张</el-button>
      <el-button type="success" v-on:click=copyImageUrl()>复制图片地址</el-button>
      <el-button type="success" v-on:click=downloadImage()>下载</el-button>
    </div>

  </div>

</template>


<script>
  import {dailyPhoto, daily_photo_url} from '../../request/api';

  export default {
    name: 'DailyPhoto',
    data() {
      return {
        randomSeq: 0,
        image_url: '',
        copyright: '',
        source: 'https://cn.bing.com'
      }
    },
    created() {
      this.getDailyPhoto();
    },
    methods: {
      getDailyPhoto() {
        const local_url = daily_photo_url.replace('randomSeq', this.randomSeq);
        console.log(local_url);
        dailyPhoto(local_url).then(res => {
          this.image_url = res.image_url;
          this.copyright = res.copyright;
          // this.source = res.source;
          this.randomSeq++;
        })
      },
      againSelect() {
        this.getDailyPhoto()
      },
      copyImageUrl() {
        this.$copyText(this.image_url).then(() => {
          }, () => {
            alert("浏览器不支持！")
          }
        )
      },
      downloadImage() {
        alert('图片下载，待开发！！！')
      }
    }
  }
</script>

<style scoped>
  .copyright {
    margin-top: 20px;
  }

  .block {

  }

  .function {
    margin-top: 20px;
  }
</style>
