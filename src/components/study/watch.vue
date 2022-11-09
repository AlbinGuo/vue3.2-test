<template>
    <a-card title='监听单个基本数据类型'>
        <p>question: <input type='text' v-model='question'></p>
        <p>answer: {{ answer }}</p>
    </a-card>

    <a-card title='监听多个基本数据类型'>
        <p>年龄：<input type='text' v-model='age'></p>
        <p>数量：<input type='text' v-model='number'></p>
    </a-card>

    <a-card title='监听对象'>
        <p>用户名：<input type='text' v-model='user.name'></p>
        <p>年龄：<input type='text' v-model='user.age'></p>
        <p>公司名：<input type='text' v-model='user.company.name'></p>
        <p>爱好：<input type='text' v-model='user.hobby'></p>
    </a-card>

    <a-card title='监听对象中某一个属性的变化'>
        <p>用户名：<input type='text' v-model='obj.name'></p>
        <p>年龄：<input type='text' v-model='obj.age'></p>
    </a-card>

    <a-card title='监听props对象中某几个属性变化'>
        <p>props-age: {{ props.nianling }}</p>
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
const age = ref<number>(0);
const number = ref<string>('');
watch([age, number], (newValue, oldValue) => {
    console.log(newValue, oldValue);
});


// 监听一个对象(reactive)
const user = ref({
    name: '张三',
    age: 30,
    company: {
        name: '西安涵道'
    },
    hobby: ['篮球', '足球']
});

watch(user, (newValue, oldValue) => {
    console.log('------1-监听对象-------');
    console.log(newValue, oldValue);
});

watch(user, (newValue, oldValue) => {
    console.log('-----2-监听对象-------');
    console.log(newValue, oldValue);
},{deep: true});

// 监听对象中某一个属性变化(reactive)
const obj = reactive({
    name: 'clt',
    age: 18
})
watch(() => obj.age, (newVal, oldVal) => {
    console.log(newVal, oldVal);
})

// 监听props对象中某几个属性变化(reactive)
const props = defineProps({
    nianling: {
        type: Number,
        default: 18
    }
});
watch(() => props.nianling,(newVal,oldVal)=>{
    console.log(newVal,oldVal)
});



</script>

<style scoped>

</style>