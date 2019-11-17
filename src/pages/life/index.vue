<template>
  <div class="page">
    <div class="lifeBox">
      <div class="img">
        <img src="https://image.yunifang.com/yunifang/images/goods/ad0/19111119389914149831283313.jpg" />
      </div>
      <div class="lifeList">
        <div>
            <p>12</p>
            <p>我的U币</p>
        </div>
        <div>
            <span class="gain"></span>
            <p>赚U币</p>
        </div>
        <div>
            <span class="shop"></span>
            <p>U币商城</p>
        </div>
      </div>
      <div class="loop">
          <img src="https://image.yunifang.com/yunifang/images/goods/ad0/180627090787520267191941618.jpg" alt="">
      </div>
      <div class="myThing">
          <span>我的权益</span>
          <span>更多权益 ></span>
      </div>
      <div class="vipThing">
          <span>会员福利</span>
      </div>
      <div class="active">
          <div class="activeOne">
              <img src="https://image.yunifang.com/yunifang/images/goods/ad0/18062709265017354478582219.jpg" alt="">
          </div>
          <div class="activeTwo">
              <img src="https://image.yunifang.com/yunifang/images/goods/ad0/18062709227398814422227588.jpg" alt="">
          </div>
      </div>
    </div>
  </div>
</template>
<script>
import {LifeApi} from "@api/life";
export default {
  name: "Life",
  data(){
    return{
      vipShop:[]
    }
  },
  methods:{
    async handleShop(){
      let data = await LifeApi();
      // if(data.code=406){
      //   this.$router.push("/login")
      // }else{
      //   this.vipShop=data.data;
      // }
    }
  },
  created(){
    this.handleShop();
  }
};
</script>

<style scoped>
.lifeBox{
    background:#efefef;
    height:100%;
    font-size:13px;
}
.img {
  width: 100%;
  height: 1.35rem;
  background: red;
  overflow: hidden;
}
.img img {
  width: 100%;
}
.lifeList {
  width: 100%;
  height: 0.768rem;
  background: #fff;
  display: flex;
  justify-content: space-around;
}
.lifeList div {
  width: 30%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content: center;
  margin-top: 10px;
}
.lifeList div p{
  margin-top: 5px;
}
.lifeList div span{
  display: block;
  width: 0.24rem;
  height: 0.22rem;
}
.lifeList div .gain{
  background: url("https://wimg.yunifang.com/images/member-gift-u.png") no-repeat;
  background-size: 100%;
}
.lifeList div .shop{
  background: url("https://wimg.yunifang.com/images/member-gift-pig.png") no-repeat;
  background-size: 100%;
}
.loop{
    width:100%;
    height:0.86rem;
    background:#fff;
    margin-top:10px;
    overflow: hidden;
}
.loop img{
    width:100%;
    height:auto;
}
.myThing{
    width:100%;
    height:0.44rem;
    background:#fff;
    margin-top:10px;
    line-height:0.44rem;
    display: flex;
    justify-content: space-between;
    padding:0 10px;
}
.vipThing{
     width:100%;
    height:0.44rem;
    background:#fff;
    margin-top:10px;
    border-bottom:1px solid #ccc;
    line-height:0.44rem;
    padding:0 10px;
}
.active{
    width:100%;
    height:1.4rem;
    background:#fff;
}
.active div{
    width:45%;
    height:90%;
    float:left;
    margin:2.5% 2.5%;
    overflow: hidden;
}
.active div img{
    width:100%;
    height:auto;
}
</style>