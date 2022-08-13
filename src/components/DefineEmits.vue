<script setup lang="ts">

const emits = defineEmits<{
  (e: 'on-event', name:string, data: Array<number>): void,
  (e: 'on-ye', name:string, data: Array<number>): void
}>()
// const emits = defineEmits(['on-event', 'on-ye'])
const list: Array<number> = [1,2,3]
const clickParent = () => {
  emits('on-event', '我是event1的参数1', list)
}
const clickYe = () => {
  emits('on-ye', '我是event2的参数', [80,90])
}
</script>

<template>
  <div>
    <button @click="clickParent">向父组件传递参数</button>
    <button @click="clickYe">向爷爷组件传递参数</button>
  </div>
</template>

<style lang='scss' scoped>

</style>
