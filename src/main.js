import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import './element'
// import VueAxios from 'vue-axios'


Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
Vue.use(VueRouter);
Vue.use(ElementUI);



const routes = new VueRouter({
  routes: [
    { path: '/', component: () => import('../src/pages/Login.vue')},
    { path: '/success', component: () => import('../src/pages/Success')}
  ]
})


new Vue({
  render: h => h(App),
  router: routes
}).$mount('#app')
