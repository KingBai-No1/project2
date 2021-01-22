import Vue from 'vue'
import Router from 'vue-router'
/* 引入仓库 */
import store from "../store/index.js"



Vue.use(Router)

const router =  new Router({
    routes:[
      {
        path:"/",
        component:()=>import("../components/Bes.vue"),
        meta:{selected:"/"},
        children:[
          {path:"/menu",component:()=>import("../components/Menu/index.vue"),meta:{selected:"/menu"},},
          {path:"/menu/add",component:()=>import("../components/Menu/infor.vue"),meta:{selected:"/menu"}},
          {path:"/menu/:edit",component:()=>import("../components/Menu/infor.vue"),meta:{selected:"/menu"}},
          /* 角色管理 */
          {path:"/role",component:()=>import("../components/Role/index.vue"),meta:{selected:"/role"}},
          {path:"/role/add",component:()=>import("../components/Role/infor.vue"),meta:{selected:"/role"}},
          {path:"/role/:edit",component:()=>import("../components/Role/infor.vue"),meta:{selected:"/role"}},
          /* 管理员管理 */
          {path:"/user",component:()=>import("../components/User/index.vue"),meta:{selected:"/user"}},
          {path:"/user/add",component:()=>import("../components/User/infor.vue"),meta:{selected:"/user"}},
          {path:"/user/:edit",component:()=>import("../components/User/infor.vue"),meta:{selected:"/user"}}
        ]
      },
      /* 登录页面 */
      {path:"/login",component:()=>import("../components/login.vue")}
    ]
})

router.beforeEach((to,from,next)=>{
  console.log(store,111111111);
  if(store.state.userinfor===null){
    next()
  }
})

export default router