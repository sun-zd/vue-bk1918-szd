<template>
    <div class="page">
       <div id="img">
        <img src="">
    </div>
    <div class="one">
        <span>登录名</span>
        <input type="text" placeholder="请输入手机号或邮箱" id="username">
    </div>
    <div class="two">
        <span>密码</span>
        <input type="tsxt" placeholder="请输入密码" id="password">
    </div>
    <button class="button">登录</button>
    <div class="agree">
        <span><a href="#">忘记密码</a></span>
    </div>
    <div class="line">
        <span>或</span>
    </div>
    <button class="telLogin">
        手机号注册登录
    </button>
    </div>
</template>
<script>
export default {
    name:"Login"
}
</script>

<style scoped>
#img{
    width:100%;
    height:1.7rem;
    background:#ccc;
}
.one{
    width:100%;
    height:0.53rem;
    line-height: 0.53rem;
    border-bottom: 1px solid #e7e7e7;
    padding-left:15px;
    position: relative;
}
.one #username{
    position: absolute;
    left:85px;
    top:20px;
}
span{
    display:block;
    float:left;
    font-size:16px;
}
input{
    border:1px solid #000;
    float:left;
}
.two{
    width:100%;
    height:0.53rem;
    line-height: 0.53rem;
    border-bottom: 1px solid #e7e7e7;
    padding-left:15px;
    position: relative;
}
.two #password{
    position: absolute;
    left:85px;
    top:20px;
}
.button{
    width:90%;
    height:0.44rem;
    background:#caccd2;
    color:#fff;
    border:0;
    border-radius:0.22rem;
    margin-left:5%;
    margin-top:30px;
    font-size:16px;
}
.agree{
    font-size:13px;
    color:#98989f;
    margin-top:15px;
    position: relative;
    height:0.5rem;
}
.agree span{
    display:block;
    float:right;
    padding-right:20px;
    font-size:14px;
}
.agree span a{
    color:#0079ff;
}
.line{
    border-top:1px solid #ccc;
    font-size:10px;
    color:#ccc;
    position: relative;
}
.line span{
    font-size:12px;
    display:block;
    width:40px;
    background:#fff;
    text-align: center;
    position: absolute;
    top:-9px;
    left:45%;
}
.telLogin{
    width:1.28rem;
    height:0.38rem;
    background:#fff;
    border:1px solid #e4007f;
    color:#e4007f;
    border-radius:18px;
    margin:24px auto;
}
</style>