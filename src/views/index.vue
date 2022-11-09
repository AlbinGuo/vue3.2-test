<template>
    <computed></computed>
    <hr>
    <p>年龄11：<input type='text' v-model='age'></p>
    <watch :nianling='age'></watch>
    <hr>
    <watch-effect></watch-effect>
</template>

<script lang="ts" setup>
import Computed from '../components/study/computed.vue';
import Watch from '../components/study/Watch.vue';
import WatchEffect from '../components/study/WatchEffect.vue';

const age = ref<number>(0);
</script>

<style scoped></style>
