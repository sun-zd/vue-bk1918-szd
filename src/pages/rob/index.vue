<template>
  <div class="page">
    <Sunlly-scroll ref="scroll">
      <div class="main_box">
        <router-link class="poster" v-for="(item,index) in list" :key="index" tag="div" :to="'/details/'+item.id">
        <img :src="item.goods_img" class="im1" />
        </router-link>
      </div>
    </Sunlly-scroll>
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
  watch:{
    list(){
      this.$refs.scroll.handlefinishPullDown()
    }
    
  },
  created() {
    this.robNowApi();
  },
  methods: {
    async robNowApi() {
      let data = await robNowApi();
      this.list = data.data;
      console.log(this.list)
    }
  },
  mounted(){
    this.$refs.scroll.handlepullingDown();
    this.$refs.scroll.handleScroll();
  }
};
</script>

<style scoped>
.main_box {
  width: 100%;
}
.main_box .poster {
  width: 100%;
  height: 2.2rem;
}
.main_box .poster .im1 {
  width: 100%;
  height: 2rem;
}
</style>