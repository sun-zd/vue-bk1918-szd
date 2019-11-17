<template>
  <div>
    <div class="kkk" title="我的购物车" left-text="返回" left-arrow @click-left="onClickLeft" >我的购物车</div>
    <div class="container">
      <div class="shop" :class="flag==true?'active':'deactive'">
        <van-button type="primary" @click="checkAll">全选</van-button>
      </div>
      <div class="goods">
        <van-checkbox-group v-model="result" ref="checkboxGroup">
        <div  :v-model="result" ref="checkboxGroup">
          <div class="goodList" v-for="(item,index) in this.$store.state.goodsList" :key="index">
            <div class="check">
              <div :name="index">      
                    <van-checkbox :name="index"><input type="checkbox" class="inputBox" @change="handleCheckChange(index)" /></van-checkbox>
              </div>
            </div>
            <div class="goodList_Right">
              <van-card
                :num="item.num"
                :price="item.price"
                :title="item.name"
                :thumb="item.img"
              >
                <div slot="tags">
                  <div plain type="danger">正品</div>
                  <div plain type="danger">包邮</div>
                </div>
                <div slot="footer">
                  <button size="mini" @click="handleAddGood(index)">+</button>
                  <button size="mini" @click="handleReduceGood(index)">-</button>
                </div>
              </van-card>
            </div>
          </div>
        </div >
         </van-checkbox-group>
      </div>
    </div>
    <div class="footer">
      <van-submit-bar
      :price="countPrice.sumPrice"
      button-text="提交订单"
      @submit="onSubmit"
    />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import { Dialog } from "vant";
export default {
  name: "Cart",
  data() {
    return {
      result: [],
      flag: false,
      szd:[],
    };
  },
  computed: {
    ...mapGetters({
      countPrice: "countPrice"
    })
  },
  created() {
    this.$store.state.goodsList=JSON.parse(localStorage.getItem("kly"));
  },
  methods: {
    onClickLeft() {
      //Toast('返回');
      this.$router.back();
    },
    checkAll() {
      this.$refs.checkboxGroup.toggleAll(!this.flag);
      this.flag = !this.flag;
    
      this.$store.dispatch("handleActionAllCheck",this.flag);
    },
    
    onSubmit() {
      Dialog.confirm({
        title: "提示",
        message: "还未登录是否登录"
      })
        .then(() => {
           this.$router.push("/login")
        })
        .catch(() => {
          console.log("取消");
        });
    },
    handleAddGood(index) {
      this.$store.dispatch("handleactionAdd", index);
    },
    handleCheckChange(index) {
      this.$store.dispatch("handleActionCheck", index);
      console.log(index);
    },
    handleReduceGood(index) {
      this.$store.dispatch("handleActionReduce", index);
    },
 
   
  }
};
</script>

<style>
.kkk{
  width: 100%;
  height:0.3rem;
  font-size: 0.14rem;
  line-height: 0.3rem;
  text-align: center;
  
}
.container {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin-top: 0.4rem;
  margin-bottom: 0.7rem;
  overflow-y: auto;
}

.van-card__content {
  text-align: left;
}
.active span {
  color: crimson;
}
.deactive span {
  color: #666;
}
.goodList {
  width: 100%;
  height: auto;
  display: flex;
  font-size: 0.12rem;
}
.check {
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
 
}
.goodList_Right {
  width: 100%;
  height: auto;
}
.goods {
  width: 100%;
  height: auto;
}
.shop {
  width: 100%;
  height: 0.3rem;
  display: flex;
}
.shop button{
  line-height:0.3rem;
  background:#fff;
  border:none;
  outline:none;
  height:100%;
}
.inputBox {
  position: absolute;
  left: 32%;
  top: 42%;
  width: 0.18rem;
  height: 0.18rem;
  border: none;
  opacity:0;
  -z-index:-1;
  
}
.btn {
  width: 0.6rem;
  height: 100%;
  background: #fff;
  color: #666;
  border: none;
  text-align: left;
  font-size: 0.12rem
}
.bottom {
  width: 100%;
  height: auto;
  position: fixed;
  left: 0;
  bottom: 0;
  font-size:0.14rem
}
.footer{
  width:100%;
  height:0.8rem;
  position: absolute;
  bottom:0;
  left:0;display: flex;
  align-items: center;
  justify-content: space-around
}
.footer p{
  font-size: 0.12rem;
  color: #c33;
  margin-left: 0.2rem
}
/* .footer .van-submit-bar__text{
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    -webkit-box-pack: end;
    -webkit-justify-content: flex-end;
    justify-content: flex-end;
    height: 50px;
    font-size: 14px;
}
.footer .van-submit-bar {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 100;
    width: 100%;
    background-color: #fff;
    -webkit-user-select: none;
    user-select: none;
}
.van-submit-bar__text span {
    display: inline-block;
} */
</style>