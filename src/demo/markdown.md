---
icon: pen-to-square
date: 2023-08-30
category:
  - 工具
order: 1
---
# markdown 使用
## 表格换行
```
<br>
```
## 流程图
### 方向
T = TOP，B = BOTTOM，L = LEFT，R = RIGHT

TB，从上到下
BT，从下到上
RL，从右到左
LR，从左到右
### 线
```
    A1-->B1
    A2---B2
    A3--text---B3
    A4--text-->B4
    A5-.-B5
    A6-.->B6
    A7-.text.-B7
    A8-.text.->B8
    A9===B9
    A10==>B10
    A11==text===B11
    A12==text==>B12
```
``` mermaid 
graph TB
  A1-->B1
  A2---B2
  A3--text---B3
  A4--text-->B4
  A5-.-B5
  A6-.->B6
  A7-.text.-B7
  A8-.text.->B8
  A9===B9
  A10==>B10
  A11==text===B11
  A12==text==>B12
```
### 形状
```
  A
  B[bname]
  C(cname)
  D((dname))
  E>ename]
  F{fname}
```
``` mermaid
graph TB
  A
  B[bname]
  C(cname)
  D((dname))
  E>ename]
  F{fname}
```
