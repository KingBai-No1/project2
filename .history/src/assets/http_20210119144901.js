import axios from "axios"
import store from "../store/index"
const http = axios.create({

})
/* 请求拦截器 */
http.interceptors.request.use(req=>{
    if(store.state.userinfor){
        req.headers.Authorization = store.state.userinfor.token
    } 
    return req
})

/* 响应拦截器 */
http.interceptors.response.use
export default http