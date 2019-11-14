import http from "@utils/request"

export const indexNowApi=(mobile_channel)=>http({
    method:"get",
    url:"vips-mobile/rest/layout/h5/channel/data?f=&width=640&height=460&net=wifi&changeResolution=2&channel_name=%E4%BB%8A%E6%97%A5%E6%8E%A8%E8%8D%90&app_name=shop_wap&app_version=4.0&mars_cid=1573542023679_858e4941e6f93bd36ee9c3bbe5cf5257&warehouse=VIP_BJ&api_key=8cec5243ade04ed3a02c5972bcda0d3f&fdc_area_id=101101101&province_id=101101&city_id=101101101&saturn=&wap_consumer=C1-1&standby_id=nature&source_app=yd_wap&mobile_platform=2&platform=2&client=wap&lightart_version=1&mobile_channel=mobiles-adp%3Ag1o71nr0%3A%3A%3A%3A%7C%7C&menu_code=20181203001&_=1573547709652",
    data:{
        mobile_channel:mobile_channel
    }
})
// export const indexNowApi=(data)=>{
//     console.log(data);
// }