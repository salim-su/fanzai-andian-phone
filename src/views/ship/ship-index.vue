<template>

  <section class="content">
    <div class="alert-bg">

    </div>

    <h2 class="cfff mt0 flex justify-content-between">
      <span>船舶监控</span>
      <span @click="goMore()">更多</span>
    </h2>

    <div class="flex justify-content-between mb20">
      <div class="info-item flex justify-content-evenly flex-column align-items-center">
        <div class="B9C8EE mb-10">年度接入次数</div>
        <div class="cfff fs14">{{gaikuangInfo.connectionTimesYear}}</div>
      </div>
      <div class="info-item flex justify-content-evenly flex-column align-items-center">
        <div class="B9C8EE mb-10">{{new Date().getMonth()+1}}月接入次数</div>
        <div class="cfff fs14">{{gaikuangInfo.connectionTimesMonth}}</div>
      </div>
      <div class="info-item flex justify-content-evenly flex-column align-items-center">
        <div class="B9C8EE mb-10">年度能耗</div>
        <div class="cfff fs14">{{gaikuangInfo.consumptionYear}}</div>
      </div>
      <div class="info-item flex justify-content-evenly flex-column align-items-center">
        <div class="B9C8EE mb-10">{{new Date().getMonth()+1}}月能耗</div>
        <div class="cfff fs14">{{gaikuangInfo.consumptionMonth}}</div>
      </div>
    </div>

    <div class="details p15 posr">
      <div class="flex align-items-center">
        <div class="fs16">
          <span class="m5">{{currentStateInfo.seName}}</span>
          <span>{{currentStateInfo.subNo}}#插座</span>
        </div>
        <div class="status flex" v-bind:class="status">
          <div class="cir"></div>
          <span v-if="status=='normal'">正常</span>
          <span v-if="status=='fault'">故障</span>
          <span v-if="status=='alarm'">报警</span>
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
              <span>{{leakage}}mA</span>
            </div>
            <div class="flex1 flex justify-content-center flex-column align-items-center">
              <van-icon class="info fs16" class-prefix="my-icon" name="iconjierushichang"/>
              <div>
                <span v-if="showTimeH>0">{{showTimeH}}时</span>
                <span>{{showTimeM}}分</span>
                <span>{{showTimeS}}秒</span>
              </div>
            </div>
            <div class="flex1 flex justify-content-center flex-column align-items-center">
              <van-icon class="info fs16" class-prefix="my-icon" name="iconleijinenghao"/>
              <span>{{currentStateInfo.electricityConsumption}}kwh</span>
            </div>
          </div>

          <div class="flex">
            <div class="flex1 flex justify-content-center flex-column align-items-center">
              <van-icon class="info fs16" class-prefix="my-icon" name="iconAxiang"/>
              <span>{{selABC.aElectricity}}A {{selABC.aVoltage}}V</span>
            </div>
            <div class="flex1 flex justify-content-center flex-column align-items-center">
              <van-icon class="info fs16" class-prefix="my-icon" name="iconBxiang"/>
              <span>{{selABC.bElectricity}}A {{selABC.bVoltage}}V</span>
            </div>
            <div class="flex1 flex justify-content-center flex-column align-items-center">
              <van-icon class="info fs16" class-prefix="my-icon" name="iconCxiang"/>
              <span>{{selABC.cElectricity}}A {{selABC.cVoltage}}V</span>
            </div>
          </div>
        </div>


      </div>


      <div class="right-tips">
        <span>{{currentStateInfo.shipName}}</span>
        <span> | </span>
        <span>{{currentStateInfo.captainName}}</span>
      </div>
    </div>

    <h2>报警信息</h2>

    <div
      :key="index"
      class="card flex mb15"
      v-bind:class="item.type=='fault'?'guzhang':'baojing'"
      v-for="(item,index) of faultAlarmPageCaptainList ">
      <img class="loudianguowenimgs" src="../../../static/img/loudian.png" v-if="flagAlarm">
      <img alt="" class="loudianguowenimgs" src="../../../static/img/guowen.png" v-if="!flagAlarm">
      <div class="card-info cfff">
        <div class="mb10 flex align-items-center justify-content-between">
          <span class="fs16 fw">
            <span>{{item.type =='fault'?t1(item.category):t2(item.category)}}</span>
          </span>
          <span>{{$moment(item.createTime).format('YYYY-MM-DD hh:mm')}}</span>
        </div>
        <!--        <div class="mb5 flex align-items-center justify-content-between">-->
        <!--          <span class="fs14">报警值:</span>-->
        <!--          <span>90mA</span>-->
        <!--        </div>-->

        <!--        <div class="mb5 flex align-items-center justify-content-between">-->
        <!--          <span class="fs14">阀值:</span>-->
        <!--          <span>90mA</span>-->
        <!--        </div>-->

        <div class="mb10 flex align-items-center justify-content-between">
          <span class="fs14">报警位置:</span>
          <span>{{item.areaName}} {{item.seName}} {{item.subNo}} 插座</span>
        </div>

        <div class="mb10 flex align-items-center justify-content-between">
          <span class="fs14">涉事船舶:</span>
          <span>{{item.shipName}}</span>
        </div>
      </div>

      <div class="flex align-items-center ml10">
        <div @click="pross(item)" class="pross">处理</div>
      </div>
    </div>


  </section>
</template>

<script>
  // import { Toast } from 'vant'
  import { transformTypeAlarm, transformTypeFault } from '../../utils/index'
  import { getShipBasicInfo, getShipCurrentState, PostalarmFaultPageCaptain } from '../../api/user'

  export default {
    name: 'ship-index',
    data() {
      return {
        deviceName: '',
        flagAlarm: Boolean,
        gaikuangInfo: '',
        currentStateInfo: '',
        currentStateInfoJson: '',
        showTimeH: '',
        showTimeM: '',
        showTimeS: '',
        leakage: '',
        selABC: '',
        faultAlarmPageCaptainList: '',
        t1: transformTypeFault,
        t2: transformTypeAlarm,
        status: ''
      }
    },
    mounted() {
      console.log(this.t1('1'))
      this.getGaiKuang()
      this.getCurrentState()
      this.getList()
      // this.flagAlarm = true
      // console.log(new Date().getMonth())
    },
    methods: {
      getGaiKuang() {
        getShipBasicInfo().then(res => {
          this.gaikuangInfo = res['data']
        })
      },
      getCurrentState() {
        getShipCurrentState().then(res => {
          this.currentStateInfo = res['data']
          this.currentStateInfoJson = JSON.parse(this.currentStateInfo['jsonData'])
          this.showTimeH = this.$moment.duration(this.currentStateInfo['connectionDuration'], 'seconds').hours()
          this.showTimeM = this.$moment.duration(this.currentStateInfo['connectionDuration'], 'seconds').minutes()
          this.showTimeS = this.$moment.duration(this.currentStateInfo['connectionDuration'], 'seconds').seconds()
          this.leakage = this.currentStateInfoJson['ltu']['leakage']
          this.selABC = this.currentStateInfoJson.meterInfo[this.currentStateInfo.subNo]
        })
      },
      goMore() {
        this.$router.replace({
          path: '/ship-more',
          query: { routerParms: '/ship-index' }
        })
      },
      getList() {
        const postData = {
          size: 10,
          current: 1,
          status: 0
        }
        PostalarmFaultPageCaptain(postData).then(res => {
          this.faultAlarmPageCaptainList = res['data']['records']
          if (this.faultAlarmPageCaptainList.length > 0) {
            this.faultAlarmPageCaptainList.forEach(res => {
              res['jsonData'] = JSON.parse(res['jsonData'])
            })
          }
          console.log(this.faultAlarmPageCaptainList)
          if (this.faultAlarmPageCaptainList.length > 0) {
            if (this.faultAlarmPageCaptainList.filter(p => p.type === 'alarm').length > 0) {
              this.status = 'alarm'
            } else {
              this.status = 'fault'
            }
          } else {
            this.status = 'normal'
          }
        })
      },
      pross(item) {
        console.log(item)
        const objAdd = JSON.stringify(item)
        this.$router.replace({
          path: '/ship-alarm-process?objAdd=' + encodeURIComponent(objAdd),
          query: { routerParms: '/ship-index' }
        })
      }
    },
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
    height: 100px;
    border-radius: 8px;
    padding: 12px;

    &.guzhang {
      background-image: url('../../../static/img/loudian-bg.png');

    }

    &.baojing {
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
