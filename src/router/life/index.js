export default {
    path:"/life",
    component:_=>import("@pages/life"),
    name:"life",
    meta:{
        sign:true,
        flag:true,
        requiredAuth:false
    }
}