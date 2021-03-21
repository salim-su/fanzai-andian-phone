<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
  export default {
    name: 'App'
  }
</script>
<style lang="scss">
  .van-nav-bar {
    background: transparent !important;
    color: #ffffff;
  }

  .van-hairline--bottom::after {
    visibility: hidden;
  }

  .van-nav-bar__title {
    color: #fff !important;
  }

  .van-nav-bar .van-icon {
    color: #fff;
  }

  .van-nav-bar__text {
    color: #fff;
  }

  .tabbar {
    .van-icon__image {
      width: 28px;
      height: 28px;
      /*height: 45px;*/
      /*      position: relative;
            z-index: 999;
            background-color: #fff;
            padding: 5px;
            border: 1px solid #e3e3e3;
            border-radius: 50%;
            margin-top: -20px;*/
    }
  }
  .van-nav-bar__text {
    color: #ffffff !important;
  }
  .van-nav-bar .van-icon{
    color: #ffffff !important;
  }

</style>
