<template>
  <section class="layout404">
    <img class="imgs" src="@/assets/icon/icon_empty.png" />
    <div class="cont">页面找不到了</div>
  </section>
</template>

<script>
  export default {
    data() {
      return {};
    },
  };
</script>

<style lang="less" scoped>
  .layout404 {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column;
    width: 100vw;
    height: 100vh;

    .imgs {
      width: 100px;
      height: 100px;
      margin: 0 auto;
      padding: 0;
    }

    .cont {
      margin: 16px 0 0;
      color: var(--third-color);
      font-size: var(--m-size);
      text-align: center;
    }
  }
</style>
