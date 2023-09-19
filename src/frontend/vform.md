---
icon: pen-to-square
date: 2023-08-30
category:
  - 前端开发
order: 1
---
# v-form
## 官方文档地址
[VForm3官方文档](https://www.vform666.com/document3.html)
[VForm3官方表单设计器Ver 3.0.7](http://120.92.142.115:81/vform3/)


## 流程
### 管理端的vformDesigner配置流程
```
graph LR
    p(properties)-.fieldList..->v(vformDesigner)
    v-.format..->j(json)
```
properties： 初始化fieldList约束表单字段选项
json： 表单样式
### 客户端的vformRender的渲染流程
```
graph LR
    j(json)-.format.->vr(vformRender)
    p(properties)-.data.->vr(vformRender)
```
properties： 初始化表单数据及依据writable约束表单提交字段
json： 表单样式
## 功能介绍
### vformDesigner功能
![image](http://m.qpic.cn/psc?/V53O9kJJ0CzzIT40svUv0PwbPm3bge70/ruAMsa53pVQWN7FLK88i5rBxhh2G3CLGEIz1HIZOX0G5PsH7r.pUrBnbtBKyEYX0uglowEaK4WrYtF3Ph3S2hgFUntVhzKetAhX2q8cbQP4!/b&bo=dQfMAwAAAAADJ78!&rf=viewer_4)
1. 组件库
2. 画布
3. 组件详细配置模块/表单（全局）配置模块
4. 功能区
    4.1 清空
    4.2 预览
    4.3 导入json
    4.4 导出json
    4.5 submit（提交）
    4.6 widgetDetail：json及properties对比
5. 撤销/重做/json结构查看

### 拖动配置（获取json提交）
```
graph LR
    组件库(组件库-1区)-.拖动组件..->画布(画布-2区)
    画布-.选中组件..->组件设置(组件设置-3区)
    画布..->表单设置(表单设置-3区)
    画布-.json..->提交[提交json-4区5]
```
### 导入配置（获取json提交）
```
graph LR
    组件库(导入json-4区3)-.符合格式的json..->画布(画布-2区)
    画布-.选中组件..->组件设置(组件设置-3区)
    画布..->表单设置(表单设置-3区)
    画布-.json..->提交[提交json-4区5]
```
注意： 符合格式的json可从4区4的导出json获取


## 字段组件常用API
**字段组件实例常用方法——widgetRef**
| 方法名 | 说明 | 参数 | 
| :----: | :---- | :---- | 
| **setValue**  | 设置组件数据值 | (newValue)，组件数据值|
| **getValue**  | getValue	获取组件数据值 | |
| **setReadonly**  | setReadonly	设置组件是否只读，<br>仅input、textarea、time、time-range、date、date-range等部分组件支持 | true/false |
| **setDisabled**  | 设置组件是否禁用 | true/false |
| **setHidden**  | 设置组件是否隐藏 | true/false |
| **setRequired**  | setRequired	设置组件是否必填 | true/false |
| **loadOptions**  | loadOptions	加载选择项，<br>仅支持radio/checkbox/select/cascader/autoComplete组件 | options，选项数组，<br>格式为：[<br>{label: '选项1', value: '1'},<br>{label: '选项2', value: '2'},<br>{label:'选项3', value: '3'}<br>] |
| **getWidgetRef**  | 获取设计器组件实例 | (widgetName, showError)，<br>widgetName，组件名称，<br>showError=true/false，如组件不存在是否显示错误 |



## 常用示例
### 获取字段组件实例 （getWidgetRef）
**例子：user_creator_id**
```
const creatorIdRef = this.getWidgetRef('user_creator_id')
```
### 为字段组件实例设置值 （setValue）
**例子：user_creator_id设置为当前用户id**
在任一组件设置或表单设置中 设置事件属性==onMounted==/==onFormMounted==：
1. 通过 this.$cookies.get('docpal-user') 获取user
2. 通过VFormDesigner原生API ==this.getWidgetRef()== 获取 ‘user_creator_id’  的组件实例 ‘creatorIdRef’
3. 通过==countryRef.setValue()== 设置值

非user_creator_id组件设置代码：
```
const user = this.$cookies.get('docpal-user')
const creatorIdRef = this.getWidgetRef('user_creator_id')
creatorIdRef.setValue(user.id||user.username)
```
user_creator_id组件设置代码：
```
const user = this.$cookies.get('docpal-user')
this.setValue(user.id||user.username)
```

### 通过api设置下拉框选项（loadOptions）
**例子：user_copy_personnel_id设置下拉框选项**
在任一组件设置或表单设置中 设置事件属性==onMounted==/==onFormMounted==：
1. 通过VFormDesigner原生API ==this.getWidgetRef()== 获取 ‘user_copy_personnel_id’  的组件实例 ‘copyPersonnelRef’
2. 通过==copyPersonnelRef.loadOptions()== 设置选项
注意：选项格式必须为{ value: '', label: ''}

非user_copy_personnel_id组件设置代码：
```
const copyPersonnelRef = this.getWidgetRef('user_copy_personnel_id')
this.$axios.post('/nuxeo/identity/users', {}).then(res => {
   res = res.data
  const reponse = res.map(item => ({
    value: item.username,
    label: `${item.username}<${item.email}>`
  }))
  copyPersonnelRef.loadOptions(reponse)
}).catch(err => {
})
```
user_copy_personnel_id组件设置：
```
this.$axios.post('/nuxeo/identity/users', {}).then(res => {
   res = res.data
  const reponse = res.map(item => ({
    value: item.username,
    label: `${item.username}<${item.email}>`
  }))
  this.loadOptions(reponse)
}).catch(err => {
})
```

### 联动方法
#### 数据回显不触发联动
// 已在vform插件的setFormData设置setFormDataFlag=true
可根据setFormDataFlag判断是否为回显数据
```
// 数据回显不触发联动
if (window.setFormDataFlag) {
  setTimeout(() => { window.setFormDataFlag = false });
  return false
}
```
#### 例子1：动态获取数据
例子：caseId修改后，接口获取‘country’ 跟 ‘prospectName’（Contract Approval/Start）
在caseId的组件设置中设置事件属性==onChange==：
1. 通过VFormDesigner原生API ==this.getWidgetRef()== 获取 ‘country’ 跟 ‘prospectName’ 的组件实例 ‘countryRef’ 跟 ‘prospectNameRef’
2. 通过==countryRef.setValue()== 跟 ==prospectNameRef.setValue()== 设置值

代码如下：
```
// onChange方法参数：value, oldValue, subFormData, rowId

// 数据回显不触发联动
if (window.setFormDataFlag) {
  setTimeout(() => { window.setFormDataFlag = false });
  return false
}    
const _this = this
if(!value) return
value  = value.value ? value.value : value
const countryRef = this.getWidgetRef('country')
const countryParams = {
  docType: 'Case',
  filterKey: 'case:caseId',
  key: 'car:country',
  filterValue: value
}

const prospectNameRef = this.getWidgetRef('prospectName')
const prospectNameParams = {
  docType: 'Case',
  filterKey: 'case:caseId',
  key: 'prospect:prospectName',
  filterValue: value
}

const prospectIdRef = this.getWidgetRef('prospectId')
const prospectIdParams = {
  docType: 'Case',
  filterKey: 'case:caseId',
  key: 'prospect:prospectID',
  filterValue: value
}


getMetaList(countryParams, countryRef)
getMetaList(prospectNameParams, prospectNameRef)
getMetaList(prospectIdParams, prospectIdRef)

function getMetaList (params, widgetRef) {
  _this.$axios.get('/nuxeo/form/metadata/list', { params }).then(res => {
    res = res.data
    const reponse = res.map(item => ({
      value: item,
      label:item
    }))
    if (!widgetRef) return
    widgetRef.loadOptions(reponse)
    widgetRef.setValue('')
    if(reponse.length === 1) {
      widgetRef.setValue(reponse[0].value)
      widgetRef.setDisabled(true)
      widgetRef.setReadonly(true)
    }
  }).catch(err => {
    _this.$message({
      message: 'Server exception, please try again later',
      duration: 3000,
      type: 'error'
    })
  })
}



```

#### 例子2： 动态切换组件显示
contractNature改变后， 重新设置组件显隐（Contract Approval/Start）
在contractNature的组件设置中设置事件属性==onChange==：
1. 通过VFormDesigner原生API ==this.getWidgetRef()== 获取 需要改变的组件实例
2. 根据需求，用setHidden/setRequired 遍历设置需要改变的组件实例 setHidden/setRequired
```
// onChange方法参数：value, oldValue, subFormData, rowId 
var otherList = []
var caseList = []
var crList = []
caseList.push({ widget: this.getWidgetRef('caseId'), require: true })
caseList.push({ widget: this.getWidgetRef('prospectName'), require: true })
caseList.push({ widget: this.getWidgetRef('prospectId'), require: true, hidden: true })

crList.push({ widget: this.getWidgetRef('customerName'), require: true })
crList.push({ widget: this.getWidgetRef('customerCode'), require: true, hidden: true })
crList.push({ widget: this.getWidgetRef('crNumber'), require: true })

otherList.push({ widget: this.getWidgetRef('contractId'), require: true })
switch (value) {
  case 'new_case':
    lootWidgetItem([...otherList, ...crList], true)
    lootWidgetItem([...caseList], false)
    break;
  case 'change_request':
    lootWidgetItem([...caseList], true)
    lootWidgetItem([...crList, ...otherList], false)
    break;
  default:
    lootWidgetItem([...caseList, ...crList], true)
    lootWidgetItem([...otherList], false)
}
function lootWidgetItem(widgetList, isHidden) {
  widgetList.forEach(widgetItem => {
    if(!widgetItem) return
    if(!widgetItem.hidden) widgetItem.widget.setHidden(isHidden)
    if(widgetItem.require) widgetItem.widget.setRequired(!isHidden)
  })
}
```
#### 例子3： 远程搜索
##### 1.提供下拉框
需要同时设置Event Setting的: onMouted,onRemoteQuery
同时打开Common Setting的:Filterable ,Remote Query
##### 2. 使用自定义组件 auto-complete
需要同时设置Event Setting的: onQuerySearchAsync,同时 callback一个数组,数组结构如下optionType[]
```
type optionType = { 
    label: string,
    value: string
}
```
## 字段组件介绍
### 文件上传
注意：文件类型为空则默认不校验文件类型


### 单选项/多选项/下拉选项
![image](http://m.qpic.cn/psc?/V53O9kJJ0CzzIT40svUv0PwbPm3bge70/ruAMsa53pVQWN7FLK88i5ibjhuXEjXLKVZxSfoHlaVpBdngbbeiyPPiPlWfu1MvBKbQBp9c.7YakNwSFwBLivQr*w9D.vPkMU41klcODPPs!/b&bo=0Qa1AwAAAAADJ2M!&rf=viewer_4)
组件库的单选项/多选项/下拉选项可以设置默认选项

设置默认项：点击选中组件，在组件设置中的选项设置勾选选项
取消默认项：点击选中组件，在组件设置中的选项设置中点击重置选中项



## 注意事项
### preview操作会改变字段组件状态
一些带控制显隐状态的组件操作会导致json的某些组件显隐状态改变。
建议：在提交前查看Widgets Detail。一一比对readable状态。

### 可通过widgetDetail对比，查看数据配置详情
