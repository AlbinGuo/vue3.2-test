<template>
  <a-card title="computed">
    <div>用户姓名：{{ authorInfo.name }}</div>
    <div>用户全名：{{ authorInfo.fullName }}</div>
    <div>用户读书数量：{{ bookCount }}</div>
    <div>{{ bookCount2 }}</div>
    <a-button @click="onUpdate" type="primary">更新</a-button>
  </a-card>
</template>

<script setup lang="ts">
const authorInfo = reactive(
    {
      name: 'John',
      age: 50,
      fullName:computed(() => {
        return authorInfo.name + 'Doe'
      }),
      books: [
        'Vue 2 - Advanced Guide',
        'Vue 3 - Basic Guide',
        'Vue 4 - The Mystery'
      ]
    }
)

const bookCount = computed(() => {
  return authorInfo.books.length ?? 0
})
const bookCount2 = computed({
  get(){
    return authorInfo.name + "~约翰"
  },
  set(v){
    console.log('v:', v)
    authorInfo.name = v
  }
})

const onUpdate = () => {
  bookCount2.value = 'ssssssss'
}

</script>