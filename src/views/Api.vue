<template>
    <div>
        <h4 class="api-name">{{api_info.name}}</h4>
        <div class="api-info">
            <ul>
                <li class="label">api url地址：</li>
                <li>
                    {{api_info.url}}
                    <svg-icon iconClass="copy" className="api-aside-icon" />
                </li>
            </ul>
            <ul>
                <li class="label">method类型：</li>
                <li class="method" :class="api_info.method"><strong>{{ api_info.method }}</strong></li>
            </ul>
        </div>
        <div class="params-info">
            <h4 class="title">
                <span>请求参数</span>
                <el-button size="mini" type="info" plain @click="requestFlag = !requestFlag">预览</el-button>
            </h4>
            <el-table :data="api_info.request" border style="width: 100%" class="table">
                <el-table-column prop="key" label="参数" width="180"></el-table-column>
                <el-table-column prop="required" label="必填" width="180"></el-table-column>
                <el-table-column prop="type" label="类型" width="180"></el-table-column>
                <el-table-column prop="default" label="初始值"></el-table-column>
                <el-table-column prop="describe" label="说明"></el-table-column>
                <el-table-column prop="describe" label="操作"><el-button size="mini">复制</el-button></el-table-column>
            </el-table>
<div v-show="requestFlag">
<h4 class="title">请求数据模板</h4>
<pre class="code" >{{ api_info.requestCode }}</pre>
</div>
        </div>
        <div class="params-info">
            <h4 class="title">
                <span>响应内容</span>
                <el-button size="mini" type="info" plain @click="responseFlag = !responseFlag">预览</el-button>
            </h4>
            <el-table :data="api_info.response" border style="width: 100%" row-key="key" class="table" :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
                <el-table-column prop="key" label="参数" width="180"></el-table-column>
                <el-table-column prop="required" label="必填" width="180"></el-table-column>
                <el-table-column prop="type" label="类型" width="180"></el-table-column>
                <el-table-column prop="default" label="初始值"></el-table-column>
                <el-table-column prop="describe" label="说明"></el-table-column>
                <el-table-column prop="describe" label="操作"><el-button size="mini">复制</el-button></el-table-column>
            </el-table>
<div v-show="responseFlag">
<h4 class="title">响应数据</h4>
<pre class="code" >{{ api_info.responseCode }}</pre>
</div>
        </div>
    </div>
</template>

<script>
import api_react from "@/api/react.js";
export default {
    name: '',
    components: {},
    props: {},
    data(){
        return {
            react: api_react,
            requestFlag: false,
            responseFlag: false,
            tableDataRequest: [],
            tableDataResponse: [],
            requestCode: "",
            responseCode: "",
            api_info: {}
        }
    },
    methods: {
        apiInfo(){
            const project = sessionStorage.getItem("project");
            const api = this.$route.meta.api;
            this.api_info = this[project][api];
        }
    },
    watch: {
        $route: {
            handler(newValue){
                this.apiInfo();
            }
        }
    }
}
</script>
<style lang='scss' scoped>
</style>