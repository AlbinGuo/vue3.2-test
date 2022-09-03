## 生命周期


## 响应式API核心
### ref()
> 接收一个内部值，返回一个响应式的，可更改的ref对象，此对象只有一个指向其内部值的属性`.value`
- 可以处理基本数据类型，数组。

### reactive()
> 响应式原理：Proxy, 处理深层次响应式
- 可以处理对象，数组类型

### toRefs & toRef
> 对响应式的对象进行解构，使得结构出来的属性也具有响应式。
> 请注意如果你解构了 `props` 对象，解构出的变量将会丢失响应性。因此我们推荐通过 `props.xxx` 的形式来使用其中的 `props`。
> <br>
> 如果你确实需要解构 `props` 对象，或者需要将某个 `prop` 传到一个外部函数中并保持响应性，那么你可以使用 `toRefs()` 和 `toRef()` 这两个工具函数：
```ts
interface Student {
  name: string;
  age: number;
  height?: number;
}
const student = reactive<Student>({
  name: '王五',
  age: 31,
})

let age = toRef(student, 'age')
let { name } = toRefs(student)

const onUpdate = () => {
  age.value = 100
  name.value = '赵六'
}
```

### computed() - 计算属性
> s


## 事件


## 插件
unplugin-auto-import
> 解决场景：<br>在组建开发中无需每次都引入import { ref... }
1. 下载`npm i unplugin-auto-import`
2. 配置：vite.config.