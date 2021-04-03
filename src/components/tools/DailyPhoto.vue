<template>
  <div class="daily_photo">

    <h3>
      搬运工：数据来自互联网
    </h3>

    <div>
      <el-select v-model="type" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>

      <el-button type="success" v-on:click="againSelect()">
        换一个
      </el-button>
    </div>


    <div class="copyright" style="margin-bottom: 20px">
      <div v-for="(msg) in msgs">{{ msg }}</div>
    </div>

    <div class="block">
      <div v-if="image_urls.length > 1" v-for="(img) in image_urls" style="float:left">
        <img class="small_img" :src=img>
      </div>
      <div v-else>
        <img :src=image_urls[0] width="800px">
      </div>
    </div>
  </div>

</template>


<script>

export default {
  name: 'DailyPhoto',
  data() {
    return {
      randomSeq: 0,
      msgs: '',
      image_urls: [],
      source: '',
      type: 'ZHI_HU',
      options: [
        {
          label: '知乎',
          value: 'ZHI_HU'
        },
        {
          label: 'keep',
          value: 'KEEP'
        },
        {
          label: '马蜂窝',
          value: 'MFW'
        },
        {
          label: '美篇',
          value: 'MEI_PIAN'
        }
      ],
    }
  },
  created() {
    this.getDailyPhoto();
  },
  methods: {
    getDailyPhoto() {
      const url = 'https://www.hexianwei.com/api/img?source=';
      this.$axios(url + this.type).then(res => {
        const data = res.data
        this.image_urls = data.url;
        this.copyright = data.msg;
        this.msgs = data.msg.split("。");
        this.source = data.source;
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

.small_img {
  height: 300px;
  margin: 10px;
}

</style>
