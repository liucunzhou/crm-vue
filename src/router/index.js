import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 根据js文件，自动装载路由模块
let routes = [];
const requireComponent = require.context('.', false, /\.js$/)
requireComponent.keys().forEach(fileName => {
    if(fileName !== './index.js'){
        const componentConfig = requireComponent(fileName)
        routes.push(...componentConfig.default)
    }
})

const router = new VueRouter({
    mode: 'history',
    // linkExactActiveClass: 'active',
    routes
})

Vue.router = router

router.beforeEach((to, from, next) => {
    next()
})

router.afterEach(() => {
    window.scrollTo(0, 0)
})

export default router