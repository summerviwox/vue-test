import Vue from 'vue'
import App from './App.vue'
 import Vuex from 'vuex'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Axios from "axios";
import router from "@/router";
import myStore from "@/store/MyStore";
import storeMethods from "@/store/StoreMethod";
Vue.prototype.$storeMethods = storeMethods
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.prototype.$axios = Axios
Vue.use(router)
 Vue.use(Vuex)

new Vue({
    store:myStore,
    router,
    render: h => h(App)

}).$mount('#app')
