<!-- home -->
<template>
  <div class="con">
    <van-nav-bar
      :fixed="true"
      title="岸电明细2"
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

    <div
      :key="index"
      class="card flex mb15"
      v-bind:class="flagAlarm?'loudian':'guowen'"
      v-for="(item,index) of [1,2,3] ">
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
    </div>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        flag1: false,
        flag2: true,
        myChart: '',
        active: 2,
        tabList: [
          {
            name: '待处理',
            active: 0
          },
          {
            name: '已完结',
            active: 1
          }
        ],
        sel: '',
        flagAlarm: true
      }
    },

    computed: {},

    mounted() {
      this.sel = this.tabList[0]
      // this.myEcharts()
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
      },
      selItem(item) {
        console.log(item)
        this.sel = item
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
  .loudianguowenimgs {
    height: 19px;
    width: 19px;
    margin-right: 5px;
    /*margin-top: 3px;*/
  }
</style>
