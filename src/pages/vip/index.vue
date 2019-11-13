<template>
    <div class="page">
       <div class="main">
        <div class="banner">
            <img src="http://h2.appsimg.com/a.appsimg.com/upload/flow/2019/11/07/191/15730953315416.jpg" alt="">
        </div>
        <div class="list">
            <img src="http://h2.appsimg.com/a.appsimg.com/upload/flow/2019/04/15/161/15553238357179.jpg" alt="">
            <img src="http://h2.appsimg.com/a.appsimg.com/upload/flow/2019/04/15/159/15553238493272.jpg" alt="">
            <img src="http://h2.appsimg.com/a.appsimg.com/upload/flow/2019/04/15/126/15553238628467.jpg" alt="">
        </div>
        <div class="img">
            <img src="http://h2.appsimg.com/a.appsimg.com/upload/flow/2019/04/04/198/15543463865945.jpg" alt="">
            <img src="http://h2.appsimg.com/a.appsimg.com/upload/flow/2019/04/04/171/15543464045927.jpg" alt="">
            <img src="http://h2.appsimg.com/a.appsimg.com/upload/flow/2019/04/04/121/15543464251931.jpg" alt="">
            <img src="http://h2.appsimg.com/a.appsimg.com/upload/flow/2019/04/04/109/15543464456414.jpg" alt="">
        </div>
        <div class="title">
            <img src="http://h2.appsimg.com/a.appsimg.com/upload/flow/2019/04/25/182/15561868764222.jpg" alt="">
        </div>
        <router-link class="one" v-for="(item,index) in  floor_list" 
        :key="index" tag="div"
         to="/details" >
            <img :src="item.data.brand.brand_image">
            <p>{{item.data.brand.title}}</p>
            <b>{{item.data.brand.discount}}</b>
        </router-link>
        
       </div>
    </div>
</template>
<script>
export default {
    name:"Vip",
    data(){
        return{
            floor_list:[],
            title:[
                {
                    index:0,
                    url:""
                },
            ]
        }
    },

    methods:{
    //   async handle(f){
    //          let datas= await ApiNowApi(f);
    //          console.log(datas);
    //     }
      async handle(){
             let datas= await ApiNowApi();
            //console.log(datas.data.data.floor_list)
              this.floor_list=datas.data.data.floor_list;
              console.log(this.floor_list);
        }
    },
 created() {
    
    //    let s="&width=640&height=460&net=wifi&changeResolution=2&channel_name=%E5%94%AF%E5%93%81%C2%B7%E5%A5%A2&app_name=shop_wap&app_version=4.0&mars_cid=1573134055381_d77dc5e6615d906667736b120fcb1764&warehouse=VIP_BJ&api_key=8cec5243ade04ed3a02c5972bcda0d3f&fdc_area_id=915105106106&province_id=101105&city_id=101105101&saturn=&wap_consumer=B&standby_id=nature&source_app=yd_wap&mobile_platform=2&platform=2&client=wap&lightart_version=1&mobile_channel=mobiles-adp%3Ag1o71nr0%3A%3A%3A%3A%7C%7C&menu_code=20180118001&load_more_token=eyJjaGFubmVsX2lkIjoiMTYiLCJ0c2lmdCI6IjAiLCJicmFuZF9vZmZzZXQiOiIzMCIsImJyYW5kX3JlZmVyX2luZGV4IjoiNiIsInRvcGljX2dyb3VwIjoiMCJ9&_=1573521532984";
    //     let urlDecode= URLDecoder.decode(s);

	// 	System.out.println(urlDecode);

       //this.handle("&width=640&height=460&net=wifi&changeResolution=2&channel_name=%E5%94%AF%E5%93%81%C2%B7%E5%A5%A2&app_name=shop_wap&app_version=4.0&mars_cid=1573134055381_d77dc5e6615d906667736b120fcb1764&warehouse=VIP_BJ&api_key=8cec5243ade04ed3a02c5972bcda0d3f&fdc_area_id=915105106106&province_id=101105&city_id=101105101&saturn=&wap_consumer=B&standby_id=nature&source_app=yd_wap&mobile_platform=2&platform=2&client=wap&lightart_version=1&mobile_channel=mobiles-adp%3Ag1o71nr0%3A%3A%3A%3A%7C%7C&menu_code=20180118001&load_more_token=eyJjaGFubmVsX2lkIjoiMTYiLCJ0c2lmdCI6IjAiLCJicmFuZF9vZmZzZXQiOiIzMCIsImJyYW5kX3JlZmVyX2luZGV4IjoiNiIsInRvcGljX2dyb3VwIjoiMCJ9&_=1573521532984")
         this.handle();
        
    },
}
</script>

<style>

</style>