export default {
    path:"/vip",
    component:_=>import("@pages/vip"),
    name:"vip",
    meta:{
        sign:true,
        flag:true,
        requiredAuth:false
    }
}