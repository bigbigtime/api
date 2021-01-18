import Api from "@/views/Api";
const routers = [
    {
        path: '/react',
        name: 'React',
        hidden: true,
        component: () => import("../../layout/Index.vue"),
        meta: {
            title: "React"
        },
        redirect: "ReactIndex",
        children: [
          {
            path: '/reactIndex',
            name: 'ReactIndex',
            meta: {
                title: "首页"
            },
            component: () => import("../../views/React.vue"),
          },
        ]
    },
    {
        path: '/account',
        name: 'Account',
        meta: {
            icon: "file",
            title: "帐户体系"
        },
        component: () => import("../../layout/Index.vue"),
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
                component: Api,
            }
        ]
    }
]

export default routers;