import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 自定义全局组件
import "./icons";
Vue.use(ElementUI);

Vue.config.productionTip = false;
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
