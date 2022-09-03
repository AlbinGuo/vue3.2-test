<template>
  <a-card title="Ref">
    <a-button type="primary" @click="onCounter">计数器</a-button>
    <span>{{ counter }}</span>
    <br>

    <a-button
        type="primary"
        size="small"
        style="width: 10%"
        @click="onShow">{{ isShow ? '隐藏' : '显示' }}</a-button>
    <span v-if="isShow">内容</span>
    <br>

    <a-input
        v-model:value="name"
        placeholder="Basic usage"/>
    <span>{{ name }}</span>
    <br>

    <a-input
        v-model:value="ballName"
        placeholder="输入球类名称"/>
    <a-button
        type="primary"
        size="small"
        @click="onAddBallToArray(ballName)">添加</a-button>
    <span>{{ ballArray }}</span>
    <br>

    <a-input
        v-model:value="stuName"
        placeholder="输入学生名称"/>
    <a-button
        type="primary"
        size="small"
        @click="onUpdateStudentInfo(stuName)">修改</a-button>
    <a-button
        type="primary"
        size="small"
        @click="onAddStudentInfo">添加学生身高为180</a-button>
    <span>{{ studentInfo }}</span>
  </a-card>
</template>

<script setup lang="ts">
import {reactive, ref} from "vue";
import type { Ref } from "vue";

// number
let counter = ref(0);
// boolean
let isShow = ref(false);
// string
let name = ref<string>();

let ballName = ref<string>();
let stuName = ref<string>();
// array
let ballArray = ref<string[]>([]);

const year: Ref<string | number> = ref('2022')

interface Student {
  name: string,
  age: number,
  height?: number
}
// object
let studentInfo2 = ref<Student>({
  name: '李四',
  age: 30,
});
let studentInfo = reactive<Student>({
  name: '张三',
  age: 20,
});

const onCounter = () => {
  counter.value++;
}
const onShow = () => {
  isShow.value = !isShow.value;
}
const onAddBallToArray = (ball: string) => {
  ballArray.value.push(ball);
}
const onUpdateStudentInfo = (sname: string) => {
  studentInfo.name = sname
}
const onAddStudentInfo = () => {
  studentInfo.height = 180
}

</script>