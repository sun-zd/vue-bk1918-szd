<template>
  <div id="app">
    <Header v-if="$route.meta.sign" />
    <!-- <keep-alive> -->
      <router-view></router-view>
    <!-- </keep-alive> -->
    
    <Nav v-if="$route.meta.flag" />
   
  </div>
</template>
<script>
import Nav from '@common/components/nav'
import Header from '@common/components/header'
export default {
  name:"App",
  components:{
    Nav,
    Header
  }
}
</script>
<style lang="scss">
.page{
  width: 100%;
  height: 100%;
  position: absolute;
  top:0;
  left:0;
  right: 0;
  bottom: 0;
  padding-top: 0.6rem
}
.address_box {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
}
.address_box .back {
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  line-height: 0.4rem;
}
.address_box .back span {
  display: block;
  width: 0.4rem;
  height: 0.4rem;
  text-align: center;
  line-height: 0.4rem;
}
</style>
