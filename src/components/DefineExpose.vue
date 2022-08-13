<script setup lang="ts">
import { ref } from 'vue';

const msg = ref('child msg')
const age = ref(100)
const handle = () => {
  console.log('ssssss')
}

defineExpose({
  msg,
  age,
  handle
})

</script>

<template>
  <div></div>
</template>

<style lang='scss' scoped>

</style>
