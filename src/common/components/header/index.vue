<template>
    <div class="header">
      <div class="logo">
        <span>
          <a href="/#/login" class="iconfont" >&#xe606;</a>
        </span>
      </div>
      <div class="search">
        <span><a href="/#/search">大家正在搜索:女式大衣</a></span>
      </div>
      <div class="list iconfont">
        <a href="/#/jia">&#xe7e8;</a>
      </div>
    </div>

</template>
<script>
export default {
    name:"Header",
}
</script>
<style lang="scss">

.header {
  width: 100%;
  height: 0.3rem;
  background: #fff;
  font-size: 12px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background: #fff;
}
.header .logo {
  width: 0.3rem;
  height: 0.3rem;
  float: left;
  text-align: center;
  line-height: 0.3rem;
}
.header .logo a {
  display: block;
  color: #585c64;
  width: 100%;
  height: 100%；;
}
.header .search {
  width: 2.3468rem;
  height: 0.256rem;
  line-height: 0.23rem;
  border: 1px solid #ccc;
  float: left;
  margin-left: 0.05rem;
  margin-top: 0.06rem;
  border-radius: 0.11rem;
  color: #98989f;
  background-color: #f3f4f5;
  padding-left: 0.1rem;
}
.header .list {
  width: 0.3745rem;
  height: 0.3rem;
  float: right;
  background: #fff;
  text-align: center;
  line-height: 0.3rem;
}
.header .list a {
  display: block;
  width: 100%;
  height: 100%;
  color: #585c64;
}
.nav {
  z-index: 12;
  width: 100%;
  height: 0.2901rem;
  background: #fff;
  position: relative;
  font-size: 12px;
}
.nav ul {
  background: #fff;
  width: 100%;
  height: 0.2901rem;
  position: absolute;
  top: 0;
  left: 0;
  white-space: nowrap;
  overflow: auto;
}
ul::-webkit-scrollbar {
  display: none;
}
ul li {
  display: inline-block;
  height: 0.288rem;
  line-height: 0.288rem;
  margin: 0 10px;
}
ul li a {
  color: #000;
}
.nav span {
  display: block;
  width: 0.3413rem;
  height: 0.2901rem;
  background: #fff;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  text-align: center;
  line-height: 0.3rem;
}
.nav span a {
  display: block;
  width: 100%;
  height: 100%;
  color: #585c64;
}
.cart {
  width: 0.4rem;
  height: 0.4rem;
  border-radius: 0.2rem;
  background: #000;
  position: fixed;
  bottom: 0.2rem;
  left: 0.1rem;
  color: #fff;
  text-align: center;
  line-height: 0.4rem;
  font-size: 12px;
  z-index: 11;
} 

</style>