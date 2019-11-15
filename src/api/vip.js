import http from "@utils/request";

// export const ApiNowApi=(f)=>http({
//     method:"get",
//     url:"/vips-mobile/rest/layout/h5/channel/data?",
//     params:{
//         f:f
//     }
// })
export const ApiNowApi=(goods_type)=>http({
    method:"get",
    url:"/cache/wap/cache_category_detail_142_1573649209314.json",
    data:{
        goods_type:goods_type
    }
    // https://image.yunifang.com/cache/wap/cache_category_detail_142_1573649871628.json
    // https://vip.yunifang.com/yunifang/wap/goods/api/category/detail/142?number=10&sort=9
})
