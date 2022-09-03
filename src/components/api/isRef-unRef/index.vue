<template>
<a-card title="isRef & unref">
  s
</a-card>
</template>

<script setup lang="ts">
const age1 = 1
const age2 = ref(1)
const { age } = reactive({
  age:1
})

console.log("---age1--", unref(age1))
console.log("---age2--", isRef(age2))
console.log("---age3--", isRef(age))
</script>