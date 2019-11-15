<template>
    <div class="wrapper" ref="wrapper">
        <slot></slot>
    </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
    name:"better-S",
    mounted() {
        console.log(111);
       this.constroll= new BScroll(this.$refs.wrapper);
       console.log( this.constroll);
    },
}
</script>
<style >
  .wrapper
 {
  height: 100%;
  position: relative;
  top:0.6rem;
  left: 0;
  background: #fff; 
} 

</style>  
