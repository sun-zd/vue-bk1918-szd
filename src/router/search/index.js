export default {
    path:"/search",
    component:_=>import("@pages/search"),
    name:"search",
    meta:{
        sign:false,
        flag:false,
        requiredAuth:false
    }
}