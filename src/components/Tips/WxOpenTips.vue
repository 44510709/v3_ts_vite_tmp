<template>
  <van-overlay :show="isShow" @click="isShow = false" :z-index="1000">
    <div class="wx-open-tips">
      <p>1.点击右上角</p>
      <p>2.用{{ phoneType[userPhone] }}打开</p>
      <p>3.进入app</p>
    </div>
  </van-overlay>
</template>

<script>
  import { Overlay } from 'vant';
  import { userPhoneType } from '@/utils/helper';

  export default {
    name: 'WxOpenTips',
    components: {
      [Overlay.name]: Overlay,
    },
    data() {
      return {
        isShow: false,
        phoneType: ['safari', '浏览器'],
      };
    },
    computed: {
      // 判断用户手机系统类型
      userPhone() {
        return userPhoneType();
      },
    },
  };
</script>

<style lang="less" scoped>
  .wx-open-tips {
    font-size: 20px;
    line-height: 30px;
    color: #fff;
    padding: 83px 0 0 124px;
    font-weight: 400;
    background: url(@/assets/icon/Union.png) top 12px right 65px no-repeat;
    background-size: 53px 62px;
  }
</style>
