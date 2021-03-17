<template>

  <div class="alert">
    <div class="alert-bg">

    </div>

    <van-nav-bar
      :fixed="true"
      title="报警处置"
    />

    <div class="alert-con">
      <div class="bianhao flex flex-column">

        <div class="fs16 p5 flex alarm-color">
          <img src="../../../static/img/location-red.png" alt="" class="imgs mr10">
          <div>#1岸电动图人体</div>
        </div>

        <div class="fs16 p5 c6e">
          报警时间
        </div>

        <div class="fs16 p5 line">
          {{alertInfo.deviceNo}}了的卡价倒垃圾拉开就
        </div>

        <div class="fs16 p5 c6e">
          报警类型
        </div>

        <div class="fs16 p5 line">
          {{alertInfo.deviceName}}了的卡价倒垃圾拉开就啊
        </div>

        <div class="fs16 p5 c6e">
          处置结果
        </div>
        <div class="fs16 p5 line">

          <van-field
            v-model="proresult"
            rows="2"
            autosize
            type="textarea"
            maxlength="200"
            placeholder="请输入处置结果"
            show-word-limit
          />

<!--          <van-field v-model="proresult" placeholder="请输入处置结果" class="fs16"/>-->
        </div>

      </div>

      <div class="flex mt25">
          <div class="flex1">
            <van-button @click="done()" block class="chuli" type="warning">取消</van-button>
          </div>
          <div style="width: 20px;"></div>
          <div class="flex1">
            <van-button @click="done()" block class="chuli mb15" type="info">确定处理</van-button>

          </div>
      </div>
    </div>

  </div>
</template>

<script>

  export default {
    name: 'ship-alarm-process',
    data() {
      return {
        deviceName: '',
        alertInfo: '',
        proresult: ''
      }
    },

    mounted() {

    },
    methods: {},
    watch: {
      $route(to, from) {
      }
    }
  }
</script>

<style scoped lang="scss">
  .alert-bg {
    width: 100vw;
    height: 255px;
    background-image: url('../../../static/img/index-bg.png');
    background-size: cover;
    background-repeat: no-repeat;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
  }

  .alert {
    width: 100vw;
    height: 100vh;
    background: #FFFFFF;
    padding-top: 60px;
    box-sizing: border-box;
    padding-left: 20px;
    padding-right: 20px;
  }

  .alert-con {
    width: 100%;
    height: 100%;
    background: #fff;
    position: relative;
    z-index: 9;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    padding: 20px;
    box-sizing: border-box;
    overflow: auto;
    box-shadow: 0px 0px 5px 2px #eee;
  }

  .line {
    border-bottom: 1px solid #e3e3e3;
    margin-bottom: 10px;
  }
  .imgs{
    width: 18px;
    height: 22px;
  }
  .alarm-color{
    color: #FF0946;
  }
  /*.chuli {*/
  /*  background-color: #3BB19C !important;*/
  /*  border: 0.02667rem solid #3BB19C !important;*/
  /*}*/

  .van-cell {
    padding: 0;
  }

</style>
