<template>
  <div class="page">
    <div class="min_box">
      <div class="first">
        <div class="poto">
          <img
            src="http://h2.appsimg.com/b.appsimg.com/2016/03/16/7314/14581158319696.png"
            alt
            class="img1"
          />
        </div>
        <div class="one">
          <img
            src="https://h2.appsimg.com/a.appsimg.com/upload/uls/0/2018/12/11/150/deae2906957a4f30a33577a686379f4f.png"
            alt
          />
          <span>银卡会员</span>
        </div>
        <div class="two">182*****980</div>
      </div>
    </div>
    <div class="mine_box">
      <div class="user_order">
        <router-link tag="a" to='/obli'>
          <span>
            <i class="iconfont">&#xe673;</i>
          </span>
          <span>待付款</span>
        </router-link>
        <a href="javascript:;">
          <span>
            <i class="iconfont">&#xe6f0;</i>
          </span>
          <span>待收获</span>
        </a>
        <router-link tag="a" to='/indent'>
          <span>
            <i class="iconfont">&#xe64b;</i>
          </span>
          <span>全部订单</span>
        </router-link>
      </div>
      <div class="user_menus">
        <ul>
          <li>
            <a href="javascript:;">
              <span>我的收藏</span>
              <i class="iconfont">&#xe63b;</i>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <span>购物车历史</span>
              <i class="iconfont">&#xe63b;</i>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <span>浏览历史</span>
              <i class="iconfont">&#xe63b;</i>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <span>申请退换</span>
              <i class="iconfont">&#xe63b;</i>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <span>零钱</span>
              <i class="iconfont">&#xe63b;</i>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <span>唯品花</span>
              <i class="iconfont">&#xe63b;</i>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <span>优惠券</span>
              <i class="iconfont">&#xe63b;</i>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <span>我的唯品币</span>
              <i class="iconfont">&#xe63b;</i>
            </a>
          </li>
          <li>
            <a href="/#/dir">
              <span>收获地址</span>
              <i class="iconfont">&#xe63b;</i>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <span>修改登录密码</span>
              <i class="iconfont">&#xe63b;</i>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <span>管理支付密码</span>
              <i class="iconfont">&#xe63b;</i>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <span>绑定手机</span>
              <i class="iconfont">&#xe63b;</i>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <span>实名认证</span>
              <i class="iconfont">&#xe63b;</i>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <span>我的银行卡</span>
              <i class="iconfont">&#xe63b;</i>
            </a>
          </li>
        </ul>
      </div>
      <div class="user_logout">
        <a href="javascript:;">退出登录</a>
      </div>
      <div class="foot_downlod">
        <a href="javascript:;">
          <div>
            <span>唯品会</span>
            <i>唯品会客户端，特卖抢不停</i>
          </div>
          <div>下载</div>
        </a>
      </div>
      <div class="page_foot">
        <div class="wap_foot">
          <div class="first">
            <a href="javascript:;" v-for="(pers,num) in three" :key="num">{{pers.name}}</a>
          </div>
          <p>Copyright © 2008-2017 m.vip.com, All Rights Reserved 粤ICP备08114786号</p>
          <div class="last">
            <a href="javascript:;">
              <span></span>
              <i>粤公网安备 44010302000068号</i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
import { CouponCell, CouponList } from 'vant';

Vue.use(CouponCell).use(CouponList);
export default {
  name: "House",
  data() {
    return {
      three: [
        { name: "唯品会首页" },
        { name: "关于我们" },
        { name: "个人中心" }
      ]
    };
  }
};
</script>
  
<style>
.min_box {
  width: 100%;
  height: 1.75rem;
  background: url("http://h2.vipstatic.com/ms2-m.vipstatic.com/static/base/img/07e0a3f4.user-login-bg.png")
    no-repeat;
  background-size: 100%;
  overflow-y: auto;
}
.min_box .top {
  display: flex;
  justify-content: space-between;
}
.min_box .top span {
  display: block;
  width: 0.4rem;
  height: 0.4rem;
  text-align: center;
  line-height: 0.4rem;
}
.min_box .first {
  width: 100%;
  height: 1.14rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.min_box .first .poto {
  width: 0.7rem;
  height: 0.7rem;
  border-radius: 50%;
  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgCAMAAAC8EZcfAAABgFBMVEUAAAC3oGq4o3G9pHCxmWeOdE3IrnvArHbLv5iXeEPEoU6znGnEu4rBrpCkiFibejyVdDyuklnMvpSFWRy+sZ3Dsn+qkFnMvJDNvIni1abk3LKzll/x6szDrXjs4Jvi16DDt6a7pnORbTydfUiDYSygg0fa2L7+/fv5+dz///+jjFWmk2C1mmeylV2umWedekamil/38+zy7uSrk2vIsnKlhEiYflXUwpXArXqsiU6QdkDCsIS5p3u2pHOchE+ehl/Nuoq7o2qum3aujly7qIS/pnS1nl/Bq2zu6dzHtZTJtYWsklDay4+RbzKVfkq3nXff1bv6+PPr49G0kEz9/fjTwofh2se1m1LWyZ6jkW+0oGybdjGdgTrm37DWz6qHaj2lglTh06zTuXLr5MKrij/d0p/MsWnKu3ypfTV1ThWxooTXyLO7sYnx6q6JYie9pV5+XDDKrVy+mmKWbD/RxKjKwKWHaC+YbCW2j2bbx3748r/gypz9/eH59c7n1oZfOgwhvo8bAAAAfHRSTlMAeBCjB/7+Jf4r/VT+/I1bidNY/v6SvrLKdi3si8b5vf7nyLak4Nup0//////////////////////////////////////////////////////////////////////////////////////////////////////////////+utNpBQAADj9JREFUGBnNwQVj22YaAODXKDmJw9AG2q7ttvvEYMsyMzMzxwGHmdu/ftfb7UbFkPU8AA+nxaampt+/e/GvyomZqLG66szMu/eTU1MGLYycelyleW2R4jeiVx8fZPbDm+use2KwlaRqjBhIzWgmx9UwKurxhRnpTEqV9xkTy+ktzuYt0zhISlFdSHRt1F1iILUt+WrmmclZNTw7TPV232oJ9+y4dNgmw+fBgVNsrJvKm742kWLb+3ubbOc8ennY6fgIM+5bUxngGRkmfw7joo1wldDRqwl3MMX4mZbD5mt2KzVfsqyPsltXppjfinIR3tzHt2mL3+qdUWHwLLTji5KTXo8zelpXuS7HJ0QyfGx2e6w6/Dqho3vJICP5L+l6uNJxyjs7nVSyIceSRCxM2ZemtPDUsEndobPo4ObqqcY6ZW5Ud6gLvz0Wnc9E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")
    no-repeat;
  background-size: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.min_box .first .img1 {
  width: 0.6rem;
  height: 0.6rem;
  border-radius: 50%;
}
.min_box .first .one {
  width: 100%;
  height: 0.22rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
}
.min_box .first .one img {
  width: 0.2rem;
  height: 0.2rem;
}
.min_box .first .one span {
  font-size: 0.12rem;
  color: #98989f;
  position: relative;
}
.min_box .first .two {
  text-align: center;
  color: #222;
  font-size: 11px;
}
.mine_box {
  flex: 1;
}
.mine_box .user_order {
  width: 100%;
  height: 0.7rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.2rem;
}
.mine_box .user_order a {
  display: flex;
  width: 30%;
  height: 0.7rem;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.mine_box .user_order a span:nth-child(1) {
  width: 0.32rem;
  height: 0.32rem;
  display: block;
  border-radius: 50%;
  background: #fcf9f1;
  position: relative;
  line-height: 0.32rem;
  text-align: center;
}
.mine_box .user_order a span i {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  color: #666;
}
.mine_box .user_order a span:nth-child(2) {
  font-size: 0.08rem;
  color: #585c64;
  margin-top: 10px;
}
.mine_box .user_menus {
  width: 100%;
  height: 5.9rem;
  border-top: 1px solid #ddd;
  margin-bottom: 0.2rem;
}
.mine_box .user_menus ul {
  width: 100%;
  height: 100%;
}
.mine_box .user_menus ul li {
  width: 100%;
  height: 0.42rem;
  display: block;
  margin: 0;
}
.mine_box .user_menus ul li a {
  width: 100%;
  height: 100%;
  padding: 0 0.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #555;
}
.mine_box .user_menus ul li a span {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 14px;
  letter-spacing: 1px;
}
.mine_box .user_menus ul li a i {
  display: inline-block;
  width: 16px;
  height: 16px;
}
.mine_box .user_logout {
  width: 100%;
  height: 0.42rem;
  border-top: 1px solid #ddd;
}
.mine_box .user_logout a {
  display: block;
  width: 100%;
  height: 100%;
  color: #555;
  font-size: 14px;
  text-align: center;
  line-height: 0.34rem;
}
.mine_box .foot_downlod {
  height: 0.52rem;
  background: #f3f4f5;
}
.mine_box .foot_downlod a {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0 12px;
}
.mine_box .foot_downlod a div:nth-child(1) {
  width: 2.74rem;
  height: 0.35rem;
  display: flex;
  align-items: center;
}
.mine_box .foot_downlod a div:nth-child(1) span {
  display: block;
  width: 0.36rem;
  height: 0.36rem;
  border-radius: 10px;
  background: #ea4c88;
  color: #fff;
  font-size: 12px;
  text-align: center;
  line-height: 0.36rem;
}
.mine_box .foot_downlod a div:nth-child(1) i {
  overflow: hidden;
  word-break: break-all;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #222;
  font-size: 12px;
  margin-left: 10px;
}
.mine_box .foot_downlod a div:nth-child(2) {
  width: 0.6rem;
  height: 0.26rem;
  text-align: center;
  line-height: 0.26rem;
  border: 1px solid #cf3e8e;
  color: #cf3e8e;
  font-size: 12px;
}
.mine_box .page_foot {
  width: 100%;
  height: 1.23rem;
  border-top: 1px solid #ddd;
}
.mine_box .page_foot .wap_foot {
  width: 100%;
  height: 100%;
  background: #f3f4f5;
}
.mine_box .page_foot .wap_foot .first {
  width: 100%;
  height: 0.25rem;
  padding: 0 10px;
}
.mine_box .page_foot .wap_foot .first a {
  font-size: 0.12rem;
  margin-top: 5px;
  color: #585c64;
}
.mine_box .page_foot .wap_foot .first a:nth-child(1) {
  float: left;
}
.mine_box .page_foot .wap_foot .first a:nth-child(2) {
  float: left;
  margin-left: 10px;
}
.mine_box .page_foot .wap_foot .first a:nth-child(3) {
  float: right;
}
.mine_box .page_foot .wap_foot p {
  font-size: 10px;
  color: #ccc;
  text-align: center;
  padding: 10px;
}
.mine_box .page_foot .wap_foot .last {
  width: 2.56rem;
  height: 0.53rem;
  margin: 0 auto;
  display: flex;
  justify-content: center;
}
.mine_box .page_foot .wap_foot .last span {
  width: 0.2rem;
  height: 0.17rem;
  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAACWFBMVEUAAADnw3P/+cnYrn3ks2HeqFfu46v+/ODz6Kr//+P9/eXyzHnpx4udaFjx166xkHz387jz6ZL034vcp1nx38fQq3Ht3oDq2IP79NDkvFnTk3DZr4LKhFvDfz7r0pjbnFHpyF7jrFPnvGz488ns2Y3oxnzv2X/42oL+2I//74bktoDktoLjvGnfr2fhs2j/95fw1rvbrGLZqG3Rrnb9v1TbuofksVDVHhgAAXgBAW3gpUpvd4XNAAIDAmXluVzpx2PqyFzrwFfuzWbqvFrlv1LWjkbYkj7XPiD/0ljaSinklTj90Gj143Prv0/ruFDpwWDmt1femUTw1Gz1x1fltFvThT3UAwmwo2zdhTXcnUP/217+xVLysERaU2rJJxPTOCLQFg3XdTjQPynXYTHpgj79LA/yy27uXiP5oj+7ABDtcTDgbjbBvINtgpFzY2GUj4G7TCYAAIDu2HXouU/psUvorknuyFrpym3alkrvymE4FjfzfCjVdCjPLBrYnliRelnWMR+9kF7ooD3XkVNONU/8jiy5i1j/723twmL/2E2TYDY6EjnBDAvRDBGptJHNrFLWwHhODk7/vmDVaDLJWSpUOFMMAF1cX3hgHlDEGAqUd1zFUiSNhndCJETZAAbGPh2Ej5lMADnVSCrLPSFpAjaxDg4AG47dtmmBWDrEazOEaUrlYCOjfVKeXzAAEHriqVfgjkfKtnj/4mPy2HgXMInTZT18ennYzHfNwnHiRh42Gk2njVn2gjbTvIe1gD8ACJH6xESjmYSUjHXOeDrFrny0mVgcPpf/tUnV4jRxAAAANnRSTlMA6Uas5saACEIaJcOa+WnOAqu660EC4ZNc9BRIXZyM0vDkvFon++wwsr6xx+Db+TUc9eVvw5jVfch/AAABbklEQVQY02NggABOPn5+Pk4GZMDEzLt2xao1vMxMCDH2xqqulauzlod3t7HDxDi5W+qrw+I9bTL6pmpARbn0dsW2mpvXeib0TLKey6gCFtQ/VLg7PazBvDfeJj3Hco46SMzAJN9i38555u7u5jbu2y23aXIBBY0zDhYe3WMzxc1lQ0LWDst8DzagoKnXkf15BwrmT07Mdt2UZ5ETwwMUNIpIO2ZZkLJocXJS9lbbLZu9dIGChoeP51pkpibPTkxJzbTMjQ7VAQpqRXrvXbZw6cy4OM+kJes2epuBtGu7rfdeYGFrO3HGNFsL66gQK26goGpds1fahFnW4f3TY607miLN1ICCyi5WrjXBUZ3RMR7tHhGuZg4cINdLKLiEujk5mzk7BQVWlDOCxRhEWBzsAxwd/CudrQKC7IUhgkI+RXYhzmb+foFWdnZOPoKQ0BSXLA72LfErdSzztRdjE4AGqJSMLKu8Igurkpy0KIgPAF1iah19uh7QAAAAAElFTkSuQmCC")
    no-repeat;
  float: left;
}
.mine_box .page_foot .wap_foot .last i {
  color: #ccc;
  font-size: 12px;
  float: left;
  margin-left: 5px;
}
</style>