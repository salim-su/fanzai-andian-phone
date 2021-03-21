<template>
  <div class="login">
    <div class="login-content">
      <div class="phone">欢迎您</div>
      <van-cell-group :border="false" class="mt15">
        <div class="label">用户名</div>
        <van-field placeholder="请输入用户名" type="text" v-model="username"/>
      </van-cell-group>
      <van-cell-group :border="false" class="mt15">
        <div class="label">密码</div>
        <van-field placeholder="请输入密码" type="password" v-model="password"/>
      </van-cell-group>

      <van-button @click="login" block class="mt30" color="linear-gradient(to right, #3D84F8, #015BE1)">登 录</van-button>
    </div>
  </div>
</template>

<script>
  import { Toast } from 'vant'
  import { loginSystem } from '../../api/user'

  export default {
    name: 'login',
    data() {
      return {
        username: 'appcaptain',
        password: 'Lb123456.'
      }
    },
    mounted() {
      // if (window.localStorage.getItem('token')) {
      //   this.$router.replace('/')
      // }
    },
    components: {
      [Toast.name]: Toast
    },
    methods: {
      login() {
        if (!this.username) {
          Toast('请输入用户名')
          return
        }
        if (!this.password) {
          Toast('请输入密码')
          return
        }
        const postdata = {
          username: this.username,
          password: this.password
        }
        loginSystem(postdata).then(res => {
          localStorage.setItem('token_type', res.token_type)
          localStorage.setItem('token', res.access_token)
          const auth = res['role_name'].split(',')
          if (auth.filter(p => p === 'app-manager').length) {
            localStorage.setItem('userAuth', 'app-manager')
          } else if (auth.filter(p => p === 'app-captain').length) {
            localStorage.setItem('userAuth', 'app-captain')
          }
          const localStorageUserAuth = window.localStorage.getItem('userAuth')
          if (localStorageUserAuth === 'app-manager') {
            this.$router.replace('/')
          } else if (localStorageUserAuth === 'app-captain') {
            this.$router.replace('/ship-index')
          }
        })
      }
    }
  }
</script>

<style scoped>
  .login {
    width: 375px;
    height: 667px;
    background-image: url('../../../static/img/login-bg.png');
    background-size: cover;
    /*background-repeat: no-repeat;*/
    position: fixed;
    top: 0;
    left: 0;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    /*background-color: #42b983;*/
  }

  .login-content {
    /*background-color: #ccc;*/
    width: 310px;
    height: 350px;
    margin-top: 155px;
    box-sizing: border-box;
    padding: 20px;
  }

  .phone {
    font-size: 24px;
    color: #015BE1;
  }

  .label {
    color: #96979A;
    font-size: 16px;
  }

  .van-field {
    padding-left: 0;
  }

  .spec-btn {
    width: 155px;
    height: 30px;
  }

  .van-cell::after {
    display: none;
  }

  .van-cell-group {
    border-bottom: 1px solid #e3e3e3;
  }
</style>
