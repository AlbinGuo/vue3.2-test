<template>
  <a-card title="使用mitt进行兄弟组件间数据传递">
    <brother-a></brother-a>
    <brother-b></brother-b>
  </a-card>
</template>

<script setup lang="ts">
import BrotherA from './brotherA.vue';
import BrotherB from './brotherB.vue';
</script>

<style scoped>

</style>