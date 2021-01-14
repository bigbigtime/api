<template>
    <div class="header">
        <h1 class="logo"><img alt="手把手撸码前端" src="../assets/logo.png" /></h1>
        <ul class="menu-list-group">
            <router-link class="menu-link" to="aa">React</router-link>
            <router-link class="menu-link active" to="aa">React</router-link>
        </ul>
    </div>
</template>

<script>
export default {
   name: 'LayoutHeight',
   components: {},
   props: {}
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