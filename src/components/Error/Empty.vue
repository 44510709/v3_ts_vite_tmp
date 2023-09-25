<template>
  <div class="no-wifi">
    <img src="@/assets/icon/icon_empty.png" />
    <p>{{ message }}</p>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'Empty',
    props: {
      isTopBar: {
        type: Boolean,
        default: false,
      },
      message: {
        type: String,
        default: '没有相关内容',
      },
    },
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
</style>
