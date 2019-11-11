export default {
    path:"/vip",
    component:_=>import("@pages/vip"),
    name:"vip",
    meta:{
        flag:true,
        requiredAuth:false
    }
}