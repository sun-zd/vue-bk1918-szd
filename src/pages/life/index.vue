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
            <p>12</p>
            <p>赚U币</p>
        </div>
        <div>
            <p>12</p>
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
export default {
  name: "Life",
  
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
}
.lifeList div {
  width: 30%;
  height: 80%;
  background: green;
  float: left;
  margin-top: 2%;
  margin-left: 2.7%;
  text-align: center;
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