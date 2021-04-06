<template>
  <div id="app">
    <router-view />
    <van-tabbar v-model="active" @change="onChange" >
      <van-tabbar-item v-for="item in nav" :key="item.name"
       :name="item.name" :icon="item.icon">
       {{item.text}}
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>

import Vue from 'vue';
import { Tabbar, TabbarItem } from 'vant';

Vue.use(Tabbar).use(TabbarItem);

export default {
  name: 'App',
   data() {
    return {
      nav:[{
        name:'home',
        path:'/home',
        text:'首页',
        icon:'home-o'
      },{
          name: "Xiang",
          path: "/xiang",
          text: "商品",
          icon: "search"
      },{
          name: "mian",
          path: "/mian",
          text: "我的",
          icon: "friends-o"
      },{
          name: "shezhi",
          path: "/shezhi",
          text: "设置",
          icon: "setting-o"
      }],
      active: 'home',
    };
  },
  watch:{
    // 监听路由变化，实现高亮效果
    $route:function(newVal){
      this.active=newVal.path.substring(1)
      // console.log("888",this.active);
    }
  },
  methods: {
    onChange(index) {
      this.$router.push('/'+index)
    },
  },
}
</script>

<style>

</style>
