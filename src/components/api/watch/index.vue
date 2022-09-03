<template>
  <a-card title="watch">
    <div>年龄：{{age}}</div>
    <a-input v-model:value="msg"></a-input>
    <a-input v-model:value="country"></a-input>
    <a-input v-model:value="obj.name"></a-input>
    <a-button type="primary" @click="onUpdate">更新</a-button>
  </a-card>
</template>

<script setup lang="ts">
const age = ref(100)
const msg = ref('hello wrold')
const country = ref('美国')
const obj = reactive({
  name: '王麻子',
  age: 20
})

const onUpdate = () => {
  age.value = 200
}

// 立即执行监听函数
watchEffect(() => console.log(age.value))

// 监听对象中的某一个属性
watch(()=>obj.name, (newVal, oldVal) => {
  console.log(newVal, oldVal)
}, {
  // immediate: true,
  deep: true
})

// 监听单个属性
// watch(msg, (newVal, oldVal) => {
//   console.log(newVal, oldVal)
// },{
//   immediate: true
// })

// 多个属性的监听
watch([msg, country], (newVal, oldValue) => {
  console.log(newVal[0],newVal[1])
  console.log(oldValue[0],oldValue[1])
})

</script>