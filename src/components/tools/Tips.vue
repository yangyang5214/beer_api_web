<template>
  <div class="tips">
    <h1>Tips</h1>

    <div style="margin-top: 30px">
      {{tips}}
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
    import {tips} from '../../request/api';

    export default {
        name: 'UnderLineToCamelCase',
        data() {
            return {
                tips: '',
            }
        },
        created() {
            this.getTips()
        },
        methods: {
            getTips() {
                tips('https://www.hexianwei.com/api/tips').then(res => {
                    this.tips = res
                })
            }
        }
    }
</script>

<style>

</style>
