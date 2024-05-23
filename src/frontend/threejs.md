---
icon: pen-to-square
date: 2023-08-30
category:
  - 前端开发
order: 1
---
# three.js
## 3D 场景前置知识
::: info
1.场景(Scene)：是物体、光源等元素的容器，可以配合 chrome 插件使用，抛出 window.scene即可实时调整 obj 的信息和材质信息。
2.相机（Camera）：场景中的相机，代替人眼去观察，场景中只能添加一个，一般常用的是透视相机（PerspectiveCamera）
3.物体对象（Mesh）：包括二维物体（点、线、面）、三维物体，模型等等
4.光源（Light）：场景中的光照，如果不添加光照场景将会是一片漆黑，包括全局光、平行光、点光源等
5.渲染器（Renderer）:场景的渲染方式，如webGL\canvas2D\Css3D。
6.控制器(Control): 可通过键盘、鼠标控制相机的移动
:::
