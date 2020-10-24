<template>
  <div class="daily_photo">

    <h3>搬运工</h3>

    <div class="copyright" style="margin-bottom: 20px">
      <div v-for="(msg) in msgs">{{msg}}</div>
      <a href="">{{source}}</a>
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
    import {dailyPhoto, daily_photo_url} from '../../request/api';

    export default {
        name: 'DailyPhoto',
        data() {
            return {
                randomSeq: 0,
                msgs: '',
                image_urls: [],
                source: ''
            }
        },
        created() {
            this.getDailyPhoto();
        },
        methods: {
            getDailyPhoto() {
                const url = 'https://www.hexianwei.com/api/img?type=';
                const type = Math.round(Math.random() * 100);
                dailyPhoto(url + type).then(res => {
                    this.image_urls = res.url;
                    this.copyright = res.msg;
                    this.msgs = res.msg.split("。");
                    this.source = res.source;
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
