import Vue from "vue";
import VueRouter from "vue-router"
import reoomment from "./reoommend"
import life from "./life"
import house from "./house"
import rob from "./rob"
import vip from "./vip"
import mine from "./mine";
Vue.use(VueRouter)

const router=new VueRouter({
    mode:"hash",
    routes:[
        {
            path:"/",
            redirect:"/reoommend",
            meta:{
                flag:true,
                requiredAuth:false
            }  
        },
        reoomment,
        house,
        life,
        rob,
        vip,
        mine,
       {
           path:"/login",
           name:"login",
           component:_=>import("@pages/login"),
           meta:{
               flag:false
           }
       }
    ]
    
})


router.beforeEach((to,from,next)=>{
    if(to.path !="/login" && to.meta.requiredAuth){
        if(localStorage.getItem("token")){
            next();
        }else{
            next({name:"login",params:{to:to.path}})
        }

    }else{
        next();
    }
})


export default router;