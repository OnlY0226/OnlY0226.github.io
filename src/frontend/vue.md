---
icon: pen-to-square
date: 2023-9-21
category:
  - 前端开发
order: 1
---
# Vue3 
## 挂载全局属性和方法
### app.config.globalProperties
在main.js中引入全局要使用的方法，通过app.config.globalProperties添加到全局中。例：
```
// main.js
import { createApp } from 'vue'
import App from './App.vue'

// test 是外部引入的方法
const test = () => {
    console.log('ccccc')
    return '测试成功001'
}

const app = createApp(App)
// 添加到全局中
app.config.globalProperties.$Test = test
app.use(test)
app.use(store)
app.use(router)
app.mount('#app')
```

在要使用的.vue文件中，

1. 通过 getCurrentInstance 的 proxy 使用，不过 proxy 的 ts 类性中还有一个 undefined，所以使用 ts 时，类型就要自己处理了

2. 通过 getCurrentInstance 的 appContext 使用，appContext 获取的即为 main.js 里创建的的 vue 对象.
```

// Home.vue
// ts写法中会使用 defineComponent，普通的写法不用在意
import { defineComponent, getCurrentInstance } from 'vue'

export default defineComponent({
    name: 'Home',
    setup() {
        // ts proxy 使用
        const { proxy }: any = getCurrentInstance()
        // js
        /* const { proxy } = getCurrentInstance() */
        console.log(proxy, proxy.$Test())
        // ts appContext 使用
        const { $Test } = getCurrentInstance().appContext.config.globalProperties
        $Test()
        /* 
        但是这种写法不行，打包之后不能正常使用
        const { ctx } = getCurrentInstance()
        ctx.$test
        */
    }
})
```

### provide 和 inject
src 文件夹下新建 symbol 文件夹并新增index.ts (或 .js) 文件
```

// src/symbol/index.ts
// 定义对应的 symbol 并暴露出去
export const TEST_SYMBOL = Symbol('Test 测试')
```

在 main.js 中引入，并使用 project 绑定依赖
```

// main.ts
import { createApp } from 'vue'
import App from './App.vue'
import { TEST_SYMBOL } from './symbol'
// test 是外部引入的方法
const test = () => {
    console.log('ccccc')
    return '测试成功001'
}
const app = createApp(App)
// 使用 symbol 方式
app.provide(TEST_SYMBOL, test)
// 使用自定义字符串方式
app.provide('$Test', test)
app.use(store)
app.use(router)
app.mount('#app')
```

在对应.vue文件中引入并使用
```

import { defineComponent, inject } from 'vue'

import { TEST_SYMBOL } from '@/symbol'

export default defineComponent({
    setup() {
        // ts 中它的类型可能是个undefined
        // symbol 方式
        const $Test: (() => string) | undefined = inject(TEST_SYMBOL)
        $Test && $Test()
        // 自定义字符串方式
        const $Test2: (() => string) | undefined = inject('$Test')
        $Test2 && $Test2()
        // js
        /*
        const $Test = inject(TEST_SYMBOL)
        $Test()
        */
    }
})
```

::: info
Vue3 不推荐 方式一 在原型链上挂载一些东西这种方式，而是更建议使用 方式二 的 provide 和 inject 方式
:::
