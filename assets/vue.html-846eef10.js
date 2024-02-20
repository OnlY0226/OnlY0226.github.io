import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as i,f as s}from"./app-f75c153d.js";const d={},l=s(`<h1 id="vue3" tabindex="-1"><a class="header-anchor" href="#vue3" aria-hidden="true">#</a> Vue3</h1><h2 id="挂载全局属性和方法" tabindex="-1"><a class="header-anchor" href="#挂载全局属性和方法" aria-hidden="true">#</a> 挂载全局属性和方法</h2><h3 id="app-config-globalproperties" tabindex="-1"><a class="header-anchor" href="#app-config-globalproperties" aria-hidden="true">#</a> app.config.globalProperties</h3><p>在main.js中引入全局要使用的方法，通过app.config.globalProperties添加到全局中。例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// main.js
import { createApp } from &#39;vue&#39;
import App from &#39;./App.vue&#39;

// test 是外部引入的方法
const test = () =&gt; {
    console.log(&#39;ccccc&#39;)
    return &#39;测试成功001&#39;
}

const app = createApp(App)
// 添加到全局中
app.config.globalProperties.$Test = test
app.use(test)
app.use(store)
app.use(router)
app.mount(&#39;#app&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在要使用的.vue文件中，</p><ol><li><p>通过 getCurrentInstance 的 proxy 使用，不过 proxy 的 ts 类性中还有一个 undefined，所以使用 ts 时，类型就要自己处理了</p></li><li><p>通过 getCurrentInstance 的 appContext 使用，appContext 获取的即为 main.js 里创建的的 vue 对象.</p></li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
// Home.vue
// ts写法中会使用 defineComponent，普通的写法不用在意
import { defineComponent, getCurrentInstance } from &#39;vue&#39;

export default defineComponent({
    name: &#39;Home&#39;,
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="provide-和-inject" tabindex="-1"><a class="header-anchor" href="#provide-和-inject" aria-hidden="true">#</a> provide 和 inject</h3><p>src 文件夹下新建 symbol 文件夹并新增index.ts (或 .js) 文件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
// src/symbol/index.ts
// 定义对应的 symbol 并暴露出去
export const TEST_SYMBOL = Symbol(&#39;Test 测试&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 main.js 中引入，并使用 project 绑定依赖</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
// main.ts
import { createApp } from &#39;vue&#39;
import App from &#39;./App.vue&#39;
import { TEST_SYMBOL } from &#39;./symbol&#39;
// test 是外部引入的方法
const test = () =&gt; {
    console.log(&#39;ccccc&#39;)
    return &#39;测试成功001&#39;
}
const app = createApp(App)
// 使用 symbol 方式
app.provide(TEST_SYMBOL, test)
// 使用自定义字符串方式
app.provide(&#39;$Test&#39;, test)
app.use(store)
app.use(router)
app.mount(&#39;#app&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在对应.vue文件中引入并使用</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
import { defineComponent, inject } from &#39;vue&#39;

import { TEST_SYMBOL } from &#39;@/symbol&#39;

export default defineComponent({
    setup() {
        // ts 中它的类型可能是个undefined
        // symbol 方式
        const $Test: (() =&gt; string) | undefined = inject(TEST_SYMBOL)
        $Test &amp;&amp; $Test()
        // 自定义字符串方式
        const $Test2: (() =&gt; string) | undefined = inject(&#39;$Test&#39;)
        $Test2 &amp;&amp; $Test2()
        // js
        /*
        const $Test = inject(TEST_SYMBOL)
        $Test()
        */
    }
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>Vue3 不推荐 方式一 在原型链上挂载一些东西这种方式，而是更建议使用 方式二 的 provide 和 inject 方式</p></div>`,16),a=[l];function r(t,v){return n(),i("div",null,a)}const m=e(d,[["render",r],["__file","vue.html.vue"]]);export{m as default};
