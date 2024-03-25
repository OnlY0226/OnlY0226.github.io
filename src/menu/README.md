---
title: 菜单
icon: strong
collapsible: true
---

## 目录
### 肉类
<OrderFood :list="meatList"/>
### 蔬菜
<OrderFood :list="vegetableList"/>
<script setup lang="ts">
import OrderFood from '@source/components/OrderFood.vue'
const meatList = [
    '蒸排骨', '小炒黄牛肉','煎鸡翅','爆炒虾仁','清蒸鲈鱼','花甲鸡蛋豆腐娃娃菜', '红烧罗非鱼', '小炒肉', '鸡腿扒'
]
const vegetableList = [
    '蒜蓉娃娃菜', '蒜蓉生菜','蒸茄子','爆炒菠菜','西兰花炒鸡蛋','白灼菜心'
]
</script>
