---
icon: pen-to-square
date: 2023-08-30
category:
  - 前端开发
tag:
  - 面试
order: 2
head:
  - - meta
    - name: keywords
      content: SEO plugin interviewQuetions
---
# 面试题
## 作用域问题

### this指向问题
1. this指向问题1
```
var length = 10;
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
```
```
10
7
```
::: warning
　　第一次输出10应该没有问题。我们知道取对象属于除了点操作符还可以用中括号，所以第二次执行时相当于arguments调用方法，this指向arguments，而这里传了7个参数，故输出arguments长度为7。

:::

### 变量提升+作用域问题
```
var a = 1;

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

```
### apply，call，bind简单使用
1. call()、apply()、bind() 都是用来重定义 this 这个对象的！
``` ts
  var name = '小王', age = 17;
  var obj = {
    name: '小张',
    objAge: this.age,
    myFun: function() {
      console.log(this.name, + "年龄" + this.age)
    }
  }
  var db = {
    name: '德玛',
    age: 99
  }
```
::: warning
  obj.myFun.call(db)；　　　　// 德玛年龄 99
  obj.myFun.apply(db);　　　 // 德玛年龄 99 
  obj.myFun.bind(db)();　　　// 德玛年龄 99
  以上出了 bind 方法后面多了个 () 外 ，结果返回都一致！

  由此得出结论，bind 返回的是一个新的函数，你必须调用它才会被执行。
:::
2. 对比call 、bind 、 apply 传参情况下

``` ts
  var name = '小王', age = 17;
  var obj = {
    name: '小张',
    objAge: this.age,
    myFun: function(fm,t) {
      console.log(this.name, + "年龄" + this.age + "来自" + fm + "去" + t)
    }
  }
  var db = {
    name: '德玛',
    age: 99
  }
```
::: warning
  obj.myFun.call(db,'成都','上海')；　　　　 // 德玛 年龄 99  来自 成都去往上海
  obj.myFun.apply(db,['成都','上海']);      // 德玛 年龄 99  来自 成都去往上海  
  obj.myFun.bind(db,'成都','上海')();       // 德玛 年龄 99  来自 成都去往上海
  obj.myFun.bind(db,['成都','上海'])();　　 // 德玛 年龄 99  来自 成都, 上海去往 undefined

  从上面四个结果不难看出:
call 、bind 、 apply 这三个函数的第一个参数都是 this 的指向对象，第二个参数差别就来了：
call 的参数是直接放进去的，第二第三第 n 个参数全都用逗号分隔，直接放到后面 obj.myFun.call(db,'成都', ... ,'string' )。
apply 的所有参数都必须放在一个数组里面传进去 obj.myFun.apply(db,['成都', ..., 'string' ])。
bind 除了返回是函数以外，它 的参数和 call 一样。
当然，三者的参数不限定是 string 类型，允许是各种类型，包括函数 、 object 等等！
:::

## 优化
### 说几条web前端优化策略
  (1). 减少HTTP请求数
  这条策略基本上所有前端人都知道，而且也是最重要最有效的。都说要减少HTTP请求，那请求多了到底会怎么样呢？首先，每个请求都是有成本的，既包 含时间成本也包含资源成本。一个完整的请求都需要经过DNS寻址、与服务器建立连接、发送数据、等待服务器响应、接收数据这样一个“漫长”而复杂的过程。时间成本就是用户需要看到或者“感受”到这个资源是必须要等待这个过程结束的，资源上由于每个请求都需要携带数据，因此每个请求都需要占用带宽。

  另外，由于浏览器进行并发请求的请求数是有上限的，因此请求数多了以后，浏览器需要分批进行请求，因此会增加用户的等待时间，会给 用户造成站点速度慢这样一个印象，即使可能用户能看到的第一屏的资源都已经请求完了，但是浏览器的进度条会一直存在。减少HTTP请求数的主要途径包括：

  (2). 从设计实现层面简化页面
  如果你的页面像百度首页一样简单，那么接下来的规则基本上都用不着了。保持页面简洁、减少资源的使用时最直接的。如果不是这样，你的页面需要华丽的皮肤，则继续阅读下面的内容。

  (3). 合理设置HTTP缓存
  缓存的力量是强大的，恰当的缓存设置可以大大的减少HTTP请求。以有啊首页为例，当浏览器没有缓存的时候访问一共会发出78个请求，共600多K 数据（如图1.1），而当第二次访问即浏览器已缓存之后访问则仅有10个请求，共20多K数据（如图1.2）。（这里需要说明的是，如果直接F5刷新页面 的话效果是不一样的，这种情况下请求数还是一样，不过被缓存资源的请求服务器是304响应，只有Header没有Body，可以节省带宽）

  怎样才算合理设置？原则很简单，能缓存越多越好，能缓存越久越好。例如，很少变化的图片资源可以直接通过HTTP Header中的Expires设置一个很长的过期头；变化不频繁而又可能会变的资源可以使用Last-Modifed来做请求验证。尽可能的让资源能够 在缓存中待得更久。

  (4). 资源合并与压缩
  如果可以的话，尽可能的将外部的脚本、样式进行合并，多个合为一个。另外，CSS、Javascript、Image都可以用相应的工具进行压缩，压缩后往往能省下不少空间。

  (5). CSS Sprites
  合并CSS图片，减少请求数的又一个好办法。

  (6). Inline Images
  使用data: URL scheme的方式将图片嵌入到页面或CSS中，如果不考虑资源管理上的问题的话，不失为一个好办法。如果是嵌入页面的话换来的是增大了页面的体积，而且无法利用浏览器缓存。使用在CSS中的图片则更为理想一些。

  (7). Lazy Load Images

  这条策略实际上并不一定能减少HTTP请求数，但是却能在某些条件下或者页面刚加载时减少HTTP请求数。对于图片而言，在页面刚加载的时候可以只 加载第一屏，当用户继续往后滚屏的时候才加载后续的图片。这样一来，假如用户只对第一屏的内容感兴趣时，那剩余的图片请求就都节省了。有啊首页曾经的做法 是在加载的时候把第一屏之后的图片地址缓存在Textarea标签中，待用户往下滚屏的时候才“惰性”加载。
### 浏览器的重绘和回流导致的性能问题
  ::: info 重绘和回流
  重绘和回流是渲染步骤中的一小节，但是这两个步骤对于性能影响很大。
  重绘是当节点需要更改外观而不会影响布局的，比如改变 color就叫称为重绘
  回流是布局或者几何属性需要改变就称为回流。
  回流必定会发生重绘，重绘不一定会引发回流。回流所需的成本比重绘高的多，改变深层次的节点很可能导致父节点的一系列回流。

  所以以下几个动作可能会导致性能问题：
  改变 window 大小
  改变字体
  添加或删除样式
  文字改变
  定位或者浮动
  盒模型
  很多人不知道的是，重绘和回流其实和 Event loop 有关。
  当 Event loop 执行完 Microtasks 后，会判断 document 是否需要更新。因为浏览器是 60Hz 的刷新率，每 16ms 才会更新一次。
  然后判断是否有 resize或者 scroll，有的话会去触发事件，所以 resize和 scroll事件也是至少 16ms 才会触发一次，并且自带节流功能。
  判断是否触发了 media query
  更新动画并且发送事件
  判断是否有全屏操作事件
  执行 requestAnimationFrame回调
  执行 InterpObserver回调，该方法用于判断元素是否可见，可以用于懒加载上，但是兼容性不好
  更新界面
  以上就是一帧中可能会做的事情。如果在一帧中有空闲时间，就会去执行 requestIdleCallback回调。
  :::
  #### 减少重绘和回流
  1. 使用 translate 替代 top
  ``` html
    <div class="test"></div>
    <style>
      .test {
          position: absolute;
          top: 10px;
          width: 100px;
          height: 100px;
          background: red;
      }
    </style>
    <script>
      setTimeout(() => {
          // 引起回流
          document.querySelector( .test ).style.top =  100px 
      }, 1000)
    </script>
  ```
  2. 使用 visibility替换 display: none，因为前者只会引起重绘，后者会引发回流（改变了布局）
    把 DOM 离线后修改，比如：先把 DOM 给 display:none(有一次 Reflow)，然后你修改100次，然后再把它显示出来

    不要把 DOM 结点的属性值放在一个循环里当成循环里的变量
 ```javascript
   for(let i = 0; i < 1000; i++) {
     // 获取 offsetTop 会导致回流，因为需要去获取正确的值
     console.log(document.querySelector( .test ).style.offsetTop)
   }
 ```
  3. 不要使用 table 布局，可能很小的一个小改动会造成整个 table 的重新布局
  4. 动画实现的速度的选择，动画速度越快，回流次数越多，也可以选择使用 requestAnimationFrame
  5. CSS 选择符从右往左匹配查找，避免 DOM 深度过深
  6. 将频繁运行的动画变为图层，图层能够阻止该节点回流影响别的元素。比如对于 video标签，浏览器会自动将该节点变为图层。

## 原理
### 宏任务与微任务
  首先执行 宏任务 => 微任务的Event Queue => 宏任务的Event Queue

  1. 宏任务
  （包括整体代码script，setTimeout，setInterval）
  - 宏任务所处的队列就是宏任务队列
  - 第一个宏任务队列中只有一个任务： 执行主线程的js代码
  - 宏任务队列可以有多个
  - 当宏任务队列的中的任务全部执行完以后会查看是否有微任务队列如果有先执行微任务队列中的所有任务，如果没有就查看是否有宏任务队列

  1. 微任务
  （Promise.then(非new Promise)，process.nextTick(node中)）
  - 微任务所处的队列就是微任务队列
  - 只有一个微任务队列
  - 在上一个宏任务队列执行完毕后如果有微任务队列就会执行微任务队列中的所有任务

  ```
  async function async1() {
    console.log('async1 start');                       
    await async2();
    console.log('asnyc1 end');
  }
  async function async2() {
    console.log('async2');                             
  }
  console.log('script start');                           
  setTimeout(() => {
    console.log('setTimeOut');
  }, 0);
  async1();
  new Promise(function (reslove) {
    console.log('promise1');
    reslove();
  }).then(function () {
    console.log('promise2');
  })
  console.log('script end');
  ```
  参考答案
  ```
  script start
  async1 start
  async2
  promise1
  script end
  asnyc1 end
  promise2
  setTimeOut
  ```
### TCP三次握手和四次挥手
  ::: info 参考答案
  三次握手之所以是三次是保证client和server均让对方知道自己的接收和发送能力没问题而保证的最小次数。

  第一次client => server 只能server判断出client具备发送能力
  第二次 server => client client就可以判断出server具备发送和接受能力。此时client还需让server知道自己接收能力没问题于是就有了第三次
  第三次 client => server 双方均保证了自己的接收和发送能力没有问题

  其中，为了保证后续的握手是为了应答上一个握手，每次握手都会带一个标识 seq，后续的ACK都会对这个seq进行加一来进行确认。
  :::

### 说一下MVVM模式
### 说一下数据双向绑定原理！
### 说一下浏览器缓存策略！
### 说一下vueRouter原理
### promise的三种状态

### 写 React / Vue 项目时为什么要在列表组件中写 key，其作用是什么？
  ::: info
  vue和react都是采用diff算法来对比新旧虚拟节点，从而更新节点。在vue的diff函数中（建议先了解一下diff算法过程）。
  在交叉对比中，当新节点跟旧节点头尾交叉对比没有结果时，会根据新节点的key去对比旧节点数组中的key，从而找到相应旧节点（这里对应的是一个key => index 的map映射）。如果没找到就认为是一个新增节点。而如果没有key，那么就会采用遍历查找的方式去找到对应的旧节点。一种一个map映射，另一种是遍历查找。相比而言。map映射的速度更快。
  :::
  vue部分源码如下：
  ```javascript
  // vue项目  src/core/vdom/patch.js  -488行
  // 以下是为了阅读性进行格式化后的代码
  
  // oldCh 是一个旧虚拟节点数组
  if (isUndef(oldKeyToIdx)) {
    oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx)
  }
  if(isDef(newStartVnode.key)) {
    // map 方式获取
    idxInOld = oldKeyToIdx[newStartVnode.key]
  } else {
    // 遍历方式获取
    idxInOld = findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx)
  }
  ```
  创建map函数
  ```javascript
  function createKeyToOldIdx (children, beginIdx, endIdx) {
    let i, key
    const map = {}
    for (i = beginIdx; i <= endIdx; ++i) {
      key = children[i].key
      if (isDef(key)) map[key] = i
    }
    return map
  }
  ```
  遍历寻找

  ```javascript
  // sameVnode 是对比新旧节点是否相同的函数
  function findIdxInOld (node, oldCh, start, end) {
      for (let i = start; i < end; i++) {
        const c = oldCh[i]
        
        if (isDef(c) && sameVnode(node, c)) return i
      }
    }
  ```
### 为什么虚拟dom会提高性能?
  ::: info
  虚拟dom相当于在js和真实dom中间加了一个缓存，利用dom diff算法避免了没有必要的dom操作，从而提高性能。
  :::
  具体实现步骤如下：
  用 JavaScript 对象结构表示 DOM 树的结构；然后用这个树构建一个真正的 DOM 树，插到文档当中
  当状态变更的时候，重新构造一棵新的对象树。然后用新的树和旧的树进行比较，记录两棵树差异
  把2所记录的差异应用到步骤1所构建的真正的DOM树上，视图就更新了

## 实现
### 实现一个深拷贝
1. 通过 JSON 转换实现

 缺点：
- 对于 function、undefined，会丢失这些属性。
- 对于 RegExp、Error 对象，只会得到空对象
- 对于 date 对象，得到的结果是 string，而不是 date 对象
- 对于 NaN、Infinity、-Infinity，会变成 null
- 无法处理循环引用
```
const obj = {a: 1, b: {x: 3}}
const copy = JSON.parse(JSON.stringify(obj))
```

2. 乞丐式递归

 缺点：
- 无法处理循环引用
```
function deepClone(obj) {
  let copy = obj instanceof Array ? [] : {}
  for (let i in obj) {
    if (obj.hasOwnProperty(i)) {
      copy[i] = typeof obj[i] === 'object' ? deepClone(obj[i]) : obj[i]
    }
  }
  return copy
}
```

3. 改良版深拷贝
```
function deepCopy (obj, cache = []) {
  // typeof [] => 'object'
  // typeof {} => 'object'
  if (obj === null || typeof obj !== 'object') {
    return obj
  }
  // 如果传入的对象与缓存的相等, 则递归结束, 这样防止循环
  /**
   * 类似下面这种
   * var a = {b:1}
   * a.c = a
   * 资料: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Cyclic_object_value
   */
  const hit = cache.filter(c => c.original === obj)[0]
  if (hit) {
    return hit.copy
  }
 
  const copy = Array.isArray(obj) ?  [] :   {}
  // 将copy首先放入cache, 因为我们需要在递归deepCopy的时候引用它
  cache.push({
    original: obj,
    copy
  })
  Object.keys(obj).forEach(key => {
    copy[key] = deepCopy(obj[key], cache)
  })
 
  return copy
}
```

4. 深拷贝再优化
- 深拷贝添加 Map 和 Set 相关，当然你可以再添加 Date 之类的补充
- 使用 WeakMap 代替 []
```
function clone(target, map = new WeakMap()) {
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
    target.forEach(value => {
      cloneTarget.add(clone(value,map));
    });
    return cloneTarget;
  }
 
  // 克隆map
  if (type === mapTag) {
    target.forEach((value, key) => {
      cloneTarget.set(key, clone(value,map));
    });
    return cloneTarget;
  }
 
  // 克隆对象和数组
  const keys = type === arrayTag ? undefined : Object.keys(target);
  forEach(keys || target, (value, key) => {
    if (keys) {
      key = value;
    }
    cloneTarget[key] = clone(target[key], map);
  });
 
  return cloneTarget;
}
```

### 键盘弹起底部div抬起处理

```
function onResize(footerPara ,rightContentPara) {
    const defaultHeight = document.documentElement.clientHeight || document.body.clientHeigh
    const rightContent = document.getElementById(rightContentPara)
    const footer = document.getElementById(footerPara)

    window.onresize = () =>{
        const curHeight = document.documentElement.clientHeight || document.body.clientHeight
        const keyHeight = defaultHeight - curHeight 
        if(defaultHeight > curHeight){
            footer.style.display = "none"
            rightContent.style.marginTop = -keyHeight+"px"
            document.getElementById("tabbar").style.display = "none"
        }else{
            footer.style.display = "unset"
            rightContent.style.marginTop = ""
            document.getElementById("tabbar").style.display = "unset"
        }
    }
}
```
```
<van-button id="footer" color="#3a8bd5" block @click="">提交</van-button>

import { onResize } from "../../../static/js/common.js"
mounted() {
    onResize("footer")
},
destroyed(){
    window.onresize = null;
},
```
### 一个淘宝页面，你如何取得这个页面用到哪几种标签？
```
Array.from(new Set(Array.from(document.querySelectorAll('*'))
.map(({tagName})=> tagName.toLowerCase())))
```
### 实现简单ajax
### 实现简单的闭包
### 实现js继承

### 对象高级使用（描述得比较抽象）

## 
### link与@import的区别
::: info
1. link是 HTML 方式， @import是 CSS 方式
2. link最大限度支持并行下载，@import过多嵌套导致串行下载，出现FOUC
3. link可以通过rel="alternate stylesheet"指定候选样式
4. 浏览器对link支持早于@import，可以使用@import对老浏览器隐藏样式
5. \@import必须在样式规则之前，可以在 css 文件中引用其他文件
  
总体来说：link 优于@import
:::
### 分析比较 opacity: 0、visibility: hidden、display: none 优劣和适用场景
  ::: info 结构
  display:none: 会让元素完全从渲染树中消失，渲染的时候不占据任何空间, 不能点击，
  visibility: hidden:不会让元素从渲染树消失，渲染元素继续占据空间，只是内容不可见，不能点击
  opacity: 0: 不会让元素从渲染树消失，渲染元素继续占据空间，只是内容不可见，可以点击
  :::
  ::: info 继承
  display: none和opacity: 0：是非继承属性，子孙节点消失由于元素从渲染树消失造成，通过修改子孙节点属性无法显示。
  visibility: hidden：是继承属性，子孙节点消失由于继承了hidden，通过设置visibility: visible;可以让子孙节点显式。
  :::
  ::: info 性能
  displaynone : 修改元素会造成文档回流,读屏器不会读取display: none元素内容，性能消耗较大
  visibility:hidden: 修改元素只会造成本元素的重绘,性能消耗较少读屏器读取visibility: hidden元素内容
  opacity: 0 ：修改元素会造成重绘，性能消耗较少
  :::
  ::: info 联系
  它们都能让元素不可见
  :::
### 清除浮动
  常用的一般为三种.clearfix, clear:both,overflow:hidden;
  ``` css
    .clearfix:after {
      visibility: hidden;
      display: block;
      font-size: 0;
      content: " ";
      clear: both;
      height: 0;
    }
    
    <!--
    为毛没有 zoom ,_height 这些,IE6,7这类需要 csshack 不再我们考虑之内了
    .clearfix 还有另外一种写法,
    -->
    
    .clearfix:before, .clearfix:after {
        content:"";
        display:table;
    }
    .clearfix:after{
        clear:both;
        overflow:hidden;
    }
    .clearfix{
        zoom:1;
    }
  
    <!--
    用display:table 是为了避免外边距margin重叠导致的margin塌陷,
    内部元素默认会成为 table-cell 单元格的形式
    -->
  ```
  clear:both:若是用在同一个容器内相邻元素上,那是贼好的,有时候在容器外就有些问题了, 比如相邻容器的包裹层元素塌陷
  overflow:hidden:这种若是用在同个容器内,可以形成 BFC避免浮动造成的元素塌陷
## 其他

### 说一下vue.js跟jquery.js的区别

### echarts
### 作用域链、数据类型、引用类型、箭头函数、this指向

### es6特点
### 前置路由守卫，后置路由守卫、api拦截器（axios）
### localStorage、sessionStorage、cookie区别与使用情况
### 父组件跟子组件的通讯
### vuex的元素
### vue指令
### 会问到vue2跟vue3的区别



你觉得你最大的优点跟缺点是什么？
工作中你觉得最难的点是什么？
你觉得你工作中最有成就感的事情是什么？