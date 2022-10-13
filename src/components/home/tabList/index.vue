<template>
    <div class="content">
        <div class="tab">
            <div @click="swichItem(item)" class="tabs-item" v-for="item in data" :key="item.name">
                <div class="link_wrapper">
                    <i class="iconfont icon-charulianjie"></i>
                    <div class="link_title">{{item.name}}</div>
                </div>
                <i class="iconfont icon-chacha"></i>
            </div>
        </div>
        <component :is="current.comName"></component>
    </div>
</template>

<script setup lang='ts'>
import { reactive, markRaw, getCurrentInstance } from 'vue'
import A from './components/A.vue'
import B from './components/B.vue'

type Tabs = {
    name: string,
    comName: any
}
type Com = Pick<Tabs, 'comName'>

const data = reactive<Tabs[]>([
    {
        name: 'codexx.cc',
        comName: markRaw(A)
    },
    {
        name: 'codexx.cc',
        comName: markRaw(B)
    }
])

let current = reactive<Com>({
    comName: data[0].comName
    
})

const swichItem = (item: Tabs) => {
    current.comName = item.comName
}

</script>

<style scoped lang="less">
.tab {
    display: flex;
    flex-shrink: 1;

    .tabs-item {
        display: inline-block;
        width: 11vw;
        height: 2.5vw;
        line-height: 2.5vw;
        text-align: center;
        display: flex;
        justify-content: space-around;
        color: grey;
        background: #ECEDF1;
        box-sizing: border-box;

        .link_wrapper{
            display: flex;

            i{
                padding-right: 0.6vw;
            }
        }
        

        .icon-charulianjie {
            font-size: 18px;
        }

        .icon-chacha {
            font-size: 12px;
        }
    }

    .tabs-item:first-child{
        border-width: 0px 0px 2px 0px;
        border-style: solid;
        border-color: #8AB2DC;
    }
}
</style>
