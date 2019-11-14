<template>
  <div class="page">
    <div class="address_box">
      <div class="back">
        <span class="iconfont" @click="handleBack()">&#xe614;</span>
        收货地址列表
        <span class="iconfont" @click="handleHome()">&#xe617;</span>
      </div>
      <van-address-list v-model="chosenAddressId" :list="list" @add="onAdd" @edit="onEdit" />
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { AddressList } from "vant";

Vue.use(AddressList);
export default {
  name: "Address",
  data() {
    return {
      chosenAddressId: "1",
      list: [
        {
          id: "1",
          name: "张三",
          tel: "13000000000",
          address: "浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室"
        },
        {
          id: "2",
          name: "李四",
          tel: "1310000000",
          address: "浙江省杭州市拱墅区莫干山路 50 号"
        }
      ]
    };
  },

  methods: {
    onAdd() {
      this.$router.push({path:"/address"});
    },
    onEdit(item, index) {
      Toast("编辑地址:" + index);
    },
    handleBack(){
      this.$router.back();
    },
    handleHome(){
        this.$router.push({path:"/reoommend"})
    }
  }
};
</script>
<style>

</style>