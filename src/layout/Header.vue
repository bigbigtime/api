<template>
    <div class="header">
        <h1 class="logo">
            <router-link to="/"><img alt="手把手撸码前端" src="../assets/logo.png" /></router-link>
        </h1>
        <ul class="menu-list-group">
            <li class="menu-link" :class="{'active': item.value == current }" v-for="item in project" @click="handlerProject(item)">{{ item.name }}</li>
        </ul>
    </div>
</template>

<script>
import api_react from "@/api/react";
import reactRouter from "@/router/react";
export default {
    name: 'LayoutHeight',
    components: {},
    props: {},
    data(){
        return {
            current: "" || sessionStorage.getItem("project"),
            react: reactRouter,
            project: [
                { name: "React人事管理", value: "react" },
                { name: "Vue3体验版管理后台", value: "vue3_test" },
                { name: "Vue3正式版管理后台", value: "vue3" },
            ]
        }
    },
    methods: {
        handlerProject(data) {
            const value = data.value;
            // 阻止
            if(value == this.current) { return false; }
            // 高光
            this.current = value;
            // 存储
            sessionStorage.setItem("project", value);
            // 删除存储
            sessionStorage.removeItem("router");
            sessionStorage.removeItem("path");
            // 更新路由
            this.createRouter(value);
        },
        createRouter(value){
            // 获取路由
            const routers = this[value];
            this.$router.options.routes = routers;
            this.$router.addRoutes(routers);
            this.$store.commit("app/SET_ROTUERS", routers);
            this.$router.push(`/${value}`)
        }
    }
}
</script>
<style lang="scss" scoped>
.header {
    height: 50px;
}
.logo { 
    float: left;
    width: 300px;
    height: 100%;
    overflow: hidden;
    img { 
        height: 30px;
        margin: 10px 0 0 15px;
    }
 }
 .menu-list-group {
     float: left;
     overflow: hidden;
     height: 100%;
     .menu-link {
         float: left;
         padding: 0 30px;
         margin-right: 20px;
         font-size: 14px;
         line-height: 45px;
         color: #f7f7f7;
         border-bottom-style: solid;
         border-bottom-width: 4px;
         border-bottom-color: transparent;
         &.active {
             border-bottom-color: #f84343;
             color: #f84343;
             font-weight: bold;
         }
     }
 }
</style>