<template>
<div class="page">
       <div class="main">
        <div class="cart" @click="push()">
            <span class="iconfont">&#xe652;</span>
        </div>
        <div class="banner">
            <img src="https://image.yunifang.com/yunifang/images/goods/ad0/19111119389914149831283313.jpg">
        </div>
        <div class="tenImg">
            <router-link 
            v-for="(ten,number) in goodsOrActADs" 
            :key="number" 
            :to="'/details/'+ten.adTypeDynamicDetail"
            tag="div">
                <img :src="ten.image" alt="">
            </router-link>
        </div>
        <div class="cz">
        <div class="caizhuang">彩妆推荐</div>
        <div class="caizhuangList">
        <a href="#"><img src="https://image.yunifang.com/yunifang/images/goods/temp/19111121276119473690356115.jpg"
                class="imgList"></a>
        <a href="#"><img src="https://image.yunifang.com/yunifang/images/goods/temp/19111120546487775719844924.jpg"
                class="imgList"></a>
        <a href="#"><img src="https://image.yunifang.com/yunifang/images/goods/temp/19111120436159935372872448.jpg"
                class="imgList"></a>
        </div>
        <div class="caizhuangList">
        <a href="#"><img src="https://image.yunifang.com/yunifang/images/goods/temp/19111121276119473690356115.jpg"
                class="imgList"></a>
        <a href="#"><img src="https://image.yunifang.com/yunifang/images/goods/temp/19111120546487775719844924.jpg"
                class="imgList"></a>
        <a href="#"><img src="https://image.yunifang.com/yunifang/images/goods/temp/19111120436159935372872448.jpg"
                class="imgList"></a>
        </div>
        </div>
        <div class="todyNew">
            <img src="https://h2.appsimg.com/b.appsimg.com/upload/momin/2019/08/23/111/1566543733364.jpg">
        </div>
        <router-link class="newShop" 
        v-for="(ites,index) in goodsOrActADs" 
        :key="index"
        tag="div"
        :to="'/details/'+ites.adTypeDynamicDetail"
        >
            <div class="newShopCenter">
                <div class="newShopTop">
                    <img :src="ites.image">
                </div>
                <div class="newShopBottom">
                    <div class="shopBottomOne"><span>{{ites.title}}</span></div>
                    <div class="shopBottomTwo"><span>现价<i>￥{{ites.adExtraAttributeVO.rTitle}}</i>{{ites.adExtraAttributeVO.subTitle}}</span></div>
                </div>
            </div>
        </router-link>
        <div class="more" @click="examine()" v-if="this.num==1">
            点击查看更多
        </div>
        <div class="vipThing">
            <div v-for="(item,ine) in bottomActAds" :key="ine">
                <img :src="item.image" alt="">
            </div>
        </div>
    </div> 
</div>
</template>
<script>
import {indexNowApi} from "@api/reoommend";
import {examineApi} from "@api/reoommend"
export default {
    name:"Reoommend",
    data(){
        return {
            num:"1",
            indexList:[],
            goodsOrActADs:[],
            bottomActAds:[],
            circularADs:[],
            list:[]
        }
    },
    created(){
         this.handleGetIndexList();
    },
    methods:{
        async handleGetIndexList(){
            let data=await indexNowApi();
            this.goodsOrActADs=data.data.goodsOrActADs;
            this.bottomActAds=data.data.bottomActAds;
            this.circularADs=data.data.circularADs;
            this.goodsOrActADs==data.data.goodsOrActADs?data.data.goodsOrActADs:"";
            this.bottomActAds==data.data.bottomActAds?data.data.bottomActAds:"";
            this.circularADs==data.data.circularADs?data.data.circularADs:"";
        },
        async examine(){
            let datas = await examineApi();
            for(var i=0;i<datas.data.length;i++){
                this.goodsOrActADs.push(datas.data[i]);
            }
            this.num=0;
        }
    },
}
</script>

<style scoped>
.cart{
    width:0.4rem;
    height:0.4rem;
    border-radius: 0.2rem;
    background:#000;
    position:fixed;
    bottom:0.2rem;
    left:0.1rem;
    color:#fff;
    text-align:center;
    line-height:0.4rem;
    font-size:12px;
    z-index:11;
}
.main{
    width:100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    background:#f3f4f6;
}
.main::-webkit-scrollbar { 
    display: none;
 }
.banner{
    width:100%;
    height:3.66rem;
    overflow: hidden;
}
.banner img{
    width:100%;
    height:100%;
}
.tenImg{
    width: 100%;height: 1.4rem;background: #F59D79;
    opacity: 0.4;overflow-y: auto;
}
.tenImg div{
    width:0.5rem;height: 0.5rem;border-radius: 50%;background: #fff;
    float: left;margin:10px 6px 0 6px;
}
.tenImg div img{
    width:100%;height: 100%;border-radius: 50%;
}
.imgList{
    width:33.3%;
    height:auto;
    float:left;
}
.cz{
    width:100%;
    height:2.8rem;
    background:#fff;
}

.caizhuang{
    width:100%;
    /* margin-left:2%; */
    height:0.5rem;
    line-height:0.5rem;
    text-align: center;
    background:#fff;
    font-size:20px;
}
.caizhuang img{
    margin-top:10px;
}
.womenDress{
    width:0.72rem;
    height:0.72rem;
    margin-top:-1.13rem;
    margin-left:0.13rem;
    border-radius: 2px;
}
.softWater{
    width:0.72rem;
    height:0.72rem;
    margin-top:-0.72rem;
    margin-left:0.85rem;
    border-radius: 2px;
}
.boyBody{
    width:0.72rem;
    height:0.72rem;
    margin-top:-0.72rem;
    margin-left:1.61rem;
    border-radius: 2px;
}
.bag{
    width:0.72rem;
    height:0.72rem;
    margin-top:-0.72rem;
    margin-left:2.34rem;
    border-radius: 2px;
}
.goodGoods{
    width:100%;
    height:1.9rem;
    position: relative;
    font-size:13px;
}
.goodsList{
    width:96%;
    height:1.2rem;
    position: absolute;
    top:0.6rem;
    left:2%;
}
.one{
    width:22%;
    height:1.2rem;
    float:left;
    margin-left:2.4%;
}
.oneOne{
    width:100%;
}
.oneSpanOne{
    font-size:8px;
    text-align:center;
    display:block;
    float:left;
    margin-top:0.05rem;
    width:0.35rem;
    height:0.12rem;
    border-radius: 0.06rem;
    background:#7b5a89;
    color:#fff;
}
.oneSpanTwo{
    display: block;
    float:left;
    margin-top:0.02rem;
    font-size:12px;
    color:red;
}
.oneTwo{
    width:60%;
    margin-left:20%;
    margin-top:0.05rem;
}
.todyNew{
    width:100%;
    height:0.49rem;
}
.todyNew img{
    width:100%;
}
.newShop{
    width:100%;
    height:2.1034rem;
    overflow:hidden;
}
.newShopCenter{
    width:94%;
    margin:2% 3%;
    height:94%;
    background:#fff;
    border-radius: 10px;
}
.newShopTop{
    width:100%;
    height:70%;
}
.newShopTop img{
    width:100%;
}
.newShopBottom{
    width:100%;
    height:30%;
    font-size:12px;
    overflow: hidden;
}
.shopBottomOne{
    width:100%;
    height:50%;
    padding-left:2%;
    overflow: hidden;
}
.shopBottomOne span{
    display: block;
    font-size:14px;
    font-weight: bold;
    margin-top:12px;
}
.shopBottomTwo{
    width:100%;
    height:50%;
    padding-left:2%;
    overflow: hidden;
}
.shopBottomTwo span{
    display: block;
    font-size:12px;
    margin-top:5px;
}
.shopBottomTwo span i{
    color:red;
}
.more{
    width: 100%;height: 0.3rem;background: #cf0a2c;
    text-align: center;line-height: 0.3rem;font-size: 16px;
    color: #fff;
}
.vipThing{
    width:100%;
    height:1.4rem;
    background:#fff;
}
.vipThing div{
    width:46%;
    margin:2%;
    height:90%;
    float:left;
}
.vipThing div img{
    width:100%;
    height:auto;
}
</style>