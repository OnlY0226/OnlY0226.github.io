---
title: 菜单
icon: strong
collapsible: true
---

## 肉类
<OrderFood :list="meatList"/>
## 蔬菜
<OrderFood :list="vegetableList"/>
## 周末
<OrderFood :list="weekendList"/>
<script setup lang="ts">
import OrderFood from '@source/components/OrderFood.vue'
const meatList = [
    '剁椒蒸排骨', '小炒黄牛肉','煎鸡翅','爆炒虾仁','清蒸鲈鱼','花甲鸡蛋豆腐娃娃菜', '红烧罗非鱼(L)', '小炒肉', '鸡腿扒', '爆炒花甲', '油焖大虾', '砂锅粥', '盐焗鸡', '白粥套餐', '隔水蒸鸡腿', '炒米粉', '炒饭', '虾仁滑蛋', '滑蛋牛肉', '烧腊', '玉米胡萝卜排骨汤', '鹿茸菇鸡汤', '烧鸡(外)', '烧鸡拼排骨(外)', '茄汁大虾'
]
const vegetableList = [
    '蒜蓉娃娃菜', '蒜蓉生菜','蒸茄子','爆炒菠菜','西兰花炒鸡蛋','白灼菜心','爆炒通心菜'
]
const weekendList = [
    '牛肉火锅','椰子鸡','海鲜火锅','火锅','烧烤(外)','烤鱼(外)','外面吃','炒菜'
]
</script>
