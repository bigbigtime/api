import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../layout/Index.vue'

Vue.use(VueRouter)

import Basis from "./modules/basis";
import Account from "./modules/account";

const routes = [
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
  },
  Basis,
  Account
]

const router = new VueRouter({
  routes
})

export default router
