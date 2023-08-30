import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as n,f as a}from"./app-af426df3.js";const d={},s=a(`<h1 id="面试题" tabindex="-1"><a class="header-anchor" href="#面试题" aria-hidden="true">#</a> 面试题</h1><h2 id="作用域问题" tabindex="-1"><a class="header-anchor" href="#作用域问题" aria-hidden="true">#</a> 作用域问题</h2><h3 id="this指向问题" tabindex="-1"><a class="header-anchor" href="#this指向问题" aria-hidden="true">#</a> this指向问题</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var length = 10;
function fn() {
    console.log(this.length);
}

var obj = {
    length: 5,
    method: function(fn) {
        fn();
        arguments[0]();
    }
};
obj.method(fn, 1, 2, 3, 4, 5, 6);//输出是什么？
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>10
7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="变量提升-作用域问题" tabindex="-1"><a class="header-anchor" href="#变量提升-作用域问题" aria-hidden="true">#</a> 变量提升+作用域问题</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var a = 1;

function fn(){
	console.log(a); 
	var a = 5;
	console.log(a);  
	a++;
        var a;
	fn2();
	console.log(a);
	function fn2(){
		console.log(a); 
		a = 20;
		b = 100;
	}
}
fn();
console.log(a); 
a = 10;
console.log(a); 
console.log(b);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="其他" tabindex="-1"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h2><h3 id="一个淘宝页面-你如何取得这个页面用到哪几种标签" tabindex="-1"><a class="header-anchor" href="#一个淘宝页面-你如何取得这个页面用到哪几种标签" aria-hidden="true">#</a> 一个淘宝页面，你如何取得这个页面用到哪几种标签？</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Array.from(new Set(Array.from(document.querySelectorAll(&#39;*&#39;))
.map(({tagName})=&gt; tagName.toLowerCase())))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="宏任务与微任务" tabindex="-1"><a class="header-anchor" href="#宏任务与微任务" aria-hidden="true">#</a> 宏任务与微任务</h3><p>首先执行 宏任务 =&gt; 微任务的Event Queue =&gt; 宏任务的Event Queue</p><ol><li>宏任务<br> （包括整体代码script，setTimeout，setInterval）</li></ol><ul><li>宏任务所处的队列就是宏任务队列</li><li>第一个宏任务队列中只有一个任务： 执行主线程的js代码</li><li>宏任务队列可以有多个</li><li>当宏任务队列的中的任务全部执行完以后会查看是否有微任务队列如果有先执行微任务队列中的所有任务，如果没有就查看是否有宏任务队列</li></ul><ol start="2"><li>微任务<br> （Promise.then(非new Promise)，process.nextTick(node中)）</li></ol><ul><li>微任务所处的队列就是微任务队列</li><li>只有一个微任务队列</li><li>在上一个宏任务队列执行完毕后如果有微任务队列就会执行微任务队列中的所有任务</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>async function async1() {
	console.log(&#39;async1 start&#39;);                       
	await async2();
	console.log(&#39;asnyc1 end&#39;);
}
async function async2() {
	console.log(&#39;async2&#39;);                             
}
console.log(&#39;script start&#39;);                           
setTimeout(() =&gt; {
	console.log(&#39;setTimeOut&#39;);
}, 0);
async1();
new Promise(function (reslove) {
	console.log(&#39;promise1&#39;);
	reslove();
}).then(function () {
	console.log(&#39;promise2&#39;);
})
console.log(&#39;script end&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考答案</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>script start
async1 start
async2
promise1
script end
asnyc1 end
promise2
setTimeOut
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="实现一个深拷贝" tabindex="-1"><a class="header-anchor" href="#实现一个深拷贝" aria-hidden="true">#</a> 实现一个深拷贝</h3><ol><li>通过 JSON 转换实现</li></ol><p>缺点：</p><ul><li>对于 function、undefined，会丢失这些属性。</li><li>对于 RegExp、Error 对象，只会得到空对象</li><li>对于 date 对象，得到的结果是 string，而不是 date 对象</li><li>对于 NaN、Infinity、-Infinity，会变成 null</li><li>无法处理循环引用</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const obj = {a: 1, b: {x: 3}}
const copy = JSON.parse(JSON.stringify(obj))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>乞丐式递归</li></ol><p>缺点：</p><ul><li>无法处理循环引用</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function deepClone(obj) {
  let copy = obj instanceof Array ? [] : {}
  for (let i in obj) {
    if (obj.hasOwnProperty(i)) {
      copy[i] = typeof obj[i] === &#39;object&#39; ? deepClone(obj[i]) : obj[i]
    }
  }
  return copy
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>改良版深拷贝</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function deepCopy (obj, cache = []) {
  // typeof [] =&gt; &#39;object&#39;
  // typeof {} =&gt; &#39;object&#39;
  if (obj === null || typeof obj !== &#39;object&#39;) {
    return obj
  }
  // 如果传入的对象与缓存的相等, 则递归结束, 这样防止循环
  /**
   * 类似下面这种
   * var a = {b:1}
   * a.c = a
   * 资料: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Cyclic_object_value
   */
  const hit = cache.filter(c =&gt; c.original === obj)[0]
  if (hit) {
    return hit.copy
  }
 
  const copy = Array.isArray(obj) ?  [] :   {}
  // 将copy首先放入cache, 因为我们需要在递归deepCopy的时候引用它
  cache.push({
    original: obj,
    copy
  })
  Object.keys(obj).forEach(key =&gt; {
    copy[key] = deepCopy(obj[key], cache)
  })
 
  return copy
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>深拷贝再优化</li></ol><ul><li>深拷贝添加 Map 和 Set 相关，当然你可以再添加 Date 之类的补充</li><li>使用 WeakMap 代替 []</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function clone(target, map = new WeakMap()) {
  // 克隆原始类型
  if (!isObject(target)) {
    return target;
  }
 
  // 初始化
  const type = getType(target);
  let cloneTarget;
  if (deepTag.includes(type)) {
    cloneTarget = getInit(target, type);
  }
 
  // 防止循环引用
  if (map.get(target)) {
    return map.get(target);
  }
  map.set(target, cloneTarget);
 
  // 克隆set
  if (type === setTag) {
    target.forEach(value =&gt; {
      cloneTarget.add(clone(value,map));
    });
    return cloneTarget;
  }
 
  // 克隆map
  if (type === mapTag) {
    target.forEach((value, key) =&gt; {
      cloneTarget.set(key, clone(value,map));
    });
    return cloneTarget;
  }
 
  // 克隆对象和数组
  const keys = type === arrayTag ? undefined : Object.keys(target);
  forEach(keys || target, (value, key) =&gt; {
    if (keys) {
      key = value;
    }
    cloneTarget[key] = clone(target[key], map);
  });
 
  return cloneTarget;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="键盘弹起底部div抬起处理" tabindex="-1"><a class="header-anchor" href="#键盘弹起底部div抬起处理" aria-hidden="true">#</a> 键盘弹起底部div抬起处理</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function onResize(footerPara ,rightContentPara) {
    const defaultHeight = document.documentElement.clientHeight || document.body.clientHeigh
    const rightContent = document.getElementById(rightContentPara)
    const footer = document.getElementById(footerPara)

    window.onresize = () =&gt;{
        const curHeight = document.documentElement.clientHeight || document.body.clientHeight
        const keyHeight = defaultHeight - curHeight 
        if(defaultHeight &gt; curHeight){
            footer.style.display = &quot;none&quot;
            rightContent.style.marginTop = -keyHeight+&quot;px&quot;
            document.getElementById(&quot;tabbar&quot;).style.display = &quot;none&quot;
        }else{
            footer.style.display = &quot;unset&quot;
            rightContent.style.marginTop = &quot;&quot;
            document.getElementById(&quot;tabbar&quot;).style.display = &quot;unset&quot;
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;van-button id=&quot;footer&quot; color=&quot;#3a8bd5&quot; block @click=&quot;&quot;&gt;提交&lt;/van-button&gt;

import { onResize } from &quot;../../../static/js/common.js&quot;
mounted() {
    onResize(&quot;footer&quot;)
},
destroyed(){
    window.onresize = null;
},
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="说一下mvvm模式" tabindex="-1"><a class="header-anchor" href="#说一下mvvm模式" aria-hidden="true">#</a> 说一下MVVM模式</h3><h3 id="说一下数据双向绑定原理" tabindex="-1"><a class="header-anchor" href="#说一下数据双向绑定原理" aria-hidden="true">#</a> 说一下数据双向绑定原理！</h3><h3 id="说一下浏览器缓存策略" tabindex="-1"><a class="header-anchor" href="#说一下浏览器缓存策略" aria-hidden="true">#</a> 说一下浏览器缓存策略！</h3><h3 id="说一下vuerouter原理" tabindex="-1"><a class="header-anchor" href="#说一下vuerouter原理" aria-hidden="true">#</a> 说一下vueRouter原理</h3><h3 id="说一下vue-js跟jquery-js的区别" tabindex="-1"><a class="header-anchor" href="#说一下vue-js跟jquery-js的区别" aria-hidden="true">#</a> 说一下vue.js跟jquery.js的区别</h3><h3 id="说一下优化策略" tabindex="-1"><a class="header-anchor" href="#说一下优化策略" aria-hidden="true">#</a> 说一下优化策略</h3><h3 id="实现简单ajax" tabindex="-1"><a class="header-anchor" href="#实现简单ajax" aria-hidden="true">#</a> 实现简单ajax</h3><h3 id="实现简单的闭包" tabindex="-1"><a class="header-anchor" href="#实现简单的闭包" aria-hidden="true">#</a> 实现简单的闭包</h3><h3 id="实现js继承" tabindex="-1"><a class="header-anchor" href="#实现js继承" aria-hidden="true">#</a> 实现js继承</h3><h3 id="apply-call简单使用" tabindex="-1"><a class="header-anchor" href="#apply-call简单使用" aria-hidden="true">#</a> apply，call简单使用</h3><h3 id="对象高级使用-描述得比较抽象" tabindex="-1"><a class="header-anchor" href="#对象高级使用-描述得比较抽象" aria-hidden="true">#</a> 对象高级使用（描述得比较抽象）</h3><h3 id="echarts" tabindex="-1"><a class="header-anchor" href="#echarts" aria-hidden="true">#</a> echarts</h3><h3 id="作用域链、数据类型、引用类型、箭头函数、this指向" tabindex="-1"><a class="header-anchor" href="#作用域链、数据类型、引用类型、箭头函数、this指向" aria-hidden="true">#</a> 作用域链、数据类型、引用类型、箭头函数、this指向</h3><h3 id="promise的三种状态" tabindex="-1"><a class="header-anchor" href="#promise的三种状态" aria-hidden="true">#</a> promise的三种状态</h3><h3 id="es6特点" tabindex="-1"><a class="header-anchor" href="#es6特点" aria-hidden="true">#</a> es6特点</h3><h3 id="let跟var的区别" tabindex="-1"><a class="header-anchor" href="#let跟var的区别" aria-hidden="true">#</a> let跟var的区别</h3><h3 id="vue生命周期都能做什么事情" tabindex="-1"><a class="header-anchor" href="#vue生命周期都能做什么事情" aria-hidden="true">#</a> vue生命周期都能做什么事情</h3><h3 id="前置路由守卫-后置路由守卫、api拦截器-axios" tabindex="-1"><a class="header-anchor" href="#前置路由守卫-后置路由守卫、api拦截器-axios" aria-hidden="true">#</a> 前置路由守卫，后置路由守卫、api拦截器（axios）</h3><h3 id="localstorage、sessionstorage、cookie区别与使用情况" tabindex="-1"><a class="header-anchor" href="#localstorage、sessionstorage、cookie区别与使用情况" aria-hidden="true">#</a> localStorage、sessionStorage、cookie区别与使用情况</h3><h3 id="父组件跟子组件的通讯" tabindex="-1"><a class="header-anchor" href="#父组件跟子组件的通讯" aria-hidden="true">#</a> 父组件跟子组件的通讯</h3><h3 id="vuex的元素" tabindex="-1"><a class="header-anchor" href="#vuex的元素" aria-hidden="true">#</a> vuex的元素</h3><h3 id="vue指令" tabindex="-1"><a class="header-anchor" href="#vue指令" aria-hidden="true">#</a> vue指令</h3><h3 id="会问到vue2跟vue3的区别" tabindex="-1"><a class="header-anchor" href="#会问到vue2跟vue3的区别" aria-hidden="true">#</a> 会问到vue2跟vue3的区别</h3><p>css居中布局<br> css</p><p>你觉得你最大的优点跟缺点是什么？<br> 工作中你觉得最难的点是什么？<br> 你觉得你工作中最有成就感的事情是什么？</p>`,61),l=[s];function r(t,c){return i(),n("div",null,l)}const o=e(d,[["render",r],["__file","interviewQuetions.html.vue"]]);export{o as default};
