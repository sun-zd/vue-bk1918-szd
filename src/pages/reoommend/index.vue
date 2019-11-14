<template>
<div class="page">
    <div class="main" v-for="(item,index) in indexList" :key="index">
        <div class="cart">
            <span class="iconfont">&#xe652;</span>
        </div>
        <div class="banner">
            <!-- <span>{{indexList[0]}}</span> -->
            <!-- :src=indexList[0].data.operation_data.data.block[0].child[0].data.imageUrl -->
            <img :src=indexList[0].data.operation_data.data.block[0].child[0].data.imageUrl>
        </div>
        <div class="shopLogoOne">
            <div v-for="(item,index) in listOne" :key="index">
                <div class="logoImg">
                    <img :src=indexList[2].data.operation_data.data.block[0].child[index].data.imageUrl>
                </div>
                <span>{{listOne[index]}}</span>
            </div>                       
        </div>
        <div class="shopLogoTwo">
            <div v-for="(item,index) in listOne" :key="index">
                <div class="logoImg">
                    <img :src=indexList[3].data.operation_data.data.block[0].child[index].data.imageUrl>
                </div>
                <span>{{listTwo[index]}}</span>
            </div>                       
        </div>
       <img :src=indexList[4].data.operation_data.data.block[0].child[0].data.imageUrl
                style="width: 100%; height: auto;">
        <img src="http://h2.appsimg.com/a.appsimg.com/upload/flow/2019/11/07/6/15730962464589.jpg"
                class="imgList">
        <img src="http://h2.appsimg.com/a.appsimg.com/upload/flow/2019/11/07/57/15731066354558.jpg"
                class="imgList">
        <img src="http://h2.appsimg.com/a.appsimg.com/upload/flow/2019/11/07/97/15730949911324.jpg"
                class="imgList">
        <img src="//h2.appsimg.com/a.appsimg.com/upload/flow/2019/11/08/23/15732101601961.jpg"
                style="width: 100%; height: auto;">
        <img src="https://h2.appsimg.com/b.appsimg.com/upload/mst/2019/11/07/52/mst_dbf542ce6c9e0cbf7a120b95a59757d5_1125x429_90.jpg"
            style="width: 100%; height: auto;">

        <a href="#"><img
                src="https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/2018/11/08/28/dd9a8076-2d20-4628-b40e-97a7535dfbee_251x251_90.jpg"
                class="womenDress"></a>
        <a href="#"><img
                src="https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/107827/2019/0528/23/128ac2fd-619a-4efc-928b-3c7b3cacb716_251x251_90.jpg"
                class="softWater"></a>
        <a href="#"><img
                src="https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/2018/09/05/140/740b3260-e5e1-43e0-8c0d-5849da4a5643_251x251_90.jpg"
                class="boyBody"></a>
        <a href="#"><img
                src="https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/104218/2019/0701/72/3bc8bc21-60a0-4902-81db-528989c44771_251x251_90.jpg"
                class="bag"></a>

        <div class="goodGoods">
            <img src="https://h2.appsimg.com/b.appsimg.com/upload/mst/2019/10/15/147/mst_d56fa74afedc5e1c20d91734819549bd_1125x660_90.png"
                style="width:100%;height:auto;margin-top:0.4rem;">
            <div class="goodsList">
                <div class="one">
                    <img class="oneOne"
                        src="https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/102138/2019/1101/56/84a8b959-9193-4725-af4a-f078d5ac7603_251x251_90.jpg">
                    <img class="oneTwo"
                        src="https://h2.appsimg.com/a.appsimg.com/upload/brandcool/0/3c2f294134db410fac9dcba6d48cda5f/10004171/primary_120x60_90.png">
                    <span class="oneSpanOne">快抢价</span><span class="oneSpanTwo">￥99</span>
                </div>
                <div class="one">
                    <img class="oneOne"
                        src="https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/106143/2019/0812/134/433a47bc-4d4f-477d-9ca4-000f8791aafd_251x251_90.jpg">
                    <img class="oneTwo"
                        src="https://h2.appsimg.com/a.appsimg.com/upload/brandcool/0/3eb1e71070a04ef19c12daa360f7ef56/10007154/primary_120x60_90.png">
                    <span class="oneSpanOne">快抢价</span><span class="oneSpanTwo">￥99</span>
                </div>
                <div class="one">
                    <img class="oneOne"
                        src="https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/136999/2019/0925/15/187c6627-1012-4890-a181-bad94fb0dce6_251x251_90.jpg">
                    <img class="oneTwo"
                        src="https://h2.appsimg.com/a.appsimg.com/upload/brandcool/0/33e98d4f9e824d12986d25707b421b38/10000226/primary_120x60_90.png">
                    <span class="oneSpanOne">快抢价</span><span class="oneSpanTwo">￥99</span>
                </div>
                <div class="one">
                    <img class="oneOne"
                        src="https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcimg/2019/08/14/70/628233491565770597762_251x251_90.jpg">
                    <img class="oneTwo"
                        src="https://h2.appsimg.com/a.appsimg.com/upload/brandcool/0/1aa04c8a09fa4f49a51a5e340b7d04cb/10007180/primary_120x60_90.png">
                    <span class="oneSpanOne">快抢价</span><span class="oneSpanTwo">￥99</span>
                </div>
            </div>

        </div>
        <div class="todyNew">
            <img src="https://h2.appsimg.com/b.appsimg.com/upload/momin/2019/08/23/111/1566543733364.jpg">
        </div>
        <div class="newShop">
            <div class="newShopCenter">
                <div class="newShopTop">
                    <img
                        src="https://h2.appsimg.com/a.appsimg.com/upload/brand/upcb/2019/11/06/22/ias_157302024397581_1135x545_85.jpg">
                </div>
                <div class="newShopBottom">
                    <div class="shopBottomOne"><span>欧莱雅Loreal化妆品专场</span></div>
                    <div class="shopBottomTwo"><span><i>2</i>折起</span></div>
                </div>
            </div>
        </div>
        <div class="newShop">
            <div class="newShopCenter">
                <div class="newShopTop">
                    <img
                        src="https://h2.appsimg.com/a.appsimg.com/upload/brand/upcb/2019/11/06/22/ias_157302024397581_1135x545_85.jpg">
                </div>
                <div class="newShopBottom">
                    <div class="shopBottomOne"><span>欧莱雅Loreal化妆品专场</span></div>
                    <div class="shopBottomTwo"><span><i>2</i>折起</span></div>
                </div>
            </div>
        </div>
        <div class="newShop">
            <div class="newShopCenter">
                <div class="newShopTop">
                    <img
                        src="https://h2.appsimg.com/a.appsimg.com/upload/brand/upcb/2019/11/06/22/ias_157302024397581_1135x545_85.jpg">
                </div>
                <div class="newShopBottom">
                    <div class="shopBottomOne"><span>欧莱雅Loreal化妆品专场</span></div>
                    <div class="shopBottomTwo"><span><i>2</i>折起</span></div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
    name:"Reoommend",
   
}

</script>

<style>
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
    height:1.28rem;
}
.banner img{
    width:100%;
    height:100%;
}
.shopLogoOne{
    width:100%;
    height:0.716rem;
    background:#f3f4f6;
    font-size:13px;
    text-align:center;
}
.shopLogoOne div{
    width:18%;
    height:100%;
    float:left;
    margin-left:1.7%;
}
.shopLogoOne div .logoImg{
    width:0.45rem;
    height:0.45rem;
    background:#efe7d4;
    border-radius: 50%;
    margin-left:0.06rem;
    margin-top:0.05rem;
    overflow: hidden;
}
.shopLogoOne div .logoImg img{
    width:170%;
    height:170%;
    margin-left:-35%;
    margin-top:-20%;
}
.shopLogoTwo{
    width:100%;
    height:0.716rem;
    background:#f3f4f6;
    font-size:13px;
    text-align:center;
}
.shopLogoTwo div{
    width:18%;
    height:100%;
    float:left;
    margin-left:1.7%;
}
.shopLogoTwo div .logoImg{
    width:0.45rem;
    height:0.45rem;
    background:#efe7d4;
    border-radius: 50%;
    margin-left:0.06rem;
    margin-top:0.05rem;
    overflow: hidden;
}
.shopLogoTwo div .logoImg img{
    width:100%;
    height:100%;
}
.shopLogoTwo div .logoImg img{
    width:170%;
    height:170%;
    margin-left:-35%;
    margin-top:-20%;
}
.imgList{
    width:33.3%;
    height:auto;
    float:left;
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

</style>