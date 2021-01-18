import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../layout/Index.vue'

Vue.use(VueRouter)

import Basis from "./modules/basis";
import Account from "./modules/account";

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
console.log(router.options.routes)
export default router
