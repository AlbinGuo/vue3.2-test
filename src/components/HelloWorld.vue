<script setup lang="ts">
import { onMounted, ref, inject } from 'vue'
import DefineProps from 'com/DefineProps.vue'
import DefineEmits from 'com/DefineEmits.vue'
import SlotsAttrs from 'com/SlotsAttrs.vue'
import DefineExpose from 'com/DefineExpose.vue'

type stateType = {a?: number, b?: string}
let state = inject<stateType>('state')
console.log('--state--', state)

const onEvent = (args1: string, args2: Array<number>) => {
  // (state as {a?: number, b?: string}).a = 100
  (state as stateType).a = 100;
  (state as stateType).b = '里斯';
  
  console.log('args=', args1, args2)
}
const emits = defineEmits(['on-yeye'])
const onYe = (a: string, b: Array<number>) => {
  emits('on-yeye', a, b)
}

type childType = {
  age: number,
  msg: string,
  handle: () => {}
}
let child = ref<childType | null>()
onMounted(() => {
  console.log('--child--',child.value)
  if(child && child.value){
    console.table([child.value?.age, child.value?.handle , child.value?.msg])
  }
})
</script>

<template>
  <div>{{ state }}</div>
  <define-props :ageList=[25,23,45,100]></define-props>
  <define-emits @on-event="onEvent" @on-ye="onYe"></define-emits>
  <define-expose ref="child"></define-expose>
  <slots-attrs a="1" b="2" msg="hello" style="{color:red;}">
    <template #header>
      我是父组件插槽
      <span>aaaaa</span>
    </template>
    <template #body>
      我是父组件插槽体BODY
    </template>
  </slots-attrs>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
