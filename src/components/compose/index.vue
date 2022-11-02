<template>
  <div>
    <vbind v-bind="objectOfAttrs"></vbind>
  </div>
  <div>
    <counter></counter>
  </div>
</template>

<script lang="ts" setup>
import counter from './counter.vue';
import vbind from './vbind.vue';

interface Attribute {
  id: string;
  clazz: string;
}

const objectOfAttrs = ref<Attribute>(
  {
    id: 'container-id',
    clazz: 'wrapper-clazz',    
  }
);

</script>

<style lang='scss' scoped>

</style>
