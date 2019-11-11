export default {
    path:"/life",
    component:_=>import("@pages/life"),
    name:"life",
    meta:{
        flag:true,
        requiredAuth:false
    }
}