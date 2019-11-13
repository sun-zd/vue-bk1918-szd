<template>

    <div id="nav">
        <ul>
            <router-link
            tag="li"
            v-for="item in navs" 
            :key="item.id"
            class="a"
            :to="item.path"
            >{{item.text}}</router-link>
        </ul>
    </div>
</template> 
<script>
export default {
    name:"Nav",
    data(){
        return{
            navs:[
                {
                    id:0,
                    text:"推荐",
                    path:"/reoommend"
                },
                {
                    id:1,
                    text:"返厂",
                    path:"/rob"
                },
                {
                    id:2,
                    text:"彩妆",
                    path:"/vip"
                },
                {
                    id:3,
                    text:"会员",
                    path:"/life"
                },
                {
                    id:4,
                    text:"我的",
                    path:"/house"
                },
            ]
        }
    }
}
</script>
<style >
    #nav{
        width: 100%;
        height:0.3rem;
        position: fixed;
        left: 0;
        top:0.3rem;
        background: #fff

    }
    #nav ul .router-link-active{
        color:#c33; 
    }
   #nav ul{
       width: 100%;
       height: 100%;
       display: flex;
       justify-content:space-around;
       align-items: center;
    }
    #nav ul li{
        font-size: 0.12rem
    }
</style>