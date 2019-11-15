<template>
  <div class="page">
    <div class="address_box">
      <div class="back">
        <span class="iconfont" @click="handleBack()">&#xe614;</span>
        全部订单
        <span class="iconfont" @click="handleHome()">&#xe617;</span>
      </div>
      <div class="complete">
        <div class="tabar">
          <div class="first">普通订单</div>
          <div class="two">
            <span>其他</span>
            <span>得宝、旅游、卡券</span>
          </div>
        </div>
        <div class="order" v-show="num==1">
          <div class="one">
            <a href="javascript:;">
              <div class="order_top">
                <span>
                  <i class="zi">唯品会自营</i>
                  <i class="serial">订单编号 19110826092437</i>
                </span>
                <span>订单已取消</span>
              </div>
              <div class="order_list">
                <div class="order_unit">
                  <img
                    src="https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/137604/2019/1015/105/be097922-2a69-43ee-9466-c9f11b6aa093_420_531.jpg"
                    alt
                  />
                  <div class="wrapper">
                    <div class="deatil">
                      <div class="unit_left">
                        <div class="name">WIS玻尿酸极润面膜24片 补水保湿提亮肤色收缩毛孔正品男女</div>
                        <div class="size">
                          <span>白色:</span>
                          <i>24</i>片
                        </div>
                      </div>
                      <div class="unit_right">
                        <div class="favorable_price">
                          <span>优惠后</span>￥119.00
                        </div>
                        <div class="price">¥138.00</div>
                        <div class="num">X1</div>
                      </div>
                    </div>
                    <div class="order_icon">
                      <span>7天退换</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="order_total">
                <span>共2件商品</span>
                <span>
                  实付￥
                  <i>218.00</i>
                </span>
              </div>
            </a>
            <div class="control">
              <div class="again">再次购买</div>
            </div>
          </div>
          <div class="one">
            <a href="javascript:;">
              <div class="order_top">
                <span>
                  <i class="zi">唯品会自营</i>
                  <i class="serial">订单编号 19110826092437</i>
                </span>
                <span>订单已取消</span>
              </div>
              <div class="order_list">
                <div class="order_unit">
                  <img
                    src="https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/137604/2019/1015/105/be097922-2a69-43ee-9466-c9f11b6aa093_420_531.jpg"
                    alt
                  />
                  <div class="wrapper">
                    <div class="deatil">
                      <div class="unit_left">
                        <div class="name">WIS玻尿酸极润面膜24片 补水保湿提亮肤色收缩毛孔正品男女</div>
                        <div class="size">
                          <span>白色:</span>
                          <i>24</i>片
                        </div>
                      </div>
                      <div class="unit_right">
                        <div class="favorable_price">
                          <span>优惠后</span>￥119.00
                        </div>
                        <div class="price">¥138.00</div>
                        <div class="num">X1</div>
                      </div>
                    </div>
                    <div class="order_icon">
                      <span>7天退换</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="order_list">
                <div class="order_unit">
                  <img
                    src="https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/137604/2019/1015/105/be097922-2a69-43ee-9466-c9f11b6aa093_420_531.jpg"
                    alt
                  />
                  <div class="wrapper">
                    <div class="deatil">
                      <div class="unit_left">
                        <div class="name">WIS玻尿酸极润面膜24片 补水保湿提亮肤色收缩毛孔正品男女</div>
                        <div class="size">
                          <span>白色:</span>
                          <i>24</i>片
                        </div>
                      </div>
                      <div class="unit_right">
                        <div class="favorable_price">
                          <span>优惠后</span>￥119.00
                        </div>
                        <div class="price">¥138.00</div>
                        <div class="num">X1</div>
                      </div>
                    </div>
                    <div class="order_icon">
                      <span>7天退换</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="order_total">
                <span>共2件商品</span>
                <span>
                  实付￥
                  <i>218.00</i>
                </span>
              </div>
            </a>
            <div class="control">
              <div class="again">再次购买</div>
            </div>
          </div>
        </div>
        <div class="nothing" v-show="num==0">
          <img src="../../../public/img/icon.png" alt />
          <span>暂无订单信息</span>
        </div>
        <div class="last_order">已经最后一个订单</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Indent",
  data() {
    return {
      num: "0",
      list: []
    };
  },
  methods: {
    handleBack() {
      this.$router.back();
    },
    hadnleHome() {
      this.$router.push("/reoommend");
    }
  }
};
</script>
<style>
.complete {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.complete .tabar {
  width: 100%;
  height: 0.34rem;
  display: flex;
  background: #fff;
  margin-top: 0.2rem;
}
.complete .tabar div {
  width: 50%;
  height: 0.34rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.complete .tabar .first {
  font-size: 12px;
  color: #de3d96;
  border-bottom: 1px solid #de3d96;
}
.complete .tabar .two span {
  float: left;
}
.complete .tabar .two span:nth-child(1) {
  font-size: 12px;
}
.complete .tabar .two span:nth-child(2) {
  font-size: 8px;
}
.complete .order {
  flex: 1;
}
.complete .order .one {
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 0 10px;
  background: #fff;
  margin-top: 10px;
}
.complete .order .one a {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
}
.complete .order .one a .order_top {
  height: 0.44rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ddd;
  margin-bottom: 18px;
}
.complete .order .one a .order_top span {
  display: flex;
  flex-direction: column;
}
.complete .order .one a .order_top span:nth-child(1) {
  text-align: left;
}
.complete .order .one a .order_top span:nth-child(1) .zi {
  font-size: 12px;
  color: #222;
}
.complete .order .one a .order_top span:nth-child(1) .serial {
  font-size: 8px;
  margin-top: 5px;
  color: #98989f;
}
.complete .order .one a .order_top span:nth-child(2) {
  width: 0.6rem;
  height: 0.42rem;
  text-align: center;
  line-height: 0.42rem;
  font-size: 8px;
  color: #98989f;
}
.complete .order .one a .order_list {
  flex: 1;
}
.complete .order .one a .order_list .order_unit {
  display: flex;
  margin-bottom: 0.2rem;
  height: 0.68rem;
}
.complete .order .one a .order_list .order_unit img {
  width: 0.53rem;
  height: 0.66rem;
  margin-right: 10px;
}
.complete .order .one a .order_list .order_unit .wrapper {
  width: 2.29rem;
  height: 0.68rem;
}
.complete .order .one a .order_list .order_unit .wrapper .deatil {
  width: 100%;
  height: 0.53rem;
}
.complete .order .one a .order_list .order_unit .wrapper .deatil .unit_left {
  width: 1.43rem;
  float: left;
  height: 100%;
}
.complete
  .order
  .one
  a
  .order_list
  .order_unit
  .wrapper
  .deatil
  .unit_left
  .name {
  width: 1.43rem;
  height: 0.3rem;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  font-size: 12px;
  color: #222;
}
.complete
  .order
  .one
  a
  .order_list
  .order_unit
  .wrapper
  .deatil
  .unit_left
  .size {
  float: left;
  color: #98989f;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  font-size: 10px;
  width: 1.43rem;
  margin-top: 8px;
}
.complete .order .one a .order_list .order_unit .wrapper .deatil .unit_right {
  float: right;
  width: 0.78rem;
  height: 0.53rem;
}
.complete
  .order
  .one
  a
  .order_list
  .order_unit
  .wrapper
  .deatil
  .unit_right
  .favorable_price {
  font-size: 10px;
  color: #222;
  line-height: 0.16rem;
  text-align: right;
}
.complete
  .order
  .one
  a
  .order_list
  .order_unit
  .wrapper
  .deatil
  .unit_right
  .favorable_price
  span {
  color: #98989f;
  font-size: 8px;
  margin-right: 5px;
}
.complete
  .order
  .one
  a
  .order_list
  .order_unit
  .wrapper
  .deatil
  .unit_right
  .price {
  font-size: 8px;
  color: #98989f;
  line-height: 15px;
  text-align: right;
}
.complete
  .order
  .one
  a
  .order_list
  .order_unit
  .wrapper
  .deatil
  .unit_right
  .num {
  font-size: 8px;
  color: #98989f;
  line-height: 15px;
  text-align: right;
}
.complete .order .one a .order_list .order_unit .wrapper .order_icon {
  width: 100%;
  height: 15px;
  margin-top: 5px;
}
.complete .order .one a .order_list .order_unit .wrapper .order_icon span {
  display: block;
  width: 0.42rem;
  height: 14px;
  text-align: center;
  line-height: 14px;
  color: #e80080;
  border: 1px solid #e80080;
  font-size: 8px;
  border-radius: 3px;
}
.complete .order .one a .order_total {
  height: 0.24rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.complete .order .one a .order_total span:nth-child(1) {
  color: #98989f;
  font-size: 10px;
  margin-right: 10px;
}
.complete .order .one a .order_total span:nth-child(2) {
  color: #222;
  font-size: 12px;
}
.complete .order .one .control {
  width: 100%;
  height: 0.58rem;
  border-top: 1px dashed #ddd;
  display: flex;
  align-items: center;
  margin-top: 5px;
  padding: 0 10px;
  background: #fff;
  justify-content: flex-end;
}
.complete .order .one .control .again {
  width: 0.7rem;
  height: 0.3rem;
  text-align: center;
  line-height: 0.3rem;
  border: 1px solid #de3d96;
  color: #de3d96;
  font-size: 12px;
  border-radius: 3px;
}
.complete .last_order {
  width: 100%;
  height: 0.43rem;
  text-align: center;
  line-height: 0.34rem;
  font-size: 0.12rem;
  color: #999;
}
.complete .nothing {
  width: 100%;
  height: 1.9rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.complete .nothing img {
  width: 1.36rem;
  height: 1.36rem;
}
.complete .nothing span {
  color: #585c64;
  font-size: 0.2rem;
}
</style>