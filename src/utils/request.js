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
<<<<<<< HEAD:src/utils/request.js
    return config;

=======
return config
>>>>>>> 174bd919dbb62da83fdfd13ebb7ca31e45ecee2e:src/utils/index.js
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
<<<<<<< HEAD:src/utils/request.js
export default server
=======

export default server;
>>>>>>> 174bd919dbb62da83fdfd13ebb7ca31e45ecee2e:src/utils/index.js
