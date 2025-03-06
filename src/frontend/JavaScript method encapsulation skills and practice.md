一、基础函数封装
将功能逻辑封装成独立函数

```
// 计算阶乘
function factorial(n) {
  if (n === 0 || n === 1) return 1
  return n * factorial(n - 1)
}
console.log(factorial(5)) // 120
```
二、对象封装
将相关方法组织到对象中

```
const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => (b !== 0 ? a / b : NaN)
}

console.log(calculator.add(2, 3)) // 5
```
三、构造函数封装
通过构造函数创建对象实例

```
function Person(name, age) {
  this.name = name
  this.age = age

  this.greet = function() {
    return `Hello, I'm ${this.name}`
  }
}

const john = new Person('John', 30)
console.log(john.greet()) // Hello, I'm John
```
四、ES6 Class 封装
使用 class 语法实现面向对象

```
class Animal {
  constructor(name) {
    this.name = name
  }

  speak() {
    console.log(`${this.name} makes a noise`)
  }

  // 静态方法
  static isAnimal(obj) {
    return obj instanceof Animal
  }
}

const dog = new Animal('Rex')
dog.speak() // Rex makes a noise
console.log(Animal.isAnimal(dog)) // true
```
五、闭包封装（私有变量）
通过闭包实现数据隐私

```
function createCounter() {
  let count = 0 // 私有变量

  return {
    increment: () => ++count,
    decrement: () => --count,
    getCount: () => count
  }
}

const counter = createCounter()
counter.increment()
console.log(counter.getCount()) // 1
// 无法直接访问 count 变量
```
六、模块模式
IIFE 实现模块化

```
const MyModule = (() => {
  const privateVar = 'secret'

  function privateMethod() {
    return 'Internal processing'
  }

  return {
    publicMethod: () => {
      return `${privateMethod()} -> ${privateVar}`
    }
  }
})()

console.log(MyModule.publicMethod()) // Internal processing -> secret
```
七、原型链封装
共享方法节约内存
```

function Car(brand) {
  this.brand = brand
}

Car.prototype.start = function() {
  return `${this.brand} engine started`
}

const myCar = new Car('Toyota')
console.log(myCar.start()) // Toyota engine started
```
八、现代模块化（ES Modules）
使用 import/export

```
// mathUtils.js
export function sum(a, b) {
  return a + b
}

export const PI = 3.14159

// main.js
import { sum, PI } from './mathUtils.js'
console.log(sum(PI, 2)) // 5.14159
```
最佳实践建议：
单一职责原则：每个方法/模块只做一件事

参数验证：对输入参数进行类型检查

错误处理：使用 try-catch 或返回错误信息

文档注释：使用 JSDoc 添加说明

版本控制：对公共 API 保持向下兼容

根据实际需求选择合适的封装方式，小型工具函数可直接用函数封装，复杂功能建议使用类或模块模式，需要数据隐私时优先考虑闭包方案。