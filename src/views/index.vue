<template>
  <section class="index">
    Hello World!

    <VanButton type="primary" class="!my-30px !text-size-36px">vant button</VanButton>

    <div class="bg-dark-500 text-size-50px text-cool-gray-300 border-t p-20px">windcss</div>

    <div class="py-20px">
      <div class="text-base">多主题</div>
    </div>
    <div class="theme-ora py-20px">
      <div class="text-base">多主题</div>
    </div>
    <div class="theme-haval py-20px">
      <div class="text-base">多主题</div>
    </div>
  </section>
</template>

<script lang="ts">
  export default defineComponent({
    setup() {
      const a = ref('自动引入测试');
      console.log(a);
    },
    data() {
      return {};
    },
  });
</script>

<style lang="less" scoped>
  .index {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    font-size: 36px;
  }
</style>
