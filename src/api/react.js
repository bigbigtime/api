const api = {
    getSms: {
        id: "loginCode",
        name: "登录获取验证码",
        method: "POST",
        url: "/getSms/",
        request: [
            { key: "username", required: "true", type: "String", default: "", describe: "用户名（邮箱）" },
            { key: "module", required: "true", type: "String", default: "login", describe: "模块类型" }
            						
        ],
        response: [
            { key: "code", type: "Number", describe: "验证码" },
            { key: "message", type: "String", describe: "消息" }
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
    register: {
        id: "reg",
        name: "注册",
        api: { type: "POST", url: "/register/" },
        request: [
            { key: "username", required: "true", type: "String", default: "", describe: "用户名（邮箱）" },
            { key: "password", required: "true", type: "String", default: "", describe: "密码" },
            { key: "code", required: "true", type: "String", default: "", describe: "验证码" }
            						
        ],
        response: [
            { key: "message", type: "String", describe: "消息" }
        ],
        rrevice: `{
                    <ul class="code">
                        <li>"resCode":0,</li>
                        <li>"data": null,</li>
                        <li>"message":"获取验证码成功：111111"</li>
                    </ul>
                }`
    },
    login: {
        id: "login",
        name: "登录",
        api: { type: "POST", url: "/login/" },
        request: [
            { key: "username", required: "true", type: "String", default: "", describe: "用户名（邮箱）" },
            { key: "password", required: "true", type: "String", default: "", describe: "密码" },
            { key: "code", required: "true", type: "String", default: "", describe: "验证码" }
            						
        ],
        response: [
            { key: "username", type: "String", describe: "用户名" },
            { key: "token", type: "String", describe: "token" },
            { key: "message", type: "String", describe: "消息" }
        ],
        rrevice: `{
                    <ul class="code">
                        <li>"resCode":0,</li>
                        <li>"data": 
                        {
                            <ul>
                                <li>usename: 409019683@qq.com</li>
                                <li>token: 13265asdf1asd3f1as651f3sa1f3sd1f</li>
                            </ul>
                        },
                        </li>
                        <li>"message":"获取验证码成功：111111"</li>
                    </ul>
                }`
    }
}
export default api;