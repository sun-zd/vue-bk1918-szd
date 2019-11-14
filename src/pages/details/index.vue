<template>
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
    </div>
</template>
<script>

export default {
    name:"Details",
    
}
</script>

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
}

</style>