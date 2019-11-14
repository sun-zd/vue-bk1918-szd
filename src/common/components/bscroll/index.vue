<template>
    <div class="wrapper" ref="wrapper">
        <slot></slot>
    </div>
</template>
<script>
import BScroll from "better-scroll";
export default {
    name:"szd-scroll",
    mounted(){
        new BScroll(this.$refs.wrapper);
    }
}
</script>
<style>

</style>