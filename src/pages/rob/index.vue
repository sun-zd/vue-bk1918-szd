<template>
  <div class="page">
    <div class="main_box">
      <div class="poster" v-for="(item,index) in list" :key="index">
        <img :src="item.goods_img" class="im1" />
      </div>
    </div>
  </div>
</template>
<script>
import { robNowApi } from "@api/rob.js";
export default {
  name: "Rob",
  data() {
    return {
      list: []
    };
  },
  created() {
    this.robNowApi();
  },
  methods: {
    async robNowApi() {
      let data = await robNowApi();
      this.list = data.data;
    }
  },
};
</script>

<style>
.main_box {
  width: 100%;
  height: 100%;
}
.main_box  .poster {
  width: 100%;
  height: 2.2rem;
}
.main_box .poster .im1 {
  width: 100%;
  height: 2rem;
}
</style>