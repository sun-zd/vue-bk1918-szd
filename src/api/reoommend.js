import http from "@utils/request"

export const indexNowApi=()=>http({
    method:"get",
    url:"/cache/wap/cache_home_1573703502946.json",
})


export const examineApi=()=>http({
    method:"get",
    url:"/yunifang/wap/goods/api/home/getGoodsOrActAds"
})
// export const searchApi =() =>http({
//     method:"get",
//     url:""
// })
export const searchApi=(goods_name)=>http({
    method:"post",
    url:"/yunifang/wap/goods/api/goods/search",
    data:{
        goods_name:goods_name
    }
})
