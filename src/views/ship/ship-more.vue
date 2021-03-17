<template>

  <div class="alert">
    <div class="alert-bg">

    </div>

    <van-nav-bar
      :fixed="true"
      left-arrow
      left-text="返回"
      title="能耗"
    />

    <div class="info flex p15 cfff mb20">
      <div class="flex1">
        <div class="fs14 mb5">开始时间</div>
        <div class="fs16 fw">2020-20-20</div>
      </div>
      <div class="flex1">
        <div class="fs14 mb5">开始时间</div>
        <div class="fs16 fw">2020-20-20</div>
      </div>
    </div>

    <div class="alert-con">
      <div class="flex justify-content-between fs16 linebd pb15 mb15">
        <div class="fs16 c6e">接入次数</div>
        <div>3535次</div>
      </div>
      <div class="flex justify-content-between fs16 linebd pb15 mb15">
        <div class="fs16 c6e">总能耗</div>
        <div>3535次</div>
      </div>
      <div class="flex justify-content-between fs16 linebd pb15 mb15">
        <div class="fs16 c6e">总时长</div>
        <div>3535次</div>
      </div>
      <div class="flex justify-content-between fs16 linebd pb15 mb15">
        <div class="fs16 c6e">报警次数</div>
        <div>3535次</div>
      </div>
    </div>

  </div>
</template>

<script>

  export default {
    name: 'ship-more',
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

<style lang="scss" scoped>
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
    height: calc(100% - 85px);
    background: #fff;
    position: relative;
    z-index: 9;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    padding: 20px;
    box-sizing: border-box;
    overflow: auto;
    box-shadow: 0px 0px 3px 1px #eee;
  }

  .line {
    border-bottom: 1px solid #e3e3e3;
    margin-bottom: 10px;
  }

  .imgs {
    width: 18px;
    height: 22px;
  }

  .alarm-color {
    color: #FF0946;
  }

  .info {
    width: 100%;
    height: 70px;
    background-color: rgba(3, 83, 202, .7);
    position: relative;
    z-index: 2;
    border-radius: 8px;
  }
  .linebd{
    border-bottom: 1px solid #F4F4F4;
  }
  /*.chuli {*/
  /*  background-color: #3BB19C !important;*/
  /*  border: 0.02667rem solid #3BB19C !important;*/
  /*}*/

  .van-cell {
    padding: 0;
  }

</style>
