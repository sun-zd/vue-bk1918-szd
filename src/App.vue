<template>
  <div id="app">
<<<<<<< HEAD
    <Header v-if="$route.meta.sign" />
     <router-view></router-view>
=======
    <router-view></router-view>
    <Header v-if="$route.meta.flag"/>
>>>>>>> jy
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
  height: 100%;
  position: absolute;
  top:0;
  left:0;
  right: 0;
  bottom: 0;
  padding-top: 0.6rem
}
</style>
