<template>
<<<<<<< HEAD
    <div class="main">
      <div class="banner">
        <img
          src="https://h2a.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/107615/2019/1018/186/138a82e4-c4af-4322-a2c2-5f49d7b373c7_720x909_70.jpg!85.webp"
          alt
        />
        
      </div>
    
      <div class="price">
        <p>￥109</p>
        <del>￥336</del>
        <b>3.2折</b>
      </div>
      <div class="name">
        <p>自然堂 | 【懒人素颜霜】素颜霜双星礼盒两只装白皙润泽提亮肌肤</p>
        <span>#懒菇凉心头爱#畅销新品，养肤更护肤，奶油质地，一抹提亮，无需卸妆，轻松打造素颜美妆。</span>
      </div>
      <div class="address">
        <span>配送至:</span>
        <b>请选择配送地址</b>
      </div>
      <div class="freight">
        <p>运费</p>
        <span>新会员专享首单满38元免邮（限唯品自营商品，部分商品不可用）</span>
      </div>
      <div class="params">
        <p>商品介绍</p>
        <span>产地：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;中国</span>
        <span>彩妆功效：滋润，提亮肤色</span>
        <span>彩妆功效：滋润，提亮肤色</span>
        <span>彩妆功效：滋润，提亮肤色</span>
      </div>
      <div class="graphic">
        <p>图文详情</p>
        <img
          class="kl"
          src="https://h2a.appsimg.com/a.appsimg.com/upload/brandcool/0/2015/07/27/106/9fe1e93b-0556-480d-ac6a-e437bdde1ffe.jpg!85.webp"
          alt
        />
        <img
          src="https://h2a.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/107615/2019/1011/39/7d01dd2a-a682-4949-b31c-5572b1708117.jpg!85.webp"
          alt
        />
        <img
          src="https://h2a.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/107615/2019/0724/170/4f2f631e-bf88-4591-8dd1-2756f44a2717.jpg!85.webp"
          alt
        />
      </div>
      <div class="footer">
        <span>查看购物车</span>
        <span class="pin">加入购物车</span>
      </div>
=======
    <div class="page">
       <div id="imgl">
        <img src="">
      </div>
    <div class="onel">
        <span>登录名</span>
        <input type="text" placeholder="请输入手机号或邮箱" id="usernamel">
    </div>
    <div class="twol">
        <span>密码</span>
        <input type="password" placeholder="请输入密码" id="passwordl">
    </div>
    <button class="buttonl">登录</button>
    <div class="linel">
        <span>或</span>
    </div>
    <div class="agreel">
        <span><a href="#">注册账号</a></span>
        <span><a href="#">忘记密码</a></span>
    </div>
>>>>>>> jy
    </div>

</template>
<script>
export default {
  name: "Details",
  
};
</script>

<<<<<<< HEAD
<style>
.main{
    background:rgb(220, 218, 218);
    flex: 1;
    overflow-x: auto;
    flex-direction: column;
}
.banner{
    width: 100%;
    height: 3.2rem;
    position: relative;
}
.banner img{
    width: 100%;
    height: 100%;
}
.banner p{
    width:0.34rem;
    height: 0.34rem;
    border-radius: 50%;
    font-size: 0.3rem;
    position: absolute;
    top:5%;
    left: 5%;
    background: #ccc;
    text-align: center;
    line-height: 0.28rem;
    color: #fff;
=======
<style scoped>
#imgl{
    width:100%;
    height:1.4rem;
    background:#ccc;
    margin-top:-0.6rem;
}
.onel{
    width:100%;
    height:0.53rem;
    line-height: 0.53rem;
    border-bottom: 1px solid #e7e7e7;
    padding-left:15px;
    position: relative;
}
.onel #usernamel{
    position: absolute;
    left:85px;
    top:20px;
}
.onel span{
    display:block;
    float:left;
    font-size:16px;
}
.twol{
    width:100%;
    height:0.53rem;
    line-height: 0.53rem;
    border-bottom: 1px solid #e7e7e7;
    padding-left:15px;
    position: relative;
    font-size:15px;
}
.twol #passwordl{
    position: absolute;
    left:85px;
    top:20px;
}
.buttonl{
    width:90%;
    height:0.44rem;
    background:#caccd2;
    color:#fff;
    border:0;
    border-radius:0.22rem;
    margin-left:5%;
    margin-top:10px;
    font-size:16px;
    outline: none;
}
.agreel{
    font-size:13px;
    color:#98989f;
    margin-top:15px;
    position: relative;
    height:0.5rem;
}
.agreel span{
    display:block;
    float:right;
    padding-right:20px;
    font-size:14px;
}
.agreel span a{
    color:#0079ff;
}
.linel{
    border-top:1px solid #ccc;
    font-size:10px;
    color:#ccc;
    position: relative;
    margin-top:20px;
}
.linel span{
    font-size:12px;
    display:block;
    width:40px;
    background:#fff;
    text-align: center;
    position: absolute;
    top:-9px;
    left:45%;
>>>>>>> jy
}

.price{
    width: 100%;
    height: 0.4rem;
    background: #fff;
}
.price p{
    font-size:0.2rem;
    width:0.6rem;
    line-height: 0.4rem;
    float: left;
}
.price del{
    display: block;
    font-size: 0.1rem;
    float: left;
    line-height: 0.4rem;
    color: #98989f;
}
.price b{
    display: block;
    font-size: 0.1rem;
    float: left;
    line-height: 0.4rem;
    color: #98989f;
    margin-left: 0.05rem;
}
.name{
    border-top: 1px solid #ccc;
    width: 100%;
    height: 0.84rem;
    background: #fff;
}
.name p{
    font-size:0.12rem;
    margin: 0.05rem 0.15rem 0 0.05rem;
}
.name span{
    display: block;
    font-size:0.11rem;
    margin: 0.05rem 0.15rem 0 0.05rem;
    color: #98989f;
}
.address{
    width: 100%;
    height: 0.45rem;
    margin-top: 0.05rem;
    background: #fff;
    border-bottom: 1px solid #ccc;
}
.address span{
    width: 0.42rem;
    display: block;
    font-size: 0.12rem;
    line-height: 0.45rem;
    font-weight: bold;
    float: left;
    margin-left: 0.05rem;
}
.address b{
    display: block;
    font-size: 0.12rem;
    float: left;
    line-height: 0.45rem;
    margin-left: 0.05rem;

}
.freight{
    height: 0.93rem;
    width: 100%;
    background: #fff;
}
.freight p{
    height: 0.3rem;
    font-size: 0.12rem;
    font-weight: 600;
    line-height: 0.3rem;
    margin-left: 0.05rem;

}
.freight span{
    display: block;
    font-size: 0.12rem;
    line-height: 0.2rem;
    margin-left: 0.05rem;

}
.params{
    width: 100%;
    height: 1.66rem;
    margin-top: 0.05rem;
    background: #fff;
    overflow: hidden;
}
.params p{
    font-size: 0.12rem;
    font-weight: 600;
    height: 0.2rem;
    line-height: 0.2rem;
    margin-top: 0.2rem;
    margin-left: 0.05rem;
}
.params span{
    margin-top: 0.1rem;
    display: block;
    font-size: 0.12rem;
    width: 100%;
    height: 0.2rem;
    line-height: 0.2rem;
    margin-left: 0.05rem;
}
.graphic{
    width: 100%;
    margin-top: 0.05rem;
    background: #fff;
    overflow: hidden;
}
.graphic p{
    font-size: 0.12rem;
    font-weight: 600;
    margin-top: 0.1rem;
    margin-left: 0.06rem;
}
.graphic .kl{
    padding: 0.12rem;
}
.graphic img{
    width: 100%;
}
.footer{
    width:100%;
    height:0.56rem;
    position: fixed;
    left:0;
    bottom:0;
    background: #fff;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.footer span{
    display: block;
    font-size: 0.16rem;
    width: 1.41rem;
    height: 0.36rem;
    line-height: 0.3rem;
    border: 1px solid #ccc;
    text-align: center;
    color: #a9a3a3;
}
.footer .pin{
    color: #fff;
    background: #dd3d97;
}
</style>