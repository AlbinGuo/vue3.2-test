<script setup lang="ts">
  // export default {
  //   props: {
  //   msg: {
  //     type: String,
  //     required: true,
  //     default: 'hello'
  //   }
  // }
  // }

  // 如果属性未传递，设置属性的默认值
  // const props = defineProps<{
  //   msg: string,
  //   ageList: Array<number>
  // }>()

  const defaultProps = withDefaults(defineProps<{
    name: string,
    msg: string,
    ageList: Array<number>
  }>(), {
    msg: '默认张三',
    ageList: () =>  [10,20]
  })  

  console.log(defaultProps)
  
</script>

<template>
  姓名：{{ name }}
  <h1>{{ msg }}</h1>
  <div v-for="(item, index) in ageList">{{ item }}</div>
</template>

<style scoped>

</style>
