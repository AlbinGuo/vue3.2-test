<template>
  <a-card title="v-bind动态绑定多个值">
    <template #extra><a href="#">more</a></template>
    <p>id: {{ id }}</p>
    <p>clazz: {{ clazz }}</p>
    <p>{{ props }}</p>
  </a-card>
</template>

<script lang="ts" setup>
  interface Attribute {
    id: string;
    clazz: string;
  }
  const props = defineProps<Attribute>();
  const { id, clazz } = props;
</script>

<style lang='scss' scoped>

</style>
