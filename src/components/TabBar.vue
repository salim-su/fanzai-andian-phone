<template>
  <div>
    <van-tabbar fixed route v-model="active" @change="handleChange" class="tabbar" :border="false">
      <van-tabbar-item v-for="(item, index) in data" :key="index" :to="item.to" :icon="item.icon"  :replace="true">
        <template #icon="">
          <van-icon :name="active===index?item.icon.active:item.icon.inactive" class-prefix="my-icon"/>
        </template>
<!--        <template #icon="props">-->
<!--          <img :src="props.active ? item.icon.active : item.icon.inactive" />-->
<!--        </template>-->
        {{ item.title}}
      </van-tabbar-item>
    </van-tabbar>

  </div>
</template>
<script>
export default {
  name: 'TabBar',
  props: {
    defaultActive: {
      type: Number,
      default: 0
    },
    data: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data() {
    return {
      active: this.defaultActive
    }
  },
  methods: {
    handleChange(value) {
      this.$emit('change', value)
      // if (value === 1) {
      //   console.log(11111)
      //   this.active = 0
      //   this.$router.replace('/add-select')
      // }
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    margin: 40px 0 0;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
  .van-tabbar{
    background-color: #181E36;
  }
  .van-tabbar-item--active{
    background-color: #181E36;
  }
  .van-tabbar-item--active{
    color: #FFD8A9 !important;
  }
  .van-nav-bar .van-icon{
    color: #565E66 !important;
  }
  .van-nav-bar__text{
    color: #565E66 !important;
  }
</style>
