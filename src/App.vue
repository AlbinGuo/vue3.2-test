<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'
import { provide, reactive } from 'vue';

const state = reactive<{a?:number, b?:string}>({
  a: 1,
  b: "desc"
})
provide('state', state)

const clickE = (args1: string, args2: Array<number>) => {
  console.log('爷爷组件==', args1, args2)
} 
</script>

<template>
  <div>{{ state }}</div>
  <HelloWorld name="张三" @on-yeye="clickE"/>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
