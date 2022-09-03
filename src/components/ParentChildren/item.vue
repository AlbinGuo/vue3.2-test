<template>
  <div>
    <div>v-model子组件==={{ num }}</div>
    <div>孙子组件action==={{ action }}</div>
    <div>孙子组件：{{ msg }}</div>
    <a-button type="primary" @click="onUpdate">发送事件到父组件和祖父组件</a-button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  num: Number,
  msg: {
    type: String,
    default: '--'
  },
  action: {
    type: Array<string>
  }
})

const { msg, action, num } = toRefs(props)

const emits = defineEmits<{
  (e: 'toGradeParentEvent', data: string): void,
  (e:'update:num', data: number): void
}>()
const onUpdate = () => {
  emits('update:num', 200)
  emits('toGradeParentEvent', '来自孙子组件的测试数据')
}
</script>