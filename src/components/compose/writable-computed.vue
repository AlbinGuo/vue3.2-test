<template>
    <a-card title="可写的计算属性">
        <div>First Name : {{ firstName }}</div>
        <div>Last Name : {{ lastName }}</div>
        <div>Full Name : {{ fullName }}</div>
        <a-input v-model:value="newName"></a-input>
        <a-button @click="updateName">更改</a-button>
    </a-card>
</template>

<script lang="ts" setup>
const firstName = ref<string>('Jack');
const lastName = ref<string>('Doe');
const newName = ref<string>('');

const fullName = computed<string>({
    get() {
        return firstName.value + ' ' + lastName.value;
    },
    set(newValue) {
        [firstName.value, lastName.value] = newValue.split(' ');
    }
});

const updateName = () => {
    fullName.value = newName.value;
};
</script>

<style lang="scss" scoped></style>
