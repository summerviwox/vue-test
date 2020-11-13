import Vue from 'vue'
import VueRouter from "vue-router"
import person from "@/components/chart/Chart"
import XTest from "@/components/xtest/XTest";

Vue.use(VueRouter)
const router = new VueRouter({
    routes:[
        {
            path:'/',
            component: person,
            meta: {
                keepAlive: false
            }
        },
        {
            path:'/vuex',
            component: XTest,
            meta: {
                keepAlive: false
            }
        },
    ]
})
export  default router