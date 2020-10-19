import Vue from 'vue'
import VueRouter from "vue-router"
import person from "@/components/chart/Chart"
Vue.use(VueRouter)
const router = new VueRouter({
    routes:[
        {
            path:'/',
            component: person,
            meta: {
                keepAlive: false
            }
        }
    ]
})
export  default router