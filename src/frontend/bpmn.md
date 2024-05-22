---
icon: pen-to-square
date: 2023-08-30
category:
  - 前端开发
tag:
  - Git
  - 指令
order: 1
---
# bpmn
- operation
- condition
```
  conditionalVar(yes, <direction>)->nextNode1
  conditionalVar(no, <direction>)->nextNode2
```
- inputoutput
- parallel
```
  parallelVar(path1, <direction>)->nextNode1
  parallelVar(path2, <direction>)->nextNode2
  parallelVar(path3, <direction>)->nextNode3
```
```flow
start=>start: 开始
end=>end: 结束
modulesAndModdle=>operation: 模块和模
型
initModeler=>parallel: 初始化建模器


start->initModeler
initModeler(path1)->modulesAndModdle
initModeler(path2)->end
```
