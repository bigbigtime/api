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
        path: '/basis',
        name: 'Basis',
        meta: {
            icon: "file",
            title: "公共接口",
            
        },
        component: () => import("../../layout/Index.vue"),
        children: [
            {
                path: '/uploadToken',
                name: 'UploadToken',
                meta: {
                    title: "七牛云获取token",
                    method: "POST",
                    api: "uploadIToken"
                },
                component: Api,
            }
        ]
    },
    {
        path: '/account',
        name: 'Account',
        meta: {
            icon: "file",
            title: "帐户体系",
            
        },
        component: () => import("../../layout/Index.vue"),
        children: [
            {
                path: '/getSms',
                name: 'GetSms',
                meta: {
                    title: "获取验证码",
                    method: "POST",
                    api: "getSms"
                },
                component: Api,
            },
            {
                path: '/register',
                name: 'Register',
                meta: {
                    title: "注册",
                    method: "POST",
                    api: "register"
                },
                component: Api,
            },
            {
                path: '/login',
                name: 'Login',
                meta: {
                    title: "登录",
                    method: "POST",
                    api: "login"
                },
                component: Api,
            }
        ]
    },
    // 部门模块
    {
        path: '/department',
        name: 'Department',
        meta: {
            icon: "file",
            title: "部门模块",
            
        },
        component: () => import("../../layout/Index.vue"),
        children: [
            {
                path: '/departmentList',
                name: 'DepartmentList',
                meta: {
                    title: "部门列表（有分页）",
                    method: "POST",
                    api: "departmentList"
                },
                component: Api,
            },
            {
                path: '/departmentListAll',
                name: 'DepartmentListAll',
                meta: {
                    title: "部门列表 - 所有数据（无分页）",
                    method: "POST",
                    api: "departmentListAll"
                },
                component: Api,
            },
            {
                path: '/departmentAdd',
                name: 'DepartmentAdd',
                meta: {
                    title: "部门新增",
                    method: "POST",
                    api: "departmentAdd"
                },
                component: Api,
            },
            {
                path: '/departmentEdit',
                name: 'DepartmentEdit',
                meta: {
                    title: "部门修改",
                    method: "POST",
                    api: "departmentEdit"
                },
                component: Api,
            },
            {
                path: '/departmentStatus',
                name: 'DepartmentStatus',
                meta: {
                    title: "部门禁启用",
                    method: "POST",
                    api: "departmentStatus"
                },
                component: Api,
            },
            {
                path: '/departmentDetailed',
                name: 'DepartmentDetailed',
                meta: {
                    title: "部门详情",
                    method: "POST",
                    api: "departmentDetailed"
                },
                component: Api,
            },
            {
                path: '/departmentDelete',
                name: 'DepartmentDelete',
                meta: {
                    title: "部门删除",
                    method: "POST",
                    api: "departmentDelete"
                },
                component: Api,
            },
        ]
    },
    // 职位模块
    {
        path: '/job',
        name: 'Job',
        meta: {
            icon: "file",
            title: "职位模块",
            
        },
        component: () => import("../../layout/Index.vue"),
        children: [
            {
                path: '/jobList',
                name: 'JobList',
                meta: {
                    title: "职位列表（有分页）",
                    method: "POST",
                    api: "jobList"
                },
                component: Api,
            },
            {
                path: '/jobListAll',
                name: 'JobListAll',
                meta: {
                    title: "职位列表 - 所有数据（无分页）",
                    method: "POST",
                    api: "jobListAll"
                },
                component: Api,
            },
            {
                path: '/jobAdd',
                name: 'JobAdd',
                meta: {
                    title: "职位新增",
                    method: "POST",
                    api: "jobAdd"
                },
                component: Api,
            },
            {
                path: '/jobEdit',
                name: 'JobEdit',
                meta: {
                    title: "职位修改",
                    method: "POST",
                    api: "jobEdit"
                },
                component: Api,
            },
            {
                path: '/jobStatus',
                name: 'JobStatus',
                meta: {
                    title: "职位禁启用",
                    method: "POST",
                    api: "jobStatus"
                },
                component: Api,
            },
            {
                path: '/jobDetailed',
                name: 'JobDetailed',
                meta: {
                    title: "职位详情",
                    method: "POST",
                    api: "jobDetailed"
                },
                component: Api,
            },
            {
                path: '/jobDelete',
                name: 'JobDelete',
                meta: {
                    title: "职位删除",
                    method: "POST",
                    api: "jobDelete"
                },
                component: Api,
            },
        ]
    },
    // 职员模块
    {
        path: '/staff',
        name: 'Staff',
        meta: {
            icon: "file",
            title: "职员模块",
            
        },
        component: () => import("../../layout/Index.vue"),
        children: [
            {
                path: '/staffAdd',
                name: 'JobAdd',
                meta: {
                    title: "职员新增",
                    method: "POST",
                    api: "staffAdd"
                },
                component: Api,
            }
        ]
    },
    // 用户模块
    {
        path: '/user',
        name: 'User',
        meta: {
            icon: "file",
            title: "用户模块",
            
        },
        component: () => import("../../layout/Index.vue"),
        children: [
            {
                path: '/userList',
                name: 'UserList',
                meta: {
                    title: "用户列表",
                    method: "POST",
                    api: "userList"
                },
                component: Api,
            },
            {
                path: '/userAdd',
                name: 'UserAdd',
                meta: {
                    title: "用户新增",
                    method: "POST",
                    api: "userAdd"
                },
                component: Api,
            },
            {
                path: '/userEdit',
                name: 'UserEdit',
                meta: {
                    title: "用户修改",
                    method: "POST",
                    api: "userEdit"
                },
                component: Api,
            },
            {
                path: '/userStatus',
                name: 'UserStatus',
                meta: {
                    title: "用户禁启用",
                    method: "POST",
                    api: "userStatus"
                },
                component: Api,
            },
            {
                path: '/userDetailed',
                name: 'UserDetailed',
                meta: {
                    title: "用户详情",
                    method: "POST",
                    api: "userDetailed"
                },
                component: Api,
            },
            {
                path: '/userDelete',
                name: 'UserDelete',
                meta: {
                    title: "用户删除",
                    method: "POST",
                    api: "userDelete"
                },
                component: Api,
            },
        ]
    },
]

export default routers;