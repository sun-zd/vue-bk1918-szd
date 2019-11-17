export default {
    path:"/dir",
    component:_=>import("@pages/dir"),
    name:"dir",
    meta:{
        sign:false,
        flag:false,
        requiredAuth:false
    }
}