import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
  {
    path:"/login",
    name:"login",
    component:()=> import("../components/login/index.vue")
  },
  {
    path:"/home",
    name:"home",
    component:()=> import("../components/home/index.vue")
  },
  {
    path:'/',
    redirect: '/login'
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
