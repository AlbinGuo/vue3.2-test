<script setup lang="ts">
  import { onMounted, useSlots, useAttrs } from 'vue'
  interface slotType {
    header?: () => {},
    body?: () => {},
  }

  defineProps({
    a: String,
    msg: String
  })

  const slots = useSlots()
  // console.log('插槽DOM--', slots.header && slots.header())
  const attrs = useAttrs()
  console.log('---useAttrs--', attrs)

  onMounted(() => {
    console.log(attrs)
  })
</script>

<template>
  <slot name="header"/>
  <!-- <slot name="body"/> -->
</template>

<style lang='scss' scoped>

</style>
