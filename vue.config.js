const path=require('path');
module.exports={
    devServer:{
        proxy:{
            "/cache":{
                target:"https://image.yunifang.com",
                changeOrigin:true
            },
            "/yunifang":{
                target:"https://vip.yunifang.com",
                changeOrigin:true
            },
            "/member":{
                target:"https://vip.yunifang.com",
                changeOrigin:true
            }
        }
    },
    configureWebpack:{
        resolve:{
            alias:{
                "@":path.join(__dirname,"./src"),
                "@api":path.join(__dirname,"./src/api"),
                "@assets":path.join(__dirname,"./src/assets"),
                "@common":path.join(__dirname,"./src/common"),
                "@lib":path.join(__dirname,"./src/lib"),
                "@pages":path.join(__dirname,"./src/pages"),
                "@routers":path.join(__dirname,"./src/router"),
                "@store":path.join(__dirname,"./src/store"),
                "@utils":path.join(__dirname,"./src/utils")
            }
        }
    }
}
