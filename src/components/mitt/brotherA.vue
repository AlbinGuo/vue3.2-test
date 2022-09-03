<template>
  <div>
    <h1>哥哥组件</h1>
    <a-button type="primary" @click="send">发送</a-button>
  </div>
</template>

<script setup lang="ts">
import emitter from '../../plugins/mitt.js';
const send = () => {
  emitter.emit('send', '来自哥哥的问候')
}
</script>