import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router';
import Axios from "axios";
import Qs from "qs";

Axios.defaults.headers = { 
    'Content-Type':"application/x-www-form-urlencoded;charset=UTF-8"
};
Axios.defaults.transformRequest = [obj => Qs.stringify(obj)];

Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')