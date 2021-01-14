import Layout from '../../layout/Index.vue'
const account = {
    path: '/account',
    name: 'Account',
    meta: {
        icon: "file",
        title: "帐户体系"
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Layout,
    children: [
        {
            path: '/login',
            name: 'Login',
            meta: {
                title: "登录",
                method: "POST"
            },
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import("../../views/account/Login"),
        }
    ]

}

export default account;