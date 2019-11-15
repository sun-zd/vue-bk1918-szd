<template>
  <div class="page">
    <div class="address_box">
      <div class="back">
        <span class="iconfont" @click="handleBack()">&#xe614;</span>
        添加收获地址
        <span class="iconfont" @click="handlehome()">&#xe617;</span>
      </div>
      <van-address-edit
          :area-list="areaList"
          show-postal
          show-delete
          show-set-default
          show-search-result
          :search-result="searchResult"
          :area-columns-placeholder="['请选择', '请选择', '请选择']"
          @save="onSave"
          @delete="onDelete"
          @change-detail="onChangeDetail"
        />
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { AddressEdit } from "vant";

Vue.use(AddressEdit);
export default {
    name:"Address",
    data() {
    return {
      areaList,
      searchResult: []
    }
  },
  methods: {
    onSave() {
      Toast('save');
    },
    onDelete() {
      Toast('delete');
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [{
          name: '黄龙万科中心',
          address: '杭州市西湖区'
        }];
      } else {
        this.searchResult = [];
      }
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