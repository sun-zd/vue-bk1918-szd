import http from "@utils/request";
export const detailsNowApi=(id)=>http({
    method:"get",  
    url:"/yunifang/wap/goods/api/goods/detail"+"/"+id,
    // data:{
        
    // }
    // https://image.yunifang.com/cache/wap/cache_category_detail_142_1573649871628.json
    // https://vip.yunifang.com/yunifang/wap/goods/api/category/detail/142?number=10&sort=9
})
export const detailNowApi=(id,version)=>http({
    method:"get",  
    url:"/cache/wap/cache_goods_"+id+"_"+version+".json",
    // data:{
        
    // }
    // https://image.yunifang.com/cache/wap/cache_category_detail_142_1573649871628.json
    // https://vip.yunifang.com/yunifang/wap/goods/api/category/detail/142?number=10&sort=9
})