<template>
  <div class="app-container">
    <div class="layout-content">
      <keep-alive v-if="$route.meta.keepAlive">
        <router-view></router-view>
      </keep-alive>
      <router-view v-else></router-view>
      <!---->
      <!--      <router-view></router-view>-->
    </div>
    <div class="layout-footer">
      <TabBar :data="tabbars" @change="handleChange"/>
    </div>
  </div>
</template>

<script>
  import TabBar from '@/components/TabBar'

  export default {
    name: 'AppLayout',
    data() {
      return {
        tabbars: [
          {
            title: '首页',
            to: {
              name: 'Home',
              replace: true
            },
            icon: {
              active: require('../../../static/img/index-liang.png'),
              inactive: require('../../../static/img/index-an.png')
            }
          },
          {
            title: '报警',
            to: {
              name: 'Alarm',
              replace: true
            },
            icon: {
              active: require('../../../static/img/alarm-liang.svg'),
              inactive: require('../../../static/img/alarm-an.svg')
            }
          },
          {
            title: '统计',
            to: {
              name: 'Count',
              replace: true
            },
            icon: {
              active: require('../../../static/img/tongji-liang.svg'),
              inactive: require('../../../static/img/tongji-an.svg')
            }
          }
        ],
        flag: Boolean
      }
    },
    components: {
      TabBar
    },
    mounted() {
      // localStorage.clear()
      setTimeout(res => {
        this.flag = true
      }, 2000)
    },
    created() {
      console.log('manager')
      const localStorageUserAuth = window.localStorage.getItem('userAuth')
      if (localStorageUserAuth === 'app-manager') {
        this.$router.replace('/home')
      } else if (localStorageUserAuth === 'app-captain') {
        this.$router.replace('/ship-index')
      } else if (!localStorageUserAuth) {
        this.$router.replace('/login')
      }
    },
    beforeMount() {

    },
    methods: {
      handleChange(v) {
        // if (v === 1) {
        //   this.$router.replace({ path: '/add-select', query: { router: '/home' } })
        // }
      }
    }
  }
</script>

