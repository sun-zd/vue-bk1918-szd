<template>
    <div class="page">
    <div class="address_box">
      <div class="back">
        <span class="iconfont" @click="handleBack()">&#xe614;</span>
        {{title}}
        <span class="iconfont"></span>
      </div>
      <div class="show_shop">
          <router-link class="shop" 
          v-for="(item,index) in list.data" 
          :key="index"
          :to="'/details/'+item.id"
          tag="div">
              <img :src="item.goods_img" alt="">
              <div class="bottom">
                  <div class="goods_name">{{item.goods_name}}</div>
                  <div class="price">￥{{item.shop_price}}<span>￥{{item.market_price}}</span></div>
              </div>
          </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    name:"Show",
    data(){
        return{
            list:[],
            title:""
        }
    },
    created() {
        this.list=JSON.parse(sessionStorage.getItem("shop"))
        this.title=this.$router.currentRoute.query.title;
    },
    methods: {
        handleBack(){
            this.$router.back()
        }
    },
}
</script>
<style scoped>
.show_shop{
    width: 100%;padding:0 10px;
}
.show_shop .shop{
    width: 49%;height: 2.34rem;border: 1px solid #ddd;float: left;
}
.show_shop .shop img{
    width: 100%;height: 1.48rem;
}
.show_shop .shop .bottom{
    width: 100%;height: 0.73rem;padding: 10px;
}
.show_shop .shop .bottom .goods_name{
    height: 20px;color: #9c9c9c;font-size:6px;line-height: 20px;
}
.show_shop .shop .bottom .price{
    color: #cf0a2c;font-size: 14px;margin-top: 0.3rem;
}
.show_shop .shop .bottom .price span{
    font-size: 8px;color: #9c9c9c;
    text-decoration: line-through;
}
</style>