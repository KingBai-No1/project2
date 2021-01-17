import Vue from 'vue'
import Router from 'vue-router'
import vBes from "../components/Bes"


Vue.use(Router)

export default new Router({
    routes:[
      {
        path:"/",
        component:()=>import("../components/Bes.vue"),
        children:{
          {pa}
        }
      }
    ]
})
