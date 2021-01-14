<template>
    <el-container>
        <el-header id="header" height="50px">
            <HeaderLayout />
        </el-header>
        <el-container>
            <el-aside id="aside" width="300px">
                <AsideLayout />
            </el-aside>
            <el-main>
                <MainLayout/>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import HeaderLayout from "./Header.vue";
import AsideLayout from "./Aside.vue";
import MainLayout from "./Main.vue";
export default {
   name: 'Layout',
   components: { HeaderLayout, AsideLayout, MainLayout },
   props: {},
}
</script>
<style scoped>
#header {
    height: 100%;
    background-color: #424242;
    border: 1px solid #353644;
    color: #e0e0e0;
    padding: 0;
    -webkit-box-shadow: 0 0 6px 0 #2e2e2e;
    box-shadow: 0 0 6px 0 #2e2e2e;
    z-index: 3000;
}
#aside {
    background-color: #424242;
}
</style>