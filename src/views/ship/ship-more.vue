<template>

  <div class="alert">
    <div class="alert-bg">

    </div>

    <van-nav-bar
      :fixed="true"
      @click-left="onClickLeft"
      left-arrow
      left-text="返回"
      title="能耗"
    />

    <div class="info flex p15 cfff mb20">
      <div class="flex1">
        <div class="fs14 mb5">开始时间</div>
        <div @click="showPickerStart = true" class="fs16 fw"
             v-text="typeof valueStart == 'string'?valueStart:$moment(valueStart).format('YYYY-MM-DD')"></div>
        <van-popup position="bottom" v-model="showPickerStart">
          <van-datetime-picker
            :max-date="maxDate"
            :min-date="minDate"
            @cancel="showPickerStart = false"
            @confirm="onConfirmStart"
            title="选择年月日"
            type="date"
            v-model="currentDateStart"
          />
        </van-popup>
      </div>
      <div class="flex1">
        <div class="fs14 mb5">结束时间</div>
        <div @click="showPickerEnd = true" class="fs16 fw"
             v-text="typeof valueEnd == 'string'?valueEnd:$moment(valueEnd).format('YYYY-MM-DD')"></div>
        <van-popup position="bottom" v-model="showPickerEnd">
          <van-datetime-picker
            :max-date="maxDate"
            :min-date="minDate"
            @cancel="showPickerEnd = false"
            @confirm="onConfirmEnd"
            title="选择年月日"
            type="date"
            v-model="currentDateEnd"
          />
        </van-popup>
      </div>
    </div>

    <div class="alert-con">
      <div class="flex justify-content-between fs16 linebd pb15 mb15">
        <div class="fs16 c6e">接入次数</div>
        <div v-if="consumptionInfoData.connectionTimes">{{consumptionInfoData.connectionTimes}}次</div>
      </div>
      <div class="flex justify-content-between fs16 linebd pb15 mb15">
        <div class="fs16 c6e">总能耗</div>
        <div v-if="consumptionInfoData.consumption">{{consumptionInfoData.consumption}}kwh</div>
      </div>
      <div class="flex justify-content-between fs16 linebd pb15 mb15">
        <div class="fs16 c6e">总时长</div>
        <div v-if="consumptionInfoData.connectionDuration">
          <!--          {{consumptionInfoData.connectionDuration}}-->
          <span>{{showTimeD}}天</span>
          <span>{{showTimeH}}时</span>
          <span>{{showTimeM}}分</span>
          <span>{{showTimeS}}秒</span>
        </div>
      </div>
      <div class="flex justify-content-between fs16 linebd pb15 mb15">
        <div class="fs16 c6e">报警次数</div>
        <div v-if="consumptionInfoData.faultTimes">{{consumptionInfoData.faultTimes}}次</div>
      </div>
    </div>

  </div>
</template>
<script>
  import { Toast } from 'vant'
  import { consumptionInfo } from '../../api/user'

  export default {
    name: 'ship-more',
    data() {
      return {
        deviceName: '',
        alertInfo: '',
        proresult: '',
        valueStart: '请选择开始时间',
        valueEnd: '请选择结束时间',
        showPickerStart: false,
        showPickerEnd: false,
        minDate: new Date(2000, 0, 1),
        maxDate: new Date(2040, 11, 30),
        currentDateStart: new Date(),
        currentDateEnd: new Date(),
        consumptionInfoData: '',
        showTimeH: '',
        showTimeM: '',
        showTimeS: ''
      }
    },

    mounted() {
    },
    methods: {
      onConfirmStart(time) {
        this.valueStart = time
        if (typeof this.valueStart !== 'string' && typeof this.valueEnd !== 'string' && this.valueEnd.getTime() < this.valueStart.getTime()) {
          Toast('开始时间需要小于结束时间')
          this.valueStart = '请选择结开始时间'
          return
        }
        if (typeof this.valueStart !== 'string' && typeof this.valueEnd !== 'string') {
          this.getConsumptionInfo()
        }
        this.showPickerStart = false
      },
      onConfirmEnd(time) {
        this.valueEnd = time
        if (typeof this.valueStart !== 'string' && typeof this.valueEnd !== 'string' && this.valueEnd.getTime() < this.valueStart.getTime()) {
          Toast('开始时间需要小于结束时间')
          this.valueEnd = '请选择结束时间'
          return
        }
        if (typeof this.valueStart !== 'string' && typeof this.valueEnd !== 'string') {
          this.getConsumptionInfo()
        }
        this.showPickerEnd = false
      },
      getConsumptionInfo() {
        const postData = {
          beginTime: this.$moment(this.valueStart).format('YYYY-MM-DD'),
          endTime: this.$moment(this.valueEnd).format('YYYY-MM-DD')
        }
        consumptionInfo(postData).then(res => {
          this.consumptionInfoData = res['data']
          this.showTimeD = this.$moment.duration(this.consumptionInfoData['connectionDuration'], 'seconds').days()
          this.showTimeH = this.$moment.duration(this.consumptionInfoData['connectionDuration'], 'seconds').hours()
          this.showTimeM = this.$moment.duration(this.consumptionInfoData['connectionDuration'], 'seconds').minutes()
          this.showTimeS = this.$moment.duration(this.consumptionInfoData['connectionDuration'], 'seconds').seconds()
        })
      },
      onClickLeft() {
        this.$router.replace({ path: '/ship-index' })
      }
    },
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
    z-index: 1;
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

  .linebd {
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
