import axios from "axios";
import {ElMessage} from "element-plus";
//1、对axios二次封装
const requests = axios.create({
    baseURL:'/',
    timeout: 5000,
})
//2、配置请求拦截器
requests.interceptors.request.use(config => {
    //config内主要是对请求头Header配置
    //比如添加token

    return config;
})
//3、配置相应拦截器
requests.interceptors.response.use((res) => {
    //成功的回调函数
    return  res.data;
},(error) => {
    let status = error.response.status
    switch (status){
        case '404':
            ElMessage({
                type:'error',
                message:error
            })
            break;
    }
    console.log(status)
    //失败的回调函数
    console.log("响应失败"+error)
    return Promise.reject(new Error('fail'))
})
//4、对外暴露
export default requests;