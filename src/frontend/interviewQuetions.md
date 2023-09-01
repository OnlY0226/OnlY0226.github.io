---
icon: pen-to-square
date: 2023-08-30
category:
  - 前端开发
tag:
  - 面试
order: 2
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
## 其他
### 一个淘宝页面，你如何取得这个页面用到哪几种标签？
```
Array.from(new Set(Array.from(document.querySelectorAll('*'))
.map(({tagName})=> tagName.toLowerCase())))
```
### 宏任务与微任务
首先执行 宏任务 => 微任务的Event Queue => 宏任务的Event Queue

1. 宏任务
（包括整体代码script，setTimeout，setInterval）
- 宏任务所处的队列就是宏任务队列
- 第一个宏任务队列中只有一个任务： 执行主线程的js代码
- 宏任务队列可以有多个
- 当宏任务队列的中的任务全部执行完以后会查看是否有微任务队列如果有先执行微任务队列中的所有任务，如果没有就查看是否有宏任务队列

2. 微任务
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

### 说一下MVVM模式
### 说一下数据双向绑定原理！
### 说一下浏览器缓存策略！
### 说一下vueRouter原理
### 说一下vue.js跟jquery.js的区别
### 说一下优化策略
### 实现简单ajax
### 实现简单的闭包
### 实现js继承

### 对象高级使用（描述得比较抽象）
### echarts
### 作用域链、数据类型、引用类型、箭头函数、this指向
### promise的三种状态
### es6特点
### let跟var的区别
### vue生命周期都能做什么事情
### 前置路由守卫，后置路由守卫、api拦截器（axios）
### localStorage、sessionStorage、cookie区别与使用情况
### 父组件跟子组件的通讯
### vuex的元素
### vue指令
### 会问到vue2跟vue3的区别

css居中布局
css


你觉得你最大的优点跟缺点是什么？
工作中你觉得最难的点是什么？
你觉得你工作中最有成就感的事情是什么？