<template>
    <div class="page">
       <div class="main">
        <div class="banner">
            <img src="http://h2.appsimg.com/a.appsimg.com/upload/flow/2019/11/07/191/15730953315416.jpg" alt="">
        </div>
        <div class="list">
            <img src="http://h2.appsimg.com/a.appsimg.com/upload/flow/2019/04/15/161/15553238357179.jpg" alt="">
            <img src="http://h2.appsimg.com/a.appsimg.com/upload/flow/2019/04/15/159/15553238493272.jpg" alt="">
            <img src="http://h2.appsimg.com/a.appsimg.com/upload/flow/2019/04/15/126/15553238628467.jpg" alt="">
        </div>
        <div class="img">
            <img src="http://h2.appsimg.com/a.appsimg.com/upload/flow/2019/04/04/198/15543463865945.jpg" alt="">
            <img src="http://h2.appsimg.com/a.appsimg.com/upload/flow/2019/04/04/171/15543464045927.jpg" alt="">
            <img src="http://h2.appsimg.com/a.appsimg.com/upload/flow/2019/04/04/121/15543464251931.jpg" alt="">
            <img src="http://h2.appsimg.com/a.appsimg.com/upload/flow/2019/04/04/109/15543464456414.jpg" alt="">
        </div>
        <div class="title">
            <img src="http://h2.appsimg.com/a.appsimg.com/upload/flow/2019/04/25/182/15561868764222.jpg" alt="">
        </div>
        <div class="one" v-for="(item,index) in  floor_list" 
        :key="index">
            <img :src="item.data.brand.brand_image">
            <p>{{item.data.brand.title}}</p>
            <b>{{item.data.brand.discount}}</b>
        </div>
        
       </div>
    </div>
</template>
<script>
import {ApiNowApi} from '@api/vip'
export default {
    name:"Vip",
    data(){
        return{
            floor_list:[]
        }
    },

    methods:{
      async handle(){
             let datas= await ApiNowApi();
            //console.log(datas.data.data.floor_list)
              this.floor_list=datas.data.data.floor_list;
              console.log(this.floor_list);
        }
    },
 created() {
        this.handle();
    },
}
</script>

<style>
.main{
    width:100%;
    overflow-x: hidden;
    overflow-y: auto;
    background:#f3f4f6;
}
.main .banner{
    width: 100%;
    height: 1.28rem;
}
.main .banner img{
    width: 100%;
    height: 100%;
}
.main .list{
    width: 100%;
    height: 0.75rem;
    display: flex;
    justify-content: space-around;
}
.main .list img{
    display: block;
    width:1.06rem;
    height: 0.75rem;
    border: none;
    outline: none;
}
.main .img{
    width: 100%;
    height: 0.75rem;
    display: flex;
    justify-content: space-around;
}
.main .img img{
    display: block;
    width:1.06rem;
    height: 0.75rem;
    border: none;
    outline: none;
}
.main .title{
    width: 100%;
    height: 0.55rem;
}
.main .title img{
    width: 100%;
    height: 100%;
}
.main .one{
    width: 3rem;
    height: 2rem;
    margin: 0 auto;
}
.main .one img{
    width: 100%;
    height: 1.4rem;
    border-radius: 0.05rem 0.05rem 0 0;
}
.main .one p{
    font-size: 0.12rem;
    margin-top: 0.1rem;
    font-weight: 600;
}
.main .one b{
    display: block;
    font-size: 0.12rem;
    margin-top: 0.1rem;
}
</style>