<template>
<div>
    <div class="container">
        <div :class="{'menu-item': true, 'cur': item === state.active}" v-for="item in state.list">{{ item }}</div>
    </div>
    <button v-if="!state.action" @click="startLottery">{{state.result.length > 0 ? '加菜' : '开始点菜'}}</button>  
    <button v-else @click="stopSpinning">停止点菜</button> 
    <div v-if="state.result.length > 0" class="result mt_10">  
        结果：
        <div >{{ state.result.join(',') }}  </div>
        
        <div class="result mt_10"><button  @click="restart">重新点菜</button> </div>
    </div>  
</div>
</template>
   

<script setup lang="ts">
import { ref, reactive, toRefs, defineProps, defineEmits, computed, watch } from 'vue'
const props = defineProps(['list'])
const state = reactive<any>({
    active: '',
    interval: null,
    duration: 3000,
    action: false,
    result: [],
    list: []
})
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