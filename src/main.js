import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/style/theme/index.css'
import router from './router';
import axios from "axios";
import VueAxios from 'vue-axios'
import qs from "qs";

axios.defaults.headers['Content-Type'] = "application/x-www-form-urlencoded;charset=UTF-8";
axios.defaults.transformRequest = [obj => qs.stringify(obj)];
Vue.use(VueAxios, axios);
Vue.use(qs);

Vue.use(ElementUI);
Vue.config.productionTip = false;

Vue.prototype.host = 'http://dress.net';

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')