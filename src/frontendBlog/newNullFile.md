---
icon: pen-to-square
date: 2023-10-11
category:
  - 前端开发实用方法
  - 前端开发
order: 1
---
# 空文件创建
1. 在public新建文件
  /public/docTemplate/template.xlsx
  /public/docTemplate/template.docx
  /public/docTemplate/template.pptx
  /public/docTemplate/template.pdf
```
const ExtensionMimeTypeMap = {
    'pptx': 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    'docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'xlsx': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'pdf': 'application/pdf'
}
async function createFile(fileType: 'docx' | 'xlsx' | 'pptx' | 'pdf', name: string) {
    const path = `/docTemplate/template.${fileType}}`
    const file = await fetch(path)
    const fileArrayBuffer = await file.arrayBuffer()
    return new File([fileArrayBuffer], `${name}.${fileType}`,{type: ExtensionMimeTypeMap[fileType]})
}
```


