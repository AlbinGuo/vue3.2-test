<template>
    <a-card title="watchEffect">
        <input ref="input" />
    </a-card>
</template>

<script lang="ts" setup>
const input = ref(null);
onMounted(() => {
    input.value?.focus();
});
</script>

<style lang="scss" scoped></style>
