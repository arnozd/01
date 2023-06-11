import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/global.css'
import VueRouter from 'vue-router';
import router from "./router";
import store from "./store";
import axios from "./axios";
Vue.prototype.$axios =axios;
Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(ElementUI,{size:'small'});
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
