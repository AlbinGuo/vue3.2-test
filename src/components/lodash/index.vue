<template>
    <a-card>
        <a-button @click='onOk'>确定</a-button>
    </a-card>
</template>

<script lang='ts' setup>
var users = [
    { 'user': 'barney', 'age': 36, 'active': false },
    { 'user': 'fred',   'age': 40, 'active': true },
    { 'user': 'fred111',   'age': 420, 'active': true }
];

const onOk = () => {
    console.log('--------------------');
    // 取反
    /**
     * 结果：
     *      { 'user': 'fred',   'age': 40, 'active': true },
     *      { 'user': 'fred111',   'age': 420, 'active': true }
     */
    console.log(reject(users, function(o) { return !o.active; }));
}

</script>

<style scoped>

</style>