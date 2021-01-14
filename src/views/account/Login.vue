<template>
    <div>
        <h4 class="api-name">钱包信用卡支付接口(统一入口)</h4>
        <div class="api-info">
            <ul>
                <li class="label">api url地址：</li>
                <li>
                    https://richdata.rockminer.com:9528/pay/unifiedorder/cardpay
                    <svg-icon iconClass="copy" className="api-aside-icon" />
                </li>
            </ul>
            <ul>
                <li class="label">method类型：</li>
                <li class="method POST"><strong>POST</strong></li>
            </ul>
        </div>
        <div class="params-info">
            <h4 class="title">
                <span>请求参数</span>
                <el-button size="mini" type="info" plain @click="requestFlag = !requestFlag">预览</el-button>
            </h4>
            <el-table :data="tableData" border style="width: 100%" class="table">
                <el-table-column prop="key" label="参数" width="180"></el-table-column>
                <el-table-column prop="required" label="必填" width="180"></el-table-column>
                <el-table-column prop="type" label="类型" width="180"></el-table-column>
                <el-table-column prop="default" label="初始值"></el-table-column>
                <el-table-column prop="describe" label="说明"></el-table-column>
                <el-table-column prop="describe" label="操作"><el-button size="mini">复制</el-button></el-table-column>
            </el-table>
<div v-show="requestFlag">
<h4 class="title">请求数据模板</h4>
<pre class="code" >
{
    "toKen": "",
    "orderNo": "",
    "currency": "默认USD",
    "cardType": "master",
    "amount": 1,
    "locale": "en",
    "merchantDescription": "",
    "platform": ""
}
</pre>
</div>
        </div>
        <div class="params-info">
            <h4 class="title">
                <span>响应内容</span>
                <el-button size="mini" type="info" plain @click="responseFlag = !responseFlag">预览</el-button>
            </h4>
            <el-table :data="tableData" border style="width: 100%" row-key="key" class="table" :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
                <el-table-column prop="key" label="参数" width="180"></el-table-column>
                <el-table-column prop="required" label="必填" width="180"></el-table-column>
                <el-table-column prop="type" label="类型" width="180"></el-table-column>
                <el-table-column prop="default" label="初始值"></el-table-column>
                <el-table-column prop="describe" label="说明"></el-table-column>
                <el-table-column prop="describe" label="操作"><el-button size="mini">复制</el-button></el-table-column>
            </el-table>
<div v-show="responseFlag">
<h4 class="title">响应数据</h4>
<pre class="code">
{
    "toKen": "",
    "data": [
        {
            "aa":"aa",
            "aa":"aa"
        }
    ],
    "orderNo": "",
    "currency": "默认USD",
    "cardType": "master",
    "amount": 1,
    "locale": "en",
    "merchantDescription": "",
    "platform": ""
}
</pre>
</div>
        </div>
    </div>
</template>

<script>
export default {
   name: '',
   components: {},
   props: {},
   data(){
       return {
           requestFlag: false,
           responseFlag: false,
           tableData: [
                { 
                    key: "type", 
                    required: "true", 
                    type: "String", 
                    default: "province", 
                    describe: "<strong>获取省份</strong>",
                    children: [
                        {
                            key: "aa", 
                            required: "true", 
                            type: "String", 
                            default: "province", 
                            describe: "<strong>获取省份</strong>",
                        },
                        {
                            key: "bb", 
                            required: "true", 
                            type: "String", 
                            default: "province", 
                            describe: "<strong>获取省份</strong>",
                        }
                    ]
                },
                { key: "province_code", required: "true", type: "String", default: "", describe: "省份Code" },
           ]
       }
   }
}
</script>
<style lang='scss' scoped>
</style>