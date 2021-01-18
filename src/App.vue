<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
import api_react from "@/api/react.js";
import reactRouter from "@/router/react";
export default {
    name: 'LayoutHeight',
    components: {},
    props: {},
    data(){
        return {
            react: reactRouter
        }
    },
    beforeMount(){ this.initRouter(); },
    methods: {
        initRouter(){
            const value = this.$store.state.app.project;
            if(!value) { return false; }
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
<style lang="scss">
@import "./styles/main.scss";
#app {}
</style>
