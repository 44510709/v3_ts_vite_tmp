<template>
  <template v-if="loading">
    <div class="gwm-skeleton van-skeleton--animate">
      <div class="gwm-skeleton-cover"></div>

      <van-skeleton title avatar :row="3" :loading="loading" />
    </div>
  </template>

  <slot v-else></slot>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { Skeleton } from 'vant';

  export default defineComponent({
    name: 'SkeletonActivity',
    components: {
      [Skeleton.name]: Skeleton,
    },
    props: {
      loading: {
        type: Boolean,
        default: false,
      },
    },
  });
</script>

<style lang="less" scoped>
  .gwm-skeleton {
    :deep(.van-skeleton) {
      padding: 0 20px;
    }
  }

  .gwm-skeleton-cover {
    margin-bottom: 20px;
    height: 211px;
    background-color: #f2f3f5;
  }
</style>
