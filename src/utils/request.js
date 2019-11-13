import axios from "axios";
const server = axios.create({
    timeout: 5000,
    //baseUrl:"",
    withCredentials: true,
})

server.interceptors.request.use((config) => {
    if (config.method == "GET") {
        config.params = { ...config.data };
    }
    // if(config.method == "POST"){
    //     config.params = { ...config.data };
    // }

    // config.headers["content-type"]="applicetion/json";
    // config.headers["token"]="applicetion/json";
return config
}, (err) => {
    return Promise.reject(err);
})
//响应
server.interceptors.response.use((res) => {
    if (res.status == 200) {
        return res.data;
    }
}, (err) => {
    return Promise.reject(err);
})

export default server;
