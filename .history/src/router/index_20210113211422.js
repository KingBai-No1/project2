import Vue from 'vue'
import Router from 'vue-router'
import vBes from "../components/Bes"
import 


Vue.use(Router)

export default new Router({
    routes:[
      {
        path:"/",
        component:()=>import("../components/Bes.vue"),
        children:[
          {path:"/course",component:()=>import('../components/course.vue')},
          {path:"/student",component:()=>import("../components/student.vue")}
        ]
      }
    ]
})
