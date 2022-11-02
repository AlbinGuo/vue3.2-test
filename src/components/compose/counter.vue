<template>
  <a-card title="计数器">
    <template #extra>
      <a href="#">more</a>
    </template>
    <p>{{ counter }}</p>
    <a-button typeof="primary" @click="increment">自增</a-button>
  </a-card>
</template>

<script lang="ts" setup>

const counter = ref<number>(0);
const increment = () => {
  counter.value++;
}

</script>

<style lang='scss' scoped>

</style>
