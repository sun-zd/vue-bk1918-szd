<template>
<div class="scroll_box">
    <div class="rotate" v-if="Loading">
        <i class="fa fa-spinner fa-pulse"></i>
    </div>
    <div class="wrapper" ref="wrapper" >
        <slot></slot>
    </div>
</div>
</template>
<script>
import BScroll from 'better-scroll'
import { Tag } from 'vant';
export default {
    name:"Sunlly-scroll",
    data(){
        return{
            Loading:false
        }
    },
    mounted() {
        this.scroll=new BScroll(this.$refs.wrapper,{
            //开启下拉刷新
            pullDownRefresh:true,
            //开启上拉加载
            pullUpLoad:true,
            //scroll实现的配置项
            probeType:1,
            //实现配发点击
            tap:true,
            click:true,
        });

    },
    methods:{
        handleScroll(){
            this.scroll.on("scroll",({y})=>{
                // if(y>50 && (!this.Loading)){
                    
                // }
            })
        },
        handlepullingDown(){
            this.scroll.on("pullingDown",()=>{
                
            })
        },

        handlefinishPullDown(){
            //通知better-scroll进行下一次下拉加载
            this.scroll.finishPullDown()
            //重新计算better-scroll
            this.scroll.refresh()
            setTimeout(()=>{
                
            },1000)
        }
    }
}
</script>
<style >
.wrapper,.scroll_box{
    height: 100%;
    overflow-x: hidden;
}
.scroll_box .rotate{
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
}
</style>  
