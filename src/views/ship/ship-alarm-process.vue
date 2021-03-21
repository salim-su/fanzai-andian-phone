<template>

  <div class="alert">
    <div class="alert-bg">

    </div>

    <van-nav-bar
      :fixed="true"
      :title="pValueObj.type == 'fault'?'故障处理':'报警处理'"
    />

    <div class="alert-con">
      <div class="bianhao flex flex-column">

        <div class="fs16 p5 flex alarm-color">
          <img alt="" class="imgs mr10" src="../../../static/img/location-red.png">
          <div>
            <span v-text="pValueObj.type=='fault'?'故障处置':'报警处置'"></span>
            {{pValueObj.areaName}} - {{pValueObj.seName}}
          </div>
        </div>

        <div class="fs16 p5 c6e" v-text="pValueObj.type=='fault'?'故障时间':'报警时间'"></div>

        <div class="fs16 p5 line">
          {{$moment(pValueCreateTime).format('YYYY-MM-DD hh:mm')}}
        </div>

        <div class="fs16 p5 c6e" v-text="pValueObj.type=='fault'?'故障类型':'报警类型'"></div>

        <div class="fs16 p5 line">
          <span v-if="pValueObj.type == 'fault'">
            {{t1(pValueObj.category)}}
          </span>
          <span v-if="pValueObj.type == 'alarm'">
            {{t2(pValueObj.category)}}
          </span>
        </div>

        <div class="fs16 p5 c6e">
          处置结果
        </div>
        <div class="fs16 p5 line">

          <van-field
            autosize
            maxlength="200"
            placeholder="请输入处置结果"
            rows="2"
            show-word-limit
            type="textarea"
            v-model="proresult"
          />

          <!--          <van-field v-model="proresult" placeholder="请输入处置结果" class="fs16"/>-->
        </div>

      </div>

      <div class="flex mt25">
        <div class="flex1">
          <van-button @click="cancel()" block class="chuli" type="warning">取消</van-button>
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
  import { transformTypeAlarm, transformTypeFault } from '../../utils/index'
  import { handleAlarm, handleFault } from '../../api/user'
  import { Toast } from 'vant'

  export default {
    name: 'ship-alarm-process',
    data() {
      return {
        deviceName: '',
        alertInfo: '',
        proresult: '',
        routerParms: '',
        pValueCreateTime: '',
        pValueType: '',
        pValueObj: '',
        t1: transformTypeFault,
        t2: transformTypeAlarm
      }
    },
    mounted() {
      console.log(this.$route.query.routerParms)
      console.log(JSON.parse(this.$route.query.objAdd))
      this.pValueObj = JSON.parse(this.$route.query.objAdd)
      this.pValueCreateTime = JSON.parse(this.$route.query.objAdd).createTime
      if (this.$route.query.routerParms) {
        this.routerParms = this.$route.query.routerParms
      }
    },
    methods: {
      cancel() {
        this.$router.replace({ path: this.$route.query.routerParms })
      },
      done() {
        if (this.proresult) {
          if (this.pValueObj.type === 'fault') {
            this.handleFaultInfo()
          }
          if (this.pValueObj.type === 'alarm') {
            this.handleAlarmInfo()
          }
        } else {
          Toast('请输入处置内容')
        }
      },
      handleAlarmInfo() {
        const postData = {
          id: this.pValueObj.id,
          handleResult: this.proresult,
          status: '3'
        }
        handleAlarm(postData).then(res => {
          console.log(res)
          Toast('处置成功')
          setTimeout(res => {
            this.$router.replace({ path: this.$route.query.routerParms })
          }, 1000)
        })
      },
      handleFaultInfo() {
        const postData = {
          id: this.pValueObj.id,
          handleResult: this.proresult,
          status: '3'
        }
        handleFault(postData).then(res => {
          console.log(res)
          Toast('处置成功')
          setTimeout(res => {
            this.$router.replace({ path: this.$route.query.routerParms })
          }, 1000)
        })
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

  .imgs {
    width: 18px;
    height: 22px;
  }

  .alarm-color {
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
