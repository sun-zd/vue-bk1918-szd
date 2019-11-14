<template>
  <div class="page">
    <div class="address_box">
      <div class="back">
        <span class="iconfont" @click="handleBack()">&#xe614;</span>
        全部订单
        <span class="iconfont" @click="handleHome()">&#xe617;</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Indent",
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
</style>