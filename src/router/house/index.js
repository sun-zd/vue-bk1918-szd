export default {
    path:"/house",
    component:_=>import("@pages/house"),
    name:"house",
    meta:{
        flag:true,
        requiredAuth:false
    }
}