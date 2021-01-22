import axios from "axios"
import store from "../store/index"
const http = axios.create({

})

http.interceptors.request.use(req=>{
    if(store.state.userinfor){
        req.Authorization = store.state.userinfor.token
    } 
    return req
})

export default http