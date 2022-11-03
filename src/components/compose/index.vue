<template>
    <div>
        <vbind v-bind="objectOfAttrs"></vbind>
    </div>
    <div>
        <counter></counter>
    </div>
    <div>
        <expression></expression>
    </div>
    <div>
        <directive></directive>
    </div>
</template>

<script lang="ts" setup>
import counter from './counter.vue';
import vbind from './vbind.vue';
import expression from './expression.vue';
import directive from './directive.vue';

interface Attribute {
    id: string;
    clazz: string;
}

const objectOfAttrs = ref<Attribute>({
    id: 'container-id',
    clazz: 'wrapper-clazz'
});
</script>

<style lang="scss" scoped></style>
