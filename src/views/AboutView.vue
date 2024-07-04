<script setup lang="ts" name="AB">
  import { ref, watch } from 'vue'
  let sum = ref('1')
  const changeSum = () => {
    sum.value = sum.value + 1
  }
  watch(sum, (n, o) => {
    console.log(n, o)
  })
</script>

<template>
  <div>
    <button @click="changeSum">sum+1</button>
  </div>
  求和: <span>{{ sum }}</span>
</template>

<style scoped></style>
