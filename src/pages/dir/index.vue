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
import {onSave} from "../address";
Vue.use(AddressList);
export default {
  name: "Address",
  data() {
    return {
      chosenAddressId: "1",
      list: []
    };
  },
  created() {
    // this.list.push(this.$router.currentRoute.query);
    // sessionStorage.getItem("dir_info",JSON.stringify(this.list));
    this.list=JSON.parse(sessionStorage.getItem("dir_info"));
    
  },
  methods: {
    async handleList(){
      
    },
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