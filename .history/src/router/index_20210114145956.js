import Vue from 'vue'
import Router from 'vue-router'



Vue.use(Router)

export default new Router({
    routes:[
      {
        path:"/",
        component:()=>import("../components/Bes.vue"),
        children:[
          {path:"/menu",component:()=>import("../components/Menu/index.vue")},
          {path:"/menu/add",component:()=>import("../components/Menu/infor.vue")}
        ]
      }
    ]
})
