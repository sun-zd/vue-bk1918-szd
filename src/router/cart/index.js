export default {
    path:"/cart",
    component:_=>import("@pages/cart"),
    name:"cart",
    meta:{
        sign:false,
        flag:false,
        requiredAuth:false
    }
}