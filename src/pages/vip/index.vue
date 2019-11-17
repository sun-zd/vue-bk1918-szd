<template>
  <!-- <better-S> -->
    <div class="page" >
      <Sunlly-scroll>
      <div class="main">        
        <router-link
          class="one"
          v-for="(item,index) in  floor_list"
          :key="index"
          tag="div"
          :to="'/details/'+item.id"
        >
          <img :src="item.goods_img" />
          <p>{{item.efficacy}}</p>
          <b>￥{{item.shop_price}}</b>
        </router-link>
      </div>
      </Sunlly-scroll>
    </div>
</template>
<script>
 import { ApiNowApi } from "@api/vip";
// import BScroll from 'better-scroll'
export default {
  name: "Vip",
  data() {
    return {
      floor_list: []
    };
  },

  methods: {
    async handle(goods_type) {
      let datas = await ApiNowApi(goods_type);
      this.floor_list = datas.data;
    }
  },
  created() {
    this.handle();
  }
};
</script>

<style scoped>
.main {
  width: 100%;
  overflow-x: hidden;
  background: #f3f4f6;
  position: absolute;
  top: 0.6rem;
  left: 0;
}
.main .banner {
  width: 100%;
  height: 1.28rem;
}
.main .banner img {
  width: 100%;
  height: 100%;
}
.main .list {
  width: 100%;
  height: 0.75rem;
  display: flex;
  justify-content: space-around;
}
.main .list img {
  display: block;
  width: 1.06rem;
  height: 0.75rem;
  border: none;
  outline: none;
}
.main .img {
  width: 100%;
  height: 0.75rem;
  display: flex;
  justify-content: space-around;
}
.main .img img {
  display: block;
  width: 1.06rem;
  height: 0.75rem;
  border: none;
  outline: none;
}
.main .title {
  width: 100%;
  height: 0.55rem;
}
.main .title img {
  width: 100%;
  height: 100%;
}
.main .one {
  width: 100%;
  height: 2.4rem;
  margin: 0 auto;
  background: #fff;
  margin-top: 0.1rem;
  overflow: hidden;
}
.main .one img {
  width: 80%;
  height: 1.6rem;
  border-radius: 0.05rem 0.05rem 0 0;
  margin-left: 10%;
  margin-top: 0.08rem;
}
.main .one p {
  font-size: 0.14rem;
  margin-top: 0.05rem;
  font-weight: 700;
  margin-left: 10%;
}
.main .one b {
  display: block;
  font-size: 0.13rem;
  margin-top: 0.1rem;
  margin-left: 10%;
  color: #c33;
  font-weight: 500
}
</style>