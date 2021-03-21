<!-- home -->
<template>
  <div class="con">
    <van-nav-bar
      :fixed="true"
      title="岸电明细"
    />

    <div class="flex fs14 tab justify-content-between">
      <div
        :key="index"
        @click="selItem(item)"
        class="tab-item flex justify-content-center align-items-center"
        v-bind:class="{'active':item.name === sel.name}"
        v-for="(item,index) in tabList">
        <span>{{item.name}}</span>
      </div>
    </div>


    <div v-if="sel.active === 0">
      <div class="flex align-items-center mb15">
        <div class="cir-before">

        </div>
        <div class="cfff fs16">
          概况
        </div>
      </div>

      <div class="flex top-info justify-content-between">
        <div class="info-item flex align-items-center">
          <img alt="" class="imgs" src="../../../static/img/n1.png">
          <div>
            <div class="cfff fs14 mb5">稳定运行</div>
            <div class="A6D fs14 fw">36.6 ℃</div>
          </div>
        </div>
        <div class="info-item flex align-items-center">
          <img alt="" class="imgs" src="../../../static/img/n2.png">
          <div>
            <div class="cfff fs14 mb5">岸电箱</div>
            <div class="A6D fs14 fw">17座</div>
          </div>
        </div>
      </div>

      <div class="flex top-info justify-content-between">
        <div class="info-item flex align-items-center">
          <img alt="" class="imgs" src="../../../static/img/n3.png">
          <div>
            <div class="cfff fs14 mb5">接入船舶</div>
            <div class="A6D fs14 fw">36.6 ℃</div>
          </div>
        </div>
        <div class="info-item flex align-items-center">
          <img alt="" class="imgs" src="../../../static/img/n4.png">
          <div>
            <div class="cfff fs14 mb5">年度报警</div>
            <div class="A6D fs14 fw">17座</div>
          </div>
        </div>
      </div>

      <div class="flex top-info justify-content-between">
        <div class="info-item flex align-items-center">
          <img alt="" class="imgs" src="../../../static/img/n5.png">
          <div>
            <div class="cfff fs14 mb5">年度接入次数</div>
            <div class="A6D fs14 fw">36.6 ℃</div>
          </div>
        </div>
        <div class="info-item flex align-items-center">
          <img alt="" class="imgs" src="../../../static/img/n6.png">
          <div>
            <div class="cfff fs14 mb5">年度能耗</div>
            <div class="A6D fs14 fw">17座</div>
          </div>
        </div>
      </div>


      <div class="flex align-items-center mb15">
        <div class="cir-before">

        </div>
        <div class="cfff fs16">
          环保效益
        </div>
      </div>

      <div class="hbxy">
        <div class="flex justify-content-between mb15">
          <div class="fs16" style="color: #81ADE5;">累计用电</div>
          <div class="fs14" style="color: #00B9DA">123123KWH</div>
        </div>

        <div class="flex justify-content-between mb15">
          <div class="fs16" style="color: #81ADE5;">减少CO2排放</div>
          <div class="fs14" style="color: #00B9DA">123123吨</div>
        </div>

        <div class="flex justify-content-between">
          <div class="fs16" style="color: #81ADE5;">相当于植树</div>
          <div class="fs14" style="color: #00B9DA">123123棵</div>
        </div>
      </div>
    </div>

    <div style="width: 100%;" v-show="sel.active === 1">
      <div class="flex align-items-center mb15">
        <div class="cir-before">

        </div>
        <div class="cfff fs16">
          能耗统计
        </div>
      </div>
      <div class=" ec-content" style="background-color: rgba(25, 37, 56, .7)">
        <div id="main" style="width: 375px;height:300px;"></div>
      </div>
    </div>
  </div>

</template>

<script>

  export default {
    data() {
      return {
        devicesInfoList: [],
        nickName: '',
        phone: '',
        timer: '',
        flag1: false,
        flag2: true,
        myChart: '',
        sel: '',
        tabList: [
          {
            name: '概况',
            active: 0
          },
          {
            name: '能耗统计',
            active: 1
          },
          {
            name: '更多',
            active: 2
          }
        ]
      }
    },

    computed: {},

    mounted() {
      this.sel = this.tabList[0]
      // this.myEcharts()

      // this.getDevicesInfo()
      // this.nickname = window.localStorage.getItem('nick_name')
      // this.phone = window.localStorage.getItem('phone')
      //
      // this.getUnHandleAlarmListInfo()
      // this.timer = setInterval(() => {
      //   this.getUnHandleAlarmListInfo()
      // }, 30000)
    },

    methods: {

      selItem(item) {
        console.log(item)
        this.sel = item
        console.log(this.sel.active)
        if (this.sel.active === 1) {
          // console.log(11111111)
          this.myEcharts()
        }
      },

      myEcharts() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = this.$echarts.init(document.getElementById('main'))

        // 指定图表的配置项和数据
        var option = {
          tooltip: {},
          legend: false,
          xAxis: {
            data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋']
          },
          yAxis: {},
          series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10],
            color: '#179FF7',
            barWidth: 30
          }]
        }

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option)
      }
    }
  }
</script>
<style lang="scss" scoped>

  .cir-before {
    width: 8px;
    height: 8px;
    background: #10C3E8;
    border-radius: 50%;
    box-shadow: 0px 0px 3px 0px #10C3E8;
    margin-right: 10px;
  }

  .tab {
    color: #FFFFFF;
    font-size: 14px;
    margin-bottom: 15px;

    .tab-item {
      height: 50px;
      width: 170px;
      background-color: rgba(25, 37, 56, .7);
      color: #9E9FA4;
      margin-right: 10px;
      border-radius: 5px;
    }

    .active {
      background-color: #132F4A;
      color: #FFFFFF !important;
    }
  }

  .hbxy {
    height: 130px;
    width: 100%;
    background-color: rgba(25, 37, 56, .7);
    box-sizing: border-box;
    padding: 20px;
    border-radius: 5px;
  }

  .ec-content {
    border-radius: 5px;
    width: 100%;
  }

  .top-info {
    height: 75px;
  }

  .van-nav-bar--fixed {
    background-color: #141726 !important;
  }

  .info-item {
    height: 60px;
    width: 165px;
    /*background-image: linear-gradient(to right, #192538, #192538);*/
    background-color: rgba(25, 37, 56, .7);
    border-radius: 5px;
    padding: 10px 0px 10px 20px;
  }

  .imgs {
    width: 30px;
    height: 33px;
    margin-right: 20px;
  }

  .con {
    min-height: calc(100vh);
    padding-left: 15px;
    padding-right: 15px;
    background-color: #141726;
    padding-bottom: 60px;
    padding-top: 50px;
  }

  .A6D {
    color: #A6D8E6;
  }

  .details {
    width: 100%;
    height: 160px;
    background-color: rgba(25, 37, 56, .7);
    border-radius: 5px;
  }

  .right-tips {
    position: absolute;
    right: 0;
    top: 0;
    width: 105px;
    height: 30px;
    background-color: #07A2C1;
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
      background-color: rgba(66, 185, 131, .2);
      border: 1px solid rgba(66, 185, 131, .2);

      span {
        color: #42b983;
      }

      .cir {
        background-color: #42b983;
      }
    }

    &.exception {
      background-color: rgba(255, 33, 33, .2);
      border: 1px solid rgba(255, 33, 33, .2);

      span {
        color: #FF2121;
      }

      .cir {
        background-color: #FF2121;
      }
    }

    &.fault {
      background-color: rgba(255, 120, 0, .2);
      border: 1px solid rgba(255, 120, 0, .2);

      span {
        color: #FF7800;
      }

      .cir {
        background-color: #FF7800;
      }
    }

    &.offline {
      background-color: rgba(153, 153, 153, .2);
      border: 1px solid rgba(153, 153, 153, .2);

      span {
        color: #979797;
      }

      .cir {
        background-color: #979797;
      }
    }
  }

  .my-icon {
    color: #FFFFFF;
    margin-bottom: 5px;
  }

  .A0D {
    color: #A0D0DE;
  }

  .details-content {
    height: 100px;
    /*background-color: #42b983;*/
  }
</style>
