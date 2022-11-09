<template>
    <a-card>
        <p>question: <input type='text' v-model='question'></p>
        <p>answer: {{ answer }}</p>
    </a-card>
</template>

<script lang='ts' setup>
// 监听一个属性（基本数据类型ref）
const question = ref<string>('');
const answer = ref<string>('');

// 方式一
watch(question, async (newVal, oldVal) => {
    answer.value = 'Thinking...'
    if(includes(newVal, "?")) {
        const res = await fetch('https://yesno.wtf/api');
        answer.value = (await res.json()).answer
    }
});

// 方式二
watchEffect(async () => {
    answer.value = 'Thinking...'
    if(includes(question.value, "?")) {
        const res = await fetch('https://yesno.wtf/api');
        answer.value = (await res.json()).answer
    }
});

// 监听多个属性（基本数据类型ref）

// 监听一个对象(reactive)

// 监听对象中某一个属性变化(reactive)

// 监听对象中某几个属性变化(reactive

// 监听对象中的某一个对象中属性的变化


</script>

<style scoped>

</style>