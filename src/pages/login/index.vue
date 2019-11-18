<template>
  <div class="page">
    <div id="img">
      <img
        src="https://image.yunifang.com/yunifang/images/goods/ad0/19111119389914149831283313.jpg"
      />
    </div>
    <keep-alive>
        <div v-if="num==0">
            <div class="one">
            <span>登录名</span>
            <input type="text" placeholder="请输入手机号或邮箱" id="username" v-model="username" />
            </div>
            <div class="two">
            <span>密码</span>
            <input type="password" placeholder="请输入密码" id="password" v-model="password" />
            </div>
            <router-link tag="button" to="/reoommend" class="button" @click="login()">登录</router-link>
        </div>
        <div v-else-if="num==1">
            <div class="one">
            <span>注册名</span>
            <input type="text" placeholder="请输入手机号或邮箱" id="username" v-model="name" />
            </div>
            <div class="two">
            <span>注册密码</span>
            <input type="password" placeholder="请输入密码" id="password" v-model="pass" />
            </div>
            <button class="button" @click="register()">确认注册</button>
        </div>
    </keep-alive>
    <div class="agree">
      <span>
        <a href="javascrip:;" @click="handleReg()">注册账号</a>
      </span>
      <span>
        <a href="#">忘记密码</a>
      </span>
    </div>
  </div>
</template>
<script>
import {registerApi} from "@api/login"
import {loginApi} from "@api/login"
export default {
  name: "Login",
  data(){
      return{
          num:"0",
          password:'',
          username:'',
          name:'',
          pass:'',

      }
  },
  methods:{
      handleReg(){
          switch(this.num){
            case 0:
                this.num=1;
            break;
            case 1:
                this.num=0;
            break;
            default:this.num=0;
          }
        //   if(this.num=0){
        //       this.num=1;
        //   }
        //   if(this.num=1){
        //       this.num=0;
        //   }
      },
      async register(){
          console.log(this.name,this.pass)
          let data=await registerApi("123","123");
        //   this.num=0
         console.log(data);
      },
      async login(){
          let data=await loginApi(this.username,this.password);
         console.log(data);
      }
     

  },
//   created() {
//       this.register();
//       this.login();
//   },

};
</script>

<style scoped>
#img {
  width: 100%;
  height: 1.7rem;
  background: #ccc;
  margin-top: -0.6rem;
  overflow: hidden;
}
#img img {
  width: 100%;
  height: auto;
}
.one {
  width: 100%;
  height: 0.53rem;
  line-height: 0.53rem;
  border-bottom: 1px solid #e7e7e7;
  padding-left: 15px;
  position: relative;
  font-size: 12px;
}
.one #username {
  position: absolute;
  left: 85px;
  top: 20px;
}
span {
  display: block;
  float: left;
  font-size: 16px;
}
.two {
  width: 100%;
  height: 0.53rem;
  line-height: 0.53rem;
  border-bottom: 1px solid #e7e7e7;
  padding-left: 15px;
  position: relative;
  font-size: 12px;
}
.two #password {
  position: absolute;
  left: 85px;
  top: 20px;
}
.button {
  width: 90%;
  height: 0.44rem;
  background: #caccd2;
  color: #fff;
  border: 0;
  border-radius: 0.22rem;
  margin-left: 5%;
  margin-top: 10px;
  font-size: 16px;
  outline: none;
  color: #98989f;
}
.agree {
  font-size: 13px;
  color: #98989f;
  margin-top: 15px;
  position: relative;
  height: 0.5rem;
}
.agree span {
  display: block;
  float: right;
  padding-right: 20px;
  font-size: 14px;
}
.agree span a {
  color: #0079ff;
}
.line {
  border-top: 1px solid #ccc;
  font-size: 10px;
  color: #ccc;
  position: relative;
}
.line span {
  font-size: 12px;
  display: block;
  width: 40px;
  background: #fff;
  text-align: center;
  position: absolute;
  top: -9px;
  left: 45%;
}
.telLogin {
  width: 1.28rem;
  height: 0.38rem;
  background: #fff;
  border: 1px solid #e4007f;
  color: #e4007f;
  border-radius: 18px;
  margin: 24px auto;
}
</style>