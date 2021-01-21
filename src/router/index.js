import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../layout/Index.vue'
Vue.use(VueRouter)

const defaultRouterMap = [
  {
    path: '/',
    name: 'Layout',
    hidden: true,
    component: Layout,
    redirect: "Home",
    children: [
      {
        path: '/home',
        name: 'Home',
        hidden: true,
        component: () => import("../views/home/Index"),
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'hash',
  routes: defaultRouterMap
})
export default router
