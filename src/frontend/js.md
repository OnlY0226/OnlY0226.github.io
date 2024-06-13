---
icon: pen-to-square
date: 2023-08-30
category:
  - 前端开发
order: 1
---
# js
## 数组
### 数组变树
```
toTree (data) {
  // 空数组
  const result = []
  if (!Array.isArray(data)) return result // 判断不是数组  直接返回
  data.forEach(item => {
    delete item.children
  }) // 清空children
  const map = {}
  data.forEach(item => { map[item.id] = JSON.parse(JSON.stringify(item)) })
  data.forEach(item => {
    const parent = map[item.parentId]
    if (parent) {
      if (!parent.children) parent.children = []
      parent.children.push(item)
    } else {
      result.push(item)
    }
  })
  return result
}
```
### 过滤树级数据
```
filter (data) {
  data.map(item => item.children && (item.children = this.filter(item.children)))
  var newData = data.filter(item => {
    if (!item.reviewProposalCount) item.reviewProposalCount = 0
    if (!item.expertCount) item.expertCount = 0
    return Number(item.reviewProposalCount) > Number(item.expertCount * 25) || (item.children && item.children.length !== 0)
  })
  return newData
}
```
### 判断交集
```
var list1 = [1,2,3,4,5,6];
var list2 = [6,7,8,9,10,11];
(list1.length + list2.length) !== new Set([...list1,...list2]).size
```
## 浏览器对象
### blob

### 上传空文件