import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,f as e}from"./app-f9420569.js";const i={},t=e(`<h1 id="面试题" tabindex="-1"><a class="header-anchor" href="#面试题" aria-hidden="true">#</a> 面试题</h1><h2 id="作用域问题" tabindex="-1"><a class="header-anchor" href="#作用域问题" aria-hidden="true">#</a> 作用域问题</h2><h3 id="this指向问题" tabindex="-1"><a class="header-anchor" href="#this指向问题" aria-hidden="true">#</a> this指向问题</h3><ol><li>this指向问题1</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var length = 10;
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>第一次输出10应该没有问题。我们知道取对象属于除了点操作符还可以用中括号，所以第二次执行时相当于arguments调用方法，this指向arguments，而这里传了7个参数，故输出arguments长度为7。</p></div><h3 id="变量提升-作用域问题" tabindex="-1"><a class="header-anchor" href="#变量提升-作用域问题" aria-hidden="true">#</a> 变量提升+作用域问题</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var a = 1;

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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="apply-call-bind简单使用" tabindex="-1"><a class="header-anchor" href="#apply-call-bind简单使用" aria-hidden="true">#</a> apply，call，bind简单使用</h3><ol><li>call()、apply()、bind() 都是用来重定义 this 这个对象的！</li></ol><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>  <span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">&#39;小王&#39;</span><span class="token punctuation">,</span> age <span class="token operator">=</span> <span class="token number">17</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">&#39;小张&#39;</span><span class="token punctuation">,</span>
    objAge<span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>age<span class="token punctuation">,</span>
    <span class="token function-variable function">myFun</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">,</span> <span class="token operator">+</span> <span class="token string">&quot;年龄&quot;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>age<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">var</span> db <span class="token operator">=</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">&#39;德玛&#39;</span><span class="token punctuation">,</span>
    age<span class="token operator">:</span> <span class="token number">99</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>obj.myFun.call(db)；　　　　// 德玛年龄 99<br> obj.myFun.apply(db);　　　 // 德玛年龄 99<br> obj.myFun.bind(db)();　　　// 德玛年龄 99<br> 以上出了 bind 方法后面多了个 () 外 ，结果返回都一致！</p><p>由此得出结论，bind 返回的是一个新的函数，你必须调用它才会被执行。</p></div><ol start="2"><li>对比call 、bind 、 apply 传参情况下</li></ol><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>  <span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">&#39;小王&#39;</span><span class="token punctuation">,</span> age <span class="token operator">=</span> <span class="token number">17</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">&#39;小张&#39;</span><span class="token punctuation">,</span>
    objAge<span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>age<span class="token punctuation">,</span>
    <span class="token function-variable function">myFun</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span>fm<span class="token punctuation">,</span>t<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">,</span> <span class="token operator">+</span> <span class="token string">&quot;年龄&quot;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">+</span> <span class="token string">&quot;来自&quot;</span> <span class="token operator">+</span> fm <span class="token operator">+</span> <span class="token string">&quot;去&quot;</span> <span class="token operator">+</span> t<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">var</span> db <span class="token operator">=</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">&#39;德玛&#39;</span><span class="token punctuation">,</span>
    age<span class="token operator">:</span> <span class="token number">99</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>obj.myFun.call(db,&#39;成都&#39;,&#39;上海&#39;)；　　　　 // 德玛 年龄 99 来自 成都去往上海<br> obj.myFun.apply(db,[&#39;成都&#39;,&#39;上海&#39;]); // 德玛 年龄 99 来自 成都去往上海<br> obj.myFun.bind(db,&#39;成都&#39;,&#39;上海&#39;)(); // 德玛 年龄 99 来自 成都去往上海<br> obj.myFun.bind(db,[&#39;成都&#39;,&#39;上海&#39;])();　　 // 德玛 年龄 99 来自 成都, 上海去往 undefined</p><p>从上面四个结果不难看出:<br> call 、bind 、 apply 这三个函数的第一个参数都是 this 的指向对象，第二个参数差别就来了：<br> call 的参数是直接放进去的，第二第三第 n 个参数全都用逗号分隔，直接放到后面 obj.myFun.call(db,&#39;成都&#39;, ... ,&#39;string&#39; )。<br> apply 的所有参数都必须放在一个数组里面传进去 obj.myFun.apply(db,[&#39;成都&#39;, ..., &#39;string&#39; ])。<br> bind 除了返回是函数以外，它 的参数和 call 一样。<br> 当然，三者的参数不限定是 string 类型，允许是各种类型，包括函数 、 object 等等！</p></div><h2 id="优化" tabindex="-1"><a class="header-anchor" href="#优化" aria-hidden="true">#</a> 优化</h2><h3 id="说几条web前端优化策略" tabindex="-1"><a class="header-anchor" href="#说几条web前端优化策略" aria-hidden="true">#</a> 说几条web前端优化策略</h3><p>(1). 减少HTTP请求数<br> 这条策略基本上所有前端人都知道，而且也是最重要最有效的。都说要减少HTTP请求，那请求多了到底会怎么样呢？首先，每个请求都是有成本的，既包 含时间成本也包含资源成本。一个完整的请求都需要经过DNS寻址、与服务器建立连接、发送数据、等待服务器响应、接收数据这样一个“漫长”而复杂的过程。时间成本就是用户需要看到或者“感受”到这个资源是必须要等待这个过程结束的，资源上由于每个请求都需要携带数据，因此每个请求都需要占用带宽。</p><p>另外，由于浏览器进行并发请求的请求数是有上限的，因此请求数多了以后，浏览器需要分批进行请求，因此会增加用户的等待时间，会给 用户造成站点速度慢这样一个印象，即使可能用户能看到的第一屏的资源都已经请求完了，但是浏览器的进度条会一直存在。减少HTTP请求数的主要途径包括：</p><p>(2). 从设计实现层面简化页面<br> 如果你的页面像百度首页一样简单，那么接下来的规则基本上都用不着了。保持页面简洁、减少资源的使用时最直接的。如果不是这样，你的页面需要华丽的皮肤，则继续阅读下面的内容。</p><p>(3). 合理设置HTTP缓存<br> 缓存的力量是强大的，恰当的缓存设置可以大大的减少HTTP请求。以有啊首页为例，当浏览器没有缓存的时候访问一共会发出78个请求，共600多K 数据（如图1.1），而当第二次访问即浏览器已缓存之后访问则仅有10个请求，共20多K数据（如图1.2）。（这里需要说明的是，如果直接F5刷新页面 的话效果是不一样的，这种情况下请求数还是一样，不过被缓存资源的请求服务器是304响应，只有Header没有Body，可以节省带宽）</p><p>怎样才算合理设置？原则很简单，能缓存越多越好，能缓存越久越好。例如，很少变化的图片资源可以直接通过HTTP Header中的Expires设置一个很长的过期头；变化不频繁而又可能会变的资源可以使用Last-Modifed来做请求验证。尽可能的让资源能够 在缓存中待得更久。</p><p>(4). 资源合并与压缩<br> 如果可以的话，尽可能的将外部的脚本、样式进行合并，多个合为一个。另外，CSS、Javascript、Image都可以用相应的工具进行压缩，压缩后往往能省下不少空间。</p><p>(5). CSS Sprites<br> 合并CSS图片，减少请求数的又一个好办法。</p><p>(6). Inline Images<br> 使用data: URL scheme的方式将图片嵌入到页面或CSS中，如果不考虑资源管理上的问题的话，不失为一个好办法。如果是嵌入页面的话换来的是增大了页面的体积，而且无法利用浏览器缓存。使用在CSS中的图片则更为理想一些。</p><p>(7). Lazy Load Images</p><p>这条策略实际上并不一定能减少HTTP请求数，但是却能在某些条件下或者页面刚加载时减少HTTP请求数。对于图片而言，在页面刚加载的时候可以只 加载第一屏，当用户继续往后滚屏的时候才加载后续的图片。这样一来，假如用户只对第一屏的内容感兴趣时，那剩余的图片请求就都节省了。有啊首页曾经的做法 是在加载的时候把第一屏之后的图片地址缓存在Textarea标签中，待用户往下滚屏的时候才“惰性”加载。</p><h3 id="浏览器的重绘和回流导致的性能问题" tabindex="-1"><a class="header-anchor" href="#浏览器的重绘和回流导致的性能问题" aria-hidden="true">#</a> 浏览器的重绘和回流导致的性能问题</h3><div class="hint-container info"><p class="hint-container-title">重绘和回流</p><p>重绘和回流是渲染步骤中的一小节，但是这两个步骤对于性能影响很大。<br> 重绘是当节点需要更改外观而不会影响布局的，比如改变 color就叫称为重绘<br> 回流是布局或者几何属性需要改变就称为回流。<br> 回流必定会发生重绘，重绘不一定会引发回流。回流所需的成本比重绘高的多，改变深层次的节点很可能导致父节点的一系列回流。</p><p>所以以下几个动作可能会导致性能问题：<br> 改变 window 大小<br> 改变字体<br> 添加或删除样式<br> 文字改变<br> 定位或者浮动<br> 盒模型<br> 很多人不知道的是，重绘和回流其实和 Event loop 有关。<br> 当 Event loop 执行完 Microtasks 后，会判断 document 是否需要更新。因为浏览器是 60Hz 的刷新率，每 16ms 才会更新一次。<br> 然后判断是否有 resize或者 scroll，有的话会去触发事件，所以 resize和 scroll事件也是至少 16ms 才会触发一次，并且自带节流功能。<br> 判断是否触发了 media query<br> 更新动画并且发送事件<br> 判断是否有全屏操作事件<br> 执行 requestAnimationFrame回调<br> 执行 InterpObserver回调，该方法用于判断元素是否可见，可以用于懒加载上，但是兼容性不好<br> 更新界面<br> 以上就是一帧中可能会做的事情。如果在一帧中有空闲时间，就会去执行 requestIdleCallback回调。</p></div><h4 id="减少重绘和回流" tabindex="-1"><a class="header-anchor" href="#减少重绘和回流" aria-hidden="true">#</a> 减少重绘和回流</h4><ol><li>使用 translate 替代 top</li></ol><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>test<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">.test</span> <span class="token punctuation">{</span>
        <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
        <span class="token property">top</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
        <span class="token property">background</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token comment">// 引起回流</span>
        document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span> <span class="token punctuation">.</span>test <span class="token punctuation">)</span><span class="token punctuation">.</span>style<span class="token punctuation">.</span>top <span class="token operator">=</span>  100px 
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>使用 visibility替换 display: none，因为前者只会引起重绘，后者会引发回流（改变了布局）<br> 把 DOM 离线后修改，比如：先把 DOM 给 display:none(有一次 Reflow)，然后你修改100次，然后再把它显示出来</li></ol><pre><code>不要把 DOM 结点的属性值放在一个循环里当成循环里的变量
</code></pre><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">1000</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 获取 offsetTop 会导致回流，因为需要去获取正确的值</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span> <span class="token punctuation">.</span>test <span class="token punctuation">)</span><span class="token punctuation">.</span>style<span class="token punctuation">.</span>offsetTop<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>不要使用 table 布局，可能很小的一个小改动会造成整个 table 的重新布局</li><li>动画实现的速度的选择，动画速度越快，回流次数越多，也可以选择使用 requestAnimationFrame</li><li>CSS 选择符从右往左匹配查找，避免 DOM 深度过深</li><li>将频繁运行的动画变为图层，图层能够阻止该节点回流影响别的元素。比如对于 video标签，浏览器会自动将该节点变为图层。</li></ol><h2 id="原理" tabindex="-1"><a class="header-anchor" href="#原理" aria-hidden="true">#</a> 原理</h2><h3 id="宏任务与微任务" tabindex="-1"><a class="header-anchor" href="#宏任务与微任务" aria-hidden="true">#</a> 宏任务与微任务</h3><p>首先执行 宏任务 =&gt; 微任务的Event Queue =&gt; 宏任务的Event Queue</p><ol><li>宏任务<br> （包括整体代码script，setTimeout，setInterval）</li></ol><ul><li>宏任务所处的队列就是宏任务队列</li><li>第一个宏任务队列中只有一个任务： 执行主线程的js代码</li><li>宏任务队列可以有多个</li><li>当宏任务队列的中的任务全部执行完以后会查看是否有微任务队列如果有先执行微任务队列中的所有任务，如果没有就查看是否有宏任务队列</li></ul><ol><li>微任务<br> （Promise.then(非new Promise)，process.nextTick(node中)）</li></ol><ul><li>微任务所处的队列就是微任务队列</li><li>只有一个微任务队列</li><li>在上一个宏任务队列执行完毕后如果有微任务队列就会执行微任务队列中的所有任务</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>async function async1() {
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="tcp三次握手和四次挥手" tabindex="-1"><a class="header-anchor" href="#tcp三次握手和四次挥手" aria-hidden="true">#</a> TCP三次握手和四次挥手</h3><div class="hint-container info"><p class="hint-container-title">参考答案</p><p>三次握手之所以是三次是保证client和server均让对方知道自己的接收和发送能力没问题而保证的最小次数。</p><p>第一次client =&gt; server 只能server判断出client具备发送能力<br> 第二次 server =&gt; client client就可以判断出server具备发送和接受能力。此时client还需让server知道自己接收能力没问题于是就有了第三次<br> 第三次 client =&gt; server 双方均保证了自己的接收和发送能力没有问题</p><p>其中，为了保证后续的握手是为了应答上一个握手，每次握手都会带一个标识 seq，后续的ACK都会对这个seq进行加一来进行确认。</p></div><h3 id="说一下mvvm模式" tabindex="-1"><a class="header-anchor" href="#说一下mvvm模式" aria-hidden="true">#</a> 说一下MVVM模式</h3><h3 id="说一下数据双向绑定原理" tabindex="-1"><a class="header-anchor" href="#说一下数据双向绑定原理" aria-hidden="true">#</a> 说一下数据双向绑定原理！</h3><h3 id="说一下浏览器缓存策略" tabindex="-1"><a class="header-anchor" href="#说一下浏览器缓存策略" aria-hidden="true">#</a> 说一下浏览器缓存策略！</h3><h3 id="说一下vuerouter原理" tabindex="-1"><a class="header-anchor" href="#说一下vuerouter原理" aria-hidden="true">#</a> 说一下vueRouter原理</h3><h3 id="promise的三种状态" tabindex="-1"><a class="header-anchor" href="#promise的三种状态" aria-hidden="true">#</a> promise的三种状态</h3><h3 id="写-react-vue-项目时为什么要在列表组件中写-key-其作用是什么" tabindex="-1"><a class="header-anchor" href="#写-react-vue-项目时为什么要在列表组件中写-key-其作用是什么" aria-hidden="true">#</a> 写 React / Vue 项目时为什么要在列表组件中写 key，其作用是什么？</h3><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>vue和react都是采用diff算法来对比新旧虚拟节点，从而更新节点。在vue的diff函数中（建议先了解一下diff算法过程）。<br> 在交叉对比中，当新节点跟旧节点头尾交叉对比没有结果时，会根据新节点的key去对比旧节点数组中的key，从而找到相应旧节点（这里对应的是一个key =&gt; index 的map映射）。如果没找到就认为是一个新增节点。而如果没有key，那么就会采用遍历查找的方式去找到对应的旧节点。一种一个map映射，另一种是遍历查找。相比而言。map映射的速度更快。</p></div><p>vue部分源码如下：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// vue项目  src/core/vdom/patch.js  -488行</span>
<span class="token comment">// 以下是为了阅读性进行格式化后的代码</span>

<span class="token comment">// oldCh 是一个旧虚拟节点数组</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isUndef</span><span class="token punctuation">(</span>oldKeyToIdx<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  oldKeyToIdx <span class="token operator">=</span> <span class="token function">createKeyToOldIdx</span><span class="token punctuation">(</span>oldCh<span class="token punctuation">,</span> oldStartIdx<span class="token punctuation">,</span> oldEndIdx<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">isDef</span><span class="token punctuation">(</span>newStartVnode<span class="token punctuation">.</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// map 方式获取</span>
  idxInOld <span class="token operator">=</span> oldKeyToIdx<span class="token punctuation">[</span>newStartVnode<span class="token punctuation">.</span>key<span class="token punctuation">]</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  <span class="token comment">// 遍历方式获取</span>
  idxInOld <span class="token operator">=</span> <span class="token function">findIdxInOld</span><span class="token punctuation">(</span>newStartVnode<span class="token punctuation">,</span> oldCh<span class="token punctuation">,</span> oldStartIdx<span class="token punctuation">,</span> oldEndIdx<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建map函数</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">createKeyToOldIdx</span> <span class="token punctuation">(</span><span class="token parameter">children<span class="token punctuation">,</span> beginIdx<span class="token punctuation">,</span> endIdx</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> i<span class="token punctuation">,</span> key
  <span class="token keyword">const</span> map <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> beginIdx<span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> endIdx<span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    key <span class="token operator">=</span> children<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>key
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDef</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span> map<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> i
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> map
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>遍历寻找</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// sameVnode 是对比新旧节点是否相同的函数</span>
<span class="token keyword">function</span> <span class="token function">findIdxInOld</span> <span class="token punctuation">(</span><span class="token parameter">node<span class="token punctuation">,</span> oldCh<span class="token punctuation">,</span> start<span class="token punctuation">,</span> end</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> start<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> end<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> c <span class="token operator">=</span> oldCh<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
      
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDef</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">sameVnode</span><span class="token punctuation">(</span>node<span class="token punctuation">,</span> c<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> i
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="为什么虚拟dom会提高性能" tabindex="-1"><a class="header-anchor" href="#为什么虚拟dom会提高性能" aria-hidden="true">#</a> 为什么虚拟dom会提高性能?</h3><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>虚拟dom相当于在js和真实dom中间加了一个缓存，利用dom diff算法避免了没有必要的dom操作，从而提高性能。</p></div><p>具体实现步骤如下：<br> 用 JavaScript 对象结构表示 DOM 树的结构；然后用这个树构建一个真正的 DOM 树，插到文档当中<br> 当状态变更的时候，重新构造一棵新的对象树。然后用新的树和旧的树进行比较，记录两棵树差异<br> 把2所记录的差异应用到步骤1所构建的真正的DOM树上，视图就更新了</p><h2 id="实现" tabindex="-1"><a class="header-anchor" href="#实现" aria-hidden="true">#</a> 实现</h2><h3 id="实现一个深拷贝" tabindex="-1"><a class="header-anchor" href="#实现一个深拷贝" aria-hidden="true">#</a> 实现一个深拷贝</h3><ol><li>通过 JSON 转换实现</li></ol><p>缺点：</p><ul><li>对于 function、undefined，会丢失这些属性。</li><li>对于 RegExp、Error 对象，只会得到空对象</li><li>对于 date 对象，得到的结果是 string，而不是 date 对象</li><li>对于 NaN、Infinity、-Infinity，会变成 null</li><li>无法处理循环引用</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const obj = {a: 1, b: {x: 3}}
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="一个淘宝页面-你如何取得这个页面用到哪几种标签" tabindex="-1"><a class="header-anchor" href="#一个淘宝页面-你如何取得这个页面用到哪几种标签" aria-hidden="true">#</a> 一个淘宝页面，你如何取得这个页面用到哪几种标签？</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Array.from(new Set(Array.from(document.querySelectorAll(&#39;*&#39;))
.map(({tagName})=&gt; tagName.toLowerCase())))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="实现简单ajax" tabindex="-1"><a class="header-anchor" href="#实现简单ajax" aria-hidden="true">#</a> 实现简单ajax</h3><h3 id="实现简单的闭包" tabindex="-1"><a class="header-anchor" href="#实现简单的闭包" aria-hidden="true">#</a> 实现简单的闭包</h3><h3 id="实现js继承" tabindex="-1"><a class="header-anchor" href="#实现js继承" aria-hidden="true">#</a> 实现js继承</h3><h3 id="对象高级使用-描述得比较抽象" tabindex="-1"><a class="header-anchor" href="#对象高级使用-描述得比较抽象" aria-hidden="true">#</a> 对象高级使用（描述得比较抽象）</h3><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h2><h3 id="link与-import的区别" tabindex="-1"><a class="header-anchor" href="#link与-import的区别" aria-hidden="true">#</a> link与@import的区别</h3><div class="hint-container info"><p class="hint-container-title">相关信息</p><ol><li>link是 HTML 方式， @import是 CSS 方式</li><li>link最大限度支持并行下载，@import过多嵌套导致串行下载，出现FOUC</li><li>link可以通过rel=&quot;alternate stylesheet&quot;指定候选样式</li><li>浏览器对link支持早于@import，可以使用@import对老浏览器隐藏样式</li><li>@import必须在样式规则之前，可以在 css 文件中引用其他文件</li></ol><p>总体来说：link 优于@import</p></div><h3 id="分析比较-opacity-0、visibility-hidden、display-none-优劣和适用场景" tabindex="-1"><a class="header-anchor" href="#分析比较-opacity-0、visibility-hidden、display-none-优劣和适用场景" aria-hidden="true">#</a> 分析比较 opacity: 0、visibility: hidden、display: none 优劣和适用场景</h3><div class="hint-container info"><p class="hint-container-title">结构</p><p>display:none: 会让元素完全从渲染树中消失，渲染的时候不占据任何空间, 不能点击，<br> visibility: hidden:不会让元素从渲染树消失，渲染元素继续占据空间，只是内容不可见，不能点击<br> opacity: 0: 不会让元素从渲染树消失，渲染元素继续占据空间，只是内容不可见，可以点击</p></div><div class="hint-container info"><p class="hint-container-title">继承</p><p>display: none和opacity: 0：是非继承属性，子孙节点消失由于元素从渲染树消失造成，通过修改子孙节点属性无法显示。<br> visibility: hidden：是继承属性，子孙节点消失由于继承了hidden，通过设置visibility: visible;可以让子孙节点显式。</p></div><div class="hint-container info"><p class="hint-container-title">性能</p><p>displaynone : 修改元素会造成文档回流,读屏器不会读取display: none元素内容，性能消耗较大<br> visibility:hidden: 修改元素只会造成本元素的重绘,性能消耗较少读屏器读取visibility: hidden元素内容<br> opacity: 0 ：修改元素会造成重绘，性能消耗较少</p></div><div class="hint-container info"><p class="hint-container-title">联系</p><p>它们都能让元素不可见</p></div><h3 id="清除浮动" tabindex="-1"><a class="header-anchor" href="#清除浮动" aria-hidden="true">#</a> 清除浮动</h3><p>常用的一般为三种.clearfix, clear:both,overflow:hidden;</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>  <span class="token selector">.clearfix:after</span> <span class="token punctuation">{</span>
    <span class="token property">visibility</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot; &quot;</span><span class="token punctuation">;</span>
    <span class="token property">clear</span><span class="token punctuation">:</span> both<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  
  <span class="token selector">&lt;!--
  为毛没有 zoom ,_height 这些,IE6,7这类需要 csshack 不再我们考虑之内了
  .clearfix 还有另外一种写法,
  --&gt;
  
  .clearfix:before, .clearfix:after</span> <span class="token punctuation">{</span>
      <span class="token property">content</span><span class="token punctuation">:</span><span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
      <span class="token property">display</span><span class="token punctuation">:</span>table<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.clearfix:after</span><span class="token punctuation">{</span>
      <span class="token property">clear</span><span class="token punctuation">:</span>both<span class="token punctuation">;</span>
      <span class="token property">overflow</span><span class="token punctuation">:</span>hidden<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.clearfix</span><span class="token punctuation">{</span>
      <span class="token property">zoom</span><span class="token punctuation">:</span>1<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  &lt;!--
  <span class="token property">用display</span><span class="token punctuation">:</span>table 是为了避免外边距margin重叠导致的margin塌陷<span class="token punctuation">,</span>
  内部元素默认会成为 table-cell 单元格的形式
  --&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>clear:both:若是用在同一个容器内相邻元素上,那是贼好的,有时候在容器外就有些问题了, 比如相邻容器的包裹层元素塌陷<br> overflow:hidden:这种若是用在同个容器内,可以形成 BFC避免浮动造成的元素塌陷</p><h2 id="其他" tabindex="-1"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h2><h3 id="说一下vue-js跟jquery-js的区别" tabindex="-1"><a class="header-anchor" href="#说一下vue-js跟jquery-js的区别" aria-hidden="true">#</a> 说一下vue.js跟jquery.js的区别</h3><h3 id="echarts" tabindex="-1"><a class="header-anchor" href="#echarts" aria-hidden="true">#</a> echarts</h3><h3 id="作用域链、数据类型、引用类型、箭头函数、this指向" tabindex="-1"><a class="header-anchor" href="#作用域链、数据类型、引用类型、箭头函数、this指向" aria-hidden="true">#</a> 作用域链、数据类型、引用类型、箭头函数、this指向</h3><h3 id="es6特点" tabindex="-1"><a class="header-anchor" href="#es6特点" aria-hidden="true">#</a> es6特点</h3><h3 id="前置路由守卫-后置路由守卫、api拦截器-axios" tabindex="-1"><a class="header-anchor" href="#前置路由守卫-后置路由守卫、api拦截器-axios" aria-hidden="true">#</a> 前置路由守卫，后置路由守卫、api拦截器（axios）</h3><h3 id="localstorage、sessionstorage、cookie区别与使用情况" tabindex="-1"><a class="header-anchor" href="#localstorage、sessionstorage、cookie区别与使用情况" aria-hidden="true">#</a> localStorage、sessionStorage、cookie区别与使用情况</h3><h3 id="父组件跟子组件的通讯" tabindex="-1"><a class="header-anchor" href="#父组件跟子组件的通讯" aria-hidden="true">#</a> 父组件跟子组件的通讯</h3><h3 id="vuex的元素" tabindex="-1"><a class="header-anchor" href="#vuex的元素" aria-hidden="true">#</a> vuex的元素</h3><h3 id="vue指令" tabindex="-1"><a class="header-anchor" href="#vue指令" aria-hidden="true">#</a> vue指令</h3><h3 id="会问到vue2跟vue3的区别" tabindex="-1"><a class="header-anchor" href="#会问到vue2跟vue3的区别" aria-hidden="true">#</a> 会问到vue2跟vue3的区别</h3><p>你觉得你最大的优点跟缺点是什么？<br> 工作中你觉得最难的点是什么？<br> 你觉得你工作中最有成就感的事情是什么？</p>`,113),l=[t];function c(o,p){return s(),a("div",null,l)}const u=n(i,[["render",c],["__file","interviewQuetions.html.vue"]]);export{u as default};
