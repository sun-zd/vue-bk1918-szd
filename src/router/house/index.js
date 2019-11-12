export default {
    path:"/house",
    component:_=>import("@pages/house"),
    name:"house",
    meta:{
        sign:true,
        flag:true,
        requiredAuth:false
    }
}