import http from "@utils/request"

export const indexNowApi=(mobile_channel)=>http({
    method:"get",
   
    data:{
        mobile_channel:mobile_channel
    }
})
// export const indexNowApi=(data)=>{
//     console.log(data);
// }