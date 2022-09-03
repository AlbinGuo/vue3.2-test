<template>
  <a-card title="父子组件出传值">
    <div>{{ msg }}</div>
    <div>{{ human }}</div>
    <a-button type="primary" @click="onUpdate">更新</a-button>
    <div>

      <div>
        父组件v-model:num==={{ num }}
      </div>
      <div>
        父组件action==={{ action }}
      </div>

<!--      使用v-bind="$attrs"处理孙子组件直接向爷爷组件发送事件-->
      <item
          v-model:num="num"
          :msg="msg"
          :action="action"
          @toGradeParentEvent="toGradeParentEvent"
          v-bind="$attrs"></item>
    </div>
  </a-card>
</template>

<script setup lang="ts">
import {defineProps} from "vue";
import Item from './item.vue';

const emits = defineEmits<{
  (e: 'fn', name: string, data: Array<string>): void
}>()

const props = defineProps({
  msg: {
    type: String,
    default: '你好'
  },
  human: {
    type: Object
  },
  action: {
    type: Array<string>
  }
})
const num = ref(0)
const { msg, human, action } = toRefs(props)

const onUpdate = () => {
  msg.value = 'hello world'
  emits('fn', 'hello world', ['唱','跳'])
}

const toGradeParentEvent = (data: string) => {
  console.log('==父组件toGradeParentEvent===', data)
}
</script>