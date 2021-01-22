import axios from "axios"
import store from "../src/store/index"
const http = axios.create({

})

http.interceptors.request(req=>{
    req.Authorization = this.$store.state.userinfor
})

export default http