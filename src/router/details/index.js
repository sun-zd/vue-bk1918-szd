export default {
    path:"/details/:id",
    component:_=>import("@pages/details"),
    name:"details",
    meta:{sign:false,
        flag:false,
        requiredAuth:false
    },
    props:true
}