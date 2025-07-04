import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as i,g as a}from"./app-vmtnyyqA.js";const s={},t=a(`<p>一、基础函数封装 将功能逻辑封装成独立函数</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>// 计算阶乘
function factorial(n) {
  if (n === 0 || n === 1) return 1
  return n * factorial(n - 1)
}
console.log(factorial(5)) // 120
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>二、对象封装 将相关方法组织到对象中</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>const calculator = {
  add: (a, b) =&gt; a + b,
  subtract: (a, b) =&gt; a - b,
  multiply: (a, b) =&gt; a * b,
  divide: (a, b) =&gt; (b !== 0 ? a / b : NaN)
}

console.log(calculator.add(2, 3)) // 5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>三、构造函数封装 通过构造函数创建对象实例</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>function Person(name, age) {
  this.name = name
  this.age = age

  this.greet = function() {
    return \`Hello, I&#39;m \${this.name}\`
  }
}

const john = new Person(&#39;John&#39;, 30)
console.log(john.greet()) // Hello, I&#39;m John
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>四、ES6 Class 封装 使用 class 语法实现面向对象</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>class Animal {
  constructor(name) {
    this.name = name
  }

  speak() {
    console.log(\`\${this.name} makes a noise\`)
  }

  // 静态方法
  static isAnimal(obj) {
    return obj instanceof Animal
  }
}

const dog = new Animal(&#39;Rex&#39;)
dog.speak() // Rex makes a noise
console.log(Animal.isAnimal(dog)) // true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>五、闭包封装（私有变量） 通过闭包实现数据隐私</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>function createCounter() {
  let count = 0 // 私有变量

  return {
    increment: () =&gt; ++count,
    decrement: () =&gt; --count,
    getCount: () =&gt; count
  }
}

const counter = createCounter()
counter.increment()
console.log(counter.getCount()) // 1
// 无法直接访问 count 变量
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>六、模块模式 IIFE 实现模块化</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>const MyModule = (() =&gt; {
  const privateVar = &#39;secret&#39;

  function privateMethod() {
    return &#39;Internal processing&#39;
  }

  return {
    publicMethod: () =&gt; {
      return \`\${privateMethod()} -&gt; \${privateVar}\`
    }
  }
})()

console.log(MyModule.publicMethod()) // Internal processing -&gt; secret
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>七、原型链封装 共享方法节约内存</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>
function Car(brand) {
  this.brand = brand
}

Car.prototype.start = function() {
  return \`\${this.brand} engine started\`
}

const myCar = new Car(&#39;Toyota&#39;)
console.log(myCar.start()) // Toyota engine started
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>八、现代模块化（ES Modules） 使用 import/export</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>// mathUtils.js
export function sum(a, b) {
  return a + b
}

export const PI = 3.14159

// main.js
import { sum, PI } from &#39;./mathUtils.js&#39;
console.log(sum(PI, 2)) // 5.14159
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最佳实践建议： 单一职责原则：每个方法/模块只做一件事</p><p>参数验证：对输入参数进行类型检查</p><p>错误处理：使用 try-catch 或返回错误信息</p><p>文档注释：使用 JSDoc 添加说明</p><p>版本控制：对公共 API 保持向下兼容</p><p>根据实际需求选择合适的封装方式，小型工具函数可直接用函数封装，复杂功能建议使用类或模块模式，需要数据隐私时优先考虑闭包方案。</p>`,22),l=[t];function d(r,c){return n(),i("div",null,l)}const u=e(s,[["render",d],["__file","JavaScript method encapsulation skills and practice.html.vue"]]),m=JSON.parse('{"path":"/frontend/JavaScript%20method%20encapsulation%20skills%20and%20practice.html","title":"","lang":"zh-CN","frontmatter":{"description":"一、基础函数封装 将功能逻辑封装成独立函数 二、对象封装 将相关方法组织到对象中 三、构造函数封装 通过构造函数创建对象实例 四、ES6 Class 封装 使用 class 语法实现面向对象 五、闭包封装（私有变量） 通过闭包实现数据隐私 六、模块模式 IIFE 实现模块化 七、原型链封装 共享方法节约内存 八、现代模块化（ES Modules） 使用...","head":[["meta",{"property":"og:url","content":"https://github.com/OnlY0226/OnlY0226.github.io/frontend/JavaScript%20method%20encapsulation%20skills%20and%20practice.html"}],["meta",{"property":"og:site_name","content":"Only"}],["meta",{"property":"og:description","content":"一、基础函数封装 将功能逻辑封装成独立函数 二、对象封装 将相关方法组织到对象中 三、构造函数封装 通过构造函数创建对象实例 四、ES6 Class 封装 使用 class 语法实现面向对象 五、闭包封装（私有变量） 通过闭包实现数据隐私 六、模块模式 IIFE 实现模块化 七、原型链封装 共享方法节约内存 八、现代模块化（ES Modules） 使用..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-03-06T00:55:19.000Z"}],["meta",{"property":"article:author","content":"OnlY"}],["meta",{"property":"article:modified_time","content":"2025-03-06T00:55:19.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-03-06T00:55:19.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"OnlY\\"}]}"]]},"headers":[],"git":{"createdTime":1741222519000,"updatedTime":1741222519000,"contributors":[{"name":"oy","email":"OY.Ou@weltronics.com","commits":1}]},"readingTime":{"minutes":1.64,"words":492},"filePathRelative":"frontend/JavaScript method encapsulation skills and practice.md","localizedDate":"2025年3月6日","excerpt":"<p>一、基础函数封装\\n将功能逻辑封装成独立函数</p>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>// 计算阶乘\\nfunction factorial(n) {\\n  if (n === 0 || n === 1) return 1\\n  return n * factorial(n - 1)\\n}\\nconsole.log(factorial(5)) // 120\\n</code></pre></div><p>二、对象封装\\n将相关方法组织到对象中</p>\\n","autoDesc":true}');export{u as comp,m as data};
