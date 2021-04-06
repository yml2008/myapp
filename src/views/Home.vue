<template>
  <div class="box">
    <van-swipe class="my-swipe" :autoplay="2000" indicator-color="white">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>

import Vue from 'vue';
import { Swipe, SwipeItem } from 'vant';
import { Lazyload } from 'vant';

Vue.use(Lazyload);
Vue.use(Swipe);
Vue.use(SwipeItem);

export default {
  name: 'Home',
  data() {
    return {
       images: [
        'https://img01.yzcdn.cn/vant/apple-1.jpg',
        'https://img01.yzcdn.cn/vant/apple-2.jpg',
      ],
    };
  },
}
</script>

<style>
  .box{
    padding: 5px;
  }

  .my-swipe .van-swipe-item {
    height: 280px;
  }

  .my-swipe .van-swipe-item img{
    width: 100%;
    height: 100%;
  }
</style>
