<template>

  <section class="content">
    <div class="alert-bg">

    </div>

    <h2 class="cfff mt0">船舶监控</h2>

    <div class="flex justify-content-between mb20">
      <div class="info-item flex justify-content-evenly flex-column align-items-center">
        <div class="B9C8EE mb-10">年度接入次数</div>
        <div class="cfff fs14">345</div>
      </div>
      <div class="info-item flex justify-content-evenly flex-column align-items-center">
        <div class="B9C8EE mb-10">{{new Date().getMonth()+1}}月接入次数</div>
        <div class="cfff fs14">345</div>
      </div>
      <div class="info-item flex justify-content-evenly flex-column align-items-center">
        <div class="B9C8EE mb-10">年度能耗</div>
        <div class="cfff fs14">345</div>
      </div>
      <div class="info-item flex justify-content-evenly flex-column align-items-center">
        <div class="B9C8EE mb-10">{{new Date().getMonth()+1}}月能耗</div>
        <div class="cfff fs14">345</div>
      </div>
    </div>

    <div class="details p15 posr">
      <div class="flex align-items-center">
        <div class="fs16">
          <span>1#岸电</span>
          <span>1#插座</span>
        </div>
        <div class="status fault flex">
          <div class="cir"></div>
          <span>正常</span>
        </div>
      </div>

      <div class="flex details-content">
        <div class="l-imgs">
          <img alt="shipImgs" class="shipImgs" src="../../../static/img/ship.png">
        </div>
        <div class="flex1 flex flex-column justify-content-evenly">
          <div class="flex">
            <div class="flex1 flex justify-content-center flex-column align-items-center">
              <van-icon class="info fs16" class-prefix="my-icon" name="iconloudianliu"/>
              <span>12MA</span>
            </div>
            <div class="flex1 flex justify-content-center flex-column align-items-center">
              <van-icon class="info fs16" class-prefix="my-icon" name="iconjierushichang"/>
              <span>12MA</span>
            </div>
            <div class="flex1 flex justify-content-center flex-column align-items-center">
              <van-icon class="info fs16" class-prefix="my-icon" name="iconleijinenghao"/>
              <span>12MA</span>
            </div>
          </div>

          <div class="flex">
            <div class="flex1 flex justify-content-center flex-column align-items-center">
              <van-icon class="info fs16" class-prefix="my-icon" name="iconAxiang"/>
              <span>12MA</span>
            </div>
            <div class="flex1 flex justify-content-center flex-column align-items-center">
              <van-icon class="info fs16" class-prefix="my-icon" name="iconBxiang"/>
              <span>12MA</span>
            </div>
            <div class="flex1 flex justify-content-center flex-column align-items-center">
              <van-icon class="info fs16" class-prefix="my-icon" name="iconCxiang"/>
              <span>12MA</span>
            </div>
          </div>
        </div>


      </div>


      <div class="right-tips">
        <span>2#船舶</span>
        <span> | </span>
        <span>张三</span>
      </div>
    </div>

    <h2>报警信息</h2>

    <div :key="index" class="card flex mb15" v-bind:class="flagAlarm?'loudian':'guowen'" v-for="(item,index) of [1,2,3] ">
      <img class="loudianguowenimgs" src="../../../static/img/loudian.png" v-if="flagAlarm">
      <img alt="" class="loudianguowenimgs" src="../../../static/img/guowen.png" v-if="!flagAlarm">
      <div class="card-info cfff">
        <div class="mb5 flex align-items-center justify-content-between">
          <span class="fs16 fw">
            <span v-text="flagAlarm?'漏电报警':'过温报警'"></span>
          </span>
          <span>2020年1月11日</span>
        </div>

        <div class="mb5 flex align-items-center justify-content-between">
          <span class="fs14">报警值:</span>
          <span>90mA</span>
        </div>

        <div class="mb5 flex align-items-center justify-content-between">
          <span class="fs14">阀值:</span>
          <span>90mA</span>
        </div>

        <div class="mb5 flex align-items-center justify-content-between">
          <span class="fs14">报警位置:</span>
          <span>#1#2岸电岸电</span>
        </div>

        <div class="mb5 flex align-items-center justify-content-between">
          <span class="fs14">涉事船舶:</span>
          <span>#232船舶</span>
        </div>
      </div>

      <div class="flex align-items-center ml10">
        <div class="pross">处理</div>
      </div>
    </div>


  </section>
</template>

<script>
  // import { Toast } from 'vant'
  // import { getAreaList } from '../../plugins/area'
  // import { updateDevice } from '../../api/user'
  export default {
    name: 'ship-index',
    data() {
      return {
        deviceName: '',
        flagAlarm: Boolean
      }
    },
    mounted() {
      this.flagAlarm = true
      console.log(new Date().getMonth())
    },
    methods: {},
    watch: {
      $route(to, from) {
        console.log(to)
        console.log(from)
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
    z-index: -11;
  }

  .content {
    padding: 15px;
    box-sizing: border-box;
  }

  .info-item {
    height: 60px;
    width: 80px;
    background-color: rgba(3, 83, 202, .55);
    border-radius: 5px;
    color: #0353ca;
  }

  .B9C8EE {
    color: #B9C8EE;
  }

  .mb-10 {
    margin-bottom: -10px;
  }

  .details {
    width: 100%;
    height: 150px;
    background-color: #ffffff;
    border-radius: 5px;
  }

  .right-tips {
    position: absolute;
    right: 0;
    top: 0;
    width: 105px;
    height: 30px;
    background-color: #7383F3;
    border-bottom-left-radius: 20px;
    border-top-right-radius: 5px;
    color: #FFFFFF;
    text-align: center;
    line-height: 30px;
    font-size: 13px;
  }

  .status {
    margin-left: 10px;
    padding: 3px 6px;
    border-radius: 15px;
    align-items: center;

    .cir {
      border-radius: 50%;
      margin-right: 5px;
      width: 10px;
      height: 10px;
    }

    &.normal {
      background-color: #CCF8E4;
      border: 1px solid #66EAAE;

      .cir {
        background-color: #42b983;
      }
    }

    &.exception {
      background-color: #FFD3D3;
      border: 1px solid #FF7E7E;

      .cir {
        background-color: #FF2121;
      }
    }

    &.fault {
      background-color: #FFE4CC;
      border: 1px solid #FFBC80;

      .cir {
        background-color: #FF7800;
      }
    }

    &.offline {
      background-color: #CCF8E4;
      border: 1px solid #66EAAE;

      .cir {
        background-color: #42b983;
      }
    }
  }

  .details-content {
    height: 100px;
    /*background-color: #42b983;*/
  }

  .imgs {
    width: 18px;
    height: 18px;
  }

  .l-imgs {
    width: 80px;
    margin-top: 8px;
    padding-left: 36px;

    /*background-color: #42b983;*/
  }

  .card {
    width: 337.5px;
    height: 150px;
    border-radius: 8px;
    padding: 12px;

    &.loudian {
      background-image: url('../../../static/img/loudian-bg.png');

    }

    &.guowen {
      background-image: url('../../../static/img/guowen-bg.png');

    }
  }

  .card-info {
    width: 220px;
  }

  .pross {
    width: 60px;
    height: 30px;
    border: 1px solid #fff;
    border-radius: 5px;
    color: #FFFFFF;
    line-height: 30px;
    text-align: center;
    background-color: rgba(255, 255, 255, .2);
    /*padding: 5px 15px;*/
  }

  .shipImgs {
    width: 36px;
    height: 36px;
  }

  .loudianguowenimgs {
    height: 19px;
    width: 19px;
    margin-right: 5px;
    /*margin-top: 3px;*/
  }

  /*.alert {*/
  /*  width: 100vw;*/
  /*  height: 100vh;*/
  /*  background: #F1F0F6;*/
  /*  padding-top: 60px;*/
  /*  box-sizing: border-box;*/
  /*  padding-left: 20px;*/
  /*  padding-right: 20px;*/
  /*}*/

  /*.alert-con {*/
  /*  width: 100%;*/
  /*  height: 100%;*/
  /*  background: #fff;*/
  /*  position: relative;*/
  /*  z-index: 9;*/
  /*  border-top-left-radius: 3px;*/
  /*  border-top-right-radius: 3px;*/
  /*  padding: 20px;*/
  /*  box-sizing: border-box;*/
  /*  overflow: auto;*/
  /*}*/

  /*.line {*/
  /*  border-bottom: 1px solid #e3e3e3;*/
  /*  margin-bottom: 10px;*/
  /*}*/

  /*.chuli {*/
  /*  background-color: #3BB19C !important;*/
  /*  border: 0.02667rem solid #3BB19C !important;*/
  /*}*/

  /*.van-cell {*/
  /*  padding: 0;*/
  /*}*/
</style>
