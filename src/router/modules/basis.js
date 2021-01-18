import Layout from '../../layout/Index.vue'
import Api from "../../views/Api";
const basis = {
    path: '/basis',
    name: 'Basis',
    meta: {
        icon: "file",
        title: "全局公共接口"
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Layout,
    children: [
        {
            path: '/getCode',
            name: 'GetCode',
            meta: {
                icon: "qq",
                title: "获取验证码",
                api: "getSms"
            },
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: Api,
        }
    ]

}

export default basis;