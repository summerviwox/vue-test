import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Axios from "axios";
import router from "@/router";
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.prototype.$axios = Axios
Vue.use(router)

new Vue({
    router,
    render: h => h(App)

}).$mount('#app')
