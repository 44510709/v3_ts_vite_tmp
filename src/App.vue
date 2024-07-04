<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">首页</RouterLink> |
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </header>
  <!-- 占位 -->
  <RouterView />
</template>

<style scoped></style>
