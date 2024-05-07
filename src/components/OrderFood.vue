<template>
<div>
    <div class="container">
        <div :class="{'menu-item': true, 'cur': item === state.active}" v-for="item in state.list">{{ item }}</div>
    </div>
    <button v-if="!state.action" @click="startLottery">{{state.result.length > 0 ? buttonMapping[topic].add : buttonMapping[topic].start}}</button>  
    <button v-else @click="stopSpinning">{{buttonMapping[topic].stop}}</button> 
    <div v-if="state.result.length > 0" class="result mt_10">  
        {{buttonMapping[topic].result}}:
        <div >{{ state.result.join(',') }}  </div>
        
        <div class="result mt_10"><button  @click="restart">{{buttonMapping[topic].restart}}</button> </div>
    </div>  
</div>
</template>
   

<script setup lang="ts">
import { ref, reactive, toRefs, defineProps, defineEmits, computed, watch } from 'vue'
const props = withDefaults(defineProps<{
    list: any,
    topic: 'menu' | 'gift'
}>(),{
    topic: 'menu'
})
const state = reactive<any>({
    active: '',
    interval: null,
    duration: 3000,
    action: false,
    result: [],
    list: []
})
const buttonMapping = {
    menu: {
        add: '加菜',
        stop: '停止点菜',
        start: '开始点菜',
        restart: '重新点菜',
        result: '结果'
    },
    gift: {
        add: '再看看',
        stop: '停止抽奖',
        start: '开始抽奖',
        restart: '重新抽奖',
        result: '你亲亲的女朋友将会送你'
    }
}
function startLottery() {
    let duration = 0
    state.action = true
    state.interval = setInterval(() => {  
        const index = Math.floor(Math.random() * state.list.length)  
        state.active = state.list[index]
        duration += 100
        if (duration >= state.duration) stopSpinning()
    }, 100)
}
function stopSpinning() {  
    state.action = false
    state.result.push(state.active)
    state.list.splice(state.list.indexOf(state.active), 1)
    clearInterval(state.interval)
}
function restart() {
    state.list = [...props.list]
    state.result = []
    startLottery()
}
watch(()=> props.list, (newValue) => {  
    state.list = [...newValue]
}, {
    immediate: true
})
</script>  

<style scoped>  
.container {
    display: flex;
    flex-wrap: wrap;
}
.menu-item {
    margin: 10px;
    padding: 3px 5px;
    background-color: rgb(106, 133, 239);
    border-radius: 3px;
    color: #fff;
}
.cur {
    background-color: rgb(157, 171, 245);
    color: #fff;
}
.mt_10 {
    margin-top: 10px;
}
.mb_10 {
    margin-bottom: 10px;
}
</style>