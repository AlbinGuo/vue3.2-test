<template>
  <div>
    <div>孙子组件action==={{ action }}</div>
    <div>孙子组件：{{ msg }}</div>
    <a-button type="primary" @click="onUpdate">发送事件到父组件和祖父组件</a-button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  msg: {
    type: String,
    default: '--'
  },
  action: {
    type: Array<string>
  }
})
console.log('===attrs===', $attrs)

const { msg, action } = toRefs(props)

const emits = defineEmits<{
  (e: 'toGradeParentEvent', data: string): void
}>()
const onUpdate = () => {
  emits('toGradeParentEvent', '来自孙子组件的测试数据')
}
</script>