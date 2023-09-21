---
icon: pen-to-square
date: 2023-09-21
category:
  - 前端开发
order: 1
---
# vite+nuxt+pinia+vueuse搞定前端SSR项目 
## 一、了解 SSR
在介绍 Nuxt3 之前，肯定要先介绍一波 服务端渲染，毕竟 Nuxt 就是一个基于 Vue.js 的服务端渲染应用框架；

### 什么是SSR
服务器端渲染（Server-Side Rendering）是指由服务端完成页面的 HTML 结构拼接的页面处理技术，发送到浏览器，然后为其绑定状态与事件，成为完全可交互页面的过程。

简单理解就是html是由服务端写出，可以动态改变页面内容，即所谓的动态页面。早年的 php、asp 、jsp 这些 Server page 都是 SSR 的。

### 为什么使用SSR
1. 网页内容在服务器端渲染完成，一次性传输到浏览器，所以 首屏加载速度非常快；

2. 有利于SEO，因为服务器返回的是一个完整的 html，在浏览器可以看到完整的 dom，对于爬虫、百度搜索等引擎就比较友好；

## 二、搭建项目
::: info
- Nodejs >= 16.11
- pnpm >= 7.x
:::
### 初始化项目
1. 初始化：
```
npx nuxi init first-nuxt-app
```
2. 安装依赖
```
cd first-nuxt-app
# yarn
yarn install
 
# npm
npm install
 
# pnpm
pnpm install
```
::: warning
注意： 如果你用 pnpm 安装依赖，请创建一个 .npmrc 文件，且设置:
```
shamefully-hoist=true
```

再使用 pnpm 安装
```
pnpm install
```
:::
3. 运行
```
pnpm run dev
```

4. 访问

打开本地链接 http://localhost:3000/ 就可以开始访问了
![localhost3000](/assets/images/localhost3000.png)
### 新建常用目录
#### 1. 新建app(src)目录
```
mkdir src
```
并且把 app.vue 文件移入到 src 目录下

同时修改配置文件 nuxt.config.ts：
```
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src/',
})
```
再 pnpm dev 运行，发现跟上面初始化的一样
#### 2. 配置页面路由目录：pages
1.新建 src/pages 目录：
```
mkdir src/pages
```
2. 新建 src/pages/index.vue 首页：
```
touch src/pages/index.vue
```
3. 配置 src/pages/index.vue
```
<template>
  <div>
    <h1>欢迎来到易师傅的第一个页面</h1>
  </div>
</template>
```
4. 修改 src/app.vue 入口
```
<template>
  <div>
    <!-- 路由出口 -->
    <NuxtPage></NuxtPage>
  </div>
</template>
```
5. 再 pnpm dev 运行

#### 3. 新增多个页面静态路由
1.新建 src/pages/list.vue 文件：
```
<template>
  <div>
    <h1>欢迎来到易师傅的列表页面</h1>
    <ul>
      <li>11111</li>
      <li>22222</li>
      <li>33333</li>
      <li>44444</li>
      <li>55555</li>
      <li>66666</li>
      <li>77777</li>
      <li>88888</li>
      <li>99999</li>
    </ul>
  </div>
</template>
```
2. 在 src/pages/index.vue 配置路由跳转
```
<template>
  <div>
    <h1>欢迎来到易师傅的第一个页面</h1>
 
    <NuxtLink to="/list">进入列表页</NuxtLink>
  </div>
</template>
```
3. 预览

NuxtLink组件 是 Vue Router 中 RouterLink 组件和 HTML a 标签的替代品；
关于 NuxtLink 的更多使用，可参考官方文档

#### 4. 新增多个页面动态路由
动态路由 顾名思义就是这个路由地址是可变的，是动态的；

使用场景一般就是文章的详细页，因为一般一篇文章会有对应的一个 id，那这个 id 就是动态的；

那如何去实现呢？

1. 新建 src/pages/[id] 目录（目录名一定要是 [id]）：
```
mkdir src/pages/[id]
```
2. 新建 src/pages/[id]/index.vue 文件：
```
<template>
  <div>
    <h1>易师傅的详细页面</h1>
 
    <h2>title 1</h2>
 
    <p>内容 1</p>
 
    <h2>title 2</h2>
 
    <p>内容 2</p>
 
    <h2>title 3</h2>
 
    <p>内容 3</p>
 
    <h2>title 4</h2>
 
    <p>内容 4</p>
  </div>
</template>
```
3. 页面中访问：http://localhost:3000/[id]
#### 5. 新增layouts模板
1. 新建 src/layouts 目录
2. 新建 src/layouts/default.vue 默认文件
```
<template>
  <div>
    <h1>这里是易师傅的默认模板，可以添加在所有页面，也可单独添加</h1>
    <slot />
  </div>
</template>
```
3. 在全局页面中配置： src/app.vue（也就是每个页面中都会有该模板）
```
<template>
  <div>
    <!-- 路由出口 -->
    <NuxtLayout>
      <NuxtPage></NuxtPage>
    </NuxtLayout>
  </div>
</template>
```
4. 自定义模板（类似 header、footer）
新建 src/layouts/header.vue
```
<template>
  <header class="header">
    <h1>这里是易师傅的默认模板 header</h1>
  </header>
</template>
```
5. 使用自定义模板
```
<template>
  <div>
    <NuxtLayout name="header"/>
    <NuxtLink to="/list">进入列表页</NuxtLink>
  </div>
</template>
```
6. 预览

### 配置组件 components
::: info
Nuxt3 中会自动导入您 components/ 目录中的所有组件，也就是说当你想使用组件时，不要 import 了，直接使用即可
:::
1. 组件的使用指南
   1. 新建 src/components 目录
   2. 新建 src/components/ListItem.vue 文件
   ```
   <template>
     <ul>
       <li>
         <NuxtLink to="/111">111</NuxtLink>
       </li>
       <li>
         <NuxtLink to="/222">222</NuxtLink>
       </li>
       <li>
         <NuxtLink to="/333">333</NuxtLink>
       </li>
       <li>
         <NuxtLink to="/444">444</NuxtLink>
       </li>
       <li>
         <NuxtLink to="/555">555</NuxtLink>
       </li>
       <li>
         <NuxtLink to="/666">666</NuxtLink>
       </li>
     </ul>
   </template>
   ```
   3. 在 src/pages/list.vue 文件中使用
   ```
   <template>
     <div>
       <h1>欢迎来到易师傅的列表页面</h1>
       <ListItem></ListItem>
     </div>
   </template>
   ```
   ::: info
   根据代码，我们看到我们并没有用 import 去导入 ListItem.vue，还是正常的渲染了；
   :::
   4. components 嵌套目录组件使用
      如果您在嵌套目录中有一个组件，例如：
       ```
       components/
       --| list/
       ----| detail/
       ------| Button.vue
       ```
       那么我们可以直接在其它地方使用：
       ```
       <ListDetailButton />
       ```
2. \<ClientOnly/> 组件
Nuxt 提供了 \<ClientOnly /> 专门用于仅在客户端渲染组件的组件；
要仅在客户端导入组件，请在仅客户端插件中注册该组件
```
<template>
  <div>
    <ClientOnly>
      <!-- 此组件仅在客户端显示 -->
      <Comments />
    </ClientOnly>
  </div>
</template>
```
### 配置插件 plugins
Nuxt 会自动读取 plugins 目录中的文件并在创建 Vue 应用程序时加载它们；
你可以在文件名中使用 .server 或 .client 后缀来让插件在 服务器端 或 客户端 加载插件；
1. 新建 src/plugins 目录
2. 以 vue 指令为例：新建 src/plugins/directives.ts 文件
```
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('focus', {
    mounted (el) {
      el.focus()
    },
    getSSRProps (binding, vnode) {
      // you can provide SSR-specific props here
      return {}
    }
  })
})
```
### 用 composables 灵活配置 hooks
在 Nuxt 3 中使用该目录时，composables/ 目录将自动导入，将 Vue 可组合项（Hooks）自动导入到您的应用程序中，即不需要在其它地方 import；

所以你如果写一些通用的 hooks，只需放入该目录下即可；
composables的基本使用指南
1. 新建 src/composables 目录

2. 新建 src/composables/useFoo.ts 文件
```
export const useFoo = () => {
  return useState('foo', () => 'bar')
}
```
3. 在 src/pages/index.vue 中使用
```
<template>
  <div>
    <h1>欢迎来到易师傅的第一个页面</h1>
    <NuxtLink to="/list">进入列表页</NuxtLink>
  </div>
</template>
 
<script setup>
  const foo = useFoo()
</script>
```
::: info
根据以上操作，你可以创建属于你自己的 hooks
:::

### Nuxt 常用的 Hooks
1. useAppConfig
访问项目中的 Nuxt 配置
```
const appConfig = useAppConfig()
 
console.log(appConfig)
```
2. useAsyncData
在页面、组件和插件中，您可以使用 useAsyncData 来访问异步返回的数据；
```
const { data, pending, error, refresh } = await useAsyncData(
  'mountains',
  () => $fetch('https://api.nuxtjs.dev/mountains')
)
```
3. useFetch
顾名思义，这就是一个 fetch 请求；

在页面、组件或者插件中可以使用 useFetch 获取任意URL资源。

useFetch是对useAsyncData包装，自动生成key同时推断响应类型，用起来更简单。
```
const param1 = ref('value1')
const { data, pending, error, refresh } = await useFetch('https://api.nuxtjs.dev/mountains',{
    query: { param1, param2: 'value2' }
})
```
4. useCookie
在页面、组件和插件中，可以使用 useCookie 一个 SSR 友好的 hooks 来读取和写入 cookie。
```
<template>
  <div>
    <h1> Counter: {{ counter || '-' }}</h1>
    <button @click="counter = null">
      reset
    </button>
    <button @click="counter--">
      -
    </button>
    <button @click="counter++">
      +
    </button>
  </div>
</template>
 
<script setup>
const counter = useCookie('counter')
counter.value = counter.value || Math.round(Math.random() * 1000)
</script>
```
5. useHead
Nuxt 提供 useHead 可组合项来添加和自定义 Nuxt 应用程序各个页面的头部属性。

6. useRoute
useRoute 是一个在实际项目开发中使用较多的 hooks，主要返回当前路由的一些数据；并且必须在 setup 函数、插件或路由中间件中调用。
```
<script setup>
const route = useRoute()
const { data: mountain } = await useFetch(`https://api.nuxtjs.dev/mountains/${route.params.slug}`)
</script>
 
<template>
  <div>
    <h1>{{ mountain.title }}</h1>
    <p>{{ mountain.description }}</p>
  </div>
</template>
```
7. useRouter
useRouter 返回路由器的实例，并且必须在设置函数、插件或路由中间件中调用。
```
const router = useRouter();
router.back();
router.forward();
router.go();
router.push({ path: "/home" });
router.replace({ hash: "#bio" });
```

更多 Hooks 等相关 API 请查看官网文档

### 配置 pinia
与 vuex 类似的一个状态管理器
1. 安装：
```
pnpm install pinia @pinia/nuxt
```
2. 配置 nuxt.config.js
```
// nuxt.config.js
export default defineNuxtConfig({
  // ... 其他配置
  modules: [
    // ...
    '@pinia/nuxt',
  ],
})
```
3. 新建 src/stores/index.ts ：

4. 新建 src/stores/useUserStore.ts ：
```
import { defineStore } from 'pinia'
 
const USER_INFO = {
  userName: '易师傅',
  id: 1,
  sex: '男',
}
 
export const useUserStore = defineStore('userInfo', () => {
 
  const userInfo = reactive(USER_INFO)
 
  return {
    userInfo,
  }
})
```
5. 使用
```
<template>
  <div>
    <strong>
      姓名：{{ userInfo.userName }}
      性别：{{ userInfo.sex }}
    </strong>
  </div>
</template>
 
<script setup lang="ts">
import { useUserStore } from '@/stores'
const userInfo = useUserStore().userInfo
</script>
```

### 配置 vueuse
VueUse 是一个基于 Composition API 的实用函数集合。

一句话：它就是一个工具函数包；

1. 安装：
```
pnpm install @vueuse/nuxt @vueuse/
```
2. 配置 nuxt.config.js
```
// nuxt.config.js
export default defineNuxtConfig({
  // ... 其他配置
  modules: [
    // ...
    '@vueuse/nuxt',
  ],
})
```
3. 使用 VueUse 函数：
```
<script setup lang="ts">
const { x, y } = useMouse()
</script>
 
<template>
  <div>pos: {{x}}, {{y}}</div>
</template>
```











