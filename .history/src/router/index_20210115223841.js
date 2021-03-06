import Vue from 'vue'
import Router from 'vue-router'



Vue.use(Router)

export default new Router({
    routes:[
      {
        path:"/",
        component:()=>import("../components/Bes.vue"),
        children:[
          mate:{selected:"/"},
          {path:"/menu",component:()=>import("../components/Menu/index.vue"),mate:{selected:"/menu"},},
          {path:"/menu/add",component:()=>import("../components/Menu/infor.vue"),mate:{selected:"/menu"}},
          {path:"/menu/:edit",component:()=>import("../components/Menu/infor.vue"),mate:{selected:"/menu"}},
          {path:"/role",component:()=>import("../components/Role/index.vue"),mate:{selected:"/role"}}
        ]
      }
    ]
})
