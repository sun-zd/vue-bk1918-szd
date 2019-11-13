<template>
  <div id="app">
    <router-view></router-view>
    <Header/>
    <Nav v-if="$route.meta.flag" />
   
  </div>
</template>
<script>
import Header from '@common/components/header'
import Nav from '@common/components/nav'
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
  height: 100%;
  position: absolute;
  top:0;
  left:0;
  right: 0;
  bottom: 0;
  padding-top: 0.6rem
}
</style>
