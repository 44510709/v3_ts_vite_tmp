<template>
  <div class="no-wifi">
    <img src="@/assets/icon/icon_empty.png" />
    <p>网络错误，重试一下</p>
    <div class="no-wifi-btn" @click="reload">点击重试</div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { Button } from 'vant';

  export default defineComponent({
    name: 'NoWifi',
    components: {
      [Button.name]: Button,
    },
    emits: ['reload'],
    data() {
      return {};
    },
    methods: {
      reload() {
        this.$emit('reload');
      },
    },
  });
</script>

<style lang="less" scoped>
  .no-wifi {
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: var(--m-size);
    color: var(--third-color);

    img {
      display: block;
      width: 100px;
      margin-bottom: 16px;
    }
  }

  .no-wifi-btn {
    width: 160px;
    height: 44px;
    line-height: 44px;
    text-align: center;
    border: solid 1px #333;
    border-radius: @main-btn-radius;
    margin-top: 32px;
    color: var(--third-color);
    font-size: var(--m-size);
  }
</style>
