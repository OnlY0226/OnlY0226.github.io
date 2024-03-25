---
icon: pen-to-square
date: 2023-08-30
category:
  - 前端开发
order: 1
---

# v-form
## 新增组件设置
1. 在‘/v_form_designer/src/components/form-designer/setting-panel/property-editor/*’新增‘file-type-editor.vue’ editor组件
2. 在‘/v_form_designer/src/components/form-designer/setting-panel/propertyRegister.js’注册组件
```
const COMMON_PROPERTIES = {
    ***
    'fileType'         :             'fileType-editor',
    ***
}
```
3. 在‘/v_form_designer/src/components/form-designer/widget-panel/widgetsConfig.js’中为组件关联组件设置

## 自定义组件新增
以auto-complete-widget为例
1. 在‘/v_form_designer/src/extension’中 新增组件 auto-complete-widget
2. 在‘/v_form_designer/src/extension/samples/extension-schema.js’ 中 新增字段组件架构 autoCompleteSchema
    参考‘/v_form_designer/src/components/form-designer/widget-panel/widgetsConfig.js’
3. 在‘/v_form_designer/src/extension/extension-loader.js’ 
    + 加载字段组件 AutoCompleteWidget
    + 加载字段组件 架构 autoCompleteSchema
    + 注册字段组件的代码生成器 autoCompleteTemplateGenerator
4. 其他（extension-schema.js/type）
    1. 在packages/v_form_designer/src/icons/svg/*配置新增组件图标
    2. 在packages/v_form_designer/src/lang/zh-CN_extension.js、packages/v_form_designer/src/lang/en-US_extension.js 配置新增组件名称


## 组件新增editor
1. 新增： onQuerySearchAsync-editor.vue

2. 注册： （src/components/form-designer/setting-panel/propertyRegister.j）
```
        'onQuerySearchAsync':            'onQuerySearchAsync-editor',
```
3. 解释：（src/components/form-designer/form-widget/field-widget/fieldMixin.js）

 ```
    querySearchAsync(queryString, cb) {
      if (!!this.field.options.onQuerySearchAsync) {
        let remoteFn = new Function('queryString','cb', this.field.options.onQuerySearchAsync)
        remoteFn.call(this, queryString, cb)
      }
    },
```
4. 绑定：（src/extension/samples/autoComplete/auto-complete-widget.vue）
 ```
 :fetch-suggestions="querySearchAsync"
 ```
 5. 在‘/v_form_designer/src/components/form-designer/widget-panel/widgetsConfig.js’中为组件关联组件设置
