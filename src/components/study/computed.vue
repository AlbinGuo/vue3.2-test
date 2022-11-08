<template>
    <a-card title="Computed">
        <template #extra>
            <a href="#">计算属性</a>
        </template>
        <fieldset>
            <legend>请输入姓和名</legend>
            <p>
                姓：<input
                    type="text"
                    v-model="user.firstName"
                    placeholder="请输入姓"
                />
            </p>
            <p>
                名：<input
                    type="text"
                    v-model="user.lastName"
                    placeholder="请输入名"
                />
            </p>
        </fieldset>
        <fieldset>
            <legend>显示姓名</legend>
            <p>
                <input type="text" v-model="fullName1" placeholder="显示姓名" />
            </p>
            <p>
                <input type="text" v-model="fullName2" placeholder="显示姓名" />
            </p>
            <p>
                <input type="text" v-model="fullName3" placeholder="显示姓名" />
            </p>
        </fieldset>
    </a-card>
</template>

<script lang="ts" setup>
interface User {
    firstName: string;
    lastName: string;
}
const user = reactive<User>({
    firstName: '东方',
    lastName: '不败'
});

const fullName1 = computed(() => {
    return user.firstName + '_' + user.lastName;
});

const fullName2 = computed({
    get() {
        return user.firstName + '=' + user.lastName;
    },
    set(val) {
        const names = val.split('=');
        user.firstName = names[0];
        user.lastName = names[1];
    }
});

const fullName3 = ref<string>('');
// watch(
//     user,
//     ({ firstName, lastName }) => {
//         fullName3.value = firstName + '----' + lastName;
//     },
//     {
//         immediate: true,
//         deep: true
//     }
// );

// 默认立即执行: immediate: true
watchEffect(() => {
    fullName3.value = user.firstName + '----' + user.lastName;
});
watchEffect(() => {
    const names = fullName3.value.split('----');
    user.firstName = names[0];
    user.lastName = names[1];
});

// watch可以监听多个数据
/**
watch([user.firstName, user.lastName], () => {
  // 这里的代码没有执行, 是因为user.firstName, user.lastName不是响应式数据
  console.log('===================');
})
watch([user.firstName, user.lastName, fullName3], () => {
  // 这里的代码没有执行, 是因为user.firstName, user.lastName不是响应式数据, 但是fullName3是响应式数据。
  console.log('===================');
})

// 如果被监听的数据都不是响应式数据，则要这么处理
watch([()=>user.firstName, ()=>user.lastName], () => {
  console.log('===================');
})
 */

// 不执行监听，因为user.firstName和user.lastName都不是响应式数据
watch([user.firstName, user.lastName], () => {
    console.log('===========1========');
});

// 可以执行监听，因为fullName3是响应式数据
watch([user.firstName, user.lastName, fullName3], () => {
    console.log('==========2=========');
});

// 可以执行监听
watch([() => user.firstName, () => user.lastName], () => {
    console.log('=========3==========');
});
</script>

<style scoped></style>
