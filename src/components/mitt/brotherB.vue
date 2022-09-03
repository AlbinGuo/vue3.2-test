<template>
  <div>
    <h1>
      弟弟组件
    </h1>
    {{greeting }}
  </div>

</template>

<script setup lang="ts">
import emitter from '../../plugins/mitt.js';

const greeting = ref('')
emitter.on('send', e => {
  greeting.value = e
})
</script>

<style scoped>

</style>