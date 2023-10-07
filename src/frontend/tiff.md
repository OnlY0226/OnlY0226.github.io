---
icon: pen-to-square
date: 2023-10-07
category:
  - 前端开发
order: 1
---
# tiff 多页预览
首先要理解为什么使用 tiff.js 这个库。
1. tiff格式不可以直接用img 接收查看
2. tiff.js可以将ArrayBuffer对象 转化为 可以用img 接收查看的url，也就是 **Tiff对象** 的 **toDataURL**方法.
## 第一次尝试
1. 安装 tiff.js

```bash
npm install tiff.js --save
```
2. html
```html
<el-image :src="imgUrl" fit="contain"/>
```
3. sctipt

```javascript
// 引入 Tiff
import Tiff from 'tiff.js'

let blob
...// get blob

let imgUrl


function blobToArrayBuffer(blob) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onerror = reject;
        reader.onload = () => {
        	resolve(reader.result);
        };
        reader.readAsArrayBuffer(blob);
    });
}
function getTillUrl() {
	// 将blob转换为 arrayBuffer类型
    const data = await blobToArrayBuffer(blob)
    // Tiff对象
    let url = new Tiff({buffer: data});
     // Tiff对象的转换图片url方法
    imgUrl = url.toDataURL();
}

getTillUrl()
```

由于楼主的接口有其他格式文件，接收只能用blob类型接收，如果没这个考虑，可以用arrayBuffer
直接接收文件，把blob转换为 arrayBuffer类型 的步骤省略.

## 第二次尝试
由于打包后，tiff失效，最终将 tiff.js 移除，在官网将tiff.min.js保存并放在stores，
[tiff.min.js地址：https://github.com/seikichi/tiff.js/blob/master/tiff.min.js](https://github.com/seikichi/tiff.js/blob/master/tiff.min.js) 

```
//tiff.min.js首端代码修改：加上export const TiffV = function()
export const TiffV = function() {/*
//tiff.min.js末端代码修改：去掉括号
"function"===typeof importScripts&&(self.Tiff=Tiff);};
```
引用
```
import { TiffV } from '../../stores/tiff.min.js'
TiffV()
...
let url = new Tiff({buffer: data});
imgUrl = url.toDataURL();
```

## 第三次尝试
因为tiff是支持多页查看的。leader不满意。所以最后在这个基础上加了多页预览功能。

```javascript
<template>
    <div class="tiffContainer" v-if="!props.loading">
        <el-image v-for="(item, index) in state.imgUrls" :src="item" fit="contain"
            :preview-src-list="state.imgUrls" :initial-index="index"/>
    </div>
</template>

<script lang="ts" setup>
import { TiffV } from '../../stores/tiff.min.js'
TiffV()
const props = defineProps<{
    blob: Blob,
    loading: Boolean
}>();
const state = reactive({
    imgUrls: []
})
function blobToArrayBuffer(blob) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onerror = reject;
        reader.onload = () => {
        	resolve(reader.result);
        };
        reader.readAsArrayBuffer(blob);
    });
}
function handleMultiTiff(tiffFile) {
    const countDirectory = tiffFile.countDirectory()
    for (let i = 0; i < countDirectory; i++) {
        tiffFile.setDirectory(i)
        state.imgUrls.push(tiffFile.toDataURL())
    }
}
watch(() => props.blob, async(newBlob) => {
    state.imgUrls = []
    const data = await blobToArrayBuffer(newBlob)
    let tiffFile = new Tiff({buffer: data});
    handleMultiTiff(tiffFile)
}, {
    immediate: true
})
</script>

<style lang="scss" scoped>
.tiffContainer{
    width: 100%;
    height: 100%;
    margin: 0 auto;
    background: #fff;
    border-radius: 12px;
    overflow: auto;
}
</style>
```

