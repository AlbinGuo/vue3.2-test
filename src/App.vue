<template>
  <div>{{ state }}</div>
  <div style="background-color: #ececec; padding: 20px">
    <a-row :gutter="16">
      <a-col :span="20">
        <hello-world name="张三" @on-yeye="clickE"/>
      </a-col>
      <a-col :span="20">
        <ref-reactive></ref-reactive>
      </a-col>
      <a-col :span="20">
        <computed></computed>
      </a-col>
      <a-col :span="20">
        <refs-ref></refs-ref>
      </a-col>
      <a-col :span="20">
        <watch></watch>
      </a-col>
      <a-col :span="20">
        <isref-unref></isref-unref>
      </a-col>
    </a-row>
  </div>
</template>

<script setup lang="ts">
import { provide, reactive } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'
import RefReactive from '@/components/api/ref-reactive/index.vue'
import Computed from '@/components/api/computed/index.vue'
import RefsRef from '@/components/api/Refs-Ref/index.vue'
import Watch from '@/components/api/watch/index.vue'
import IsrefUnref from '@/components/api/isRef-unRef/index.vue'

const state = reactive<{a?:number, b?:string}>({
  a: 1,
  b: "desc"
})
provide('state', state)

const clickE = (args1: string, args2: Array<number>) => {
  console.log('爷爷组件==', args1, args2)
} 
</script>

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
