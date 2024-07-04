<script setup lang="ts" name="HW">
import { getListService } from '@/api/home'
import { ref, onMounted } from 'vue'
onMounted(async () => {
  const res = await getListService({})
})

let age = ref(18)
const changeAge = () => {
  age.value = 20
}
</script>

<template>
  <h2>年龄:{{ age }}</h2>
  <button @click="changeAge">改年龄</button>
</template>

<style scoped></style>
