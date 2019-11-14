<template>
    <div class="page">
       <div class="main">
        <div class="banner">
            <img src="http://h2.appsimg.com/a.appsimg.com/upload/flow/2019/11/07/191/15730953315416.jpg" alt="">
        </div>
        
        <div class="title">
            <img src="http://h2.appsimg.com/a.appsimg.com/upload/flow/2019/04/25/182/15561868764222.jpg" alt="">
        </div>
        <router-link class="one" v-for="(item,index) in  floor_list" 
        :key="index" tag="div" :to="'/details/'+item.id" >
            <img :src="item.goods_img">
            <p>{{item.efficacy}}</p>
            <b>￥{{item.shop_price}}</b>
        </router-link>
        
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
      async handle(goods_type){
             let datas= await ApiNowApi(goods_type);
            //console.log(datas.data.data.floor_list)
              this.floor_list=datas.data;
              console.log(datas.data);
        }
    },
 created() {
        this.handle();
    },
}
</script>

<<<<<<< HEAD
<style>
=======
<style scoped>
>>>>>>> jy
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
<<<<<<< HEAD
    height: 2.4rem;
    margin: 0 auto;
    background: #fff;
    margin-top: 0.1rem;
    overflow: hidden;
}
.main .one img{
    width: 80%;
    height: 1.6rem;
    border-radius: 0.05rem 0.05rem 0 0;
    margin-left: 10%;
      margin-top: 0.08rem
=======
    height: 2rem;
    margin: 0 auto;
}
.main .one img{
    width: 100%;
    height: 1.4rem;
    border-radius: 0.05rem 0.05rem 0 0;
>>>>>>> jy
}
.main .one p{
    font-size: 0.12rem;
    margin-top: 0.1rem;
    font-weight: 600;
<<<<<<< HEAD
    margin-left: 10%
=======
>>>>>>> jy
}
.main .one b{
    display: block;
    font-size: 0.12rem;
    margin-top: 0.1rem;
<<<<<<< HEAD
    margin-left: 10%
=======
>>>>>>> jy
}
</style>