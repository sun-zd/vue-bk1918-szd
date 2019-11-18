import http from "@utils/request";
export const registerApi=(username,password)=>http({
    method:"get",
    url:"/users/register",
    data:{
        username:username,
        password:password
    }
    // data:{
    //     user_name:user_name
    //url:"/users/register?username="+name+"&password="+pass,
    // }
})
export const loginApi=(username,password)=>http({
    method:"get",
    url:"/users/login",
    data:{
        username:username,
        password:password
    }
})