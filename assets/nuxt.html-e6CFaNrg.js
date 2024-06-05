import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as t,c as n,f as l,g as e}from"./app-BUWSJ5pb.js";const s={},a=e(`<h1 id="vite-nuxt-pinia-vueuse搞定前端ssr项目" tabindex="-1"><a class="header-anchor" href="#vite-nuxt-pinia-vueuse搞定前端ssr项目"><span>vite+nuxt+pinia+vueuse搞定前端SSR项目</span></a></h1><h2 id="一、了解-ssr" tabindex="-1"><a class="header-anchor" href="#一、了解-ssr"><span>一、了解 SSR</span></a></h2><p>在介绍 Nuxt3 之前，肯定要先介绍一波 服务端渲染，毕竟 Nuxt 就是一个基于 Vue.js 的服务端渲染应用框架；</p><h3 id="什么是ssr" tabindex="-1"><a class="header-anchor" href="#什么是ssr"><span>什么是SSR</span></a></h3><p>服务器端渲染（Server-Side Rendering）是指由服务端完成页面的 HTML 结构拼接的页面处理技术，发送到浏览器，然后为其绑定状态与事件，成为完全可交互页面的过程。</p><p>简单理解就是html是由服务端写出，可以动态改变页面内容，即所谓的动态页面。早年的 php、asp 、jsp 这些 Server page 都是 SSR 的。</p><h3 id="为什么使用ssr" tabindex="-1"><a class="header-anchor" href="#为什么使用ssr"><span>为什么使用SSR</span></a></h3><ol><li><p>网页内容在服务器端渲染完成，一次性传输到浏览器，所以 首屏加载速度非常快；</p></li><li><p>有利于SEO，因为服务器返回的是一个完整的 html，在浏览器可以看到完整的 dom，对于爬虫、百度搜索等引擎就比较友好；</p></li></ol><h2 id="二、搭建项目" tabindex="-1"><a class="header-anchor" href="#二、搭建项目"><span>二、搭建项目</span></a></h2><div class="hint-container info"><p class="hint-container-title">相关信息</p><ul><li>Nodejs &gt;= 16.11</li><li>pnpm &gt;= 7.x</li></ul></div><h3 id="初始化项目" tabindex="-1"><a class="header-anchor" href="#初始化项目"><span>初始化项目</span></a></h3><ol><li>初始化：</li></ol><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>npx nuxi init first-nuxt-app
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>安装依赖</li></ol><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>cd first-nuxt-app
# yarn
yarn install
 
# npm
npm install
 
# pnpm
pnpm install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>注意： 如果你用 pnpm 安装依赖，请创建一个 .npmrc 文件，且设置:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>shamefully-hoist=true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>再使用 pnpm 安装</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>pnpm install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div><ol start="3"><li>运行</li></ol><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>pnpm run dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="4"><li>访问</li></ol><p>打开本地链接 http://localhost:3000/ 就可以开始访问了</p>`,20),d=e(`<h3 id="新建常用目录" tabindex="-1"><a class="header-anchor" href="#新建常用目录"><span>新建常用目录</span></a></h3><h4 id="_1-新建app-src-目录" tabindex="-1"><a class="header-anchor" href="#_1-新建app-src-目录"><span>1. 新建app(src)目录</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>mkdir src
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>并且把 app.vue 文件移入到 src 目录下</p><p>同时修改配置文件 nuxt.config.ts：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: &#39;src/&#39;,
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再 pnpm dev 运行，发现跟上面初始化的一样</p><h4 id="_2-配置页面路由目录-pages" tabindex="-1"><a class="header-anchor" href="#_2-配置页面路由目录-pages"><span>2. 配置页面路由目录：pages</span></a></h4><p>1.新建 src/pages 目录：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>mkdir src/pages
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>新建 src/pages/index.vue 首页：</li></ol><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>touch src/pages/index.vue
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>配置 src/pages/index.vue</li></ol><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;template&gt;
  &lt;div&gt;
    &lt;h1&gt;欢迎来到易师傅的第一个页面&lt;/h1&gt;
  &lt;/div&gt;
&lt;/template&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>修改 src/app.vue 入口</li></ol><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;template&gt;
  &lt;div&gt;
    &lt;!-- 路由出口 --&gt;
    &lt;NuxtPage&gt;&lt;/NuxtPage&gt;
  &lt;/div&gt;
&lt;/template&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>再 pnpm dev 运行</li></ol><h4 id="_3-新增多个页面静态路由" tabindex="-1"><a class="header-anchor" href="#_3-新增多个页面静态路由"><span>3. 新增多个页面静态路由</span></a></h4><p>1.新建 src/pages/list.vue 文件：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;template&gt;
  &lt;div&gt;
    &lt;h1&gt;欢迎来到易师傅的列表页面&lt;/h1&gt;
    &lt;ul&gt;
      &lt;li&gt;11111&lt;/li&gt;
      &lt;li&gt;22222&lt;/li&gt;
      &lt;li&gt;33333&lt;/li&gt;
      &lt;li&gt;44444&lt;/li&gt;
      &lt;li&gt;55555&lt;/li&gt;
      &lt;li&gt;66666&lt;/li&gt;
      &lt;li&gt;77777&lt;/li&gt;
      &lt;li&gt;88888&lt;/li&gt;
      &lt;li&gt;99999&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/div&gt;
&lt;/template&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>在 src/pages/index.vue 配置路由跳转</li></ol><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;template&gt;
  &lt;div&gt;
    &lt;h1&gt;欢迎来到易师傅的第一个页面&lt;/h1&gt;
 
    &lt;NuxtLink to=&quot;/list&quot;&gt;进入列表页&lt;/NuxtLink&gt;
  &lt;/div&gt;
&lt;/template&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>预览</li></ol><p>NuxtLink组件 是 Vue Router 中 RouterLink 组件和 HTML a 标签的替代品； 关于 NuxtLink 的更多使用，可参考官方文档</p><h4 id="_4-新增多个页面动态路由" tabindex="-1"><a class="header-anchor" href="#_4-新增多个页面动态路由"><span>4. 新增多个页面动态路由</span></a></h4><p>动态路由 顾名思义就是这个路由地址是可变的，是动态的；</p><p>使用场景一般就是文章的详细页，因为一般一篇文章会有对应的一个 id，那这个 id 就是动态的；</p><p>那如何去实现呢？</p><ol><li>新建 src/pages/[id] 目录（目录名一定要是 [id]）：</li></ol><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>mkdir src/pages/[id]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>新建 src/pages/[id]/index.vue 文件：</li></ol><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;template&gt;
  &lt;div&gt;
    &lt;h1&gt;易师傅的详细页面&lt;/h1&gt;
 
    &lt;h2&gt;title 1&lt;/h2&gt;
 
    &lt;p&gt;内容 1&lt;/p&gt;
 
    &lt;h2&gt;title 2&lt;/h2&gt;
 
    &lt;p&gt;内容 2&lt;/p&gt;
 
    &lt;h2&gt;title 3&lt;/h2&gt;
 
    &lt;p&gt;内容 3&lt;/p&gt;
 
    &lt;h2&gt;title 4&lt;/h2&gt;
 
    &lt;p&gt;内容 4&lt;/p&gt;
  &lt;/div&gt;
&lt;/template&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>页面中访问：http://localhost:3000/[id]</li></ol><h4 id="_5-新增layouts模板" tabindex="-1"><a class="header-anchor" href="#_5-新增layouts模板"><span>5. 新增layouts模板</span></a></h4><ol><li>新建 src/layouts 目录</li><li>新建 src/layouts/default.vue 默认文件</li></ol><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;template&gt;
  &lt;div&gt;
    &lt;h1&gt;这里是易师傅的默认模板，可以添加在所有页面，也可单独添加&lt;/h1&gt;
    &lt;slot /&gt;
  &lt;/div&gt;
&lt;/template&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>在全局页面中配置： src/app.vue（也就是每个页面中都会有该模板）</li></ol><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;template&gt;
  &lt;div&gt;
    &lt;!-- 路由出口 --&gt;
    &lt;NuxtLayout&gt;
      &lt;NuxtPage&gt;&lt;/NuxtPage&gt;
    &lt;/NuxtLayout&gt;
  &lt;/div&gt;
&lt;/template&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>自定义模板（类似 header、footer） 新建 src/layouts/header.vue</li></ol><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;template&gt;
  &lt;header class=&quot;header&quot;&gt;
    &lt;h1&gt;这里是易师傅的默认模板 header&lt;/h1&gt;
  &lt;/header&gt;
&lt;/template&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>使用自定义模板</li></ol><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;template&gt;
  &lt;div&gt;
    &lt;NuxtLayout name=&quot;header&quot;/&gt;
    &lt;NuxtLink to=&quot;/list&quot;&gt;进入列表页&lt;/NuxtLink&gt;
  &lt;/div&gt;
&lt;/template&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="6"><li>预览</li></ol><h3 id="配置组件-components" tabindex="-1"><a class="header-anchor" href="#配置组件-components"><span>配置组件 components</span></a></h3><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>Nuxt3 中会自动导入您 components/ 目录中的所有组件，也就是说当你想使用组件时，不要 import 了，直接使用即可</p></div><ol><li>组件的使用指南 <ol><li>新建 src/components 目录</li><li>新建 src/components/ListItem.vue 文件</li></ol><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;template&gt;
  &lt;ul&gt;
    &lt;li&gt;
      &lt;NuxtLink to=&quot;/111&quot;&gt;111&lt;/NuxtLink&gt;
    &lt;/li&gt;
    &lt;li&gt;
      &lt;NuxtLink to=&quot;/222&quot;&gt;222&lt;/NuxtLink&gt;
    &lt;/li&gt;
    &lt;li&gt;
      &lt;NuxtLink to=&quot;/333&quot;&gt;333&lt;/NuxtLink&gt;
    &lt;/li&gt;
    &lt;li&gt;
      &lt;NuxtLink to=&quot;/444&quot;&gt;444&lt;/NuxtLink&gt;
    &lt;/li&gt;
    &lt;li&gt;
      &lt;NuxtLink to=&quot;/555&quot;&gt;555&lt;/NuxtLink&gt;
    &lt;/li&gt;
    &lt;li&gt;
      &lt;NuxtLink to=&quot;/666&quot;&gt;666&lt;/NuxtLink&gt;
    &lt;/li&gt;
  &lt;/ul&gt;
&lt;/template&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>在 src/pages/list.vue 文件中使用</li></ol><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;template&gt;
  &lt;div&gt;
    &lt;h1&gt;欢迎来到易师傅的列表页面&lt;/h1&gt;
    &lt;ListItem&gt;&lt;/ListItem&gt;
  &lt;/div&gt;
&lt;/template&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>根据代码，我们看到我们并没有用 import 去导入 ListItem.vue，还是正常的渲染了；</p></div><ol start="4"><li>components 嵌套目录组件使用 如果您在嵌套目录中有一个组件，例如：<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>components/
--| list/
----| detail/
------| Button.vue
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>那么我们可以直接在其它地方使用：<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;ListDetailButton /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol></li><li>&lt;ClientOnly/&gt; 组件 Nuxt 提供了 &lt;ClientOnly /&gt; 专门用于仅在客户端渲染组件的组件； 要仅在客户端导入组件，请在仅客户端插件中注册该组件</li></ol><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;template&gt;
  &lt;div&gt;
    &lt;ClientOnly&gt;
      &lt;!-- 此组件仅在客户端显示 --&gt;
      &lt;Comments /&gt;
    &lt;/ClientOnly&gt;
  &lt;/div&gt;
&lt;/template&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置插件-plugins" tabindex="-1"><a class="header-anchor" href="#配置插件-plugins"><span>配置插件 plugins</span></a></h3><p>Nuxt 会自动读取 plugins 目录中的文件并在创建 Vue 应用程序时加载它们； 你可以在文件名中使用 .server 或 .client 后缀来让插件在 服务器端 或 客户端 加载插件；</p><ol><li>新建 src/plugins 目录</li><li>以 vue 指令为例：新建 src/plugins/directives.ts 文件</li></ol><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>export default defineNuxtPlugin((nuxtApp) =&gt; {
  nuxtApp.vueApp.directive(&#39;focus&#39;, {
    mounted (el) {
      el.focus()
    },
    getSSRProps (binding, vnode) {
      // you can provide SSR-specific props here
      return {}
    }
  })
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="用-composables-灵活配置-hooks" tabindex="-1"><a class="header-anchor" href="#用-composables-灵活配置-hooks"><span>用 composables 灵活配置 hooks</span></a></h3><p>在 Nuxt 3 中使用该目录时，composables/ 目录将自动导入，将 Vue 可组合项（Hooks）自动导入到您的应用程序中，即不需要在其它地方 import；</p><p>所以你如果写一些通用的 hooks，只需放入该目录下即可； composables的基本使用指南</p><ol><li><p>新建 src/composables 目录</p></li><li><p>新建 src/composables/useFoo.ts 文件</p></li></ol><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>export const useFoo = () =&gt; {
  return useState(&#39;foo&#39;, () =&gt; &#39;bar&#39;)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>在 src/pages/index.vue 中使用</li></ol><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;template&gt;
  &lt;div&gt;
    &lt;h1&gt;欢迎来到易师傅的第一个页面&lt;/h1&gt;
    &lt;NuxtLink to=&quot;/list&quot;&gt;进入列表页&lt;/NuxtLink&gt;
  &lt;/div&gt;
&lt;/template&gt;
 
&lt;script setup&gt;
  const foo = useFoo()
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>根据以上操作，你可以创建属于你自己的 hooks</p></div><h3 id="nuxt-常用的-hooks" tabindex="-1"><a class="header-anchor" href="#nuxt-常用的-hooks"><span>Nuxt 常用的 Hooks</span></a></h3><ol><li>useAppConfig 访问项目中的 Nuxt 配置</li></ol><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>const appConfig = useAppConfig()
 
console.log(appConfig)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>useAsyncData 在页面、组件和插件中，您可以使用 useAsyncData 来访问异步返回的数据；</li></ol><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>const { data, pending, error, refresh } = await useAsyncData(
  &#39;mountains&#39;,
  () =&gt; $fetch(&#39;https://api.nuxtjs.dev/mountains&#39;)
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>useFetch 顾名思义，这就是一个 fetch 请求；</li></ol><p>在页面、组件或者插件中可以使用 useFetch 获取任意URL资源。</p><p>useFetch是对useAsyncData包装，自动生成key同时推断响应类型，用起来更简单。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>const param1 = ref(&#39;value1&#39;)
const { data, pending, error, refresh } = await useFetch(&#39;https://api.nuxtjs.dev/mountains&#39;,{
    query: { param1, param2: &#39;value2&#39; }
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>useCookie 在页面、组件和插件中，可以使用 useCookie 一个 SSR 友好的 hooks 来读取和写入 cookie。</li></ol><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;template&gt;
  &lt;div&gt;
    &lt;h1&gt; Counter: {{ counter || &#39;-&#39; }}&lt;/h1&gt;
    &lt;button @click=&quot;counter = null&quot;&gt;
      reset
    &lt;/button&gt;
    &lt;button @click=&quot;counter--&quot;&gt;
      -
    &lt;/button&gt;
    &lt;button @click=&quot;counter++&quot;&gt;
      +
    &lt;/button&gt;
  &lt;/div&gt;
&lt;/template&gt;
 
&lt;script setup&gt;
const counter = useCookie(&#39;counter&#39;)
counter.value = counter.value || Math.round(Math.random() * 1000)
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li><p>useHead Nuxt 提供 useHead 可组合项来添加和自定义 Nuxt 应用程序各个页面的头部属性。</p></li><li><p>useRoute useRoute 是一个在实际项目开发中使用较多的 hooks，主要返回当前路由的一些数据；并且必须在 setup 函数、插件或路由中间件中调用。</p></li></ol><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;script setup&gt;
const route = useRoute()
const { data: mountain } = await useFetch(\`https://api.nuxtjs.dev/mountains/\${route.params.slug}\`)
&lt;/script&gt;
 
&lt;template&gt;
  &lt;div&gt;
    &lt;h1&gt;{{ mountain.title }}&lt;/h1&gt;
    &lt;p&gt;{{ mountain.description }}&lt;/p&gt;
  &lt;/div&gt;
&lt;/template&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="7"><li>useRouter useRouter 返回路由器的实例，并且必须在设置函数、插件或路由中间件中调用。</li></ol><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>const router = useRouter();
router.back();
router.forward();
router.go();
router.push({ path: &quot;/home&quot; });
router.replace({ hash: &quot;#bio&quot; });
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>更多 Hooks 等相关 API 请查看官网文档</p><h3 id="配置-pinia" tabindex="-1"><a class="header-anchor" href="#配置-pinia"><span>配置 pinia</span></a></h3><p>与 vuex 类似的一个状态管理器</p><ol><li>安装：</li></ol><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>pnpm install pinia @pinia/nuxt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>配置 nuxt.config.js</li></ol><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>// nuxt.config.js
export default defineNuxtConfig({
  // ... 其他配置
  modules: [
    // ...
    &#39;@pinia/nuxt&#39;,
  ],
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li><p>新建 src/stores/index.ts ：</p></li><li><p>新建 src/stores/useUserStore.ts ：</p></li></ol><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>import { defineStore } from &#39;pinia&#39;
 
const USER_INFO = {
  userName: &#39;易师傅&#39;,
  id: 1,
  sex: &#39;男&#39;,
}
 
export const useUserStore = defineStore(&#39;userInfo&#39;, () =&gt; {
 
  const userInfo = reactive(USER_INFO)
 
  return {
    userInfo,
  }
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>使用</li></ol><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;template&gt;
  &lt;div&gt;
    &lt;strong&gt;
      姓名：{{ userInfo.userName }}
      性别：{{ userInfo.sex }}
    &lt;/strong&gt;
  &lt;/div&gt;
&lt;/template&gt;
 
&lt;script setup lang=&quot;ts&quot;&gt;
import { useUserStore } from &#39;@/stores&#39;
const userInfo = useUserStore().userInfo
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置-vueuse" tabindex="-1"><a class="header-anchor" href="#配置-vueuse"><span>配置 vueuse</span></a></h3><p>VueUse 是一个基于 Composition API 的实用函数集合。</p><p>一句话：它就是一个工具函数包；</p><ol><li>安装：</li></ol><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>pnpm install @vueuse/nuxt @vueuse/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>配置 nuxt.config.js</li></ol><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>// nuxt.config.js
export default defineNuxtConfig({
  // ... 其他配置
  modules: [
    // ...
    &#39;@vueuse/nuxt&#39;,
  ],
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>使用 VueUse 函数：</li></ol><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;script setup lang=&quot;ts&quot;&gt;
const { x, y } = useMouse()
&lt;/script&gt;
 
&lt;template&gt;
  &lt;div&gt;pos: {{x}}, {{y}}&lt;/div&gt;
&lt;/template&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,94);function r(u,v){return t(),n("div",null,[a,l(" ![localhost3000](/assets/images/localhost3000.png) "),d])}const m=i(s,[["render",r],["__file","nuxt.html.vue"]]),p=JSON.parse('{"path":"/frontend/nuxt.html","title":"vite+nuxt+pinia+vueuse搞定前端SSR项目","lang":"zh-CN","frontmatter":{"icon":"pen-to-square","date":"2023-09-21T00:00:00.000Z","category":["前端开发"],"order":1,"description":"vite+nuxt+pinia+vueuse搞定前端SSR项目 一、了解 SSR 在介绍 Nuxt3 之前，肯定要先介绍一波 服务端渲染，毕竟 Nuxt 就是一个基于 Vue.js 的服务端渲染应用框架； 什么是SSR 服务器端渲染（Server-Side Rendering）是指由服务端完成页面的 HTML 结构拼接的页面处理技术，发送到浏览器，然后...","head":[["meta",{"property":"og:url","content":"https://github.com/OnlY0226/OnlY0226.github.io/frontend/nuxt.html"}],["meta",{"property":"og:site_name","content":"Only"}],["meta",{"property":"og:title","content":"vite+nuxt+pinia+vueuse搞定前端SSR项目"}],["meta",{"property":"og:description","content":"vite+nuxt+pinia+vueuse搞定前端SSR项目 一、了解 SSR 在介绍 Nuxt3 之前，肯定要先介绍一波 服务端渲染，毕竟 Nuxt 就是一个基于 Vue.js 的服务端渲染应用框架； 什么是SSR 服务器端渲染（Server-Side Rendering）是指由服务端完成页面的 HTML 结构拼接的页面处理技术，发送到浏览器，然后..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://github.com/OnlY0226/OnlY0226.github.io/assets/images/localhost3000.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-23T05:41:12.000Z"}],["meta",{"property":"article:author","content":"OnlY"}],["meta",{"property":"article:published_time","content":"2023-09-21T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-23T05:41:12.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"vite+nuxt+pinia+vueuse搞定前端SSR项目\\",\\"image\\":[\\"https://github.com/OnlY0226/OnlY0226.github.io/assets/images/localhost3000.png\\"],\\"datePublished\\":\\"2023-09-21T00:00:00.000Z\\",\\"dateModified\\":\\"2024-05-23T05:41:12.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"OnlY\\"}]}"]]},"headers":[{"level":2,"title":"一、了解 SSR","slug":"一、了解-ssr","link":"#一、了解-ssr","children":[{"level":3,"title":"什么是SSR","slug":"什么是ssr","link":"#什么是ssr","children":[]},{"level":3,"title":"为什么使用SSR","slug":"为什么使用ssr","link":"#为什么使用ssr","children":[]}]},{"level":2,"title":"二、搭建项目","slug":"二、搭建项目","link":"#二、搭建项目","children":[{"level":3,"title":"初始化项目","slug":"初始化项目","link":"#初始化项目","children":[]},{"level":3,"title":"新建常用目录","slug":"新建常用目录","link":"#新建常用目录","children":[]},{"level":3,"title":"配置组件 components","slug":"配置组件-components","link":"#配置组件-components","children":[]},{"level":3,"title":"配置插件 plugins","slug":"配置插件-plugins","link":"#配置插件-plugins","children":[]},{"level":3,"title":"用 composables 灵活配置 hooks","slug":"用-composables-灵活配置-hooks","link":"#用-composables-灵活配置-hooks","children":[]},{"level":3,"title":"Nuxt 常用的 Hooks","slug":"nuxt-常用的-hooks","link":"#nuxt-常用的-hooks","children":[]},{"level":3,"title":"配置 pinia","slug":"配置-pinia","link":"#配置-pinia","children":[]},{"level":3,"title":"配置 vueuse","slug":"配置-vueuse","link":"#配置-vueuse","children":[]}]}],"git":{"createdTime":1695265769000,"updatedTime":1716442872000,"contributors":[{"name":"Oy","email":"OY.Ou@weltronics.com","commits":1},{"name":"oy","email":"OY.Ou@weltronics.com","commits":1}]},"readingTime":{"minutes":6.85,"words":2055},"filePathRelative":"frontend/nuxt.md","localizedDate":"2023年9月21日","excerpt":"\\n<h2>一、了解 SSR</h2>\\n<p>在介绍 Nuxt3 之前，肯定要先介绍一波 服务端渲染，毕竟 Nuxt 就是一个基于 Vue.js 的服务端渲染应用框架；</p>\\n<h3>什么是SSR</h3>\\n<p>服务器端渲染（Server-Side Rendering）是指由服务端完成页面的 HTML 结构拼接的页面处理技术，发送到浏览器，然后为其绑定状态与事件，成为完全可交互页面的过程。</p>\\n<p>简单理解就是html是由服务端写出，可以动态改变页面内容，即所谓的动态页面。早年的 php、asp 、jsp 这些 Server page 都是 SSR 的。</p>\\n<h3>为什么使用SSR</h3>","autoDesc":true}');export{m as comp,p as data};