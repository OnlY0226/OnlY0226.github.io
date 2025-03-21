
---
icon: pen-to-square
date: 2023-9-21
category:
  - 前端开发
order: 1
---
# Css & Scss
## BEM命名法
1. -: 仅作为连字符使用，表示某个块或者某个子元素的多单词之间的连接记号
2. __：连接块和块的子元素
3. --： 描述一个块或者块的一种状态
```
<div class="list-card">
  <img class="list-card__img" />
  <img class="list-card__img--disabled" />
  <div class="list-card__content">
    <a class="list-card__link"></a>
    <p class="list-card__desc"></p>
    <div class="list-card__stats">
      <span class="list-card__stat"><i class="list-card__icon"></i></span>
      <span class="list-card__stat"><i class="list-card__icon"></i></span>
      <span class="list-card__stat"><i class="list-card__icon"></i></span>
      <span class="list-card__date"></span>
    </div>
  </div>
</div>
```
## 使用反平方函数生成从快到慢的亮度值
```
$base-hue: 0; // 色相（黑色和白色没有特定色相）
$base-saturation: 0%; // 饱和度（黑色和白色没有饱和度）
$steps: 10; // 颜色的数量

@for $i from 0 through $steps {
  // $lightness: pow(($i / $steps), 2) * 100; // 慢到快加速提升
  $lightness: (1 - pow((1 - $i / $steps), 2)) * 100; // 快到慢加速提升
  .color-#{$i} {
    background-color: hsl($base-hue, $base-saturation, $lightness);
  }
}
```