export default {
    path:"/search",
    component:_=>import("@pages/search"),
    name:"search",
    meta:{
        sign:true,
        flag:false,
        requiredAuth:false
    }
}