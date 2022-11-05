<template>
    <a-card title="watch监听器">
        <div>Ask a Yes/No question</div>
        <div>
            <a-input v-model:value="question" />
        </div>
        <p>
            <input type="text" v-model="url" />
        </p>
        <p>
            <input type="text" v-model="data" />
        </p>
        <p>{{ answer }}</p>
    </a-card>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';

const question = ref<string>('');
const answer = ref<string>('Questions usually contain a question mark.');

watch(question, async (newValue, oldValue) => {
    if (newValue.indexOf('?') > -1) {
        answer.value = 'Thinking...';
        try {
            const res = await fetch('https://yesno.wtf/api');
            answer.value = (await res.json()).answer;
        } catch (error) {
            answer.value = 'Error! Could not reach the API.' + error;
        }
    }
});

const url = ref<string>('https://yesno.wtf/api');
const data = ref<string>('data');
watchEffect(async () => {
    console.log('---first---');
    try {
        console.log('===', data.value);
        const res = await fetch(url.value);
        answer.value = (await res.json()).answer + '===' + data.value;
    } catch (error) {
        answer.value = 'Error! watchEffect.' + error;
    }
});
</script>

<style lang="scss" scoped></style>
