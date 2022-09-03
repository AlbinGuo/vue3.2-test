<template>
  <a-card title="toRefs - toRef">
    <template #extra>toRefs - toRef</template>
    <button @click="onUpdate">更新</button>
    <div>{{ age }}</div>
    <div>{{ name }}</div>

  </a-card>
</template>

<script setup lang="ts">
interface Student {
  name: string;
  age: number;
  height?: number;
}
const student = reactive<Student>({
  name: '王五',
  age: 31,
})

let age = toRef(student, 'age')
let { name } = toRefs(student)

const onUpdate = () => {
  age.value = 100
  name.value = '赵六'
}
</script>