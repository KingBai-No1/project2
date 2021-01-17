import Vue from 'vue'
import Router from 'vue-router'



Vue.use(Router)

export default new Router({
    routes:[
      {
        path:"/",
        component:()=>import("../components/Bes.vue"),
        mate:{selected:"/"}
        children:[
          {path:"/menu",component:()=>import("../components/Menu/index.vue")},
          {path:"/menu/add",component:()=>import("../components/Menu/infor.vue")},
          {path:"/menu/:edit",component:()=>import("../components/Menu/infor.vue")},
          {path:"/role",component:()=>import("../components/Role/index.vue")}
        ]
      }
    ]
})
