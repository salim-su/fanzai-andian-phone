<!-- home -->
<template>
  <div class="con">
    <van-nav-bar
      :fixed="true"
      title="岸电监控"
    />

    <div :key="index" v-for="(item,index ) in [1,2,3,4,5]">
      <div class="flex align-items-center mb15">
        <div class="cir-before">

        </div>
        <div class="cfff fs16">
          动图提1112222
        </div>
      </div>

      <div class="row cfff">
        <div :key="index" class=" mb15 col-1-2" v-for="(item,index ) in [1,2,3,4,5]">
          <div class="wd cfff fs16 flex align-items-center justify-content-between p10">
            <div>岸电</div>

            <div class="flex">
              <div class="mr5 cir" v-bind:class="{'cir-null':flag2,'cir-red':flag1}"></div>
              <div class="cir-red mr5 cir"></div>
              <div class="cir-green mr5 cir"></div>
            </div>
          </div>
        </div>
      </div>
    </div>


  </div>

</template>

<script>
  import { Toast } from 'vant'
  import { getDevices, getUnHandleAlarmList, removeDevice } from '../../api/user'

  export default {
    data() {
      return {
        devicesInfoList: [],
        nickName: '',
        phone: '',
        timer: '',
        flag1: false,
        flag2: true
      }
    },

    computed: {},

    mounted() {
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
      getDevicesInfo() {
        getDevices().then(res => {
          this.devicesInfoList = res.data
        }).catch(res => {
        })
      },
      goOut() {
        clearInterval(this.timer)
        window.localStorage.clear()
        this.$router.replace('/login')
      },
      edit(item) {
        clearInterval(this.timer)
        const objAdd = JSON.stringify(item)
        this.$router.replace({
          path: '/device-register-info?objAdd=' + encodeURIComponent(objAdd),
          query: { router: '/home' }
        })
      },
      remove(item) {
        removeDevice({ deviceId: item.id }).then(res => {
          Toast('删除设备成功')
          this.getDevicesInfo()
        })
      },
      getUnHandleAlarmListInfo() {
        getUnHandleAlarmList().then(res => {
          if (res.data.length > 0) {
            clearInterval(this.timer)
            this.$router.replace('/device-alert')
          }
        }).catch(res => {
        })
      }
    }
  }
</script>
<style lang="scss" scoped>
  .con {
    /*width: 100vw;*/
    min-height: calc(100vh - 50px);
    /*box-sizing: border-box;*/
    /*padding-bottom: 50px;*/
    /*background-color: black;*/
    padding-left: 15px;
    padding-right: 15px;
    background-color: #141726;
    padding-bottom: 60px;
    padding-top: 50px;
  }

  .van-nav-bar--fixed {
    background-color: #141726 !important;
  }

  .wd {
    width: 100%;
    height: 50px;
    background-color: rgba(25,37,56,.7);
    border-radius: 5px;
  }

  .cir-before {
    width: 10px;
    height: 10px;
    background: #10C3E8;
    border-radius: 50%;
    box-shadow: 0px 0px 3px 0px #10C3E8;
    margin-right: 10px;
  }

  .cir {
    width: 15px;
    height: 15px;
    border-radius: 50%;
  }

  .cir-null {
    border: 1px solid #999EA5;
  }

  .cir-green {
    background-color: #42b983;
  }

  .cir-orange {
    background-color: #FDAD6E;
  }

  .cir-red {
    background-color: #F31B1B;
  }

  .index-bg {
    width: 100vw;
    height: 255px;
    background-image: url('../../../static/img/register-bg.png');
    background-size: cover;
    background-repeat: no-repeat;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
  }

  .index-content {
    box-sizing: border-box;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 150px;
  }

  .index-content-w {
    width: 100%;
    height: 100%;
    overflow: auto;
  }

  .d1 {
    height: 200px;
    width: 100%;
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
  }

  .d2 {
    margin-top: 100px;
    width: 100%;
    height: calc(100vh - 150px);
    box-sizing: border-box;
    overflow: auto;
  }

  .d1, .d2 {
    padding-left: 20px;
    padding-right: 20px;
    box-sizing: border-box;
  }


  .content-item {
    height: 100px;
    width: 100%;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: #999 1px 0px 3px;
    margin-top: 20px;
  }

  .cell-list {
    box-shadow: #e3e3e3 1px 0px 3px;

  }

  .cell-content {
    height: auto;
    width: 100%;
    background: #fff;
    padding: 13px;
    box-sizing: border-box;
  }

  .goods-card {
    margin: 0;
    background-color: #fff;
  }

  .delete-button {
    height: 100%;
  }

  .imgs {
    width: 18px;
    height: 18px;
  }

  .name {
    font-size: 18px;
  }

  .cell1 {
    border-bottom: 1px solid #e3e3e3;
    padding-bottom: 6px;
    margin-bottom: 5px;
  }

  .cell12 {
    margin-bottom: 5px;
  }
</style>
