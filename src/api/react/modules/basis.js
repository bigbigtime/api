const basis = {
    upload_token: {
        id: "uploadToken",
        name: "七牛云token",
        method: "POST",
        url: "/uploadIToken/",
        request: [
            { key: "ak", required: "true", type: "String", default: "", describe: "密钥AccessKey" },
            { key: "sk", required: "true", type: "String", default: "", describe: "密钥SecretKey" },
            { key: "buckety", required: "true", type: "String", default: "", describe: "空间名称" }
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
    }
};

export default basis;