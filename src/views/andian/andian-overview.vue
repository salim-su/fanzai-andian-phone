<!-- home -->
<template>
  <div class="con">
    <van-nav-bar
      :fixed="true"
      title="统计"
    />

    <div class="flex top-info justify-content-between">
      <div class="info-item flex flex-column justify-content-around">
        <img alt="" class="imgs" src="../../../static/img/l-wendu.png">
        <div class="cfff fs14">11111</div>
        <div class="A6D fs14 fw">36.6 ℃</div>
      </div>
      <div class="info-item flex flex-column justify-content-around">
        <img alt="" class="imgs" src="../../../static/img/l-a.png">
        <div class="cfff fs14">11111</div>
        <div class="A6D fs14 fw">36.6 ℃</div>
      </div>
      <div class="info-item flex flex-column justify-content-around">
        <img alt="" class="imgs" src="../../../static/img/l-b.png">
        <div class="cfff fs14">11111</div>
        <div class="A6D fs14 fw">36.6 ℃</div>
      </div>
    </div>



    <div id="main" style="width: 600px;height:400px;"></div>


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
        myChart: ''
      }
    },

    computed: {},

    mounted() {
      this.myEcharts()
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
      myEcharts() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = this.$echarts.init(document.getElementById('main'))

        // 指定图表的配置项和数据
        var option = {
          title: {
            text: 'ECharts 入门示例'
          },
          tooltip: {},
          legend: {
            data: ['销量']
          },
          xAxis: {
            data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
          },
          yAxis: {},
          series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }]
        }

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option)
      }
    }
  }
</script>
<style lang="scss" scoped>
  .top-info {
    height: 100px;
  }

  .van-nav-bar--fixed {
    background-color: #141726 !important;
  }

  .info-item {
    height: 80px;
    width: 80px;
    /*background-image: linear-gradient(to right, #192538, #192538);*/
    background-color: rgba(25, 37, 56, .7);
    border-radius: 5px;
    padding: 10px 0px 10px 10px;
  }

  .imgs {
    width: 24px;
    height: 24px;
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
