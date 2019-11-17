import http from "@utils/request";
export const LifeApi=()=>http({
    method:"get",
    url:"/yunifang/wap/user/api/user/getInfo",
    // data:{
    //     user_name:user_name
    // }
})