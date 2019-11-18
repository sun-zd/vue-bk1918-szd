<template>
  <div class="page">
    <header>
      <div class="newaddress">
        <p class="new_back">
          <i class="iconfont" @click="back">&#xe614;</i>
        </p>
        <h2>收货地址</h2>
        <p class="new_save" @click="preserve">保存</p>
      </div>
    </header>
    <main>
      <div class="iptDiv">
        <form action class="iptform">
          <div class="address_name">
            <div class="name_p">收货人姓名</div>
            <input type="text" placeholder="请输入姓名" v-model="name"/>
          </div>
          <div class="address_phone">
            <div class="phone_p">手机号码</div>
            <input type="text" placeholder="请输入手机号码 " v-model="phone"/>
          </div>
          <div class="address_address">
            <div class="address_p">所在地区</div>
            <van-cell
              is-link
              @click="showPopup"
              v-bind:style="{ height:'100%',display:'flex','align-items': 'center',color:'#757575','font-size':'.13rem'}"
            >
              <input type="text" v-model="address" placeholder="点击选择地址" />
            </van-cell>
            <van-popup v-model="show" position="bottom" :style="{ height: '35%' }">
              <!-- 三级联动开始-->
              <van-area
                :area-list="areaList"
                @confirm="handleconfirm()"
                @change="handlechange"
                @cancel="handlecancel"
              />
              <!-- 三级联动结束-->
            </van-popup>
          </div>
          <div class="address_streat">
            <div class="streat_p">街道地址</div>
            <input type="text" placeholder="请输入街道地址" v-model="dir"/>
          </div>
          <div class="address_postcode">
            <div class="postcode_p">邮政编码</div>
            <input type="text" v-model="mail"/>
          </div>
        </form>
        <div class="defaultadd">
          <div class="default_ipt">
            <!-- <input type="radio" name="address_de" value="默认地址"> -->
          </div>
          <label for="address_de">设为默认地址</label>
        </div>
      </div>
    </main>
  </div>
</template>
<script>
import Vue from "vue";
import { Area, Popup, Cell } from "vant";
import province_list from "../../assets/city.js";
Vue.use(Area);
Vue.use(Popup);
Vue.use(Cell);
export default {
  data() {
    return {
      show: false,
      areaList: province_list,
      province: "北京市",
      city: "北京市",
      county: "东城区",
      address:"",
      name:'',
      phone:'',
      dir:'',
      mail:"",
      id:0,
      list:[]
    };
  },
  created() {
    this.list=JSON.parse(sessionStorage.getItem("dir_info"));
  },
  methods: {
    showPopup() {
      this.show = !this.show;
    },
    handleconfirm(...rest) {
      this.show = false;
      this.address = this.province +"/"+this.city + '/'+ this.county;
      
    },
    handlechange(picker, value, index) {
      if (value) {
        this.province = value[0].name;
        this.city = value[1].name;
        this.county = value[2].name;
      }
    },
    handlecancel() {
      this.show = false;
    },
    back() {
      this.$router.back();
    },
    preserve(){
      let address=this.province+this.city+this.county+this.dir;
      if(!this.list){
        this.list=[];
      }
      
      this.id=Number(this.id)+1;
      let info={
        id:this.id,
        name:this.name,
        tel:this.phone,
        address:address
      }
      // this.$router.push({path:'dir',query:{
      //   id:this.id,
      //   name:this.name,
      //   tel:this.phone,
      //   address:address
      // }})
      this.list.push(info)
      sessionStorage.setItem("dir_info",JSON.stringify(this.list));
      this.$router.push("/dir")
    }
  }
};
</script>
<style lang="scss" scoped>
.address {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #f6f6f6;
}

.iconfont {
  font-size: 0.23rem !important;
}

header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 0.45rem;
  background: #ffff;
  z-index: 1;
  display: flex;
}

.newaddress {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  font-size: 0.16rem;
  border-bottom: 0.015rem solid #bfbfc0;

  .new_back {
    width: 0.39rem;
    height: 0.48rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h2 {
    font-size: 0.16rem;
    columns: #333333;
  }

  .new_save {
    font-size: 0.12rem;
    padding-right: 0.15rem;
    color: #000000;
  }
}

main {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding-top: 0.45rem;
  display: flex;
  width: 100%;
  background: #ffffff;
}

.iptDiv {
  width: 100%;
  display: flex;
  flex-direction: column;

  .iptform {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 0.2rem;
  }
}

.address_name,
.address_phone,
.address_address,
.address_streat {
  height: 0.52rem;
  border-bottom: 0.01rem solid #e2e2e2;
  display: flex;
  flex: 1;
  width: 100%;
}

.address_postcode {
  height: 0.52rem;
  display: flex;
  flex: 1;
  width: 100%;
}

.iptform > div > input {
  flex: 1;
  border: none;
  font-size: 0.13rem;
}

.name_p,
.phone_p,
.address_p,
.streat_p,
.postcode_p {
  text-align: left;
  line-height: 0.52rem;
  width: 0.8rem;
  font-size: 0.13rem;
}

.defaultadd {
  border-top: 0.07rem solid #f6f6f6;
  height: 0.66rem;
  background: #ffffff;
  display: flex;
  justify-content: flex-start;
  padding-left: 0.2rem;
  padding-right: 0.2rem;
  align-items: center;
  border-bottom: 0.07rem solid #f6f6f6;
  font-size: 0.13rem;
  color: rgba(0, 0, 0, 0.8);
}

.default_ipt {
  width: 0.18rem;
  height: 0.18rem;
  background-image: url(https://app.youpin.mi.com/youpin/static/m/res/images/std_icon_checkbox_uncheck.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: relative;
  border: 50%;
  z-index: 1;
  margin-right: 0.05rem;

  input {
    width: 100%;
    height: 100%;
    background: #ffffff;
    border: none;
    position: absolute;
    line-height: 0.66rem;
    vertical-align: text-bottom;
  }
}

.address_de {
  margin-left: 0.05rem;
}
</style>