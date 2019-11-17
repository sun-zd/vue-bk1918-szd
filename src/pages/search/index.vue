<template>
    <div class="page">
        <div class="headerSearch">
        
        <div class="searchIn">
            <input type="text" placeholder="大家正在搜索:爆款限量抢" id="searchInput" style="background:#f3f4f5;"
            v-model="search">
            <!-- <span>大家正在搜索:爆款限量抢</span> -->
        </div>
        <div class="list iconfont">
            搜索
        </div>
    </div>
    <div class="searchOne">
        <span id="searchSpan">热门搜索</span>
    </div>
    <div class="searchList">
        <div class="new">
            <span>唯品会快抢 劲爆热力</span>
            <span>三折封顶 狂卖特欢</span>
            <span>口碑爆款</span>
            <span>sui</span>
            <span>suicfdsfsd </span>
            <span>sui</span>
            <span>最新女装</span>
        </div>
        <div class="old">
            <span>sui</span>
            <span>女士大衣</span>
            <span>女士休闲服</span>
            <span>女士外套</span>
            <span>suicfdsfsd </span>
            <span>sui</span>
            <span>最新女装</span>
        </div>
    </div>
    </div>
</template>
<script>
import {searchApi} from "@api/reoommend"
export default {
    name:"Search",
    data(){
        return {
            list:[],
            search:""
        }
    },
    // beforeMount() {
    //     this.firstTime=0;
    // },
    
    watch: {
        async search(newVal){
            let data = await searchApi(newVal);
            console.log(data);
        //    let lastTime = new Date().getTime();
        //    if(lastTime - this.firstTime>300){
               
        //    }
        }
    },
}
</script>
<style lang="scss" scoped>
    .headerSearch{
    width:100%;
    height:0.3754rem;
    background:#fff;
    font-size:12px;
    margin-top:-0.5rem;
}
.headerSearch .logo{
    width:0.3754rem;
    height:0.3754rem;
    float:left;
    text-align:center;
    line-height:0.3754rem;
}
.headerSearch .searchIn{
    width:2.55rem;
    height:0.256rem;
    line-height:0.23rem;
    border:1px solid #ccc;
    float:left;
    margin-left:0.15rem;
    margin-top:0.06rem;
    border-radius:0.11rem;
    color: #98989f;
    background-color: #f3f4f5;
    padding-left:.1rem;
}
.headerSearch .list{
    width:0.3754rem;
    height:0.3754rem;
    float:right;
    margin-right:8px;
    font-size:12px;
    background:#fff;
    text-align:center;
    line-height:0.3754rem;
}
.searchOne{
    width:100%;
    height:0.3rem;
    font-size:12px;
    padding:0 10px;
    line-height:0.3rem;
    margin-top:0.1rem;
}
.searchList{
    width:100%;
    height:3rem;
    margin-top:10px;
}
.searchList span{
    /* color: #5d78ab; */
    font-size: 12px;
    padding:7px;
    display: block;
    line-height: 1px;
    /* border:1px solid #5d78ab; */
    height: 20px;
    max-height: .74667rem;
    margin: 5px 5px 0;
    max-width: 100%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    float: left;
}
.new span{
    color:red;
    border:1px solid red;
}
.old span{
    color:#5d78ab;
    border:1px solid #5d78ab;
}
</style>