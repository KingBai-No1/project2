import axios from "axios"
import store from "../store/index"
const http = axios.create({

})

http.interceptors.request(req=>{
    if()
    req.Authorization = this.$store.state.userinfor
})

export default http