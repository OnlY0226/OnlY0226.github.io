---
icon: pen-to-square
date: 2023-08-30
category:
  - 前端开发
order: 1
---
# type 与 interface的区别
::: tip
不清楚什么时候用interface/type，能用 interface 实现，就用 interface , 如果不能就用 type
:::
## 相同点

- 都可以用来定义类型
- 都可以用来定义对象

## 不同点

- type 用来定义类型，interface 用来定义对象
- type 定义的类型是值类型，interface 定义的类型是引用类型
- type 定义的类型是可以被赋值的，interface 定义的类型是不能被赋值的


### type 可以声明基本类型别名，联合类型，元组等类型，而 interface 不行
```
1. 基本类型别名 
 type Name = string
2. 联合类型
 interface Dog { wong(); }
 interface Cat { miao(); }
 type Pet = Dog | Cat
3.具体定义数组每个位置的类型
 type PetList = [Dog, Pet]
4. 其他
 type StringOrNumber = string | number;  
 type Text = string | { text: string };  
 type NameLookup = Dictionary<string, Person>;  
 type Callback<T> = (data: T) => void;  
 type Pair<T> = [T, T];  
 type Coordinates = Pair<number>;  
 type Tree<T> = T | { left: Tree<T>, right: Tree<T> };

```
### interface能够声明合并, 而 type 不行
```
interface User {
  name: string
  age: number
}

interface User {
  sex: string
}

/*
User 接口为 {
  name: string
  age: number
  sex: string 
}
*/
```
