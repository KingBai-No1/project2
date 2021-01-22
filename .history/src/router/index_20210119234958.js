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
          {path:"/user/:edit",component:()=>import("../components/User/infor.vue"),meta:{selected:"/user"}},
          /* 商品管理 */
          {path:"/cate",component:()=>import("../components/Cate/index.vue"),meta:{selected:"/cate"}},
          {path:"/cate/add",component:()=>import("../components/Cate/infor.vue"),meta:{selected:"/cate"}},
          {path:"/cate/:edit",component:()=>import("../components/Cate/infor.vue"),meta:{selected:"/cate"}},
          /* 商品规格 */
          {path:"/specs",component:()=>import("../components/Cate/index.vue"),meta:{selected:"/specs"}},
          {path:"/specs/add",component:()=>import("../components/Cate/infor.vue"),meta:{selected:"/specs"}},
          {path:"/specs/:edit",component:()=>import("../components/Cate/infor.vue"),meta:{selected:"/specs"}}
        ]
      },
      /* 登录页面 */
      {path:"/login",component:()=>import("../components/login.vue")}
    ]
})

/* 全局守卫 */
router.beforeEach((to,from,next)=>{
  console.log(to);
  /* 如果目标路由是login的话，执行默认 */
  if(to.fullPath == "/login"){
    next()
  }else{
    /* 否则如果store的userinfor是空的话。跳到login */
    if(store.state.userinfor===null){
    next('/login')
  }else{
    console.log(to.fullPath);
    console.log(store.state.userinfor.menus_url);
    /* 解决没有某个权限，通过输入无权限的路由跳转的问题 */
    var allowpath = store.state.userinfor.menus_url
    /* 添加的路由是动态路由，需要通过源信息获取原路由 */
    var topath = to.meta.selected
    /* 判断，如果存在的路由中没有首页的路由，就添加进去 */
    if(allowpath.indexOf("/")<0){
      allowpath.push("/")
    }
    /* 判断存在的路由中是否存在，存在执行默认操作，没有就跳转到首页 */
    if(allowpath.indexOf(topath)>=0){
      next()
    }else{
      next("/")
    }
    
  }
  }
  
})

export default router