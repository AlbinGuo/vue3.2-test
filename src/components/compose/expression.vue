<template>
  <div>
    <a-card title="Javascript表达式">
      <template #extra>
      <a href="#">more</a>
    </template>
      <p>number: {{ number + 1 }}</p>
      <p>{{ ok ? 'OK' : 'NO' }}</p>
      <p>message: {{ message.split('').reverse().join('') }}</p>
      <p>list : {{ `list-${id}` }}</p>
    </a-card>
  </div>
</template>

<script lang="ts" setup>
const number = ref<number>(0);
const ok = ref<boolean>(true);
const message = ref<string>('hello world');
const id = ref<string>('id-123');

</script>
