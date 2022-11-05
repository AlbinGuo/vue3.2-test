<template>
    <a-card title="computed计算属性">
        <template #extra>
            <a href="###">aaa</a>
        </template>
        <div>{{ publishedBooksMessage.exist }}</div>
        <div>{{ publishedBooksMessage.length }}</div>
        <div v-for="item in author.books">{{ item }}</div>
        <a-button @click="conunter">counter</a-button>
    </a-card>
</template>

<script lang="ts" setup>
interface Author {
    name: string;
    books: Array<string>;
}

interface Result {
    exist: boolean;
    length: number;
}

const author = reactive<Author>({
    name: 'John Doe',
    books: [
        'Vue 2 - Advanced Guide',
        'Vue 3 - Basic Guide',
        'Vue 4 - The Mystery'
    ]
});

const publishedBooksMessage = computed<Result>(() => {
    return {
        exist: author.books.length > 0,
        length: author.books.length
    };
});

const conunter = () => {
    author.books.push('Vue ' + author.books.length);
};
</script>

<style lang="scss" scoped></style>
