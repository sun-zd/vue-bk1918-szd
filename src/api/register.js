import http from "@utils/request";
export const registerApi=(username,password)=>http({
    method:"get",
    url:"/users/register",
    data:{
        username,
        password
    }
})