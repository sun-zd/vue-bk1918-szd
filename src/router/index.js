import Vue from "vue";
import VueRouter from "vue-router"
import reoomment from "./reoommend"
import life from "./life"
import house from "./house"
import rob from "./rob"
import vip from "./vip"
<<<<<<< HEAD
import mine from "./mine";
=======
import details from "./details"
>>>>>>> 174bd919dbb62da83fdfd13ebb7ca31e45ecee2e
Vue.use(VueRouter)

const router=new VueRouter({
    mode:"hash",
    routes:[
        {
            path:"/",
            redirect:"/reoommend",
            meta:{
                sign:true,
                flag:true,
                requiredAuth:false
            }  
        },
        reoomment,
        house,
        life,
        rob,
        vip,
<<<<<<< HEAD
        mine,
=======
        details,
>>>>>>> 174bd919dbb62da83fdfd13ebb7ca31e45ecee2e
       {
           path:"/login",
           name:"login",
           component:_=>import("@pages/login"),
           meta:{
               flag:false,
               sign:true,
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