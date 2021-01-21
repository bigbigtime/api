const department = {
    department_list: {
        id: "departmentList",
        name: "部门列表",
        method: "POST",
        url: "/department/list/",
        request: [
            { key: "name", required: "", type: "String", default: "", describe: "部门名称" },
            { key: "pageNumber", required: "true", type: "Number", default: "1", describe: "当前页码" },
            { key: "pageSize", required: "true", type: "Number", default: "10", describe: "每页条数" },
        ],
        response: [
            { 
                key: "data",
                type: "",
                describe: "列表",
                children: [
                    { key: "id", type: "String", describe: "ID" },
                    { key: "name", type: "String", describe: "部门名称" },
                    { key: "number", type: "Number", describe: "部门人数" },
                    { key: "status", type: "Boolean", describe: "禁启用（true：启用，false：禁用）" },
                    { key: "content", type: "text", describe: "介绍" },
                ]
            },
            { key: "total", type: "Number", describe: "总条数" },
            { key: "message", type: "String", describe: "消息" },
        ],
        requestCode: 
        `{
            "toKen": "",
            "orderNo": "",
            "currency": "默认USD",
            "cardType": "master",
            "amount": 1,
            "locale": "en",
            "merchantDescription": "",
            "platform": ""
        }`,
        responseCode: 
        `{
            "toKen": "",
            "orderNo": "",
            "currency": "默认USD",
            "cardType": "master",
            "amount": 1,
            "locale": "en",
            "merchantDescription": "",
            "platform": ""
        }`
    },
    department_list_all: {
        id: "departmentListAll",
        name: "部门列表（所有 - 不带分页）",
        method: "POST",
        url: "/department/listAll/",
        request: [],
        response: [
            { key: "data", type: "", describe: "列表" },
            { key: " - id", type: "String", describe: "ID" },
            { key: " - name", type: "String", describe: "部门名称" },
            { key: " - number", type: "Number", describe: "部门人数" },
            { key: " - status", type: "Boolean", describe: "禁启用（true：启用，false：禁用）" },
            { key: " - content", type: "text", describe: "介绍" },
            { key: "total", type: "Number", describe: "总条数" },
            { key: "message", type: "String", describe: "消息" },
        ],
        requestCode: "获取所有数据，无须请求参数",
        responseCode: 
        `{
            "toKen": "",
            "orderNo": "",
            "currency": "默认USD",
            "cardType": "master",
            "amount": 1,
            "locale": "en",
            "merchantDescription": "",
            "platform": ""
        }`
    },
    department_add: {
        name: "部门新增",
        method: "POST",
        url: "/department/add/",
        request: [
            { key: "name", required: "true", type: "String", default: "", describe: "部门名称" },
            { key: "number", required: "true", type: "Number", default: "0", describe: "部门人数" },
            { key: "status", required: "true", type: "Boolean", default: "true", describe: "禁启用（true：启用，false：禁用）" },
            { key: "content", required: "true", type: "String", default: "", describe: "介绍" }
        ],
        response: [
            { key: "data", type: "String", describe: "null" },
            { key: "message", type: "String", describe: "状态码" },
            { key: "resCode", type: "String", describe: "消息" }
        ],
        requestCode: 
        `{
            "name": "研发部",
            "number": 20,
            "status": true,
            "content": "描述信息"
        }`,
        responseCode: 
        `{
            "toKen": "",
            "orderNo": "",
            "currency": "默认USD",
            "cardType": "master",
            "amount": 1,
            "locale": "en",
            "merchantDescription": "",
            "platform": ""
        }`
    },
    department_detailed: {
        name: "部门详情",
        method: "POST",
        url: "/department/detailed/",
        request: [
            { key: "id", required: "true", type: "Number", default: "", describe: "部门ID" }
        ],
        response: [
            { key: "name", type: "String", describe: "部门名称" },
        ],
        requestCode: 
        `{
            "name": "研发部",
            "number": 20,
            "status": true,
            "content": "描述信息"
        }`,
        responseCode: 
        `{
            "toKen": "",
            "orderNo": "",
            "currency": "默认USD",
            "cardType": "master",
            "amount": 1,
            "locale": "en",
            "merchantDescription": "",
            "platform": ""
        }`
    },
    department_edit: {
        id: "departmentEdit",
        name: "部门修改",
        method: "POST",
        url: "/department/edit/",
        request: [
            { key: "id", required: "true", type: "Number", default: "", describe: "部门ID" },
            { key: "name", required: "true", type: "String", default: "", describe: "部门名称" },
            { key: "number", required: "true", type: "Number", default: "0", describe: "部门人数" },
            { key: "status", required: "true", type: "Boolean", default: "true", describe: "禁启用（true：启用，false：禁用）" },
            { key: "content", required: "true", type: "text", default: "", describe: "介绍" }
        ],
        response: [
            { key: "message", type: "String", describe: "消息" }
        ],
        requestCode: 
        `{
            "name": "研发部",
            "number": 20,
            "status": true,
            "content": "描述信息"
        }`,
        responseCode: 
        `{
            "toKen": "",
            "orderNo": "",
            "currency": "默认USD",
            "cardType": "master",
            "amount": 1,
            "locale": "en",
            "merchantDescription": "",
            "platform": ""
        }`
    },
    department_status: {
        name: "部门禁启用",
        method: "POST",
        url: "/department/status/",
        request: [
            { key: "id", required: "true", type: "Number", default: "", describe: "部门ID" },
            { key: "status", required: "true", type: "Boolean", default: "true", describe: "禁启用（true：启用，false：禁用）" }
        ],
        response: [
            { key: "message", type: "String", describe: "消息" }
        ],
        requestCode: 
        `{
            "name": "研发部",
            "number": 20,
            "status": true,
            "content": "描述信息"
        }`,
        responseCode: 
        `{
            "toKen": "",
            "orderNo": "",
            "currency": "默认USD",
            "cardType": "master",
            "amount": 1,
            "locale": "en",
            "merchantDescription": "",
            "platform": ""
        }`
    },
    department_delete: {
        name: "部门删除",
        method: "POST",
        url: "/department/delete/",
        api: { type: "POST", url: "/department/delete/" },
        request: [
            { key: "id", required: "true", type: "String", default: "", describe: "部门ID（1, 2, 3, 4）" }
        ],
        response: [
            { key: "message", type: "String", describe: "消息" }
        ],
        requestCode: 
        `{
            "name": "研发部",
            "number": 20,
            "status": true,
            "content": "描述信息"
        }`,
        responseCode: 
        `{
            "toKen": "",
            "orderNo": "",
            "currency": "默认USD",
            "cardType": "master",
            "amount": 1,
            "locale": "en",
            "merchantDescription": "",
            "platform": ""
        }`
    },
};

export default department;