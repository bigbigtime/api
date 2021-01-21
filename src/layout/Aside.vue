<template>
    <el-scrollbar height="100%">
        <div class="search">
            <input type="text">
        </div>
        <el-menu 
          :default-active="defalutActive" 
          class="el-menu-vertical-demo" 
          background-color="#424242" 
          text-color="#fff" 
          active-text-color	="#fff">
          <template v-for="(item, index) in routers">
            <el-submenu v-if="!item.hidden" :key="item.id" :index="index + ''">
              <!-- 一级菜单 -->
              <template slot="title">
                <svg-icon :iconClass="item.meta && item.meta.icon" className="svg-aside-icon" />
                <span slot="title">{{ item.meta && item.meta.title }}</span>
              </template>
              <!-- 子级菜单 -->
              <template v-for="subItem in item.children">
                <el-menu-item v-if="!subItem.hidden" :key="subItem.id" :index="subItem.path" @click="link(subItem)" >
                  <span class="method" :class="subItem.meta && subItem.meta.method">{{ subItem.meta && subItem.meta.method }}</span>
                  {{ subItem.meta && subItem.meta.title }}
                </el-menu-item>
              </template>
            </el-submenu>
          </template>
        </el-menu>
    </el-scrollbar>
</template>

<script>
export default {
  name: 'LayoutHeight',
  components: {},
  props: {},
  computed: {
    routers(){
      const router = this.$store.state.app.routers;
      return router
    },
    defalutActive(){
      const storagePath = sessionStorage.getItem("router");
      if(storagePath) {
        this.$router.push({
          path:storagePath
        })
        return storagePath;
      }
      console.log(storagePath);
      const route = this.$route;
      const { path } = route;
      
      return path;
    }
  },
  methods: {
    link(data){
      const path = data.path;
      // 当前路径
      const router = this.$route;
      if(router.path == path) { return false; }
      // 存储
      sessionStorage.setItem("router", path);
      // 跳转
      this.$router.push({
        path
      })
    }
  }
}
</script>
<style scoped>
#aside .el-scrollbar { height: 100%;  }
.search {
    padding: 20px;
    border-bottom: 1px solid #363636;
}
.search input {
    padding: 10px 16px;
    border: none;
    outline: none;
    border-radius: 50px;
    width: 100%;
    -webkit-box-sizing: border-box;
}
</style>